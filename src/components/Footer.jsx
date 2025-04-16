function Footer() {
  return (
    <footer className="bg-gray-500 text-white mt-1 font-sans">
      <div className="flex flex-col md:flex-row  items-center justify-center p-8 gap-[40px]">
        {/* Left Section */}
        <div>
          <p className="text-lg font-semibold">For More Updates:</p>
          <div className="flex items-center gap-3 ">
            {/* Social Media Icons */}
            <a
              href="https://www.instagram.com/indoremetrorailsaathi/"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <img
                className="w-[30px] brightness-125"
                src="/images/instagram.png"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100033839149870"
              className="hover:scale-110 transition-transform"
              target="_blank"
            >
              <img
                className="w-[40px] brightness-125"
                src="/images/facebook.png"
                alt="Facebook"
              />
            </a>
            <a
              href="https://x.com/Abhisheksa16632"
              className="hover:scale-110 transition-transform"
              target="_blank"
            >
              <img
                className="w-[30px] brightness-125"
                src="/images/twitter.png"
                alt="Twitter"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/indoremetrorailsaathi/"
              className="hover:scale-110 transition-transform"
              target="_blank"
            >
              <img
                className="w-[30px] brightness-125"
                src="/images/linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
        <div className="md:border-l border-black h-[15vh]  flex justify-center items-center">
          <ul>
            <a
              className="no-underline"
              href="
https://drive.google.com/file/d/1dZtubsfiBfszXcFpC9pgu0mZ-baBYyda/view?usp=drive_link


"
              target="_blank"
            >
              <li className="text-white  no-underline" target="_blank">
                Terms & Conditions
              </li>
            </a>
            <a
              className="no-underline"
              href="https://drive.google.com/file/d/1pFh0QYmeKMURgNHiv4TNXv_eY1B2xW-i/view?usp=drive_link "
              target="_blank"
            >
              {" "}
              <li className="text-white no-underline" target="_blank">
                Privacy Policy
              </li>
            </a>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:border-l border-black">
          <p className="text-lg font-semibold mb-2 ml-7">Important Links</p>
          <ul className="text-sm space-y-1 font-sans">
            <li className="mt-2 font-semibold">Other Links:</li>
            <li>
              <a
                className="text-white no-underline"
                target="_blank"
                href="  https://www.incredibleindia.gov.in/en

"
              >
                Govt of India{" "}
              </a>
              |{" "}
              <a
                className="text-white no-underline"
                target="_blank"
                href="https://www.incredibleindia.gov.in/en
"
              >
                Incredible India
              </a>{" "}
              |{" "}
              <a
                className="text-white no-underline"
                target="_blank"
                href="https://digitalindiaportal.co.in/
"
              >
                Digital India
              </a>
            </li>
            <li>
              <a
                className="text-white no-underline"
                target="_blank"
                href="https://mp.gov.in/
"
              >
                Govt of Madhya Pradesh
              </a>{" "}
              |{" "}
              <a
                className="text-white no-underline"
                href="https://www.mpmetrorail.com/ "
                target="_blank"
              >
                MP Metro (MPM)
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-700 bg-gray-900 mt-2 py-2 text-center text-lg">
        &copy; 2024. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
