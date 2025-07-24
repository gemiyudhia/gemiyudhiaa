import { stats, approaches } from "@/data/personal-info";

export function AboutSection() {
  const statsData = [
    {
      number: stats.projects,
      label: "Projects",
      color: "text-blue-400",
      borderColor: "hover:border-blue-400/50",
    },
    {
      number: stats.experience,
      label: "Years Exp",
      color: "text-purple-400",
      borderColor: "hover:border-purple-400/50",
    },
    {
      number: stats.clients,
      label: "Happy Clients",
      color: "text-pink-400",
      borderColor: "hover:border-pink-400/50",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Saya adalah seorang{" "}
                <span className="text-blue-400 font-semibold">
                  Full Stack Developer
                </span>{" "}
                dengan pengalaman 3+ tahun dalam mengembangkan aplikasi web
                modern. Saya memiliki passion yang kuat dalam teknologi dan
                selalu berusaha untuk terus belajar dan berkembang.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Keahlian saya meliputi pengembangan frontend dengan
                React/Next.js, backend dengan Node.js, dan database management.
                Saya juga memiliki pengalaman dalam{" "}
                <span className="text-purple-400 font-semibold">
                  UI/UX design
                </span>{" "}
                dan project management.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Saya percaya bahwa teknologi terbaik adalah yang dapat
                memberikan solusi nyata untuk masalah sehari-hari. Oleh karena
                itu, saya selalu fokus pada{" "}
                <span className="text-pink-400 font-semibold">
                  user experience
                </span>{" "}
                dan kualitas kode yang maintainable.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 py-8">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 ${stat.borderColor} transition-all duration-300`}
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
              <h4 className="text-xl font-semibold mb-6 text-center">
                My Approach
              </h4>
              <div className="space-y-6">
                {approaches.map((approach, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`w-3 h-3 ${approach.dotColor} rounded-full mt-2 flex-shrink-0`}
                    ></div>
                    <div>
                      <h5 className={`${approach.color} font-semibold mb-2`}>
                        {approach.title}
                      </h5>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {approach.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
