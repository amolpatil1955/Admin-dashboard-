// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRocket, FaChartLine, FaShieldAlt, FaUsers, FaStar, FaCheckCircle } from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      icon: <FaRocket />,
      title: 'Lightning Fast',
      description: 'Blazing fast performance with optimized code',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure by Design',
      description: 'Enterprise-grade security for your peace of mind',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaChartLine />,
      title: 'Analytics Ready',
      description: 'Advanced analytics to track your success',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaUsers />,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools built-in',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'CTO, TechCorp',
      text: 'This platform transformed our workflow. 10/10!',
      rating: 5
    },
    {
      name: 'Sarah Miller',
      role: 'Product Manager',
      text: 'The best decision we made this year. Incredible ROI.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Startup Founder',
      text: 'Cut our development time by 60%. Simply amazing.',
      rating: 5
    }
  ];

  const stats = [
    { number: '10K+', label: 'Happy Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '50+', label: 'Countries' }
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-black to-blue-900/20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center lg:text-left lg:flex items-center">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-2 mb-6 bg-linear-to-r from-purple-600 to-pink-600 rounded-full">
                <span className="text-sm font-semibold">🚀 NEXT GENERATION PLATFORM</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Build The Future
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Today
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl">
                Experience the most advanced platform that combines cutting-edge technology with intuitive design.
                Transform your ideas into reality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:-translate-y-1 hover:shadow-2xl shadow-purple-500/30 flex items-center justify-center gap-3"
                >
                  <span>Get Started Free</span>
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
                
                <button className="px-8 py-4 border-2 border-gray-700 rounded-xl font-bold text-lg hover:border-gray-500 transition-all hover:bg-white/5">
                  Watch Demo
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-lg opacity-30"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-purple-900/50 to-gray-900 p-6 rounded-2xl border border-gray-800">
                      <div className="text-3xl mb-4">📈</div>
                      <h3 className="font-bold mb-2">Real-time Analytics</h3>
                      <p className="text-gray-400 text-sm">Live data visualization</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-900/50 to-gray-900 p-6 rounded-2xl border border-gray-800">
                      <div className="text-3xl mb-4">⚡</div>
                      <h3 className="font-bold mb-2">Instant Updates</h3>
                      <p className="text-gray-400 text-sm">Zero downtime deployments</p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-900/50 to-gray-900 p-6 rounded-2xl border border-gray-800">
                      <div className="text-3xl mb-4">🔒</div>
                      <h3 className="font-bold mb-2">Bank-grade Security</h3>
                      <p className="text-gray-400 text-sm">Military encryption</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-900/50 to-gray-900 p-6 rounded-2xl border border-gray-800">
                      <div className="text-3xl mb-4">🤖</div>
                      <h3 className="font-bold mb-2">AI Powered</h3>
                      <p className="text-gray-400 text-sm">Smart automation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Choose Us</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Packed with features designed to accelerate your growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500`}></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 group-hover:border-transparent transition-all">
                  <div className={`inline-block p-4 bg-gradient-to-r ${feature.color} rounded-xl text-2xl mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaArrowRight className={`text-transparent bg-gradient-to-r ${feature.color} bg-clip-text`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Loved by <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.text}</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"></div>
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative py-16 px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto">
                Join thousands of successful companies using our platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/register"
                  className="px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <span>Start Free Trial</span>
                  <FaArrowRight />
                </Link>
                <button className="px-8 py-4 border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                  Schedule Demo
                </button>
              </div>
              <div className="mt-10 flex items-center justify-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <FaCheckCircle />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;