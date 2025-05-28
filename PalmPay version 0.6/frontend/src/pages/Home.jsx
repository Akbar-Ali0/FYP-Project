import React from 'react';
import { 
  Zap, 
  Shield, 
  Leaf, 
  Hand, 
  Scan, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Footer from '../components/Footer';

export default function TouchlessPaymentHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Fast, Secure &
                  <span className="block text-teal-500">Touchless</span>
                  Payments
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Revolutionary palm-scanning technology that makes payments instant, secure, and completely contactless. The future of transactions is in your hands.
                </p>
              </div>
              
              <div className="flex justify-center sm:justify-start">
                <button 
                  onClick={() => window.location.href = '/signup'}
                  className="bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  Get Started
                </button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative group">
                {/* Payment device */}
                <div className="w-48 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-500">
                  {/* Device screen/scanner area */}
                  <div className="w-full h-full bg-gray-800 rounded-2xl border-2 border-gray-600 flex items-center justify-center relative overflow-hidden">
                    {/* Animated scanner ring */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-teal-400 rounded-full animate-pulse"></div>
                      <div className="absolute w-12 h-12 border-2 border-teal-300 rounded-full animate-ping"></div>
                    </div>
                    
                    {/* Scanner icon */}
                    <Scan className="w-8 h-8 text-teal-400 z-10" />
                    
                    {/* Scanning effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent transform -skew-x-12 animate-pulse"></div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-teal-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute -top-2 -right-6 w-4 h-4 bg-cyan-400 rounded-full animate-bounce delay-500"></div>
                <div className="absolute -bottom-2 -left-6 w-3 h-3 bg-green-400 rounded-full animate-bounce delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PalmPay?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the next generation of payment technology with unmatched speed, security, and convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-yellow-50 hover:to-orange-50 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Transactions</h3>
              <p className="text-gray-600 leading-relaxed">
                Make payments in seconds with a simple scan of your palm. No cards, no cash, no contact required.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-green-50 hover:to-teal-50 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhanced Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Your palm is unique, reducing the risk of fraudulent activities with biometric authentication.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-emerald-50 hover:to-green-50 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Eco-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Reduce the need for cash, cards, or paper receipts. Go completely digital and sustainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with PalmPay in three simple steps. It's that easy!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Hand className="w-12 h-12 text-teal-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Register your palm</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick and secure palm registration process takes less than 30 seconds. Your biometric data is encrypted and stored safely.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-cyan-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Scan className="w-12 h-12 text-cyan-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Scan to pay</h3>
              <p className="text-gray-600 leading-relaxed">
                Simply hover your palm over our scanner at checkout. Advanced AI instantly recognizes your unique palm pattern.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete transaction</h3>
              <p className="text-gray-600 leading-relaxed">
                Payment is processed instantly and securely. Receive digital receipts and transaction confirmations immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Payment Experience?</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Join thousands of businesses and customers who have already made the switch to touchless payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/signup'}
              className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}