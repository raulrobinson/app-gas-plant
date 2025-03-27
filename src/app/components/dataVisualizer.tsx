"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fieldInfo, ORDER } from "@/utils/identifiersTags";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowDown, ArrowUp } from "lucide-react";
import Loading from "@/app/components/loading";

export default function DataVisualizer() {
    const [data, setData] = useState<Record<string, string | number> | null>(null);
    const previousDataRef = useRef<Record<string, number>>({});
    const [chartData, setChartData] = useState<Record<string, { time: string; value: number }[]>>({});
    const [lastUpdated, setLastUpdated] = useState<string>("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/api/fetchData");
                const result = await response.json();
                const newData = result.response;

                previousDataRef.current = { ...data } as Record<string, number>;

                setData(prevData => {
                    if (prevData) {
                        previousDataRef.current = { ...Object.fromEntries(
                                Object.entries(prevData).map(([key, value]) => [key, Number(value)])
                            )};
                    }

                    return newData;
                });

                setLastUpdated(new Date(newData.FECHA).toLocaleString());

                setChartData(prevData => {
                    const updatedCharts = { ...prevData };
                    Object.entries(newData).forEach(([key, value]) => {
                        if (key !== "id" && key !== "FECHA") {
                            updatedCharts[key] = [...(updatedCharts[key] || []), { time: new Date().toLocaleTimeString(), value: Number(value) }]
                                .slice(-10);
                        }
                    });
                    return updatedCharts;
                });

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
        const interval = setInterval(fetchData, 3000);
        return () => clearInterval(interval);
    }, []);

    if (!data) {
        return (
            <Loading />
        );
    }

    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ORDER.map(key => {
                if (!(key in data)) return null;

                const { label, unit, bgColor } = fieldInfo[key] || { label: key, unit: "", bgColor: "bg-gray-100" };

                // Obtain the last 10 values for the chart
                const history = chartData[key] || [];
                const currentValue = Number(data[key]);

                // Calculate the average of the last 10 values
                const sum = history.reduce((acc, point) => acc + point.value, 0);
                const avgLast10 = history.length > 0 ? sum / history.length : currentValue;

                // Calculate the variation percentage between the current value and the average of the last 10 values
                const variation = avgLast10 !== 0
                    ? ((currentValue - avgLast10) / Math.abs(avgLast10)) * 100
                    : 0;

                // Select the icon to display based on the variation
                let variationIcon = null;
                if (variation > 0) variationIcon = <ArrowUp className="text-green-600 inline-block w-5 h-5" />;
                if (variation < 0) variationIcon = <ArrowDown className="text-red-600 inline-block w-5 h-5" />;

                return (
                    <motion.div
                        key={key}
                        className={`p-6 shadow-lg border rounded-xl ${bgColor}`}
                        initial={{ opacity: 0.8 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-gray-500 text-sm uppercase">{label}</p>
                        <p className="text-2xl font-bold flex items-center gap-2">
                            {`${currentValue} ${unit}`.trim()} {variationIcon}
                        </p>
                        <p className="text-gray-400 text-xs mt-2">Last update: {lastUpdated}</p>

                        <ResponsiveContainer width="100%" height={100}>
                            <LineChart data={chartData[key] || []}>
                                <XAxis dataKey="time" tick={{ fontSize: 10 }} />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </motion.div>
                );
            })}
        </div>
    );
}
