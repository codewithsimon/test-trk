import { BookOpen, ExternalLink, ArrowLeft, Gift, Code, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const HackPackPage = () => {
  const videoTutorials = [
    {
      title: 'Tutorial 01: An Introduction to Agents',
      videoId: 'P69TLQ-K3mk',
    },
    {
      title: 'Tutorial 02: On Interval',
      videoId: 'NzFoO3Tei74',
    },
    {
      title: 'Tutorial 03: On Event',
      videoId: 'lyp00lzKQZQ',
    },
    {
      title: 'Tutorial 04: Agent Messages',
      videoId: 'e_x-rItb4sk',
    },
  ];

  const documentationLinks = [
    {
      title: 'MeTTa Language',
      url: 'https://metta-lang.dev/',
      description: 'Explore MeTTa, a powerful meta-language for AI and knowledge representation. Learn how to build intelligent systems using this innovative programming paradigm designed for symbolic reasoning and neural-symbolic integration.',
      icon: '🧠',
    },
    {
      title: 'Agentverse Documentation',
      url: 'https://docs.agentverse.ai/home',
      description: 'Discover Agentverse, the platform for building and deploying autonomous AI agents. Access comprehensive guides on agent creation, communication protocols, and decentralized agent networks.',
      icon: '🤖',
    },
    {
      title: 'ASI Alliance Documentation',
      url: 'https://docs.asi1.ai/documentation/getting-started/overview',
      description: 'Get started with the ASI Alliance ecosystem. Learn about the foundational technologies powering artificial superintelligence, including APIs, SDKs, and integration guides for building next-generation AI applications.',
      icon: '🌐',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/"
            className="inline-flex items-center text-[#14a19f] hover:text-[#0d7775] transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hack Pack</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Your complete resource hub for the hackathon. Everything you need to build amazing projects.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Gift className="w-8 h-8 text-[#14a19f] mr-3" />
            <h2 className="text-3xl font-bold">Free Credits</h2>
          </div>

          <div className="p-8 bg-gradient-to-br from-[#14a19f]/10 to-[#0d7775]/10 border-2 border-[#14a19f]/30 rounded-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#14a19f] to-[#0d7775] rounded-full flex items-center justify-center text-3xl font-bold">
                  $20
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">ASI:Cloud AI Inference Credits</h3>
                <p className="text-gray-300 mb-6">
                  Every hackathon participant receives <span className="text-[#14a19f] font-semibold">$20 worth of AI inference credits</span> on ASI:Cloud.
                  Use these credits to power your projects with cutting-edge AI models, run experiments, and bring your ideas to life without worrying about costs.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#14a19f] to-[#0d7775] text-white font-semibold rounded-lg hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(20,161,159,0.5)] transition-all duration-300 group"
                >
                  Claim Your Credits
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-sm text-gray-400 mt-3">Form link will be available soon</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Build and Launch AI Agents on Agentverse</h2>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <img
              src="/image copy copy copy copy copy copy copy copy.png"
              alt="Build and Launch AI Agents on Agentverse - Workflow Diagram"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Tool Stack</h2>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <img
              src="/image copy copy copy copy copy copy copy copy copy.png"
              alt="Tool Stack - Build, Connect, Deploy, Test, Discover"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Code className="w-8 h-8 text-[#14a19f] mr-3" />
            <h2 className="text-3xl font-bold">Quick Start Example</h2>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              This file can be run on any platform supporting Python, with the necessary install permissions. This example shows two agents communicating with each other using the uAgent python library.
            </p>
            <a
              href="https://innovationlab.fetch.ai/resources/docs/agent-communication/uagent-uagent-communication?_gl=1*1hqw5yk*_ga*MzU4ODA3Mjk2LjE3NTk4MTY1MzU.*_ga_0C55J9N0FX*czE3NjA1OTA4MzIkbzQkZzEkdDE3NjA1OTEyNjgkajQ3JGwwJGgw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#14a19f] hover:text-[#0d7775] transition-colors text-sm font-medium mb-6"
            >
              Read the guide for this code here
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>

            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm text-gray-300 font-mono">
                <code>{`from uagents import Agent, Bureau, Context, Model
class Message(Model):
    message: str

sigmar = Agent(name="sigmar", seed="sigmar recovery phrase")
slaanesh = Agent(name="slaanesh", seed="slaanesh recovery phrase")

@sigmar.on_interval(period=3.0)
async def send_message(ctx: Context):
   await ctx.send(slaanesh.address, Message(message="hello there slaanesh"))

@sigmar.on_message(model=Message)
async def sigmar_message_handler(ctx: Context, sender: str, msg: Message):
    ctx.logger.info(f"Received message from {sender}: {msg.message}")

@slaanesh.on_message(model=Message)
async def slaanesh_message_handler(ctx: Context, sender: str, msg: Message):
    ctx.logger.info(f"Received message from {sender}: {msg.message}")
    await ctx.send(sigmar.address, Message(message="hello there sigmar"))

bureau = Bureau()
bureau.add(sigmar)
bureau.add(slaanesh)
if __name__ == "__main__":
    bureau.run()`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Video className="w-8 h-8 text-[#14a19f] mr-3" />
            <h2 className="text-3xl font-bold">Video Guides</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {videoTutorials.map((video, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-4">{video.title}</h3>
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Video className="w-8 h-8 text-[#14a19f] mr-3" />
            <h2 className="text-3xl font-bold">MeTTa Tutorial by Beyond the Code</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-4">MeTTa LANGUAGE - Get Started</h3>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/Hp28F9gL2Cc"
                  title="MeTTa LANGUAGE - Get Started"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-4">MeTTa LANGUAGE - Knowledge Representation + Function Definition</h3>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/NhJtiqQxAA8"
                  title="MeTTa LANGUAGE - Knowledge Representation + Function Definition"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-4">MeTTa LANGUAGE - Python Integration</h3>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/fZPVlJD-9X4"
                  title="MeTTa LANGUAGE - Python Integration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-4">MeTTa Working With Spaces + Control Flow</h3>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/_j5MtFRmYAc"
                  title="MeTTa Working With Spaces + Control Flow"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-4">MeTTa Console Output + Debugging</h3>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/3zBF8s--9kQ"
                  title="MeTTa Console Output + Debugging"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="w-8 h-8 text-[#14a19f] mr-3" />
            <h2 className="text-3xl font-bold">Documentation</h2>
          </div>

          <div className="grid gap-6">
            {documentationLinks.map((doc, index) => (
              <a
                key={index}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-[#14a19f]/50 hover:bg-gray-800 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="text-3xl mr-3">{doc.icon}</span>
                      <h3 className="text-xl font-semibold text-white group-hover:text-[#14a19f] transition-colors">
                        {doc.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 mb-3">{doc.description}</p>
                    <div className="flex items-center text-[#14a19f] text-sm font-medium">
                      Visit Documentation
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HackPackPage;
