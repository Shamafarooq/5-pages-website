import React from "react";

const skillsData = [
  { name: "HTML", percentage: 85, color: "bg-orange-600" },
  { name: "CSS", percentage: 70, color: "bg-blue-600" },
  { name: "jQuery", percentage: 10, color: "bg-gray-800" },
  { name: "C", percentage: 40, color: "bg-blue-800" },
  { name: "WordPress", percentage: 75, color: "bg-gray-600" },
  { name: "C++", percentage: 65, color: "bg-green-600" },
  { name: "Photoshop", percentage: 70, color: "bg-purple-600" },
];

const Skills = () => {
  return (
    <div className="bg-gray-200 min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">My Skills</h1>
      <p className="text-lg mb-10 text-center">
        I Like To Craft Beautiful And Scalable Web Products
      </p>

      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        {skillsData.map((skill, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-center">
              <span className="font-medium">{skill.name}</span>
              <span className="font-medium">{skill.percentage}%</span>
            </div>
            <div className="bg-gray-300 h-2 rounded mt-2">
              <div
                className={`${skill.color} h-full rounded`}
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Descriptions */}
      <div className="mt-8 max-w-2xl text-center">
        <h2 className="text-xl font-semibold mb-2">Design + Development</h2>
        <p className="text-gray-700 mb-4">
          Clean, modern designs - optimized for performance, search engines, and converting users to customers.
        </p>

        <h2 className="text-xl font-semibold mb-2">Technology</h2>
        <p className="text-gray-700 mb-4">
          Combined all the latest technologies to create a progressive website.
        </p>

        <h2 className="text-xl font-semibold mb-2">Always Responsive</h2>
        <p className="text-gray-700">
          A responsive design makes your website accessible to all users, regardless of their device.
        </p>
      </div>
    </div>
  );
};

export default Skills;
