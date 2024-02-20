"use client"

import Layout from "@/app/layout/Layout";
import BarChart from "@/app/components/charts/LinesChart";
import PieCharts from "@/app/components/charts/Pie";
import ForenCharts from "@/app/components/charts/Foren";

export default function Dashboard(){

    return (
        <Layout>
            <div className="h-screen p-5">
                <div className="flex items-center justify-around">
                    <div className=""> 
                        <BarChart></BarChart>
                        
                    </div>
                    <div className="">
                        <PieCharts></PieCharts>
                    </div>
                    <div>
                        <ForenCharts></ForenCharts>
                    </div>
                </div>
            </div>
        </Layout>
    );
}