import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Plus, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const initialBudget = [
  { name: 'Food', value: 2000 },
  { name: 'Education', value: 1500 },
  { name: 'Business', value: 3000 },
  { name: 'Savings', value: 1000 },
];

export default function Budget() {
  const [expenses, setExpenses] = useState(initialBudget);
  const [showAIAdvice, setShowAIAdvice] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Budget Planner</h2>
        <button
          onClick={() => setShowAIAdvice(!showAIAdvice)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Get AI Advice
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Expense Distribution
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenses}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {expenses.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {expenses.map((item, index) => (
              <div
                key={item.name}
                className="flex items-center space-x-2"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <span className="text-sm text-gray-600">
                  {item.name}: ₹{item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Recent Transactions
          </h3>
          <div className="space-y-4">
            <Transaction
              type="expense"
              category="Food"
              amount="250"
              date="Today"
            />
            <Transaction
              type="income"
              category="Business"
              amount="1000"
              date="Yesterday"
            />
            <Transaction
              type="expense"
              category="Education"
              amount="500"
              date="2 days ago"
            />
          </div>
          <button className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Plus className="w-4 h-4 mr-2" />
            Add Transaction
          </button>
        </div>
      </div>

      {showAIAdvice && (
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-medium text-blue-900 mb-2">
            AI Budget Recommendations
          </h3>
          <ul className="space-y-2 text-blue-800">
            <li>• Consider increasing your savings to 20% of income</li>
            <li>• Your food expenses are within a healthy range</li>
            <li>• Look for ways to optimize business expenses</li>
          </ul>
        </div>
      )}
    </div>
  );
}

function Transaction({
  type,
  category,
  amount,
  date,
}: {
  type: 'income' | 'expense';
  category: string;
  amount: string;
  date: string;
}) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-3">
        {type === 'income' ? (
          <ArrowUpCircle className="w-5 h-5 text-green-500" />
        ) : (
          <ArrowDownCircle className="w-5 h-5 text-red-500" />
        )}
        <div>
          <p className="text-sm font-medium text-gray-900">{category}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
      <span
        className={`text-sm font-medium ${
          type === 'income' ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {type === 'income' ? '+' : '-'}₹{amount}
      </span>
    </div>
  );
}