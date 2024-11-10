import React from 'react';

const Career = () => {
  return (
    <div 
      className="h-screen flex flex-col justify-between" 
      style={{ 
        backgroundImage: "url('https://www.shutterstock.com/image-photo/career-businessman-on-blurred-abstract-260nw-1152345887.jpg')", 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center', 
        backgroundSize: 'contain'
      }}
    >
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg max-w-lg text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-4">Career Opportunities</h1>
          <p className="text-lg text-gray-700">
            I am always open to exciting career opportunities that allow me to grow and contribute to innovative projects. 
            My goal is to leverage my skills in web development to create impactful digital solutions.
          </p>
        </div>
      </div>
      <footer className="bg-slate-300 w-full h-[60px] flex justify-center items-center">
        <p className="text-lg font-semibold text-red-500">© 2024 Ayesha Farooq</p>
      </footer>
    </div>
  );
};

export default Career;