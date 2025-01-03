import React from 'react';
import { Play, BookOpen, Award } from 'lucide-react';

const courses = [
  {
    title: 'Basic Financial Literacy',
    description: 'Learn the fundamentals of managing money and savings',
    progress: 80,
    modules: 5,
  },
  {
    title: 'Understanding Banking',
    description: 'Navigate banking services and financial products',
    progress: 60,
    modules: 4,
  },
  {
    title: 'Smart Investment Basics',
    description: 'Introduction to safe investment options',
    progress: 30,
    modules: 6,
  },
];

export default function Education() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Financial Education</h2>
        <select className="border rounded-md px-3 py-2">
          <option>Odia</option>
          <option>Hindi</option>
          <option>English</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.title} className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="w-6 h-6 text-blue-500" />
                <span className="text-sm text-gray-500">{course.modules} modules</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      {course.progress}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div
                    style={{ width: `${course.progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
              </div>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                <Play className="w-4 h-4 mr-2" />
                Continue Learning
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Your Achievements
        </h3>
        <div className="flex space-x-4">
          {[1, 2, 3].map((badge) => (
            <div
              key={badge}
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg"
            >
              <Award className="w-8 h-8 text-yellow-500 mb-2" />
              <span className="text-sm font-medium text-gray-900">
                Badge {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}