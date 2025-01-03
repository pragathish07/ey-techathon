import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Wallet, TrendingUp, Users, BookOpen } from 'lucide-react';

const data = [
  { month: 'Jan', savings: 400 },
  { month: 'Feb', savings: 600 },
  { month: 'Mar', savings: 800 },
  { month: 'Apr', savings: 1000 },
  { month: 'May', savings: 1200 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Total Savings"
          value="₹1,200"
          icon={<Wallet className="w-6 h-6" />}
          color="bg-blue-500"
        />
        <StatCard
          title="Investments"
          value="₹500"
          icon={<TrendingUp className="w-6 h-6" />}
          color="bg-green-500"
        />
        <StatCard
          title="Community Points"
          value="250"
          icon={<Users className="w-6 h-6" />}
          color="bg-purple-500"
        />
        <StatCard
          title="Lessons Completed"
          value="5"
          icon={<BookOpen className="w-6 h-6" />}
          color="bg-yellow-500"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Savings Growth</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="savings" stroke="#3B82F6" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color }: { title: string; value: string; icon: React.ReactNode; color: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center">
        <div className={`${color} p-3 rounded-full text-white`}>
          {icon}
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}