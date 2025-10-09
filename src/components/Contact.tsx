import { useState } from 'react';
import { Mail, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-[#14a19f] rounded-full filter blur-[120px]"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-400">
            Have a question or want to partner with us? We'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-[#14a19f] mx-auto mt-4"></div>
        </div>

        {submitted && (
          <div className="mb-8 p-4 bg-[#14a19f]/20 border-2 border-[#14a19f] rounded-lg text-center">
            <p className="text-[#14a19f] font-semibold">
              Thank you for your message! We'll get back to you soon.
            </p>
          </div>
        )}

        <div className="bg-gradient-to-br from-gray-900/90 to-gray-950/90 rounded-xl p-8 border-2 border-gray-700 card-shadow backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/80 border-2 border-gray-700 rounded-lg focus:border-[#14a19f] focus:ring-2 focus:ring-[#14a19f]/20 focus:outline-none transition-all text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/80 border-2 border-gray-700 rounded-lg focus:border-[#14a19f] focus:ring-2 focus:ring-[#14a19f]/20 focus:outline-none transition-all text-white"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg focus:border-[#14a19f] focus:outline-none transition-colors text-white resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-[#14a19f] to-[#0d7775] text-white rounded-lg font-semibold hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(20,161,159,0.5)] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-400 mb-4">
              <Mail className="w-5 h-5 text-[#14a19f]" />
              <a
                href="mailto:hello@bgihackathon.com"
                className="hover:text-[#14a19f] transition-colors"
              >
                hello@bgihackathon.com
              </a>
            </div>

            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://discord.gg/bgihackathon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-[#14a19f] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Discord</span>
              </a>
              <a
                href="https://linkedin.com/company/bgihackathon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#14a19f] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/bgihackathon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#14a19f] transition-colors"
              >
                X/Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
