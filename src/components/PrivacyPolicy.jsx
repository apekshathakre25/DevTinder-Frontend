const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900/20 dark:to-gray-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6">
            <span className="text-2xl">🔒</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your privacy is fundamental to us. This policy explains how we collect, use, protect, and respect your personal information.
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
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Privacy at a Glance</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white">🛡️</span>
                </div>
                <h3 className="font-semibold mb-2">Data Protection</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">We use industry-standard encryption and security measures</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white">👤</span>
                </div>
                <h3 className="font-semibold mb-2">Your Control</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">You have full control over your data and privacy settings</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white">🚫</span>
                </div>
                <h3 className="font-semibold mb-2">No Selling</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">We never sell your personal information to third parties</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Information We Collect */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">1. Information We Collect</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Account Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Name, email address, and profile information</li>
                    <li>Professional skills, experience, and interests</li>
                    <li>Profile photos and portfolio content</li>
                    <li>Account preferences and settings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Usage Data</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                    <li>How you interact with our platform and features</li>
                    <li>Pages visited, time spent, and click patterns</li>
                    <li>Device information and browser type</li>
                    <li>IP address and general location data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Communication Data</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Messages sent through our platform</li>
                    <li>Connection requests and responses</li>
                    <li>Support communications</li>
                    <li>Feedback and survey responses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">2. How We Use Your Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Core Services</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Matching you with compatible developers</li>
                    <li>Facilitating connections and communications</li>
                    <li>Personalizing your experience</li>
                    <li>Providing customer support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Platform Improvement</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Analyzing usage patterns and trends</li>
                    <li>Developing new features and services</li>
                    <li>Ensuring platform security and safety</li>
                    <li>Conducting research and analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">3. How We Share Information</h2>
              
              <div className="space-y-4">
                <div className="alert alert-info">
                  <span>🔒 We never sell your personal information to third parties.</span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">With Other Users</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Your profile information is visible to other users to facilitate connections. You control what information is displayed.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Service Providers</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    We may share data with trusted service providers who help us operate our platform, such as hosting, analytics, and customer support services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Legal Requirements</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    We may disclose information when required by law or to protect our rights, safety, or the safety of others.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">4. Your Privacy Rights</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Access & Control</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                      <li>View and download your data</li>
                      <li>Update your profile information</li>
                      <li>Adjust privacy settings</li>
                      <li>Control who can see your profile</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Data Management</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                      <li>Delete your account and data</li>
                      <li>Opt out of communications</li>
                      <li>Request data correction</li>
                      <li>Withdraw consent</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">5. Data Security</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white">🔐</span>
                  </div>
                  <h3 className="font-semibold mb-2">Encryption</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">All data is encrypted in transit and at rest</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white">🛡️</span>
                  </div>
                  <h3 className="font-semibold mb-2">Access Control</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Strict access controls and authentication</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white">🔍</span>
                  </div>
                  <h3 className="font-semibold mb-2">Monitoring</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Continuous security monitoring and auditing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Updates */}
          <div className="card bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="btn bg-white text-green-600 hover:bg-gray-100 rounded-xl px-6 py-2 font-semibold">
                  Contact Us
                </a>
                <a href="mailto:privacy@devtinder.com" className="btn btn-outline border-white text-white hover:bg-white hover:text-green-600 rounded-xl px-6 py-2 font-semibold">
                  privacy@devtinder.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;