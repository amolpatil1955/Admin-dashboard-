// components/AdminDashboard.js
import React, { useState } from 'react';
import { 
  FaUsers, 
  FaChartLine, 
  FaShoppingCart, 
  FaDollarSign, 
  FaCalendarAlt,
  FaBell,
  FaSearch,
  FaCog,
  FaSignOutAlt,
  FaUser,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sample data
  const stats = [
    { title: 'Total Users', value: '1,250', icon: <FaUsers />, color: 'bg-blue-500', change: '+12%' },
    { title: 'Revenue', value: '$45,230', icon: <FaDollarSign />, color: 'bg-green-500', change: '+8%' },
    { title: 'Orders', value: '845', icon: <FaShoppingCart />, color: 'bg-purple-500', change: '+5%' },
    { title: 'Growth', value: '34.7%', icon: <FaChartLine />, color: 'bg-orange-500', change: '+3%' }
  ];

  const recentUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', date: '2024-01-15', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', date: '2024-01-14', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', date: '2024-01-13', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', date: '2024-01-12', status: 'Active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', date: '2024-01-11', status: 'Pending' }
  ];

  const recentOrders = [
    { id: '#ORD001', customer: 'John Doe', date: '2024-01-15', amount: '$125', status: 'Delivered' },
    { id: '#ORD002', customer: 'Jane Smith', date: '2024-01-14', amount: '$89', status: 'Processing' },
    { id: '#ORD003', customer: 'Bob Johnson', date: '2024-01-13', amount: '$245', status: 'Delivered' },
    { id: '#ORD004', customer: 'Alice Brown', date: '2024-01-12', amount: '$67', status: 'Pending' },
    { id: '#ORD005', customer: 'Charlie Wilson', date: '2024-01-11', amount: '$189', status: 'Cancelled' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300`}>
        <div className="p-6">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <p className="text-gray-400 text-sm mt-1">Welcome, Admin</p>
        </div>

        <nav className="mt-8">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: <FaChartLine /> },
            { id: 'users', label: 'Users', icon: <FaUsers /> },
            { id: 'orders', label: 'Orders', icon: <FaShoppingCart /> },
            { id: 'analytics', label: 'Analytics', icon: <FaChartLine /> },
            { id: 'calendar', label: 'Calendar', icon: <FaCalendarAlt /> },
            { id: 'settings', label: 'Settings', icon: <FaCog /> }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center w-full px-6 py-3 text-left hover:bg-gray-800 ${activeTab === item.id ? 'bg-blue-600' : ''}`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center w-full p-3 text-left hover:bg-gray-800 rounded-lg"
          >
            <FaSignOutAlt className="mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 p-4 md:p-6">
        {/* Top Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Dashboard Overview</h1>
            <p className="text-gray-500 text-sm">Welcome back, Admin! Here's what's happening.</p>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <FaBell className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <FaUser className="text-blue-600" />
              </div>
              <span className="hidden md:inline text-sm">Admin</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-5">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                  <p className="text-green-500 text-xs mt-1">{stat.change} from last month</p>
                </div>
                <div className={`${stat.color} text-white p-3 rounded-lg`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts and Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Users */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-gray-800">Recent Users</h3>
              <button className="text-blue-600 text-sm hover:text-blue-800">View All</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 text-gray-500 text-sm font-medium">Name</th>
                    <th className="text-left py-3 text-gray-500 text-sm font-medium">Date Joined</th>
                    <th className="text-left py-3 text-gray-500 text-sm font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="py-3">
                        <div>
                          <p className="font-medium text-sm">{user.name}</p>
                          <p className="text-gray-500 text-xs">{user.email}</p>
                        </div>
                      </td>
                      <td className="py-3 text-sm">{user.date}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.status === 'Active' ? 'bg-green-100 text-green-800' :
                          user.status === 'Inactive' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-gray-800">Recent Orders</h3>
              <button className="text-blue-600 text-sm hover:text-blue-800">View All</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 text-gray-500 text-sm font-medium">Order ID</th>
                    <th className="text-left py-3 text-gray-500 text-sm font-medium">Customer</th>
                    <th className="text-left py-3 text-gray-500 text-sm font-medium">Amount</th>
                    <th className="text-left py-3 text-gray-500 text-sm font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 text-sm font-medium">{order.id}</td>
                      <td className="py-3 text-sm">{order.customer}</td>
                      <td className="py-3 text-sm font-medium">{order.amount}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-lg shadow-sm p-5">
            <h4 className="font-semibold text-gray-800 mb-3">Activity Overview</h4>
            <div className="space-y-3">
              {['User Registrations', 'Order Processing', 'Support Tickets'].map((activity, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{activity}</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full" 
                      style={{ width: `${70 + idx * 10}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5">
            <h4 className="font-semibold text-gray-800 mb-3">Top Products</h4>
            <div className="space-y-3">
              {['Product A', 'Product B', 'Product C'].map((product, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{product}</span>
                  <span className="text-sm font-medium">${(idx + 1) * 245}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5">
            <h4 className="font-semibold text-gray-800 mb-3">System Status</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Server Uptime</span>
                <span className="text-sm font-medium text-green-600">99.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Database</span>
                <span className="text-sm font-medium text-green-600">Healthy</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Last Backup</span>
                <span className="text-sm font-medium">6 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;