import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who can participate?',
      answer: 'Anyone passionate about technology can participate! Whether you\'re a student, professional developer, designer, or entrepreneur, BGI Hackathon welcomes all skill levels and backgrounds.',
    },
    {
      question: 'Is it online or in-person?',
      answer: 'BGI Hackathon 2025 is a hybrid event. You can participate either in-person at our main venue or join virtually from anywhere in the world.',
    },
    {
      question: 'Are there prizes?',
      answer: 'Yes! We offer cash prizes, cloud credits, mentorship opportunities, and exclusive swag for winning teams. Prizes will be awarded across multiple categories and tracks.',
    },
    {
      question: 'How do I register?',
      answer: 'Simply scroll down to the registration section below and fill out the form. Registration is free and takes just a few minutes!',
    },
    {
      question: 'Can I participate solo?',
      answer: 'Absolutely! You can participate solo or form a team of up to 4 members. We also have team formation sessions on Day 1 if you\'re looking for teammates.',
    },
    {
      question: 'What are the project submission rules?',
      answer: 'Projects must be original work created during the hackathon period. You can use existing libraries and frameworks, but the core idea and implementation should be new. Full guidelines will be shared after registration.',
    },
    {
      question: 'Do I need to be experienced in coding?',
      answer: 'Not necessarily! While coding experience is helpful, we welcome designers, product managers, and other non-technical roles. Diverse teams often create the best solutions.',
    },
    {
      question: 'Will there be mentors available?',
      answer: 'Yes! Industry experts and mentors will be available throughout the event to help with technical challenges, provide guidance, and answer questions.',
    },
    {
      question: 'What should I bring?',
      answer: 'Bring your laptop, chargers, and enthusiasm! For in-person participants, we\'ll provide meals, snacks, and WiFi. Virtual participants just need a stable internet connection.',
    },
    {
      question: 'Is there a code of conduct?',
      answer: 'Yes, all participants must follow our code of conduct which promotes respect, inclusivity, and collaboration. Details will be shared upon registration.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[120px]"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-[#14a19f] mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl border-2 border-gray-700 overflow-hidden hover:border-[#14a19f] card-shadow hover:card-shadow-hover transition-all duration-300 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-[#14a19f]/10 hover:to-transparent transition-colors"
              >
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#14a19f] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#14a19f] flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
