import React from 'react';
import prpfilepic from "../assets/WhatsApp Image 2024-12-17 at 04.52.47_9033a615.jpg";

function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 text-gray-900 font-sans">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-6 md:py-8 shadow-md">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-snug">Vevakpor Godsanointed Oghenevwekparobo</h1>
          <p className="text-sm md:text-lg mt-2">Robotics Teacher | Programmer | Entrepreneur</p>
        </div>
      </header>

      {/* Profile Section */}
      <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-6 md:mt-8 mx-4 md:mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-32 h-32 md:w-9/12 md:h-36 bg-gray-200 rounded-full mb-4 md:mb-0 md:mr-8 overflow-hidden">
            <img src={prpfilepic} alt="Vevakpor Godsanointed" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
              I am a passionate programmer with 4 years of experience in web development and robotics. Proficient in HTML, CSS, Java, and JavaScript, I specialize in JavaScript frameworks like React and work extensively with POJO classes. Currently, I teach Robotics at RENL (Robocation Edu Nigeria Limited), a branch of REPL, one of the biggest tech education agencies in India.
            </p>
            <p className="mt-4 text-gray-700 text-sm md:text-lg leading-relaxed">
              I also run a small business, <strong>Walking Universe Enterprise</strong>, where I build websites for clients, helping businesses establish their online presence effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-blue-50 shadow-md rounded-lg p-6 md:p-8 mt-6 md:mt-8 mx-4 md:mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-800">Skills</h2>
        <ul className="list-disc pl-4 md:pl-6 text-sm md:text-lg text-gray-700">
          <li>HTML & CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Java Programming</li>
          <li>POJO Classes</li>
          <li>Robotics and coding</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-6 md:mt-8 mx-4 md:mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-800">Projects</h2>
        <p className="text-gray-700 text-sm md:text-lg">
          Below are some of the projects I have worked on. Click the links to view them:
        </p>
        <ul className="list-disc pl-4 md:pl-6 mt-4 text-sm md:text-lg text-blue-600 underline">
          <li><a href="https://cosmic-campus-qspj.vercel.app/" target="_blank" rel="noopener noreferrer">Cosmic Campus (My ongoing project)</a></li>
          <li><a href="https://primefxmargins.vercel.app/" target="_blank" rel="noopener noreferrer">PrimeFx</a></li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="bg-blue-50 shadow-md rounded-lg p-6 md:p-8 mt-6 md:mt-8 mx-4 md:mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-800">Education</h2>
        <p className="text-gray-700 text-sm md:text-lg">
          <strong>National Institute of Information Technology (NIIT)</strong>
          <br />
          MMS Program
        </p>
      </section>

      {/* Experience Section */}
      <section className="bg-white shadow-md rounded-lg p-6 md:p-8 mt-6 md:mt-8 mx-4 md:mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-800">Experience</h2>
        <div>
          <h3 className="font-semibold text-sm md:text-lg text-gray-900">Robotics Teacher</h3>
          <p className="text-gray-700 text-sm md:text-lg">
            <strong>RENL (Robocation Edu Nigeria Limited)</strong>
            <br />
            A branch of REPL, one of the biggest tech education agencies in India.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-6 md:mt-8 bg-blue-600 text-white py-4 md:py-6">
        <div className="text-center text-sm md:text-base">
          <p>&copy; {new Date().getFullYear()} Vevakpor Godsanointed Oghenevwekparobo. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ResumePage;
