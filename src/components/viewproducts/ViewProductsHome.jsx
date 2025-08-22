import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
Chart.register(LineElement, PointElement, LinearScale, CategoryScale);

const PURPLE = "#9333ea"; 

const barData = [
  { name: "Mar", value: 2.5 },
  { name: "Apr", value: 3 },
  { name: "May", value: 2.8 },
  { name: "Jun", value: 3.5 },
  { name: "Jul", value: 4 },
  { name: "Aug", value: 3.8 },
  { name: "Sep", value: 4.2 },
  { name: "Oct", value: 4.5 },
  { name: "Nov", value: 4.1 },
];

const lineDataAppointments = {
  labels: ["", "", "", "", ""],
  datasets: [
    {
      data: [550, 600, 610, 620, 600],
      borderColor: PURPLE,
      backgroundColor: "rgba(147,51,234,0.1)",
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const lineDataPatients = {
  labels: ["", "", "", "", ""],
  datasets: [
    {
      data: [700, 750, 800, 790, 800],
      borderColor: PURPLE,
      backgroundColor: "rgba(147,51,234,0.1)",
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const lineOptions = {
  plugins: { legend: { display: false }, tooltip: { enabled: false } },
  scales: { x: { display: false }, y: { display: false } },
  elements: { line: { borderWidth: 2 } },
  responsive: true,
  maintainAspectRatio: false,
};

export default function ViewProductsHome() {
  return (
    <div className="relative -top-20  min-h-screen w-full flex items-center justify-center  bg-gradient-to-b from-[#f4eaff] via-white to-white font-primary overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-300 rounded-full opacity-30 blur-[120px] z-0" />
      <div className="absolute -bottom-36 -right-36 w-[400px] h-[400px] bg-purple-200 rounded-full opacity-20 blur-[100px] z-0" />
      <div className="absolute top-1/2 left-2/3 w-[200px] h-[200px] bg-purple-100 rounded-full opacity-20 blur-[60px] z-0" />

      <svg width="120" height="60" className="absolute top-10 right-56 z-10">
        <path
          d="M10 30 Q60 0 110 30"
          stroke={PURPLE}
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="8"
            refX="8"
            refY="4"
            orient="auto"
          >
            <polygon points="0 0, 8 4, 0 8" fill={PURPLE} />
          </marker>
        </defs>
      </svg>

      <svg width="60" height="60" className="absolute top-52 left-20 z-10">
        <path
          d="M10 50 Q30 10 50 50"
          stroke={PURPLE}
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead2)"
        />
        <defs>
          <marker
            id="arrowhead2"
            markerWidth="8"
            markerHeight="8"
            refX="8"
            refY="4"
            orient="auto"
          >
            <polygon points="0 0, 8 4, 0 8" fill={PURPLE} />
          </marker>
        </defs>
      </svg>

      <svg width="30" height="30" className="absolute top-24 right-20 z-10">
        <g stroke={PURPLE} strokeWidth="2">
          <line x1="15" y1="0" x2="15" y2="30" />
          <line x1="0" y1="15" x2="30" y2="15" />
          <line x1="5" y1="5" x2="25" y2="25" />
          <line x1="25" y1="5" x2="5" y2="25" />
        </g>
      </svg>

      <svg width="30" height="30" className="absolute bottom-20 left-48 z-10">
        <g stroke={PURPLE} strokeWidth="2">
          <line x1="15" y1="0" x2="15" y2="30" />
          <line x1="0" y1="15" x2="30" y2="15" />
        </g>
      </svg>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-[1200px] w-[95vw]">
        {/* LEFT */}
        <div className="max-w-xl md:mr-10 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Monitor Data of Your <br /> Hospital or Clinic
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Hospitality provides real-time data on everyday operations of a
            medical organization. It helps identify areas that require
            improvement.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-6">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-purple-700 transition">
              Get started for free
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-purple-600 flex items-center justify-center">
              <svg width="24" height="24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke={PURPLE}
                  strokeWidth="2"
                />
                <polygon points="10,8 16,12 10,16" fill={PURPLE} />
              </svg>
            </button>
            <span className="text-purple-600 font-semibold text-lg">
              How it works
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full max-w-[600px] bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8">
          <div className="text-xl font-semibold text-gray-900 mb-3">
            Patient Overview
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={barData}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar
                dataKey="value"
                fill={PURPLE}
                radius={[8, 8, 0, 0]}
                barSize={32}
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex gap-8 mt-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 w-full relative">
              <div className="absolute top-4 right-4 bg-purple-50 w-9 h-9 rounded-full flex items-center justify-center">
                <svg width="20" height="20" fill="none">
                  <rect
                    x="4"
                    y="4"
                    width="12"
                    height="12"
                    rx="3"
                    fill={PURPLE}
                  />
                  <rect x="7" y="7" width="6" height="6" rx="1.5" fill="#fff" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900">600K</div>
              <div className="text-gray-600 text-sm mb-2">
                Total Appointments
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-purple-50 text-purple-600 text-sm font-semibold rounded px-2 py-1">
                  +15%
                </span>
                <div className="w-16 h-6">
                  <Line data={lineDataAppointments} options={lineOptions} />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6 w-full relative">
              <div className="absolute top-4 right-4 bg-purple-50 w-9 h-9 rounded-full flex items-center justify-center">
                <svg width="20" height="20" fill="none">
                  <circle cx="10" cy="10" r="8" fill={PURPLE} />
                  <circle cx="10" cy="10" r="5" fill="#fff" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900">800K</div>
              <div className="text-gray-600 text-sm mb-2">Total Patients</div>
              <div className="flex items-center gap-2">
                <span className="bg-purple-50 text-purple-600 text-sm font-semibold rounded px-2 py-1">
                  +20%
                </span>
                <div className="w-16 h-6">
                  <Line data={lineDataPatients} options={lineOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
