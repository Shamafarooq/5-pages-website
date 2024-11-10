import React from 'react';

const About = () => {
  return (
    <div 
      className="h-screen flex flex-col justify-between" 
      style={{ 
        backgroundImage: "url('https://media.licdn.com/dms/image/v2/D5603AQF9gDrKw4aZQQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719259376825?e=1735171200&v=beta&t=wUTA8vH197o6KgWV2Ifeb4db9qPbYNbuP8cNjIVSOTY')", 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
        backgroundSize: '60%' // Change to 50% to reduce the size of the background image
      }}
    >
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg max-w-lg text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-4">Hello, my name is Ayesha Farooq</h1>
          <p className="text-lg text-gray-700">
            I am a college student studying at the Governor House. My interest in web development started as a hobby and has grown into a passion. I love creating modern, responsive websites and exploring new technologies. I am continuously learning and expanding my skills in web development.
          </p>
        </div>
      </div>
      <footer className="bg-slate-300 w-full h-[60px] flex justify-center items-center">
        <p className="text-lg font-semibold text-red-500">© 2024 Ayesha Farooq</p>
      </footer>
    </div>
  );
};

export default About;