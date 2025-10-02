const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
            <span className="text-2xl">🚀</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            About DevTinder
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to revolutionize how developers connect, collaborate, and create amazing projects together.
            DevTinder is more than just a networking platform—it's a community where innovation thrives.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                To empower developers worldwide by creating meaningful connections that accelerate innovation,
                foster collaboration, and help bring groundbreaking ideas to life. We believe that the best
                projects are built when talented minds come together.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">👁️</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                To become the world's leading platform where developers discover their perfect collaboration partners,
                creating a global ecosystem of innovation where every great idea finds the right team to bring it to reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive suite of tools and features designed specifically for developer collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Smart Matching</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our AI-powered algorithm analyzes skills, interests, and project preferences to suggest the most compatible developers for your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Secure Messaging</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Real-time chat with code syntax highlighting, file sharing, and project planning tools to streamline your collaboration process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Developer Tools</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Integrated tools for project management, skill assessment, and portfolio showcasing to help you find and work with the right people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Born from the frustration of finding the right collaboration partners
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">The Problem We Solved</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              As developers ourselves, we experienced firsthand the challenge of finding the right people to collaborate with.
              Traditional networking platforms weren't built with developers in mind, and finding someone with complementary
              skills and shared interests was like finding a needle in a haystack.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              That's when we decided to build DevTinder—a platform specifically designed for developers, by developers.
              We wanted to create a space where technical skills, project interests, and collaboration styles could be
              matched intelligently, making it easier than ever to find your perfect development partner.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="card bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">2023</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Founded</div>
            </div>
            <div className="card bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Developers</div>
            </div>
            <div className="card bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-6 text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">50K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Connections</div>
            </div>
            <div className="card bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">1K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
            </div>
          </div>
        </div>
      </section>



      {/* Values Section */}
      <section className=" py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We believe the best solutions come from diverse minds working together.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We constantly push boundaries to create better ways for developers to connect.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Trust</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We prioritize security and privacy to create a safe space for collaboration.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Inclusivity</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We welcome developers from all backgrounds and experience levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Be part of the revolution in developer collaboration. Start connecting today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/login" className="btn bg-white text-purple-600 hover:bg-gray-100 rounded-xl px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              🚀 Get Started
            </a>
            <a href="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-600 rounded-xl px-8 py-3 text-lg font-semibold transition-all duration-200">
              💬 Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;