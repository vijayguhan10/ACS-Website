import AnimatedPipelineFlow from "./AnimatedPipelineFlow";
import smallscreenvideo from "../assets/small-screen.mp4";
const stats = [
  { value: "50+", label: "ERP Projects Delivered" },
  { value: "10+", label: "Industries Served" },
  { value: "99.9%", label: "Uptime & Reliability" },
  { value: "100%", label: "Client Satisfaction" },
];

const HandwrittenHeading = () => (
  <div className="text-center flex flex-col items-center">
    <h2
      style={{
        fontFamily: "'Caveat', cursive",
        fontSize: "2.2rem",
        fontWeight: 700,
        color: "#1a202c",
        lineHeight: 1.2,
        position: "relative",
        display: "inline-block",
        marginBottom: "0.5em",
      }}
    >
      <span>
        Tout votre business sur{" "}
        <span
          style={{
            background: "#fbbf24",
            borderRadius: "0.5em 0.2em 0.5em 0.2em",
            padding: "0.1em 0.3em",
            boxDecorationBreak: "clone",
            color: "#1a202c",
            display: "inline-block",
            marginLeft: "0.2em",
          }}
        >
          une plateforme.
        </span>
      </span>
      <br />
      <span
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: "1.5rem",
          color: "#1a202c",
          fontWeight: 500,
          position: "relative",
          display: "inline-block",
          marginTop: "0.5em",
          textAlign: "center",
        }}
      >
        Simple, efficace, et abordable!
        <span
          style={{
            position: "absolute",
            left: 0,
            bottom: -8,
            width: "100%",
            height: "8px",
            background: "#0ea5e9",
            borderRadius: "4px",
            zIndex: -1,
            opacity: 0.7,
          }}
        />
      </span>
    </h2>
  </div>
);

