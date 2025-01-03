import React, { useState } from 'react';
import { MessageSquare, Users, Star } from 'lucide-react';

export default function Community() {
  const [message, setMessage] = useState('');

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Community Chat</h2>
            <div className="space-y-4 mb-4">
              <ChatMessage
                name="Mentor Priya"
                message="How can I help you today?"
                time="2m ago"
                isMentor
              />
              <ChatMessage
                name="Lakshmi"
                message="I need advice about starting a dairy business"
                time="1m ago"
              />
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Success Stories
            </h3>
            <div className="space-y-4">
              <SuccessStory
                name="Radha"
                business="Handicraft Business"
                story="Started with a small loan, now employing 5 women"
              />
              <SuccessStory
                name="Meera"
                business="Dairy Farm"
                story="Grew from 2 cows to a successful dairy business"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Available Mentors
            </h3>
            <div className="space-y-4">
              <MentorCard
                name="Priya Sharma"
                expertise="Financial Advisor"
                rating={4.8}
              />
              <MentorCard
                name="Anjali Patel"
                expertise="Business Coach"
                rating={4.9}
              />
              <MentorCard
                name="Deepa Roy"
                expertise="Agricultural Expert"
                rating={4.7}
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Upcoming Events
            </h3>
            <div className="space-y-4">
              <Event
                title="Financial Workshop"
                date="March 15, 2024"
                time="10:00 AM"
              />
              <Event
                title="Business Planning Session"
                date="March 20, 2024"
                time="2:00 PM"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatMessage({
  name,
  message,
  time,
  isMentor = false,
}: {
  name: string;
  message: string;
  time: string;
  isMentor?: boolean;
}) {
  return (
    <div className="flex space-x-3">
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isMentor ? 'bg-blue-500' : 'bg-gray-200'
        }`}
      >
        <Users className={`w-4 h-4 ${isMentor ? 'text-white' : 'text-gray-500'}`} />
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-900">{name}</span>
          {isMentor && (
            <span className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
              Mentor
            </span>
          )}
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
}

function SuccessStory({
  name,
  business,
  story,
}: {
  name: string;
  business: string;
  story: string;
}) {
  return (
    <div className="p-4 bg-green-50 rounded-lg">
      <div className="flex items-center space-x-2 mb-2">
        <Star className="w-5 h-5 text-yellow-400" />
        <span className="font-medium text-gray-900">{name}</span>
      </div>
      <p className="text-sm font-medium text-gray-700 mb-1">{business}</p>
      <p className="text-sm text-gray-600">{story}</p>
    </div>
  );
}

function MentorCard({
  name,
  expertise,
  rating,
}: {
  name: string;
  expertise: string;
  rating: number;
}) {
  return (
    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
      <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
        <Users className="w-6 h-6 text-white" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-gray-900">{name}</h4>
        <p className="text-xs text-gray-600">{expertise}</p>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-xs text-gray-600">{rating}</span>
        </div>
      </div>
    </div>
  );
}

function Event({
  title,
  date,
  time,
}: {
  title: string;
  date: string;
  time: string;
}) {
  return (
     
     <div className="p-3 bg-gray-50 rounded-lg">
      <h4 className="text-sm font-medium text-gray-900">{title}</h4>
      <div className="flex items-center space-x-2 mt-1">
        <span className="text-xs text-gray-600">{date}</span>
        <span className="text-xs text-gray-400">•</span>
        <span className="text-xs text-gray-600">{time}</span>
      </div>
    </div>
  );
}