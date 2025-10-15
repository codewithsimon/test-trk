import { Trophy, DollarSign, Calendar, Award } from 'lucide-react';

const Prizes = () => {
  const prizeCategories = [
    {
      place: '1st Place',
      amount: '$750',
      count: '4 Winners',
      description: 'One winner per track',
      icon: Trophy,
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      place: '2nd Place',
      amount: '$500',
      count: '4 Winners',
      description: 'One winner per track',
      icon: Award,
      gradient: 'from-gray-400 to-gray-500',
    },
  ];

  return (
    <section id="prizes" className="py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#14a19f] rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Prize Pool</h2>
          <div className="w-24 h-1 bg-[#14a19f] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compete for amazing prizes and recognition at BGI Hackathon
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-3 bg-gradient-to-br from-[#14a19f]/20 to-cyan-900/20 rounded-2xl p-8 border-2 border-[#14a19f] card-shadow hover:card-shadow-hover transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#14a19f] to-[#0d7775] rounded-full flex items-center justify-center shadow-lg">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">$5,000</h3>
                  <p className="text-gray-300">ASI:Cloud AI Inference Credit for Developers</p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-lg font-semibold text-[#14a19f]">Special Developer Bonus</p>
                <p className="text-sm text-gray-400">Build on cutting-edge infrastructure</p>
              </div>
            </div>
          </div>

          {prizeCategories.map((prize, index) => {
            const Icon = prize.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-8 border-2 border-gray-700 hover:border-[#14a19f] card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${prize.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#14a19f] transition-colors">
                    {prize.place}
                  </h3>
                  <p className="text-4xl font-bold text-[#14a19f] mb-3">{prize.amount}</p>
                  <p className="text-lg text-gray-300 font-semibold mb-2">{prize.count}</p>
                  <p className="text-sm text-gray-400">{prize.description}</p>
                </div>
              </div>
            );
          })}

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-8 border-2 border-gray-700 hover:border-[#14a19f] card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-all duration-300 group backdrop-blur-sm">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#14a19f] to-[#0d7775] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-[#14a19f] transition-colors">
                Total Winners
              </h3>
              <p className="text-4xl font-bold text-[#14a19f] mb-3">8</p>
              <p className="text-lg text-gray-300 font-semibold mb-2">2 per Track</p>
              <p className="text-sm text-gray-400">Across all four tracks</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-6 border border-gray-700 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#14a19f]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-[#14a19f]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Finalists Announced</h4>
                <p className="text-gray-300">October 23 during BGI25 Live from Istanbul Un Conference</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-6 border border-gray-700 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#14a19f]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-[#14a19f]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Winners Announced</h4>
                <p className="text-gray-300">October 25th</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
