import React from 'react';
import { TrendingUp, AlertCircle, Check } from 'lucide-react';

const investmentOptions = [
  {
    title: 'Dairy Business Expansion',
    type: 'Agricultural',
    minAmount: 1000,
    returns: '12-15%',
    risk: 'Medium',
    duration: '12 months',
  },
  {
    title: 'Women-Led Handicraft Co-op',
    type: 'Artisanal',
    minAmount: 500,
    returns: '10-12%',
    risk: 'Low',
    duration: '6 months',
  },
  {
    title: 'Local Food Processing Unit',
    type: 'Food & Beverage',
    minAmount: 2000,
    returns: '15-18%',
    risk: 'Medium-High',
    duration: '24 months',
  },
];

export default function Investments() {
  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex items-center">
          <AlertCircle className="w-5 h-5 text-yellow-400" />
          <p className="ml-3 text-sm text-yellow-700">
            Remember to carefully review each investment opportunity and consider your risk tolerance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {investmentOptions.map((option) => (
          <InvestmentCard key={option.title} {...option} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Your Investment Portfolio
          </h3>
          <div className="space-y-4">
            <PortfolioItem
              title="Active Investments"
              value="₹3,500"
              change="+12%"
              positive
            />
            <PortfolioItem
              title="Total Returns"
              value="₹420"
              change="+8%"
              positive
            />
            <PortfolioItem
              title="Available Balance"
              value="₹1,500"
              change="0%"
              neutral
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Investment Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Tip
            title="Start Small"
            description="Begin with small amounts to understand the investment process"
          />
          <Tip
            title="Diversify"
            description="Spread your investments across different opportunities"
          />
          <Tip
            title="Regular Investment"
            description="Invest small amounts regularly instead of large one-time investments"
          />
          <Tip
            title="Track Progress"
            description="Monitor your investments and returns regularly"
          />
        </div>
      </div>
    </div>
  );
}

function InvestmentCard({
  title,
  type,
  minAmount,
  returns,
  risk,
  duration,
}: {
  title: string;
  type: string;
  minAmount: number;
  returns: string;
  risk: string;
  duration: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
            {type}
          </span>
          <TrendingUp className="w-5 h-5 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <div className="space-y-2">
          <DetailRow label="Minimum Amount" value={`₹${minAmount}`} />
          <DetailRow label="Expected Returns" value={returns} />
          <DetailRow label="Risk Level" value={risk} />
          <DetailRow label="Duration" value={duration} />
        </div>
        <button className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
          Invest Now
        </button>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm font-medium text-gray-900">{value}</span>
    </div>
  );
}

function PortfolioItem({
  title,
  value,
  change,
  positive,
  neutral,
}: {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
  neutral?: boolean;
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <span className="text-sm font-medium text-gray-900">{title}</span>
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-900">{value}</span>
        <span
          className={`text-sm font-medium ${
            neutral
              ? 'text-gray-600'
              : positive
              ? 'text-green-600'
              : 'text-red-600'
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}

function Tip({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex space-x-3">
      <div className="flex-shrink-0">
        <Check className="w-6 h-6 text-green-500" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}