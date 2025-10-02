const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
            <span className="text-2xl">⚖️</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Disclaimer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Important legal disclaimers and limitations regarding the use of DevTinder services and platform.
          </p>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Last updated: November 2025
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="alert alert-warning mb-12">
          <span className="text-2xl">⚠️</span>
          <div>
            <h3 className="font-bold">Important Legal Notice</h3>
            <div className="text-sm">Please read this disclaimer carefully before using DevTinder services. By using our platform, you acknowledge and agree to these terms.</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* General Disclaimer */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">1. General Disclaimer</h2>

              <div className="space-y-6">
                <div className="prose max-w-none text-gray-600 dark:text-gray-300">
                  <p className="text-lg leading-relaxed">
                    DevTinder is a platform designed to connect developers and facilitate professional networking.
                    While we strive to provide a valuable service, we want to be transparent about the limitations
                    and responsibilities associated with using our platform.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700">
                    <div className="card-body">
                      <h3 className="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-300">What We Provide</h3>
                      <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                        <li>• A platform for developer networking</li>
                        <li>• Matching algorithms and tools</li>
                        <li>• Communication features</li>
                        <li>• Profile management system</li>
                        <li>• Community guidelines and moderation</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-700">
                    <div className="card-body">
                      <h3 className="text-lg font-semibold mb-3 text-orange-800 dark:text-orange-300">What We Don't Control</h3>
                      <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                        <li>• User behavior and interactions</li>
                        <li>• Quality of connections made</li>
                        <li>• Success of collaborations</li>
                        <li>• Third-party content or links</li>
                        <li>• External project outcomes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Limitations */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">2. Service Limitations</h2>

              <div className="space-y-6">
                <div className="alert alert-info">
                  <span>ℹ️ DevTinder is a networking platform, not a guarantee of professional success or collaboration outcomes.</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Matching and Connections</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Our matching algorithms are designed to suggest potentially compatible developers based on available data. However:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                      <li>We cannot guarantee the quality or compatibility of suggested matches</li>
                      <li>Algorithm results depend on user-provided information accuracy</li>
                      <li>Matching preferences may not always reflect real-world compatibility</li>
                      <li>Success of connections depends on individual user interactions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Professional Outcomes</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      While DevTinder facilitates connections, we do not guarantee:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                      <li>Successful project collaborations</li>
                      <li>Employment opportunities or job placements</li>
                      <li>Business partnerships or ventures</li>
                      <li>Skill development or learning outcomes</li>
                      <li>Financial gains or professional advancement</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Technical Limitations</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Our platform may experience:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                      <li>Temporary service interruptions or downtime</li>
                      <li>Feature limitations or bugs</li>
                      <li>Data synchronization delays</li>
                      <li>Performance variations based on usage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* No Warranties */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">3. No Warranties</h2>

              <div className="space-y-6">
                <div className="alert alert-warning">
                  <span>⚠️ DevTinder services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind.</span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Express Warranties</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      We explicitly disclaim all express warranties, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                      <li>Warranties of merchantability</li>
                      <li>Fitness for a particular purpose</li>
                      <li>Non-infringement of third-party rights</li>
                      <li>Accuracy or completeness of information</li>
                      <li>Uninterrupted or error-free service</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Implied Warranties</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      We also disclaim all implied warranties, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                      <li>Implied warranties arising from course of dealing</li>
                      <li>Usage of trade or course of performance</li>
                      <li>Quality, reliability, or availability</li>
                      <li>Security or privacy protection</li>
                      <li>Compatibility with user systems</li>
                    </ul>
                  </div>
                </div>

                <div className="card bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-700">
                  <div className="card-body">
                    <h3 className="text-lg font-semibold mb-3 text-red-800 dark:text-red-300">Important Note</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Some jurisdictions do not allow the exclusion of certain warranties. In such cases,
                      the above exclusions may not apply to you, and you may have additional rights under local law.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">4. Limitation of Liability</h2>

              <div className="space-y-6">
                <div className="alert alert-error">
                  <span>🚫 DevTinder's liability is limited to the maximum extent permitted by law.</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Exclusion of Damages</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Under no circumstances shall DevTinder be liable for:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                        <li>Indirect or consequential damages</li>
                        <li>Loss of profits or revenue</li>
                        <li>Loss of data or information</li>
                        <li>Business interruption</li>
                        <li>Loss of goodwill or reputation</li>
                      </ul>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                        <li>Punitive or exemplary damages</li>
                        <li>Third-party claims or actions</li>
                        <li>User-generated content issues</li>
                        <li>Security breaches by third parties</li>
                        <li>Failure to achieve expected results</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Maximum Liability Cap</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      In any event, DevTinder's total liability to you for all claims arising from or related to the service shall not exceed:
                    </p>
                    <div className="card bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700">
                      <div className="card-body">
                        <p className="text-center text-lg font-semibold text-blue-800 dark:text-blue-300">
                          The amount you paid to DevTinder in the 12 months preceding the claim, or $100, whichever is greater.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Third-Party Content and Actions</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      DevTinder is not responsible for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                      <li>Content, actions, or omissions of other users</li>
                      <li>Third-party websites, services, or applications</li>
                      <li>Disputes between users or with third parties</li>
                      <li>Accuracy of user-provided information</li>
                      <li>Outcomes of user interactions or collaborations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">5. User Responsibilities</h2>

              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  By using DevTinder, you acknowledge that you are responsible for:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Personal Conduct</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                      <li>Your interactions with other users</li>
                      <li>Compliance with community guidelines</li>
                      <li>Respectful and professional behavior</li>
                      <li>Accuracy of your profile information</li>
                      <li>Protecting your account credentials</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Legal Compliance</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                      <li>Compliance with applicable laws</li>
                      <li>Respecting intellectual property rights</li>
                      <li>Not engaging in fraudulent activities</li>
                      <li>Reporting inappropriate behavior</li>
                      <li>Understanding platform limitations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indemnification */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">6. Indemnification</h2>

              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  You agree to indemnify, defend, and hold harmless DevTinder and its affiliates from any claims,
                  damages, or expenses arising from:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Your use of the platform</li>
                    <li>Your violation of these terms</li>
                    <li>Your interactions with other users</li>
                    <li>Content you post or share</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                    <li>Your violation of third-party rights</li>
                    <li>Your negligent or wrongful conduct</li>
                    <li>Claims related to your projects</li>
                    <li>Disputes with other users</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="card bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">Questions About This Disclaimer?</h2>
              <p className="mb-6">
                If you have questions about this disclaimer or need clarification on any terms,
                please don't hesitate to contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="btn bg-white text-purple-600 hover:bg-gray-100 rounded-xl px-6 py-2 font-semibold">
                  Contact Us
                </a>
                <a href="mailto:legal@devtinder.com" className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-600 rounded-xl px-6 py-2 font-semibold">
                  legal@devtinder.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;