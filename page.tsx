import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-lg border-4 border-border">
              <img
                src="/profile-image.jpg"
                alt="Shraddha Borah"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
            Shraddha Borah
          </h1>
          <p className="text-xl text-white opacity-90">
            Software Engineer & NLP Enthusiast
          </p>
        </div>

        {/* About Section */}
        <section className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white/90 leading-relaxed">
            Welcome to my corner of the web! I'm passionate about Natural Language Processing
            and creating impactful software solutions. With a background in [Your Background],
            I bring creativity and technical expertise to every project.
          </p>
        </section>

        {/* Projects Section */}
        <section className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card */}
            <div className="bg-white/20 rounded-lg p-6 hover:bg-white/30 transition">
              <h3 className="text-xl font-bold text-white mb-2">Project Name</h3>
              <p className="text-white/80">
                Brief description of the project and your role in it.
              </p>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/yourusername" className="text-white hover:text-white/80 transition">
              <FaGithub className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/yourusername" className="text-white hover:text-white/80 transition">
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a href="mailto:your.email@example.com" className="text-white hover:text-white/80 transition">
              <FaEnvelope className="w-8 h-8" />
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
