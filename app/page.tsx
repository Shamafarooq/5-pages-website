import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div 
      className="bg-cover bg-center h-screen" 
      style={{ 
        backgroundImage: "url(https://primedecor.pk/cdn/shop/files/ColorfullGeometricShapes.jpg?v=1686844905)" 
      }}
    >
      {/* Centered Container */}
      <div className="flex flex-col items-center justify-center h-full text-center bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          THIS IS A HOME PAGE
        </h1>
        <p className="text-lg text-gray-300 mb-2">
          Welcome to my website! Here, you can explore my journey as a web developer. From crafting responsive designs to developing interactive applications, I take pride in transforming ideas into reality.
        </p>
        <p className="text-lg text-gray-300 mb-2">
          With a passion for learning and staying updated on the latest technologies, I continuously strive to enhance my skills and expand my knowledge. I believe in the power of collaboration and creativity, and I am excited to connect with like-minded individuals and potential clients.
        </p>
        <p className="text-lg text-gray-300 mb-2">
          Take a look at my website and feel free to reach out if you have any questions or opportunities for collaboration. Let's create something amazing together!
        </p>
      </div>
    </div>
  );
}