import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquare,
  Send,
  Building2,
  Info,
  Users,
  ShieldCheck,
  Settings2,
} from "lucide-react";
const faqs = [
  {
    q: "What makes ACS different from other consultancies?",
    a: "ACS provides tailored, AI-driven solutions with a focus on innovation, security, and measurable results.",
  },
  {
    q: "How secure are my conversations with ACS?",
    a: "All communications are encrypted and handled with strict confidentiality.",
  },
  {
    q: "Can I personalize my ACS experience?",
    a: "Absolutely! We offer customizable solutions to fit your unique business needs.",
  },
  {
    q: "What group features does ACS offer?",
    a: "We support collaborative tools, team dashboards, and integrated project management.",
  },
];

const Contact = () => {
  return (
    <div className="relative min-h-screen  font-primary  pt-24 pb-12 overflow-x-hidden">
      {/* Animated Gradient BG for Form */}
      <div className="pointer-events-none fixed top-0 left-0 w-full h-[600px] z-0">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[700px] rounded-full  blur-3xl animate-pulse-slow" />
      </div>

      {/* Top Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 flex items-center gap-3 text-gray-900">
            <Mail className="text-purple-600 w-9 h-9" /> Contact Us
          </h1>
          <p className="text-gray-700 mb-8 text-lg">
            Email, call, or complete the form to learn how{" "}
            <span className="font-semibold text-purple-700">ACS</span> can solve
            your business challenges.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-gray-800 text-lg">
              <Mail className="w-5 h-5 text-purple-500" />
              <span>info@acs.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-800 text-lg">
              <Phone className="w-5 h-5 text-purple-500" />
              <span>+91 82205 63218</span>
            </div>
            <div className="flex items-center gap-3 text-gray-800 text-lg">
              <MapPin className="w-5 h-5 text-purple-500" />
              <span>
                Kondampatti (Post), Vadasithur (Via), Kinathukadavu,
                <br />
                Coimbatore - 641 202, Tamil Nadu, India
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-base">
            <div>
              <div className="font-semibold mb-1 flex items-center gap-1">
                <Info className="w-4 h-4 text-purple-400" /> Customer Support
              </div>
              <p className="text-gray-600 text-sm">
                24/7 support via email, chat, and phone for all your queries.
              </p>
            </div>
            <div>
              <div className="font-semibold mb-1 flex items-center gap-1">
                <Users className="w-4 h-4 text-purple-400 text-nowrap" />{" "}
                Feedback
              </div>
              <p className="text-gray-600 text-sm">
                Your feedback helps us improve
              </p>
            </div>
            <div>
              <div className="font-semibold mb-1 flex items-center gap-1">
                <Building2 className="w-4 h-4 text-purple-400" /> Media
                Inquiries
              </div>
              <p className="text-gray-600">
                For press or media, email:{" "}
                <span className="underline">media@acs.com</span>
              </p>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/30 via-white/40 to-blue-300/30 rounded-3xl blur-2xl opacity-80 pointer-events-none" />
          <form
            className="relative z-10 w-full max-w-md bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border border-white/40 ring-1 ring-purple-100"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900">
              <MessageSquare className="w-6 h-6 text-purple-600" /> Get in Touch
            </h2>
            <div className="mb-4 flex gap-3">
              <div className="flex-1 relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-purple-400" />
                <input
                  type="text"
                  placeholder="First name"
                  className="pl-10 pr-3 py-2 rounded-lg bg-white/80 border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-purple-200"
                  required
                />
              </div>
              <div className="flex-1 relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-purple-400" />
                <input
                  type="text"
                  placeholder="Last name"
                  className="pl-10 pr-3 py-2 rounded-lg bg-white/80 border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-purple-200"
                  required
                />
              </div>
            </div>
            <div className="mb-4 relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-purple-400" />
              <input
                type="email"
                placeholder="Your email"
                className="pl-10 pr-3 py-2 rounded-lg bg-white/80 border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-purple-200"
                required
              />
            </div>
            <div className="mb-4 relative">
              <Phone className="absolute left-3 top-3 w-4 h-4 text-purple-400" />
              <input
                type="tel"
                placeholder="Phone number"
                className="pl-10 pr-3 py-2 rounded-lg bg-white/80 border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
            </div>
            <div className="mb-6 relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-purple-400" />
              <textarea
                placeholder="How can we help?"
                className="pl-10 pr-3 py-2 rounded-lg bg-white/80 border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-purple-200 resize-none"
                rows={3}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-xl bg-gradient-to-r from-purple-500 via-blue-400 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 shadow-2xl hover:scale-105 transition
    border-b-4 border-purple-800 active:translate-y-1 active:shadow-lg
    relative overflow-hidden"
              style={{
                boxShadow:
                  "0 8px 24px 0 rgba(80, 0, 120, 0.18), 0 1.5px 0 0 #6d28d9",
              }}
            >
              <span className="drop-shadow-[0_2px_2px_rgba(80,0,120,0.15)] flex items-center gap-2">
                <Send className="w-5 h-5" /> Submit
              </span>
            </button>
            <p className="text-xs text-gray-500 mt-3 text-center">
              By submitting, you agree to our{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>

      {/* Map & Location */}
      <div className="max-w-7xl mx-auto px-4 mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white/70 backdrop-blur-xl">
          <iframe
            title="Sri Eshwar College of Engineering Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.042307948403!2d77.0579419!3d10.827908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba84ee37569ae7f%3A0x3c5b1824b6e79192!2sSri%20Eshwar%20College%20of%20Engineering%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            className="w-full h-64 md:h-80"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-purple-700 mb-2">
            Our Location
          </h3>
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            Connecting Near and Far
          </h2>
          <div className="flex items-start gap-3 mb-2">
            <MapPin className="w-5 h-5 text-purple-500 mt-1" />
            <div>
              <div className="font-semibold">Headquarters</div>
              <div className="text-gray-700">
                Sri Eshwar College of Engineering
                <br />
                Kondampatti (Post), Vadasithur (Via), Kinathukadavu,
                <br />
                Coimbatore - 641 202, Tamil Nadu, India
              </div>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/Sri+Eshwar+College+of+Engineering,+Coimbatore/@10.827908,77.0579419,814m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba84ee37569ae7f:0x3c5b1824b6e79192!8m2!3d10.827908!4d77.0605168!16s%2Fg%2F1tdyp6pq?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-400 text-white font-semibold shadow hover:scale-105 transition"
          >
            Open in Google Maps
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-gray-900">
            <Info className="w-7 h-7 text-purple-600" /> FAQ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* FAQ Accordion */}
            <div>
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="mb-4 group rounded-lg border border-gray-200 bg-white/60 shadow transition-all"
                >
                  <summary className="cursor-pointer font-semibold text-lg flex items-center gap-2 text-gray-800 group-open:text-purple-600 px-4 py-3 rounded-lg transition">
                    <Settings2 className="w-5 h-5 text-purple-400" />
                    {faq.q}
                  </summary>
                  <div className="pl-10 pr-4 pb-4 mt-2 text-gray-600">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
            {/* Ask a Question */}
            <form
              className="bg-gradient-to-br from-purple-100/60 via-white/60 to-blue-100/60 rounded-2xl p-6 shadow-lg border border-white/40 backdrop-blur-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-500" /> Do you
                have any questions for us?
              </h3>
              <p className="text-gray-600 mb-3 text-sm">
                If there are questions you want to ask, we will answer all your
                questions.
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Enter your question"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-400 text-white font-semibold flex items-center gap-1 shadow hover:scale-105 transition"
                >
                  <Send className="w-4 h-4" /> Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Animated gradient pulse keyframes */}
      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 8s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
