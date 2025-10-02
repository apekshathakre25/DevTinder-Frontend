const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 animate-pulse">
            <span className="text-3xl">💝</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            DevTinder
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-medium mb-2">
            Where Developers Find Their Perfect Match
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect with like-minded developers, collaborate on exciting projects, and build meaningful professional relationships in the tech community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a href="/login" className="btn btn-primary rounded-xl px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              🚀 Get Started Free
            </a>
            <a href="/about" className="btn btn-outline rounded-xl px-8 py-3 text-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200">
              📖 Learn More
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10K+</div>
              <div className="text-gray-600 dark:text-gray-400">Active Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">50K+</div>
              <div className="text-gray-600 dark:text-gray-400">Connections Made</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">1K+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Started</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">95%</div>
              <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Why Choose DevTinder?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We've built the perfect platform for developers to connect, collaborate, and create amazing things together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-shadow duration-300">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="card-title justify-center text-xl mb-3">Smart Discovery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our intelligent matching algorithm connects you with developers who share your interests, skills, and project goals.
              </p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-shadow duration-300">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="card-title justify-center text-xl mb-3">Meaningful Connections</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Build lasting professional relationships with developers from around the world. Network, mentor, and grow together.
              </p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-shadow duration-300">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="card-title justify-center text-xl mb-3">Real-time Chat</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Seamless messaging system to discuss ideas, share code snippets, and plan your next big project together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Getting started is simple and takes just a few minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Showcase your skills, experience, and what you're looking for in a collaboration partner.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Discover & Connect</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Browse through developer profiles and send connection requests to those who interest you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaborate & Build</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Start chatting, share ideas, and begin working on amazing projects together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            What Developers Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join thousands of developers who have found their perfect collaboration partners
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Sarah Chen</h4>
                  <p className="text-sm text-gray-500">Full-Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                "DevTinder helped me find an amazing co-founder for my startup. The matching algorithm is spot-on!"
              </p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Mike Rodriguez</h4>
                  <p className="text-sm text-gray-500">Backend Engineer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                "I've connected with so many talented developers here. It's like LinkedIn but specifically for finding project partners."
              </p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Alex Kumar</h4>
                  <p className="text-sm text-gray-500">Frontend Developer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                "The real-time chat feature makes collaboration so smooth. We built our app in record time!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Dev Match?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of developers who are already building amazing things together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/login" className="btn bg-white text-purple-600 hover:bg-gray-100 rounded-xl px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              🚀 Start Connecting Now
            </a>
            <a href="/about" className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-600 rounded-xl px-8 py-3 text-lg font-semibold transition-all duration-200">
              📚 Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;