import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-slate-300 w-full h-[120px]">
      <div className="flex justify-between items-center h-full px-4">
        <div>
          <img 
            src="https://media.licdn.com/dms/image/v2/D5603AQF9gDrKw4aZQQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719259376825?e=1735171200&v=beta&t=wUTA8vH197o6KgWV2Ifeb4db9qPbYNbuP8cNjIVSOTY"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <ul className="flex gap-6 text-lg font-semibold text-red-500">
          <li className="hover:text-green-600"><Link href="/">Home</Link></li>
          <li className="hover:text-green-600"><Link href="/about">About</Link></li>
          <li className="hover:text-green-600"><Link href="/skills">Skills</Link></li>
          <li className="hover:text-green-600"><Link href="/career">Career</Link></li>
          <li className="hover:text-green-600"><Link href="/contact">Contact Us</Link></li>
        </ul>
        <div>
          <button className="bg-blue-700 px-4 py-2 rounded-xl hover:bg-blue-500 text-white hover:text-green-800">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar