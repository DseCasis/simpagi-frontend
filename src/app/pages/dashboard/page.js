"use client"

import Layout from "@/app/layout/Layout";
import BarChart from "@/app/components/charts/LinesChart";
import PieCharts from "@/app/components/charts/Pie";
import ForenCharts from "@/app/components/charts/Foren";
import DashboardCard from "@/app/components/charts/DashboardCard";

export default function Dashboard() {

    return (
        <Layout >
            <br/>
            <div className="bg-gray-100 w-full text-center flex flex-col px-5">
                <header className="mb-5">
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                </header>

                <main className="flex flex-col content-center w-full">
                    <div className="px-4 mb-4">
                        <DashboardCard />
                    </div>

                    <div className="px-4 mb-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white rounded shadow p-4">
                                <BarChart />
                            </div>
                            <div className="bg-white rounded shadow p-4">
                                <PieCharts />
                            </div>
                            <div className="bg-white rounded shadow p-4">
                                <ForenCharts />
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </Layout>
    );
}