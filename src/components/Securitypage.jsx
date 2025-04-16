import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Securitypage() {
  return (
    <>
      {/* Main Content */}
      <div className="min-h-screen flex flex-col font-sans">
        <section className="relative flex-grow">
          <div className="absolute inset-0 ">
            {/* Background Image */}
            <img
              className="w-full h-screen object-cover"
              src="/images/SecurityBackground.png"
              alt="Security Background"
            />

            {/* Cards Container */}
            <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 grid grid-cols-1 md:grid-cols-2 gap-12 w-[90%] mt-10">
              {[
                {
                  title: "WOMAN HELPLINE",
                },
                {
                  title: "CHILD HELPLINE",
                },
                {
                  title: "INDORE POLICE ",
                },
                {
                  title: "CM HELPLINE",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 shadow-lg cursor-pointer rounded-xl"
                >
                  <div className="flex items-center justify-center h-[120px] w-full">
                    <p className="text-lg md:text-xl font-semibold ml-4 text-white mt-3">
                      {card.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Securitypage;
