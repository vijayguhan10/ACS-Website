import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  BarController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Tooltip,
  Legend,
  Filler, // <-- Add this
} from "chart.js";
import {
  FaUserMd,
  FaStar,
  FaUserCircle,
  FaCheckCircle,
  FaHeart,
} from "react-icons/fa";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { BsBarChart } from "react-icons/bs";
import {
  FiGrid,
  FiSmile,
  FiHeart,
  FiCalendar,
  FiDollarSign,
  FiThumbsUp,
} from "react-icons/fi";

// --- Product Showcase Data (external JSON structure) ---
const PRODUCT_DATA = [
  {
    key: "leave",
    name: "Leave Management Software",
    hero: {
      title: "Why Choose Our Leave Management Software?",
      description:
        "Empower your organization with a seamless, automated, and insightful leave management experience. Track, approve, and analyze leave requests with ease.",
      image: null,
    },
    features: [
      {
        icon: <FiGrid className="text-3xl text-purple-400" />,
        title: "Centralized Leave Dashboard",
        desc: "Unified view of all leave requests, balances, and approvals for your entire organization.",
      },
      {
        icon: <FiSmile className="text-3xl text-purple-400" />,
        title: "Employee Self-Service",
        desc: "Employees can apply for leave, check balances, and track approvals from any device.",
      },
      {
        icon: <FiHeart className="text-3xl text-purple-400" />,
        title: "Manager Approvals",
        desc: "Managers review, approve, or reject leave requests instantly with real-time notifications.",
      },
      {
        icon: <FiCalendar className="text-3xl text-purple-400" />,
        title: "Smart Leave Calendar",
        desc: "Visualize team absences and holidays to plan better and avoid resource conflicts.",
      },
      {
        icon: <FiDollarSign className="text-3xl text-purple-400" />,
        title: "Automated Policies",
        desc: "Configure custom leave types, carry-forward rules, and automate accruals to match your HR policies.",
      },
      {
        icon: <FiThumbsUp className="text-3xl text-purple-400" />,
        title: "Seamless Integrations",
        desc: "Connect with payroll, attendance, and HRMS systems for a smooth, end-to-end experience.",
      },
    ],
    widgets: [
      {
        key: "overview",
        cardClass: "bg-green-50/70 border-green-100",
        title: "Leave Requests Overview",
        desc: "A quick glance at the status of leave requests for the week.",
        chart: "bar",
      },
      {
        key: "trend",
        cardClass: "bg-pink-50/70 border-pink-100",
        title: "Leave Utilization Trend",
        desc: "Track the trend of leave utilization over the years to plan better.",
        chart: "line",
      },
      {
        key: "top",
        cardClass: "bg-blue-50/70 border-blue-100",
        title: "Top Employees on Leave",
        desc: "Quick access to monitor employees who are currently on leave.",
        chart: "list",
        list: [
          { name: "Jenny Wilson", dept: "HR", status: "Approved" },
          { name: "John Doe", dept: "Engineering", status: "Pending" },
          { name: "Mary Johnson", dept: "Marketing", status: "Rejected" },
        ],
      },
    ],
    stats: {
      satisfaction: {
        title: "Satisfaction Rate",
        value: 95,
        prev: 40,
        desc: "Patient satisfaction rate has improved, indicating that employees are highly satisfied with the leave process.",
      },
      chart: "line",
      chartTitle: "Year",
      chartDesc:
        "Measuring employee satisfaction is essential for enhancing HR quality. Satisfaction rates, ranging from 0% to 100%, offer valuable insights into the employee experience and serve as critical performance indicators.",
    },
  },
  {
    key: "billing",
    name: "Billing Software",
    hero: {
      title: "Why Choose Our Billing Software?",
      description:
        "Automate your invoicing, track payments, and gain financial insights with our robust billing platform.",
      image: null,
    },
    features: [
      {
        icon: <BsBarChart className="text-3xl text-purple-400" />,
        title: "Automated Invoicing",
        desc: "Generate and send invoices automatically to clients and customers.",
      },
      {
        icon: <FaHeart className="text-3xl text-pink-400" />,
        title: "Payment Tracking",
        desc: "Monitor payment status and send reminders for outstanding invoices.",
      },
      {
        icon: <FiGrid className="text-3xl text-purple-400" />,
        title: "Centralized Dashboard",
        desc: "All your billing data in one place for easy access and management.",
      },
      {
        icon: <FiDollarSign className="text-3xl text-purple-400" />,
        title: "Financial Reports",
        desc: "Generate detailed financial reports for better business decisions.",
      },
      {
        icon: <FiThumbsUp className="text-3xl text-purple-400" />,
        title: "Seamless Integrations",
        desc: "Integrate with accounting, CRM, and payment gateways.",
      },
    ],
    widgets: [
      {
        key: "overview",
        cardClass: "bg-green-50/70 border-green-100",
        title: "Invoice Overview",
        desc: "See the status of invoices for the week.",
        chart: "bar",
      },
      {
        key: "trend",
        cardClass: "bg-pink-50/70 border-pink-100",
        title: "Revenue Trend",
        desc: "Track your revenue growth over time.",
        chart: "line",
      },
      {
        key: "top",
        cardClass: "bg-blue-50/70 border-blue-100",
        title: "Top Paying Clients",
        desc: "Your most valuable clients this month.",
        chart: "list",
        list: [
          { name: "Acme Corp", dept: "Enterprise", status: "Paid" },
          { name: "Beta LLC", dept: "SMB", status: "Pending" },
          { name: "Gamma Inc", dept: "Startup", status: "Overdue" },
        ],
      },
    ],
    stats: {
      satisfaction: {
        title: "Client Satisfaction",
        value: 92,
        prev: 60,
        desc: "Client satisfaction rate has increased, showing improved billing transparency and service.",
      },
      chart: "line",
      chartTitle: "Year",
      chartDesc:
        "Tracking client satisfaction helps you improve your billing process and retain more customers.",
    },
  },
];

