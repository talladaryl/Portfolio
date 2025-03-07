const WhatWeDo = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center w-full">
        {/* BRANDING DESIGN */}
        <div className="text-center">
          <div className="relative inline-flex items-center justify-center">
            <svg className="w-48 h-48">
              <circle
                className="text-gray-800"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="70"
                cx="90"
                cy="90"
              />
              <circle
                className="text-green-500"
                strokeWidth="10"
                strokeDasharray="calc(60 * 4.4) 440"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="70"
                cx="90"
                cy="90"
              />
            </svg>
            <span className="absolute text-4xl font-bold">60%</span>
          </div>
          <p className="mt-4 text-lg">BRANDING DESIGN</p>
        </div>

        {/* UI & UX DESIGN */}
        <div className="text-center">
          <div className="relative inline-flex items-center justify-center">
            <svg className="w-48 h-48">
              <circle
                className="text-gray-800"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="70"
                cx="90"
                cy="90"
              />
              <circle
                className="text-green-500"
                strokeWidth="10"
                strokeDasharray="calc(70 * 4.4) 440"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="70"
                cx="90"
                cy="90"
              />
            </svg>
            <span className="absolute text-4xl font-bold">70%</span>
          </div>
          <p className="mt-4 text-lg">UI & UX DESIGN</p>
        </div>

        {/* WEB DESIGN */}
        <div className="text-center">
          <div className="relative inline-flex items-center justify-center">
            <svg className="w-48 h-48">
              <circle
                className="text-gray-800"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="70"
                cx="90"
                cy="90"
              />
              <circle
                className="text-green-500"
                strokeWidth="10"
                strokeDasharray="calc(30 * 4.4) 440"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="70"
                cx="90"
                cy="90"
              />
            </svg>
            <span className="absolute text-4xl font-bold">30%</span>
          </div>
          <p className="mt-4 text-lg">WEB DESIGN</p>
        </div>

        {/* ILLUSTRATION */}
        <div className="text-center">
          <div className="relative inline-flex items-center justify-center">
            <svg className="w-48 h-48">
              <circle
                className="text-gray-800"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="70"
                cx="90"
                cy="90"
              />
              <circle
                className="text-green-500"
                strokeWidth="10"
                strokeDasharray="calc(90 * 4.4) 440"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="70"
                cx="90"
                cy="90"
              />
            </svg>
            <span className="absolute text-4xl font-bold">90%</span>
          </div>
          <p className="mt-4 text-lg">ILLUSTRATION</p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
