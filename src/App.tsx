import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Users, Package, Clock, TrendingUp, AlertTriangle, Target, Activity, MapPin } from 'lucide-react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('today');
  const [selectedView, setSelectedView] = useState('dashboard');
  const [selectedZoneDetail, setSelectedZoneDetail] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Mock data for Indian FMCG warehouse
  const kpiData = {
    totalUPH: 142,
    targetUPH: 150,
    onTimeShip: 94.2,
    accuracy: 98.7,
    activeWorkers: 84
  };

  const productivityTrends = [
    { time: '06:00', actual: 125, target: 150, orders: 45 },
    { time: '08:00', actual: 138, target: 150, orders: 62 },
    { time: '10:00', actual: 145, target: 150, orders: 78 },
    { time: '12:00', actual: 152, target: 150, orders: 85 },
    { time: '14:00', actual: 148, target: 150, orders: 92 },
    { time: '16:00', actual: 142, target: 150, orders: 67 },
    { time: '18:00', actual: 135, target: 150, orders: 54 }
  ];

  const zonePerformance = [
    { zone: 'Picking', uph: 138, target: 145, workers: 25, status: 'warning' },
    { zone: 'Packing', uph: 162, target: 155, workers: 18, status: 'good' },
    { zone: 'Sorting', uph: 145, target: 150, workers: 15, status: 'warning' }
  ];

  const topPerformers = [
    { name: 'Rajesh Kumar', uph: 178, zone: 'Picking', shift: 'Day', accuracy: 99.2 },
    { name: 'Priya Sharma', uph: 172, zone: 'Packing', shift: 'Day', accuracy: 98.9 },
    { name: 'Sunita Devi', uph: 165, zone: 'Sorting', shift: 'Night', accuracy: 98.7 },
    { name: 'Vikram Yadav', uph: 162, zone: 'Picking', shift: 'Day', accuracy: 98.5 },
    { name: 'Anjali Patel', uph: 158, zone: 'Packing', shift: 'Night', accuracy: 98.8 }
  ];

  const orderFlow = [
    { stage: 'Released', count: 1250, percentage: 100 },
    { stage: 'Picked', count: 1180, percentage: 94.4 },
    { stage: 'Sorted', count: 1165, percentage: 93.2 },
    { stage: 'Packed', count: 1148, percentage: 91.8 },
    { stage: 'Shipped', count: 1142, percentage: 91.4 }
  ];

  const pickingPerformanceData = [
    { 
      name: 'Rajesh Kumar', 
      activeTime: '7h 45m', 
      linesPickedToday: 485, 
      avgTimePerLine: '2.1 min', 
      accuracy: 99.2,
      currentTask: 'Wave-045',
      lastScan: '2 min ago'
    },
    { 
      name: 'Vikram Yadav', 
      activeTime: '8h 10m', 
      linesPickedToday: 456, 
      avgTimePerLine: '2.3 min', 
      accuracy: 98.5,
      currentTask: 'Wave-047',
      lastScan: '1 min ago'
    },
    { 
      name: 'Ramesh Gupta', 
      activeTime: '6h 30m', 
      linesPickedToday: 398, 
      avgTimePerLine: '2.5 min', 
      accuracy: 97.8,
      currentTask: 'Wave-046',
      lastScan: '5 min ago'
    },
    { 
      name: 'Sunil Sharma', 
      activeTime: '7h 15m', 
      linesPickedToday: 423, 
      avgTimePerLine: '2.4 min', 
      accuracy: 98.1,
      currentTask: 'Wave-048',
      lastScan: '3 min ago'
    },
    { 
      name: 'Deepak Singh', 
      activeTime: '8h 00m', 
      linesPickedToday: 467, 
      avgTimePerLine: '2.2 min', 
      accuracy: 98.9,
      currentTask: 'Wave-045',
      lastScan: '1 min ago'
    },
    { 
      name: 'Mahesh Kumar', 
      activeTime: '5h 45m', 
      linesPickedToday: 298, 
      avgTimePerLine: '2.7 min', 
      accuracy: 97.2,
      currentTask: 'Wave-049',
      lastScan: '8 min ago'
    }
  ];

  const packingPerformanceData = [
    { 
      name: 'Priya Sharma', 
      activeTime: '8h 20m', 
      ordersPackedToday: 145, 
      avgTimePerOrder: '3.2 min', 
      accuracy: 98.9,
      currentTask: 'Batch-P23',
      lastScan: '1 min ago'
    },
    { 
      name: 'Anjali Patel', 
      activeTime: '7h 45m', 
      ordersPackedToday: 132, 
      avgTimePerOrder: '3.5 min', 
      accuracy: 98.8,
      currentTask: 'Batch-P25',
      lastScan: '3 min ago'
    },
    { 
      name: 'Kavita Singh', 
      activeTime: '8h 00m', 
      ordersPackedToday: 138, 
      avgTimePerOrder: '3.4 min', 
      accuracy: 99.1,
      currentTask: 'Batch-P24',
      lastScan: '2 min ago'
    },
    { 
      name: 'Meera Gupta', 
      activeTime: '6h 15m', 
      ordersPackedToday: 108, 
      avgTimePerOrder: '3.8 min', 
      accuracy: 98.3,
      currentTask: 'Batch-P26',
      lastScan: '4 min ago'
    },
    { 
      name: 'Ritu Verma', 
      activeTime: '7h 30m', 
      ordersPackedToday: 125, 
      avgTimePerOrder: '3.6 min', 
      accuracy: 98.6,
      currentTask: 'Batch-P22',
      lastScan: '1 min ago'
    }
  ];

  const sortingPerformanceData = [
    { 
      name: 'Sunita Devi', 
      activeTime: '8h 15m', 
      itemsSortedToday: 892, 
      avgTimePerItem: '0.8 min', 
      accuracy: 98.7,
      currentTask: 'Sort-Zone-A',
      lastScan: '2 min ago'
    },
    { 
      name: 'Rekha Kumari', 
      activeTime: '7h 50m', 
      itemsSortedToday: 834, 
      avgTimePerItem: '0.9 min', 
      accuracy: 98.2,
      currentTask: 'Sort-Zone-B',
      lastScan: '1 min ago'
    },
    { 
      name: 'Seema Yadav', 
      activeTime: '8h 05m', 
      itemsSortedToday: 867, 
      avgTimePerItem: '0.85 min', 
      accuracy: 98.9,
      currentTask: 'Sort-Zone-C',
      lastScan: '3 min ago'
    },
    { 
      name: 'Pooja Sharma', 
      activeTime: '6h 45m', 
      itemsSortedToday: 712, 
      avgTimePerItem: '0.95 min', 
      accuracy: 97.8,
      currentTask: 'Sort-Zone-A',
      lastScan: '5 min ago'
    },
    { 
      name: 'Nisha Patel', 
      activeTime: '7h 20m', 
      itemsSortedToday: 798, 
      avgTimePerItem: '0.88 min', 
      accuracy: 98.4,
      currentTask: 'Sort-Zone-B',
      lastScan: '2 min ago'
    }
  ];

  const getStatusColor = (status:any) => {
    switch (status) {
      case 'good': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <>
  <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Warehouse Productivity Dashboard</h1>
            <p className="text-gray-600">Mumbai Distribution Center - FMCG Operations</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">Current Time</p>
              <p className="font-semibold">{currentTime.toLocaleTimeString('en-IN')}</p>
            </div>
            <select 
              value={selectedTimeframe} 
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Units Per Hour</p>
              <p className="text-2xl font-bold text-gray-900">{kpiData.totalUPH}</p>
              <p className="text-sm text-gray-500">Target: {kpiData.targetUPH}</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center text-sm">
              <span className={`${kpiData.totalUPH >= kpiData.targetUPH ? 'text-green-600' : 'text-red-600'}`}>
                {kpiData.totalUPH >= kpiData.targetUPH ? '↑' : '↓'} {Math.abs(((kpiData.totalUPH/kpiData.targetUPH) - 1) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">On-Time Ship %</p>
              <p className="text-2xl font-bold text-gray-900">{kpiData.onTimeShip}%</p>
              <p className="text-sm text-gray-500">Target: 97%</p>
            </div>
            <div className="p-3 rounded-full bg-green-100">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Pick Accuracy</p>
              <p className="text-2xl font-bold text-gray-900">{kpiData.accuracy}%</p>
              <p className="text-sm text-gray-500">Target: 99%</p>
            </div>
            <div className="p-3 rounded-full bg-indigo-100">
              <Activity className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Workers</p>
              <p className="text-2xl font-bold text-gray-900">{kpiData.activeWorkers}</p>
              <p className="text-sm text-gray-500">On Shift</p>
            </div>
            <div className="p-3 rounded-full bg-teal-100">
              <Users className="h-6 w-6 text-teal-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Orders Processed</p>
              <p className="text-2xl font-bold text-gray-900">1,142</p>
              <p className="text-sm text-gray-500">Released: 1,250</p>
            </div>
            <div className="p-3 rounded-full bg-purple-100">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {selectedView === 'dashboard' && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Productivity Trends */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Hourly Productivity Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={productivityTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="actual" stroke="#2563eb" strokeWidth={2} name="Actual UPH" />
                  <Line type="monotone" dataKey="target" stroke="#dc2626" strokeWidth={2} strokeDasharray="5 5" name="Target UPH" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Order Flow Funnel */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Flow Status</h3>
              <div className="space-y-4">
                {orderFlow.map((stage, index) => (
                  <div key={stage.stage} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-900">{stage.stage}</span>
                        <span className="text-sm text-gray-600">{stage.count}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${stage.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Zone Performance */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Zone Performance</h3>
              <div className="space-y-4">
                {zonePerformance.map((zone) => (
                  <div key={zone.zone} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer" 
                       onClick={() => {
                         if (zone.zone === 'Picking') setSelectedView('picking');
                         if (zone.zone === 'Packing') setSelectedView('packing');
                         if (zone.zone === 'Sorting') setSelectedView('sorting');
                       }}>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-full bg-gray-100">
                        <MapPin className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{zone.zone}</p>
                        <p className="text-sm text-gray-500">{zone.workers} workers</p>
                        <p className="text-xs text-blue-600">Click for detailed performance</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">{zone.uph} UPH</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(zone.status)}`}>
                        Target: {zone.target}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Performers */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performers Today</h3>
              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div key={performer.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-blue-600">#{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{performer.name}</p>
                        <p className="text-sm text-gray-500">{performer.zone} - {performer.shift}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-green-600">{performer.uph} UPH</p>
                      <p className="text-sm text-gray-500">{performer.accuracy}% accuracy</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {selectedView === 'picking' && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Picking Performance Details</h3>
            <button 
              onClick={() => setSelectedView('dashboard')}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back to Dashboard
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Picker Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lines Picked</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Time/Line</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accuracy</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Task</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Scan</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pickingPerformanceData.map((picker, index) => (
                  <tr key={picker.name} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{picker.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{picker.activeTime}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-blue-600">{picker.linesPickedToday}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{picker.avgTimePerLine}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        picker.accuracy >= 99 ? 'bg-green-100 text-green-800' :
                        picker.accuracy >= 98 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {picker.accuracy}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{picker.currentTask}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{picker.lastScan}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {selectedView === 'packing' && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Packing Performance Details</h3>
            <button 
              onClick={() => setSelectedView('dashboard')}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back to Dashboard
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Packer Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders Packed</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Time/Order</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accuracy</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Task</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Scan</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {packingPerformanceData.map((packer, index) => (
                  <tr key={packer.name} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{packer.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{packer.activeTime}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-blue-600">{packer.ordersPackedToday}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{packer.avgTimePerOrder}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        packer.accuracy >= 99 ? 'bg-green-100 text-green-800' :
                        packer.accuracy >= 98 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {packer.accuracy}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{packer.currentTask}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{packer.lastScan}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {selectedView === 'sorting' && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Sorting Performance Details</h3>
            <button 
              onClick={() => setSelectedView('dashboard')}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Back to Dashboard
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sorter Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items Sorted</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Time/Item</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accuracy</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Task</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Scan</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortingPerformanceData.map((sorter, index) => (
                  <tr key={sorter.name} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{sorter.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{sorter.activeTime}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-blue-600">{sorter.itemsSortedToday}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{sorter.avgTimePerItem}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        sorter.accuracy >= 99 ? 'bg-green-100 text-green-800' :
                        sorter.accuracy >= 98 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {sorter.accuracy}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{sorter.currentTask}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{sorter.lastScan}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default App
