import { useState } from 'react';
import { UserPlus, CheckCircle } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Student',
    github: '',
    teamName: '',
    idea: '',
    tshirtSize: 'M',
    acceptTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      role: 'Student',
      github: '',
      teamName: '',
      idea: '',
      tshirtSize: 'M',
      acceptTerms: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  if (submitted) {
    return (
      <section id="register" className="py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-black relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#14a19f] rounded-full filter blur-[150px]"></div>
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl p-12 border-2 border-[#14a19f] glow-border backdrop-blur-sm">
            <CheckCircle className="w-20 h-20 text-[#14a19f] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Thank you for registering!</h2>
            <p className="text-xl text-gray-400 mb-6">
              Check your inbox for confirmation and next steps.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 bg-[#14a19f] text-white rounded-lg font-semibold hover:glow-border transition-all duration-300"
            >
              Register Another Person
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-black relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#14a19f] rounded-full filter blur-[120px]"></div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-br from-[#14a19f]/20 to-[#0d7775]/20 rounded-2xl border border-[#14a19f]/30 shadow-[0_0_30px_rgba(20,161,159,0.3)]">
              <UserPlus className="w-12 h-12 text-[#14a19f]" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Register for BGI Hackathon 2025</h2>
          <p className="text-xl text-gray-400">Secure your spot to build the next big thing</p>
          <div className="w-24 h-1 bg-[#14a19f] mx-auto mt-4"></div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-xl p-8 border-2 border-gray-700 card-shadow backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/80 border-2 border-gray-700 rounded-lg focus:border-[#14a19f] focus:ring-2 focus:ring-[#14a19f]/20 focus:outline-none transition-all text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/80 border-2 border-gray-700 rounded-lg focus:border-[#14a19f] focus:ring-2 focus:ring-[#14a19f]/20 focus:outline-none transition-all text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="role" className="block text-sm font-medium mb-2">
                  Role *
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/80 border-2 border-gray-700 rounded-lg focus:border-[#14a19f] focus:ring-2 focus:ring-[#14a19f]/20 focus:outline-none transition-all text-white"
                >
                  <option value="Student">Student</option>
                  <option value="Professional">Professional</option>
                </select>
              </div>

              <div>
                <label htmlFor="github" className="block text-sm font-medium mb-2">
                  GitHub or LinkedIn *
                </label>
                <input
                  type="url"
                  id="github"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/80 border-2 border-gray-700 rounded-lg focus:border-[#14a19f] focus:ring-2 focus:ring-[#14a19f]/20 focus:outline-none transition-all text-white"
                  placeholder="https://github.com/johndoe"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="teamName" className="block text-sm font-medium mb-2">
                  Team Name (Optional)
                </label>
                <input
                  type="text"
                  id="teamName"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/80 border-2 border-gray-700 rounded-lg focus:border-[#14a19f] focus:ring-2 focus:ring-[#14a19f]/20 focus:outline-none transition-all text-white"
                  placeholder="Team Innovators"
                />
              </div>

              <div>
                <label htmlFor="tshirtSize" className="block text-sm font-medium mb-2">
                  T-Shirt Size *
                </label>
                <select
                  id="tshirtSize"
                  name="tshirtSize"
                  value={formData.tshirtSize}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/80 border-2 border-gray-700 rounded-lg focus:border-[#14a19f] focus:ring-2 focus:ring-[#14a19f]/20 focus:outline-none transition-all text-white"
                >
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="idea" className="block text-sm font-medium mb-2">
                Project Idea (Short Description) *
              </label>
              <textarea
                id="idea"
                name="idea"
                value={formData.idea}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg focus:border-[#14a19f] focus:outline-none transition-colors text-white resize-none"
                placeholder="Briefly describe what you'd like to build..."
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 text-[#14a19f] bg-gray-900 border-gray-700 rounded focus:ring-[#14a19f] focus:ring-2"
              />
              <label htmlFor="acceptTerms" className="ml-3 text-sm text-gray-400">
                I accept the terms and conditions and agree to follow the code of conduct *
              </label>
            </div>

            <button
              type="submit"
              disabled={!formData.acceptTerms}
              className="w-full px-8 py-4 bg-gradient-to-r from-[#14a19f] to-[#0d7775] text-white rounded-lg font-semibold hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(20,161,159,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <UserPlus className="w-5 h-5" />
              <span>Submit Registration</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
