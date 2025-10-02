import axios from 'axios';
import { useState } from 'react';
import { BASE_URL } from '../utils/constant';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(`${BASE_URL}/contact/submit`, formData);

      if (response.data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          category: 'general'
        });
      } else {
        setSubmitStatus('error');
        console.error('Form submission failed:', response.data.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900">

      <section className="max-w-6xl mx-auto px-6 pt-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mb-6">
            <span className="text-2xl">📞</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions, feedback, or need support? We're here to help! Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send us a Message</h2>

              {submitStatus === 'success' && (
                <div className="alert alert-success mb-6">
                  <span>✅ Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-error mb-6">
                  <span>❌ Failed to send message. Please try again later.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="input input-bordered w-full focus:input-primary"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Email *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="input input-bordered w-full focus:input-primary"
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Category</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="select select-bordered w-full focus:select-primary"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="business">Business Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Subject *</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief description of your inquiry"
                    className="input input-bordered w-full focus:input-primary"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Message *</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    className="textarea textarea-bordered h-32 w-full focus:textarea-primary"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 w-full rounded-xl py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      📤 Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="card-body">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Get in Touch</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Choose the best way to reach us based on your needs. We're committed to providing excellent support to our developer community.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">Email</p>
                      <p className="text-blue-600 dark:text-blue-400">hello@devtinder.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white">💬</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">Live Chat</p>
                      <p className="text-gray-600 dark:text-gray-400">Available 24/7 in-app</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white">🐦</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">Social Media</p>
                      <p className="text-blue-600 dark:text-blue-400">@DevTinder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="card bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-xl">
              <div className="card-body">
                <h3 className="text-xl font-bold mb-4">Response Times</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>General Inquiries</span>
                    <span className="badge badge-outline border-white text-white">24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Technical Support</span>
                    <span className="badge badge-outline border-white text-white">12 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Critical Issues</span>
                    <span className="badge badge-outline border-white text-white">2 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Categories */}
      <section className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              How Can We Help?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Choose the right department for your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Technical Support</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Having trouble with the platform? Our technical team is here to help with bugs, login issues, and feature questions.
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">support@devtinder.com</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Business Partnerships</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Interested in partnering with us? Let's discuss collaboration opportunities, integrations, and business ventures.
                </p>
                <p className="text-purple-600 dark:text-purple-400 font-semibold">business@devtinder.com</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Feedback & Ideas</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Have suggestions for new features or improvements? We love hearing from our community about how to make DevTinder better.
                </p>
                <p className="text-green-600 dark:text-green-400 font-semibold">feedback@devtinder.com</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📰</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Press & Media</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Media inquiries, press releases, and interview requests. We're happy to share our story and insights.
                </p>
                <p className="text-orange-600 dark:text-orange-400 font-semibold">press@devtinder.com</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Education & Training</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Questions about using DevTinder effectively, best practices, or educational partnerships with institutions.
                </p>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold">education@devtinder.com</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Security & Privacy</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Report security vulnerabilities, privacy concerns, or questions about data handling and compliance.
                </p>
                <p className="text-pink-600 dark:text-pink-400 font-semibold">security@devtinder.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Quick answers to common questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="collapse collapse-plus bg-base-100 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold">
              How do I reset my password?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 dark:text-gray-400">
                Click on "Forgot Password" on the login page, enter your email, and follow the instructions sent to your inbox.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-100 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold">
              How does the matching algorithm work?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 dark:text-gray-400">
                Our AI analyzes your skills, interests, project preferences, and collaboration style to suggest compatible developers.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-100 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold">
              Is DevTinder free to use?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 dark:text-gray-400">
                Yes! DevTinder offers a free tier with core features. Premium plans are available for advanced features and enhanced matching.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-100 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold">
              How do I report inappropriate behavior?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 dark:text-gray-400">
                Use the report button on any profile or message, or contact our support team directly at support@devtinder.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;