// --- Demo chart data (can be replaced with product-specific data if needed) ---
const purple = "#9333ea";
const barData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      label: "Approved",
      data: [8, 12, 10, 14, 9],
      backgroundColor: purple,
      borderRadius: 8,
      barPercentage: 0.5,
      categoryPercentage: 0.6,
    },
    {
      label: "Pending",
      data: [3, 2, 4, 1, 3],
      backgroundColor: "#a78bfa",
      borderRadius: 8,
      barPercentage: 0.5,
      categoryPercentage: 0.6,
    },
    {
      label: "Rejected",
      data: [1, 1, 0, 2, 1],
      backgroundColor: "#f472b6",
      borderRadius: 8,
      barPercentage: 0.5,
      categoryPercentage: 0.6,
    },
  ],
};
const barOptions = {
  plugins: {
    legend: {
      display: true,
      labels: {
        color: purple,
        font: { weight: "bold" },
      },
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "#222" },
    },
    y: {
      grid: { color: "#eee" },
      ticks: { color: "#222" },
      beginAtZero: true,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};
const lineData = {
  labels: ["2020", "2021", "2022", "2023", "2024"],
  datasets: [
    {
      label: "Utilization (%)",
      data: [60, 68, 75, 82, 90],
      borderColor: purple,
      backgroundColor: "rgba(147,51,234,0.08)",
      fill: true,
      tension: 0.4,
      pointBackgroundColor: purple,
      pointBorderColor: "#fff",
      pointRadius: [0, 0, 0, 0, 6],
      pointHoverRadius: 8,
    },
  ],
};
const lineOptions = {
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "#222" },
    },
    y: {
      grid: { color: "#eee" },
      ticks: { color: "#222" },
      min: 0,
      max: 100,
      stepSize: 20,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

// Register all required elements and plugins
Chart.register(
  BarElement,
  BarController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Tooltip,
  Legend,
  Filler // <-- Register Filler
);

// --- Main Component ---
export default function WhyProduct() {
  const [selected, setSelected] = useState(PRODUCT_DATA[0].key);
  const product = PRODUCT_DATA.find((p) => p.key === selected);

  return (
    <div className="w-full min-h-screen px-2 py-12 relative ">
      {/* Decorative blurred circles for extra richness */}
      <div className="pointer-events-none select-none absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-200 rounded-full blur-2xl opacity-40" />
      </div>

      {/* Product Tabs */}
      <div className="flex justify-center gap-4 mb-10 relative z-10">
        {PRODUCT_DATA.map((p) => (
          <button
            key={p.key}
            className={`px-6 py-2 rounded-full font-semibold text-base transition
              ${
                selected === p.key
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white/70 text-purple-700 border border-purple-100 hover:bg-purple-50"
              }`}
            onClick={() => setSelected(p.key)}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-12 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4 tracking-tight drop-shadow">
          {product.hero.title}
        </h2>
        <p className="text-gray-600 text-lg mb-2">{product.hero.description}</p>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto mb-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {product.features.map((card) => (
            <div
              key={card.title}
              className="bg-white/60 backdrop-blur-xl rounded-2xl border border-purple-100 shadow-xl flex flex-col items-center text-center p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-purple-50 shadow group-hover:bg-purple-100 transition">
                {card.icon}
              </div>
              <div className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-purple-700 transition">
                {card.title}
              </div>
              <div className="text-gray-500 text-sm">{card.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12 relative z-10">
        {product.widgets.map((widget) => (
          <div
            key={widget.key}
            className={`rounded-3xl ${widget.cardClass} backdrop-blur-xl p-7 shadow-xl flex flex-col gap-4 border hover:shadow-2xl hover:-translate-y-1 transition-all duration-200`}
          >
            <div className="font-semibold text-gray-900 mb-1 text-lg">
              {widget.title}
            </div>
            <div className="text-gray-700 text-sm mb-2">{widget.desc}</div>
            {widget.chart === "bar" && (
              <div
                className="bg-white/80 backdrop-blur rounded-xl p-4 shadow border border-gray-100"
                style={{ height: 140 }}
              >
                <Bar data={barData} options={barOptions} height={100} />
              </div>
            )}
            {widget.chart === "line" && (
              <div
                className="bg-white/80 backdrop-blur rounded-xl p-4 shadow border border-gray-100"
                style={{ height: 180 }}
              >
                <Line data={lineData} options={lineOptions} height={140} />
              </div>
            )}
            {widget.chart === "list" && (
              <div className="flex flex-col gap-2">
                {(widget.list || []).map((emp) => (
                  <div
                    className="flex items-center justify-between p-3 rounded-lg bg-white/80 backdrop-blur-md shadow transition-all duration-150"
                    key={emp.name}
                  >
                    <div className="flex items-center gap-3">
                      <FaUserCircle className="text-2xl text-gray-400" />
                      <div className="flex flex-col">
                        <span className="text-gray-900 text-sm font-medium">
                          {emp.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {emp.dept}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-0.5 rounded-full ${
                        emp.status === "Approved" || emp.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : emp.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Satisfaction Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center relative z-10">
        {/* Satisfaction Chart Card */}
        <div className="rounded-3xl bg-green-50/70 backdrop-blur-xl p-8 shadow-xl flex flex-col gap-5 border border-green-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200">
          <div className="font-semibold text-gray-900 mb-1 flex items-center text-lg">
            {product.stats.satisfaction.title}
            <span className="ml-auto text-xs font-normal text-gray-500 bg-white/80 px-2 py-0.5 rounded shadow">
              {product.stats.chartTitle}
            </span>
          </div>
          <div
            className="bg-white/80 backdrop-blur rounded-xl p-4 shadow border border-gray-100"
            style={{ height: 180 }}
          >
            <Line data={lineData} options={lineOptions} height={140} />
          </div>
          <div className="flex items-center gap-2 mt-2 bg-white/80 backdrop-blur rounded-lg p-3 shadow">
            <FaCheckCircle className="text-green-500 text-xl" />
            <span className="text-gray-900 text-sm font-medium">
              {product.stats.satisfaction.title} is{" "}
              <span className="text-purple-600 font-bold">
                {product.stats.satisfaction.value}%
              </span>
            </span>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {product.stats.satisfaction.desc}
          </div>
        </div>
        {/* Satisfaction Text */}
        <div>
          <div className="text-2xl font-bold text-gray-900 mb-3 drop-shadow">
            Regularly Evaluate {product.stats.satisfaction.title}
          </div>
          <div className="text-gray-700 mb-6 leading-relaxed">
            {product.stats.chartDesc}
          </div>
          <div className="flex gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold text-gray-900">
                {product.stats.satisfaction.prev}%
              </div>
              <div className="text-gray-500 text-xs mt-1">
                At the start of 2020, the{" "}
                {product.stats.satisfaction.title.toLowerCase()} was only{" "}
                {product.stats.satisfaction.prev}%.
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">
                {product.stats.satisfaction.value}%
              </div>
              <div className="text-gray-500 text-xs mt-1">
                By 2024, the {product.stats.satisfaction.title.toLowerCase()}{" "}
                reached {product.stats.satisfaction.value}%.
              </div>
            </div>
          </div>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-purple-700 transition">
            Get started for free
          </button>
        </div>
      </div>
    </div>
  );
}
