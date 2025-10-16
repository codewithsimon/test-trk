import { Package, ArrowRight } from 'lucide-react';

const HackPack = () => {
  return (
    <section id="hackpack" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#14a19f] rounded-full filter blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-br from-[#14a19f]/20 to-[#0d7775]/20 rounded-2xl border-2 border-[#14a19f]/30">
            <Package className="w-16 h-16 text-[#14a19f]" />
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Hack Pack</h2>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get access to all the resources, tools, and documentation you need to build your project.
          Everything you need to succeed in this hackathon, all in one place.
        </p>

        <a
          href="/hackpack"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#14a19f] to-[#0d7775] text-white text-lg font-semibold rounded-lg hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(20,161,159,0.5)] transition-all duration-300 group"
        >
          Access Hack Pack
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold text-[#14a19f] mb-2">Documentation</h3>
            <p className="text-sm text-gray-400">Complete guides and API references</p>
          </div>

          <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold text-[#14a19f] mb-2">Code Samples</h3>
            <p className="text-sm text-gray-400">Starter templates and examples</p>
          </div>

          <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-lg font-semibold text-[#14a19f] mb-2">Tools & Assets</h3>
            <p className="text-sm text-gray-400">Dev tools and design resources</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackPack;