const HomePage = () => (
  <div className="-top-10 xl:-top-28 bg-transparent relative overflow-hidden">
    {/* Decorative SVGs - now responsive for mobile */}
    <div className="absolute top-10 left-4 z-0 w-16 h-16 sm:w-[90px] sm:h-[90px]">
      <svg width="100%" height="100%" viewBox="0 0 60 60" fill="none">
        <polygon
          points="30,5 55,20 55,50 30,65 5,50 5,20"
          stroke="#b39ddb"
          strokeWidth="3"
          fill="#f4eaff"
          opacity="0.7"
        />
        <polygon
          points="30,5 55,20 30,35 5,20"
          fill="#b39ddb"
          stroke="#7c4dff"
          strokeWidth="2"
          opacity="0.5"
        />
      </svg>
    </div>
    <div className="absolute top-10 right-4 z-0 w-14 h-14 sm:w-[70px] sm:h-[70px]">
      <svg width="100%" height="100%" viewBox="0 0 60 60" fill="none">
        <circle cx="40" cy="20" r="14" fill="#7c4dff" opacity="0.18" />
        <circle cx="20" cy="40" r="10" fill="#b39ddb" opacity="0.12" />
      </svg>
    </div>
    <div className="hidden md:block">
      <div className="absolute bottom-4 left-4 z-0 w-20 h-20 sm:w-[80px] sm:h-[80px]">
        <svg width="100%" height="100%" viewBox="0 0 80 80" fill="none">
          <rect
            x="10"
            y="10"
            width="60"
            height="60"
            rx="18"
            fill="#f4eaff"
            stroke="#b39ddb"
            strokeWidth="2"
            opacity="0.4"
          />
        </svg>
      </div>

      <div className="absolute bottom-4 right-4 z-0 w-24 h-14 sm:w-[100px] sm:h-[60px]">
        <svg width="100%" height="100%" viewBox="0 0 100 60" fill="none">
          <ellipse
            cx="80"
            cy="40"
            rx="18"
            ry="10"
            fill="#b39ddb"
            opacity="0.18"
          />
          <ellipse
            cx="30"
            cy="20"
            rx="10"
            ry="6"
            fill="#7c4dff"
            opacity="0.12"
          />
        </svg>
      </div>
      <div className="absolute top-16 left-2 z-0 w-16 h-10 sm:w-[60px] sm:h-[40px]">
        <svg width="100%" height="100%" viewBox="0 0 60 40" fill="none">
          <circle cx="20" cy="20" r="12" fill="#7c4dff" />
          <path
            d="M0 20 Q10 10 20 20 Q30 30 40 20 Q50 10 60 20"
            stroke="#b39ddb"
            strokeWidth="3"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>
      <div className="absolute top-4 right-2 z-0 w-16 h-10 sm:w-[60px] sm:h-[40px]">
        <svg width="100%" height="100%" viewBox="0 0 60 40" fill="none">
          <path
            d="M30 0 A30 30 0 0 1 60 30"
            stroke="#7c4dff"
            strokeWidth="6"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>
      <div className="absolute left-8 bottom-12 z-0 w-16 h-16 sm:w-[60px] sm:h-[60px]">
        <svg width="100%" height="100%" viewBox="0 0 60 60" fill="none">
          <polygon
            points="30,5 55,20 55,50 30,65 5,50 5,20"
            stroke="#b39ddb"
            strokeWidth="3"
            fill="#fffbe7"
            opacity="0.7"
          />
          <polygon
            points="30,5 55,20 30,35 5,20"
            fill="#fde047"
            stroke="#b39ddb"
            strokeWidth="2"
            opacity="0.6"
          />
        </svg>
      </div>
      <div className="absolute right-4 bottom-12 z-0 w-20 h-10 sm:w-[80px] sm:h-[40px]">
        <svg width="100%" height="100%" viewBox="0 0 80 40" fill="none">
          <ellipse
            cx="70"
            cy="20"
            rx="10"
            ry="10"
            fill="#22c55e"
            stroke="#b39ddb"
            strokeWidth="3"
            opacity="0.18"
          />
          <line
            x1="10"
            y1="10"
            x2="70"
            y2="20"
            stroke="#b39ddb"
            strokeWidth="3"
            opacity="0.18"
          />
          <line
            x1="10"
            y1="30"
            x2="70"
            y2="20"
            stroke="#b39ddb"
            strokeWidth="3"
            opacity="0.18"
          />
          <line
            x1="10"
            y1="10"
            x2="10"
            y2="30"
            stroke="#b39ddb"
            strokeWidth="3"
            opacity="0.18"
          />
        </svg>
      </div>
    </div>
    <section className="w-full bg-gradient-to-b from-[#f4eaff] via-white to-white pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering Businesses
            <br />
            ERP & AI Integrations
          </h1>
          <p className="text-gray-700 mb-6 text-base sm:text-md max-w-md">
            ACS builds secure, scalable ERP solutions with AI integrations to
            automate, optimize, and grow your business.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow transition text-base sm:text-lg">
            Discover Our ERP & AI Expertise
          </button>
        </div>
        {/* Animated ERP Pipeline Flow */}
        <div className="flex-1 flex justify-center items-center">
          {/* Video: visible only on small screens */}
          <div className="border border-white h-[125px] sm:hidden flex items-center justify-center">
            <video
              className="w-full h-full object-contain rounded-xl bg-white"
              autoPlay
              loop
              muted
            >
              <source src={smallscreenvideo} type="video/mp4" />
            </video>
          </div>
          <div className="w-full max-w-[540px] h-[360px] hidden xl:block  items-center justify-center">
            <AnimatedPipelineFlow />
          </div>
        </div>
      </div>
      <div className="max-w-6xl  grid xl:grid-cols-4 h-44 xl:h-10 mt-20 xl:m-auto  grid-cols-2 gap-6 px-4 ">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl shadow w-full max-w-xs p-6 flex flex-col items-center"
          >
            <span className="text-2xl sm:text-3xl font-bold text-purple-600">
              {stat.value}
            </span>
            <span className="text-gray-700 mt-2 text-nowrap text-base text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
    <section className="py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-8 flex flex-col md:flex-row items-center">
        <div className="w-full">
          <HandwrittenHeading />
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
