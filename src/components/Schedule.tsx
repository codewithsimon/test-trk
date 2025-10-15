import { Calendar, Users, Code, Trophy, Rocket, MessageCircle, Presentation } from 'lucide-react';

const Schedule = () => {
  const days = [
    {
      day: 'Oct 14',
      date: 'Tuesday',
      events: [
        { time: '4 hrs live (recorded)', title: 'Kickoff + Team Matching + Dev Stack Access Cudos Wada + BTC | $5000 In Compute', icon: Rocket,        description: '15:00- 17:00 CEST ' },
      ],
    },
    {
      day: 'Oct 15',
      date: 'Wednesday',
      events: [
        { time: '4 hrs live', title: 'Track Deep Dive Sessions w/ Mentors', icon: Users, description: 'Adamur Talk 25 Mins' },
      ],
    },
    {
      day: 'Oct 16',
      date: 'Thursday',
      events: [
        { time: 'Async + 2 hrs live', title: 'Build + Technical Q&A Office Hours', icon: Code, description: 'LatAm Community Lead for SingularityNET and the ASI Alliance, 15:00- 17:00  CEST' },
      ],
    },
    {
      day: 'Oct 17',
      date: 'Friday',
      events: [
        { time: '2 hrs live', title: 'Mid-week Feedback Roundtable', icon: MessageCircle, description: 'Luke Gniwecki -Head of Blockchain Al Compute Product  CUDOS (ASI Alliance)' },
      ],
    },
    {
      day: 'Oct 18',
      date: 'Saturday',
      events: [
        { time: '1 hr live', title: 'Community Updates + Hype Check-in', icon: Users, description: 'David Taylor - CMO ASI Alliance,25 Mins' },
      ],
    },
    {
      day: 'Oct 19',
      date: 'Sunday',
      events: [
        { time: '2–3 hrs live', title: 'Dry Run Pitches + Mentorship', icon: Presentation, description: 'Ibby Benali - Developer Relations & Ecosystem Marketing Lead at ASI Alliance, 25 Mins' },
      ],
    },
    {
      day: 'Oct 20',
      date: 'Monday',
      events: [
        { time: '2–3 hrs live', title: 'Dry Run Pitches + Mentorship', icon: Presentation, description: 'BTC Pitch Advice - Nefertity/Wada' },
      ],
    },
    {
      day: 'Oct 22',
      date: 'Wednesday',
      events: [
        { time: 'All day', title: 'Final Submission Deadline', icon: Trophy },
      ],
    },
    {
      day: 'Oct 23',
      date: 'Thursday',
      events: [
        { time: '2 hrs', title: 'Finals Presentation', icon: Presentation, description: 'Via Istanbul Zoom' },
      ],
    },
    {
      day: 'Oct 25',
      date: 'Saturday',
      events: [
        { time: '2 hrs', title: 'Winners Announced', icon: Trophy },
      ],
    },
  ];

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#14a19f] rounded-full filter blur-[120px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Hackathon Schedule</h2>
          <p className="text-xl text-gray-400">11 days of learning, building, and innovation
</p>
          <div className="w-24 h-1 bg-[#14a19f] mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {days.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-gradient-to-br from-gray-900/90 to-gray-950/90 rounded-xl p-6 border-2 border-gray-700 hover:border-[#14a19f] card-shadow hover:card-shadow-hover hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-gradient-to-br from-[#14a19f]/20 to-[#0d7775]/20 rounded-lg border border-[#14a19f]/30 mr-3">
                  <Calendar className="w-8 h-8 text-[#14a19f]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{day.day}</h3>
                  <p className="text-sm text-gray-400">{day.date}</p>
                </div>
              </div>

              <div className="space-y-4">
                {day.events.map((event, eventIndex) => {
                  const Icon = event.icon;
                  return (
                    <div key={eventIndex} className="flex items-start space-x-3">
                      <Icon className="w-5 h-5 text-[#14a19f] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-[#14a19f] font-semibold">{event.time}</p>
                        <p className="text-gray-300">{event.title}</p>
                        {event.description && (
                          <p className="text-xs text-gray-400 mt-1">{event.description}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
                {day.day === 'Oct 14' && (
                  <a
                    href="https://us06web.zoom.us/rec/share/sY-_H5Gn2MakH1-Jzs6FflLyP92gn71zRgq5lIGAl5SBpnbpOL9eip9k2SNVvk4_.CGZESAyqjbKexx3R"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block w-full px-4 py-2 bg-gradient-to-r from-[#14a19f] to-[#0d7775] text-white text-center rounded-lg font-semibold hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(20,161,159,0.5)] transition-all duration-300"
                  >
                    Watch the Recording
                  </a>
                )}
                {day.day === 'Oct 15' && (
                  <a
                    href="https://us06web.zoom.us/j/87260893791?pwd=v8AiM8yp1YeVSIusJutUbVGXsRLagL.1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block w-full px-4 py-2 bg-gradient-to-r from-[#14a19f] to-[#0d7775] text-white text-center rounded-lg font-semibold hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(20,161,159,0.5)] transition-all duration-300"
                  >
                    Join the Session
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
