import React, { useState } from 'react';
import { Bot, MessageSquare, Zap, Clock, ArrowRight, Github, Twitter } from 'lucide-react';
import axios from "axios";

function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.get(`https://pinetech.org/api/waitlist?email=${email}`).then(() => {
      setSubmitted(true);
      setEmail('');
      setName('');
    })
  };

  const features = [
    {
      icon: <Bot className="w-8 h-8 text-indigo-500" />,
      title: 'AI-Powered Analysis',
      description: 'Automatically identify and answer recurring questions in your server'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-indigo-500" />,
      title: 'Smart FAQ Generation',
      description: 'Convert common discussions into organized, searchable FAQs'
    },
    {
      icon: <Zap className="w-8 h-8 text-indigo-500" />,
      title: 'Instant Responses',
      description: 'Provide immediate answers to frequently asked questions'
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-500" />,
      title: 'Time-Saving',
      description: 'Reduce repetitive questions and moderator workload'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-indigo-500/10 rounded-full">
            <p className="text-sm font-medium text-indigo-400">Coming Soon - Join Our Waitlist</p>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            Transform Your Discord Server Conversations into Instant FAQs
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-300">
            AI-driven insights to save your time and streamline your community management
          </p>
          <div className="max-w-3xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-400 mb-2">Smart Analysis</h3>
                <p className="text-sm text-gray-400">Our AI analyzes conversations in real-time to identify common questions and patterns</p>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-400 mb-2">Automated FAQs</h3>
                <p className="text-sm text-gray-400">Automatically generates and updates FAQs based on your server's discussions</p>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-400 mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-400">Provides instant answers to common questions, even when moderators are offline</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <a href="#join" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center mx-auto">
              Join the Waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <p className="text-gray-400">Be the first to know when we launch</p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              <span>Setup takes less than 5 minutes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-all hover:transform hover:scale-105"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="Discord Interface"
              className="absolute inset-0 w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 mix-blend-multiply" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <Zap className="w-6 h-6 text-indigo-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Save Hours of Moderation Time</h3>
                  <p className="mt-2 text-gray-400">Let AI handle repetitive questions while you focus on building your community</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-indigo-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Keep Your Community Informed</h3>
                  <p className="mt-2 text-gray-400">Automatically maintain an up-to-date knowledge base from your discussions</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm" id="join">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Discord Server?</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
            <button
                type="submit"
              className="w-full px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-lg font-semibold transition-all"
            >
              Join the Waitlist
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-green-500">Thank you! We'll notify you when we're live.</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://x.com/roobengabriel" className="text-gray-400 hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">© 2025 AI Discord FAQ | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
