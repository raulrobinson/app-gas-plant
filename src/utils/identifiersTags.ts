export const fieldInfo: Record<string, { label: string; unit?: string; bgColor: string }> = {
    PSIG1OM: { label: "Pressure Generator 1", unit: "psi", bgColor: "bg-yellow-50" },
    PSIG2OM: { label: "Pressure Generator 2", unit: "psi", bgColor: "bg-yellow-50" },
    PSIG3OM: { label: "Pressure Generator 3", unit: "psi", bgColor: "bg-yellow-50" },
    PSIG4OM: { label: "Pressure Generator 4", unit: "psi", bgColor: "bg-yellow-50" },

    PO2G1OM: { label: "Oxygen Generator 1", unit: "%", bgColor: "bg-green-50" },
    PO2G2OM: { label: "Oxygen Generator 2", unit: "%", bgColor: "bg-green-50" },
    PO2G3OM: { label: "Oxygen Generator 3", unit: "%", bgColor: "bg-green-50" },
    PO2G4OM: { label: "Oxygen Generator 4", unit: "%", bgColor: "bg-green-50" },

    PSIGFLO: { label: "Pressure Final Generators", unit: "psi", bgColor: "bg-yellow-50" },
    PO2GFLO: { label: "Final Oxygen Generators", unit: "%", bgColor: "bg-green-50" },
    PSIGROM: { label: "Final Reserve Pressure", unit: "psi", bgColor: "bg-yellow-50" },

    PSIGRAM: { label: "Pressure Air reserve", unit: "psi", bgColor: "bg-yellow-50" },
    PSIGLAM: { label: "Final Pressure Air", unit: "psi", bgColor: "bg-yellow-50" },
    PO2FLAM: { label: "Final Oxygen Air", unit: "%", bgColor: "bg-green-50" },
    CDPPPAM: { label: "Dew point", unit: "°C", bgColor: "bg-blue-50" },
    PPMCOAM: { label: "Carbon Monoxide", unit: "ppm", bgColor: "bg-red-50" },
};

export const ORDER = [
    "PSIGRAM", "CDPPPAM", "PPMCOAM", "PSIGROM",
    "PO2G1OM", "PO2G2OM", "PO2G3OM", "PO2G4OM",
    "PSIG1OM", "PSIG2OM", "PSIG3OM", "PSIG4OM",
    "PO2GFLO", "PSIGFLO", "PO2FLAM", "PSIGLAM",
];