const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
            <span className="text-2xl">💰</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Refund Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're committed to your satisfaction. Learn about our refund process and how we handle different scenarios.
          </p>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Last updated: November 2025
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50 mb-12">
          <div className="card-body">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Refund Policy Overview</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white">⚡</span>
                </div>
                <h3 className="font-semibold mb-2">Fast Processing</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Most refunds processed within 3-5 business days</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white">🛡️</span>
                </div>
                <h3 className="font-semibold mb-2">Fair Assessment</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Each request reviewed fairly and thoroughly</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white">💬</span>
                </div>
                <h3 className="font-semibold mb-2">Clear Communication</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Regular updates throughout the process</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Refund Eligibility */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">1. Refund Eligibility</h2>

              <div className="space-y-6">
                <div className="alert alert-info">
                  <span>ℹ️ Refunds are considered on a case-by-case basis depending on the circumstances.</span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">✅ Eligible Scenarios</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                      <li>Billing errors or duplicate charges</li>
                      <li>Service outages lasting more than 24 hours</li>
                      <li>Technical issues preventing service use</li>
                      <li>Unauthorized account access</li>
                      <li>Service not delivered as promised</li>
                      <li>Account suspension due to our error</li>
                      <li>Payment processing errors</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">❌ Non-Eligible Scenarios</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                      <li>Change of mind after service use</li>
                      <li>Violation of terms of service</li>
                      <li>Services used beyond refund window</li>
                      <li>Third-party payment disputes</li>
                      <li>Account termination for policy violations</li>
                      <li>Dissatisfaction with matching results</li>
                      <li>User error or misunderstanding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Types of Refunds */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">2. Types of Refunds</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="card bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700">
                  <div className="card-body">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white text-xl">💯</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Full Refund</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      100% refund of the paid amount
                    </p>
                    <ul className="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                      <li>• Billing errors</li>
                      <li>• Service failures</li>
                      <li>• Technical issues</li>
                    </ul>
                  </div>
                </div>

                <div className="card bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700">
                  <div className="card-body">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white text-xl">📊</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Partial Refund</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Pro-rated refund based on usage
                    </p>
                    <ul className="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                      <li>• Subscription cancellations</li>
                      <li>• Partial service use</li>
                      <li>• Downgrade requests</li>
                    </ul>
                  </div>
                </div>

                <div className="card bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700">
                  <div className="card-body">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white text-xl">🎁</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Service Credit</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Credit for future services
                    </p>
                    <ul className="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                      <li>• Service disruptions</li>
                      <li>• Goodwill gestures</li>
                      <li>• Account issues</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Refund Process */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">3. How to Request a Refund</h2>

              <div className="space-y-6">
                <div className="steps steps-vertical lg:steps-horizontal w-full">
                  <div className="step step-primary">
                    <div className="text-left">
                      <h3 className="font-semibold">Submit Request</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Contact our support team</p>
                    </div>
                  </div>
                  <div className="step step-primary">
                    <div className="text-left">
                      <h3 className="font-semibold">Provide Documentation</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Submit required information</p>
                    </div>
                  </div>
                  <div className="step step-primary">
                    <div className="text-left">
                      <h3 className="font-semibold">Review & Assessment</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">We evaluate your request</p>
                    </div>
                  </div>
                  <div className="step step-primary">
                    <div className="text-left">
                      <h3 className="font-semibold">Decision & Processing</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Refund processed if approved</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Required Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                      <li>Account email address</li>
                      <li>Transaction ID or receipt</li>
                      <li>Detailed reason for refund request</li>
                      <li>Date and time of the issue</li>
                      <li>Screenshots or evidence (if applicable)</li>
                      <li>Preferred refund method</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Response Timeline</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="font-medium">Initial Response</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Within 24 hours</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="font-medium">Review Process</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">2-5 business days</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="font-medium">Refund Processing</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">3-7 business days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Refund Methods */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">4. Refund Methods & Timeline</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Available Methods</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400">💳</span>
                      </span>
                      <div>
                        <p className="font-medium">Original Payment Method</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Refund to the card/account used for payment</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                        <span className="text-green-600 dark:text-green-400">🎁</span>
                      </span>
                      <div>
                        <p className="font-medium">Account Credit</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Credit applied to your DevTinder account</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 dark:text-purple-400">🏦</span>
                      </span>
                      <div>
                        <p className="font-medium">Bank Transfer</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Direct transfer to your bank account</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Processing Times</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="font-medium">Credit/Debit Card</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">3-5 business days</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="font-medium">PayPal</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">1-2 business days</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="font-medium">Bank Transfer</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">5-7 business days</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="font-medium">Account Credit</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Instant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Cases */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">5. Special Circumstances</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Disputed Charges</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    If you notice unauthorized charges on your account:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Contact us immediately at security@devtinder.com</li>
                    <li>We'll investigate and freeze the account if necessary</li>
                    <li>Full refund provided for confirmed unauthorized charges</li>
                    <li>Additional security measures implemented</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Service Outages</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    For extended service disruptions:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Automatic service credits for outages over 4 hours</li>
                    <li>Full refund consideration for outages over 24 hours</li>
                    <li>Proactive communication about service status</li>
                    <li>Compensation based on impact and duration</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Subscription Changes</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    For subscription modifications:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Downgrade refunds calculated pro-rata</li>
                    <li>Upgrade charges applied immediately</li>
                    <li>Cancellation refunds for unused periods</li>
                    <li>Flexible payment plan adjustments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="card bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">Need to Request a Refund?</h2>
              <p className="mb-6">
                Our dedicated refund team is here to help you. We're committed to resolving your concerns quickly and fairly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="btn bg-white text-purple-600 hover:bg-gray-100 rounded-xl px-6 py-2 font-semibold">
                  Contact Support
                </a>
                <a href="mailto:refunds@devtinder.com" className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-600 rounded-xl px-6 py-2 font-semibold">
                  refunds@devtinder.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;