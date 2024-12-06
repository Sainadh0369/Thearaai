import React from 'react';
import { CreditCard, Check, Star, Building, Users, Zap } from 'lucide-react';

const SubscriptionPlans = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      features: [
        'Up to 60 job postings per day',
        'Basic AI matching',
        'Standard support',
        'Basic analytics'
      ],
      highlight: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      features: [
        'Up to 100 job postings per day',
        'Advanced AI matching',
        'Priority support',
        'Advanced analytics',
        'Custom branding'
      ],
      highlight: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      features: [
        'Up to 149 job postings per day',
        'Enterprise AI features',
        '24/7 dedicated support',
        'Custom integrations',
        'API access'
      ],
      highlight: false
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <CreditCard className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Subscription Plans</h1>
        </div>
        <p className="text-lg opacity-90">
          Choose the perfect plan for your recruitment needs
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 ${
              plan.highlight ? 'ring-2 ring-indigo-600' : ''
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-center justify-center">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-600 dark:text-gray-400 ml-1">
                  {plan.period}
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button
              className={`w-full py-2 rounded-lg ${
                plan.highlight
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'border border-gray-200 dark:border-gray-700 hover:border-indigo-600'
              } transition-colors`}
            >
              Subscribe Now
            </button>
          </div>
        ))}
      </div>

      {/* Additional Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Star className="w-6 h-6 text-indigo-600" />
            <h3 className="font-semibold">Premium Features</h3>
          </div>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>Advanced AI matching</li>
            <li>Custom branding</li>
            <li>API access</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Building className="w-6 h-6 text-indigo-600" />
            <h3 className="font-semibold">Enterprise Solutions</h3>
          </div>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>Custom integrations</li>
            <li>Dedicated support</li>
            <li>Volume discounts</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="w-6 h-6 text-indigo-600" />
            <h3 className="font-semibold">Partnership Program</h3>
          </div>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>University partnerships</li>
            <li>Recruitment agency deals</li>
            <li>Affiliate program</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Can I switch plans anytime?',
              a: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
            },
            {
              q: 'Do you offer annual discounts?',
              a: 'Yes, save 20% with annual billing on any plan.'
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards, PayPal, and bank transfers for enterprise plans.'
            }
          ].map((faq, index) => (
            <div key={index} className="border-b dark:border-gray-700 pb-4">
              <h3 className="font-medium mb-2">{faq.q}</h3>
              <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;