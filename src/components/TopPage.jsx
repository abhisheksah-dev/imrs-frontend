function TopPage() {
  return (
    <>
      <div className="relative">
        {/* Background Image */}
        <img
          className="w-full h-screen object-cover opacity-70"
          src="/images/mainBackground.svg"
          alt="Metro Network Background"
        />

        {/* Central Header Card */}
        <div
          className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-tl from-[#0f9ced] via-[#5198c1] to-[#99dff8] box-shadow: 0px 0px 10px #209ce4, 0px 0px 20px #166794;
 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 shadow-lg cursor-pointer rounded-xl w-[80%] max-w-3xl"
        >
          <div className="flex items-center justify-center h-[120px]">
            <svg
              width="65"
              height="67"
              viewBox="0 0 145 137"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.18">
                <path
                  opacity="0.68"
                  d="M51.7167 22.8333V97.0417M95.0354 37.7892V114.167M13.8354 44.4108V99.9529C13.8354 110.799 21.9917 115.251 31.9 109.885L46.0979 102.236C49.1792 100.581 54.3146 100.41 57.5167 101.951L89.2355 116.964C92.4375 118.448 97.5729 118.334 100.654 116.678L126.815 102.522C130.138 100.695 132.917 96.2425 132.917 92.5892V37.0471C132.917 26.2012 124.76 21.7487 114.852 27.1146L100.654 34.7637C97.5729 36.4192 92.4375 36.5904 89.2355 35.0492L57.5167 20.0933C54.3146 18.6092 49.1792 18.7233 46.0979 20.3787L19.9375 34.5354C16.5542 36.3621 13.8354 40.8146 13.8354 44.4108Z"
                  stroke="black"
                  stroke-width="8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>

            <p className="text-2xl font-semibold ml-4 text-white mt-3">
              METRO NETWORK MAP
            </p>
          </div>
        </div>

        {/* Cards Container */}
        <div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mt-10 ">
          {/* Cards */}
          {[
            {
              img: "/images/buslogo.png",
              title: "IBUS CONNECTIVITY",
            },
            {
              img: "/images/trainlogo.png",
              title: "RAILWAY STATION CONNECTIVITY",
            },
            {
              img: "/images/busstop.png",
              title: "BUS STATION CONNECTIVITY",
            },
            {
              img: "/images/airplanelogo.png",
              title: "AIRPORT CONNECTIVITY",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 shadow-lg cursor-pointer rounded-xl"
            >
              <div className="flex items-center justify-center h-[120px] w-full">
                <img
                  className="w-[50px] h-auto filter sepia drop-shadow-lg"
                  src={card.img}
                  alt={card.title}
                />
                <p className="text-lg md:text-xl font-semibold ml-4 text-white mt-3">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopPage;
