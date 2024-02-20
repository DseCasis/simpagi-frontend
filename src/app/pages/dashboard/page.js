"use client"

import Layout from "@/app/layout/Layout";
import BarChart from "@/app/components/charts/LinesChart";
import PieCharts from "@/app/components/charts/Pie";
import ForenCharts from "@/app/components/charts/Foren";

export default function Dashboard(){

    return (
        <Layout>
            <BarChart></BarChart>
            <PieCharts></PieCharts>
            <ForenCharts></ForenCharts>
        </Layout>
    );
}