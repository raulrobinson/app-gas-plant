import DataVisualizer from "@/app/components/dataVisualizer";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function Home() {
    return (
        <div className="pt-16">
            <Header />
            <DataVisualizer/>
            <Footer/>
        </div>
    );
}
