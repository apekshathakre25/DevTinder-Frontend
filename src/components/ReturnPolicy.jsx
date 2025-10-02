const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mb-6">
            <span className="text-2xl">↩️</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Return Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We want you to be completely satisfied with DevTinder. Here's our comprehensive return policy for our services.
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
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Return Policy Overview</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white">✅</span>
                </div>
                <h3 className="font-semibold mb-2">14-Day Window</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Request returns within 14 days of purchase</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white">💰</span>
                </div>
                <h3 className="font-semibold mb-2">Full Refund</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Get 100% refund for eligible services</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white">⚡</span>
                </div>
                <h3 className="font-semibold mb-2">Quick Process</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Simple return process with fast resolution</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Eligibility */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">1. Return Eligibility</h2>

              <div className="space-y-6">
                <div className="alert alert-success">
                  <span>✅ You can return most DevTinder services within 14 days of purchase.</span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Eligible for Returns</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Premium subscription plans (unused portion)</li>
                    <li>Additional feature purchases</li>
                    <li>Profile boost services (if not yet activated)</li>
                    <li>Advanced matching algorithms (within first 7 days)</li>
                    <li>Priority support packages</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Not Eligible for Returns</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Services used for more than 14 days</li>
                    <li>Profile boosts that have already been activated</li>
                    <li>Custom development services (after work has begun)</li>
                    <li>Third-party integrations or tools</li>
                    <li>Gift subscriptions (after recipient activation)</li>
                  </ul>
                </div>

                <div className="alert alert-warning">
                  <span>⚠️ Returns must be requested within 14 days of the original purchase date.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Return Process */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">2. How to Request a Return</h2>

              <div className="space-y-6">
                <div className="steps steps-vertical lg:steps-horizontal w-full">
                  <div className="step step-primary">
                    <div className="text-left">
                      <h3 className="font-semibold">Contact Support</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Email us at returns@devtinder.com</p>
                    </div>
                  </div>
                  <div className="step step-primary">
                    <div className="text-left">
                      <h3 className="font-semibold">Provide Details</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Include order number and reason</p>
                    </div>
                  </div>
                  <div className="step step-primary">
                    <div className="text-left">
                      <h3 className="font-semibold">Review Process</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">We'll review within 24-48 hours</p>
                    </div>
                  </div>
                  <div className="step step-primary">
                    <div className="text-left">
                      <h3 className="font-semibold">Receive Refund</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Refund processed in 3-5 business days</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Required Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                      <li>Order confirmation number</li>
                      <li>Email address used for purchase</li>
                      <li>Reason for return request</li>
                      <li>Date of original purchase</li>
                      <li>Payment method used</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Contact Methods</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 dark:text-blue-400">📧</span>
                        </span>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">returns@devtinder.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                          <span className="text-green-600 dark:text-green-400">💬</span>
                        </span>
                        <div>
                          <p className="font-medium">Live Chat</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Available 24/7 on our website</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 dark:text-purple-400">📞</span>
                        </span>
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">1-800-DEV-TINDER</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Refund Timeline */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">3. Refund Processing Timeline</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Processing Times</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="font-medium">Credit Card</span>
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
                      <span className="font-medium">Digital Wallet</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">1-3 business days</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">What to Expect</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Email confirmation when return is approved</li>
                    <li>Refund processed to original payment method</li>
                    <li>Notification when refund is initiated</li>
                    <li>Access to services continues until refund is processed</li>
                    <li>Tracking number for refund status</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Special Circumstances */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">4. Special Circumstances</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Technical Issues</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    If you experience technical problems that prevent you from using our services, we may offer:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Extended return window (up to 30 days)</li>
                    <li>Service credits instead of refunds</li>
                    <li>Free technical support to resolve issues</li>
                    <li>Temporary account suspension without charges</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Subscription Cancellations</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    For ongoing subscriptions:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Cancel anytime before next billing cycle</li>
                    <li>Pro-rated refunds for unused time</li>
                    <li>Immediate cancellation with full refund (first 14 days)</li>
                    <li>Downgrade options to lower-tier plans</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Exceptional Cases</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    We may consider returns outside our standard policy for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Medical emergencies or hardships</li>
                    <li>Service outages lasting more than 24 hours</li>
                    <li>Billing errors or unauthorized charges</li>
                    <li>Account security breaches</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="card bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">Need to Request a Return?</h2>
              <p className="mb-6">
                Our support team is here to help you with your return request. We aim to make the process as smooth as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100 rounded-xl px-6 py-2 font-semibold">
                  Contact Support
                </a>
                <a href="mailto:returns@devtinder.com" className="btn btn-outline border-white text-white hover:bg-white hover:text-blue-600 rounded-xl px-6 py-2 font-semibold">
                  returns@devtinder.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnPolicy;