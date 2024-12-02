import Head from "next/head";
import Image from "next/image";

//import images
import profileImage from "../public/pro.png";
import langskill from "../public/lang.png";
import frameskill from "../public/frame.png";
import otherskill from "../public/other.png";
// import icons
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Home() {
  return (
    <>
      <Head>
        <title>Porfolio Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');
        </style>
      </Head>
      <div>
        <main className="font-poppins bg-blue-50 min-h-screen px-10 md:px-20 lg:px-40">
          {/* nav and hero */}
          <section>
            {/* nav */}
            <nav className="py-10 flex justify-between">
              <h1 className="text-sm md:text-xl text-blue-400">Developed by Bhanuka Ariyarathne</h1>
              <ul className="flex items-center">
                {/* icon */}
                <li>
                  <BsFillMoonStarsFill className="cursor-pointer text-xl mx-10" />
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1REqBXTsnBiq46O5dYndOvA8dxy-MWtWP/view?usp=sharing" 
                  className=" bg-blue-400 text-black px-4 py-2 border-none rounded-md"
                  download={"Resume"}>
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            {/* hero */}
            <div className="text-center">
              <h1 className=" text-5xl md:text-5xl lg:text-7xl font-bold text-blue-400">Bhanuka Ariyarathne</h1>
              <h3 className=" text-2xl py-4">UNDERGRADUATE | BACHELOR OF INFORMATION TECHNOLOGY </h3>
              <p className="text-sm py-4 text-gray-400 leading-6 max-w-xl mx-auto md:text-md">A final year proactive Bachelor of Information Technology (External) student at the University of Colombo School of Computing. Possess strong communication skills with fluency in English and Sinhala. Keen to pursue a career in professional services with a focus on IT and software development roles.</p>
            </div>
            {/* social icons */}
            <div className="text-5xl flex justify-center gap-16 text-gray-500">
            <a href="https://github.com/Bhanuka99"><FaGithub /></a>
            <a href="https://linkedin.com/in/bhanuka-ariyarathne"><FaLinkedin /></a>
            <a href="mailto:bhanuka.ariyarathne@gmail.com"><SiGmail /></a>
            </div>
            {/* profile */}
            <div className="m-auto relative bg-gradient-to-b from-blue-200 w-80 h-80 p-5 mt-20 rounded-full">
              <Image src={profileImage} alt="profile pic" layout="" objectFit="cover"/>
            </div>
          </section>
          {/* about section */}
          <section>
            <div>
              <h2 className="opacity-60 text-4xl py-8 font-bold">About Me</h2>
              <p className="text-sm text-gray-400 leading-6"> Currently i am doing my Bachelors and i have a Higher Diploma and a Diploma in Information Tecnology in University of Colombo. Those are my main education qualifications. I also have a 3 years of working experience as a Production Manager in D.D.Atukorala Group (pvt)ltd.</p>
              <h2 className="opacity-60 text-4xl py-8 font-bold">Skills</h2>
            </div>
            {/* skill cards */}
            <div className="md:flex lg:flex gap-10 mx-auto">
            <div className="bg-blue-300 text-center shadow-sm p-5 rounded-xl my-10">
            <Image src={langskill}
             alt="lang pic"
             width={180}
             height={150}
             className="inline"/>
             <h2 className="text-xl font-bold">Programming Languages</h2>
             <p className="text-sm py-2 text-gray-800 leading-6"> Currently i am doing my Bachelors and i have a Higher Diploma and a Diploma in Information Tecnologies in University of Colombo.</p>
            </div>
            <div className="bg-blue-300 text-center shadow-sm p-5 rounded-xl my-10">
            <Image src={frameskill}
             alt="frame pic"
             width={120}
             height={120}
             className="inline"/>
             <h2 className="text-xl font-bold">Frameworks</h2>
             <p className="text-sm py-2 text-gray-800 leading-6"> Currently i am doing my Bachelors and i have a Higher Diploma and a Diploma in Information Tecnologies in University of Colombo.</p>
            </div>
            <div className="bg-blue-300 text-center shadow-sm p-5 rounded-xl my-10">
            <Image src={otherskill}
             alt="other pic"
             width={180}
             height={180}
             className="inline"/>
             <h2 className="text-xl font-bold">Others</h2>
             <p className="text-sm py-2 text-gray-800 leading-6"> Currently i am doing my Bachelors and i have a Higher Diploma and a Diploma in Information Tecnologies in University of Colombo.</p>
            </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
