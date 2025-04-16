import React from "react";

const LostAndFound = () => {
  return (
    <>
      <div
        className="flex  justify-center  bg-white font-sans mb-7
       mt-4"
      >
        <div className="w-full max-w-3xl p-10 bg-white rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold text-center bg-blue-900 mb-8 text-white rounded-lg p-3">
            LOST & FOUND
          </h1>
          <p className="text-center text-lg text-gray-700 mb-10">
            Lost items? Don’t worry!!! We have a way for it ...
          </p>
          <div className="space-y-6">
            <button
              className="w-full py-4 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
              onClick={() =>
                window.open("https://forms.gle/JiVBkbMUdJAwojUh7", "_blank")
              }
            >
              <span className="mr-2">📢</span> REGISTER LOST ITEM
            </button>
            <button
              className="w-full py-4 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
              onClick={() =>
                window.open("https://forms.gle/KDRPsVcj22nJNwp48", "_blank")
              }
            >
              <span className="mr-2">📢</span> REGISTER Found ITEM
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          src="/images/trainoriginal.png"
          alt="Train Image"
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  );
};

export default LostAndFound;
