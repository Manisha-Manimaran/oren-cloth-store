"use client";

import AdminSidebar from "@/components/AdminSidebar";

const recentOrders = [
  {
    id: "#ORD-001",
    customer: "Priya Sharma",
    items: 3,
    amount: 1297,
    status: "Delivered" as const,
  },
  {
    id: "#ORD-002",
    customer: "Rahul Verma",
    items: 5,
    amount: 2145,
    status: "Shipped" as const,
  },
  {
    id: "#ORD-003",
    customer: "Ananya Gupta",
    items: 2,
    amount: 898,
    status: "Pending" as const,
  },
  {
    id: "#ORD-004",
    customer: "Vikram Singh",
    items: 8,
    amount: 3592,
    status: "Shipped" as const,
  },
  {
    id: "#ORD-005",
    customer: "Neha Patel",
    items: 1,
    amount: 499,
    status: "Pending" as const,
  },
];

const statusStyles: Record<string, string> = {
  Delivered: "bg-green-100 text-green-800 border-green-200",
  Shipped: "bg-blue-100 text-blue-800 border-blue-200",
  Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
};

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-accent flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-border-light px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-text"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search orders, products..."
                  className="w-full pl-10 pr-4 py-2 text-sm border border-border-light focus:outline-none focus:border-primary bg-accent"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-text hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
              </button>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-medium">
                A
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-serif text-2xl md:text-3xl tracking-tight">
              Dashboard
            </h1>
            <button className="btn-primary text-xs px-5 py-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Add New Product
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white border border-border-light p-5">
              <p className="text-xs text-gray-text tracking-wider uppercase mb-1">
                Total Orders
              </p>
              <p className="font-serif text-3xl">156</p>
              <p className="text-xs text-green-600 mt-2">+12% this month</p>
            </div>
            <div className="bg-white border border-border-light p-5">
              <p className="text-xs text-gray-text tracking-wider uppercase mb-1">
                Revenue (Month)
              </p>
              <p className="font-serif text-3xl">₹2.4L</p>
              <p className="text-xs text-green-600 mt-2">+8% vs last month</p>
            </div>
            <div className="bg-white border border-border-light p-5">
              <p className="text-xs text-gray-text tracking-wider uppercase mb-1">
                Wholesale Requests
              </p>
              <p className="font-serif text-3xl">12</p>
              <p className="text-xs text-yellow-600 mt-2">5 pending review</p>
            </div>
            <div className="bg-white border border-border-light p-5">
              <p className="text-xs text-gray-text tracking-wider uppercase mb-1">
                Products Live
              </p>
              <p className="font-serif text-3xl">48</p>
              <p className="text-xs text-gray-text mt-2">6 categories</p>
            </div>
          </div>

          <div className="bg-white border border-border-light">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border-light">
              <h2 className="text-sm font-medium tracking-wider uppercase">
                Recent Orders
              </h2>
              <button className="text-xs text-gray-text hover:text-primary transition-colors">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-light bg-accent/50">
                    <th className="text-left px-6 py-3 text-xs font-medium tracking-wider uppercase text-gray-text">
                      Order ID
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium tracking-wider uppercase text-gray-text">
                      Customer
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium tracking-wider uppercase text-gray-text">
                      Items
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium tracking-wider uppercase text-gray-text">
                      Amount
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium tracking-wider uppercase text-gray-text">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-border-light hover:bg-accent/30 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium">{order.id}</td>
                      <td className="px-6 py-4 text-gray-text">
                        {order.customer}
                      </td>
                      <td className="px-6 py-4">{order.items}</td>
                      <td className="px-6 py-4 font-medium">
                        ₹{order.amount}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block text-[10px] font-medium tracking-wider px-2.5 py-1 border ${
                            statusStyles[order.status]
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 bg-white border border-border-light p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium tracking-wider uppercase">
                Quick Actions
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="flex flex-col items-center gap-2 p-4 border border-border-light hover:border-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                <span className="text-xs font-medium">Add Product</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 border border-border-light hover:border-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span className="text-xs font-medium">New Order</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 border border-border-light hover:border-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="text-xs font-medium">Manage Customers</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 border border-border-light hover:border-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
                <span className="text-xs font-medium">Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
