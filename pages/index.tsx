import Head from "next/head";
import Image from "next/image";

//import images
import profileImage from "../public/pro.png";
import langskill from "../public/lang.png";
import frameskill from "../public/frame.png";
import otherskill from "../public/other.png";
import noteapp1 from "../public/note1.png";
import noteapp2 from "../public/note2.png";
import noteapp3 from "../public/note3.png";
import expenzapp1 from "../public/exp1.png";
import expenzapp2 from "../public/exp2.png";
import expenzapp3 from "../public/exp3.png";
import fitapp1 from "../public/fit1.png";
import fitapp2 from "../public/fit2.png";
import fitapp3 from "../public/fit3.png";
import wrkapp1 from "../public/work1.png";
import wrkapp2 from "../public/work2.png";
import wrkapp3 from "../public/work3.png";
import vote1 from "../public/vote1.png";
import vote2 from "../public/vote2.png";
import vote3 from "../public/vote3.png";
// import icons
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
                <li>
                  <a href="https://drive.google.com/file/d/13Eu8-DxckNeIY5RY5-9YN3sMxJ_wgDRg/view?usp=sharing" 
                  className=" bg-blue-400 text-black px-4 py-2 border-none rounded-md"
                  download={"Resume"}>
                    Download CV
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
            <div className="text-5xl flex justify-center gap-16 text-gray-500 mt-5 mb-10">
            <a href="https://github.com/Bhanuka99"><FaGithub /></a>
            <a href="https://linkedin.com/in/bhanuka-ariyarathne"><FaLinkedin /></a>
            <a href="mailto:bhanuka.ariyarathne@gmail.com"><SiGmail /></a>
            </div>
            {/* profile */}
            <div className="m-auto relative bg-gradient-to-b from-blue-200 w-80 h-80 p-5 mt-15 rounded-full">
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
             <p className="text-sm py-2 text-gray-800 leading-6"> I have good skills on programming languages like Java, php, Javascript, HTML/CSS and intermidiate skills on Typescript and Dart.</p>
            </div>
            <div className="bg-blue-300 text-center shadow-sm p-5 rounded-xl my-10">
            <Image src={frameskill}
             alt="frame pic"
             width={120}
             height={120}
             className="inline"/>
             <h2 className="text-xl font-bold">Frameworks</h2>
             <p className="text-sm py-2 text-gray-800 leading-6">NodeJs, NestJs, NextJs, Flutter, Bootstrap and TailwindCss are frameworks that i use to develop web-bsed systems and mobile applications etc.</p>
            </div>
            <div className="bg-blue-300 text-center shadow-sm p-5 rounded-xl my-10">
            <Image src={otherskill}
             alt="other pic"
             width={180}
             height={180}
             className="inline"/>
             <h2 className="text-xl font-bold mt-1">Others</h2>
             <p className="text-sm py-2 text-gray-800 leading-6"> I have good skills on OOP programming, GIT Version Controlling, Wordpress, Microsoft Office package, Communication Skills etc.</p>
            </div>
            </div>
          </section>
          {/* projects */}
          <section>
          <h2 className="opacity-60 text-4xl py-8 font-bold">Portfolio</h2>
            {/* notesphere */}
            <div>
            <div className="bg-blue-300 shadow-sm p-5 rounded-xl my-10">
            <h2 className="text-2xl font-bold">NoteSphear</h2>
            <p className="text-sm py-2 text-gray-600 leading-6">Use Flutter framework for development. This app can use for save user’s notes and tasks. This project was done to a sample project to improve my skills.</p>
            <div className="flex flex-col gap-2 p-4 lg:flex-row lg:flex-wrap">
            <Image src={noteapp1}
             alt="note pic1"
             width={420}
             height={420}
             className="mx-auto"/>
            <Image src={noteapp2}
             alt="note pic2"
             width={420}
             height={420}
             className="mx-auto"/>
            <Image src={noteapp3}
             alt="note pic3"
             width={420}
             height={420}
             className="mx-auto"/>
            </div>
            <a href="https://github.com/Bhanuka99/note_sphere" className="text-blue-800">
              Github link
            </a>
            </div>
            </div>
            {/* expenz */}
            <div>
            <div className="bg-blue-300 shadow-sm p-5 rounded-xl my-10">
            <h2 className="text-2xl font-bold">Expenz</h2>
            <p className="text-sm py-2 text-gray-600 leading-6">The development is done by using Flutter framework and this app can use to store and track user’s incomes and expenses. This project was done as sample project for improve my skills.</p>
            <div className="flex flex-col gap-2 p-4 lg:flex-row lg:flex-wrap">
            <Image src={expenzapp1}
             alt="expenz pic1"
             width={420}
             height={420}
             className="mx-auto"/>
            <Image src={expenzapp2}
             alt="expenz pic2"
             width={420}
             height={420}
             className="mx-auto"/>
            <Image src={expenzapp3}
             alt="expenz pic3"
             width={420}
             height={420}
             className="mx-auto"/>
            </div>
            <a href="https://github.com/Bhanuka99/expenz-app" className="text-blue-800">
              Github link
            </a>
            </div>
            </div>
            {/* fitness Tracker */}
            <div>
            <div className="bg-blue-300 shadow-sm p-5 rounded-xl my-10">
            <h2 className="text-2xl font-bold">Fitness Tracker</h2>
            <p className="text-sm py-2 text-gray-600 leading-6"> This app is developed using flutter. This is a sample project that i did for improve my ux-ui skills and front-end development.</p>
            <div className="flex flex-col gap-2 p-4 lg:flex-row lg:flex-wrap">
            <Image src={fitapp1}
             alt="fitness Tracker1"
             width={420}
             height={420}
             className="mx-auto"/>
            <Image src={fitapp2}
             alt="fitness Tracker2"
             width={420}
             height={420}
             className="mx-auto"/>
            <Image src={fitapp3}
             alt="fitness Tracker3"
             width={420}
             height={420}
             className="mx-auto"/>
            </div>
            <a href="https://github.com/Bhanuka99/fitness_tracker" className="text-blue-800">
              Github link
            </a>
            </div>
            </div>
            {/* workout planner */}
            <div>
            <div className="bg-blue-300 shadow-sm p-5 rounded-xl my-10">
            <h2 className="text-2xl font-bold">Workout Planner</h2>
            <p className="text-sm py-2 text-gray-600 leading-6">This app can use to track user’s daily workout plans and calculate amount of calaries that user burn in day.</p>
            <div className="flex flex-col gap-2 p-4 lg:flex-row lg:flex-wrap">
            <Image src={wrkapp1}
             alt="work pic1"
             width={420}
             height={420}
             className="mx-auto"/>
            <Image src={wrkapp2}
             alt="work pic2"
             width={420}
             height={420}
             className="mx-auto"/>
            <Image src={wrkapp3}
             alt="work pic3"
             width={420}
             height={420}
             className="mx-auto"/>
            </div>
            <a href="https://github.com/Bhanuka99/workout_planner" className="text-blue-800">
              Github link
            </a>
            </div>
            </div>
            {/* election result */}
            <div>
            <div className="bg-blue-300 shadow-sm p-5 rounded-xl my-10">
            <h2 className="text-2xl font-bold">Election Result</h2>
            <p className="text-sm py-2 text-gray-600 leading-6">Use php, html/css, javascript for development. This web page can use for display can show the election results from uploading json file to it. This project was done to a sample project to improve my skills.</p>
            <div className="flex flex-col gap-2 p-4 lg:flex-row lg:flex-wrap">
            <Image src={vote1}
             alt="result1"
             width={420}
             height={420}
             className="mx-auto"/>
            <Image src={vote2}
             alt="result2"
             width={420}
             height={420}
             className="mx-auto"/>
            <Image src={vote3}
             alt="result3"
             width={420}
             height={420}
             className="mx-auto"/>
            </div>
            <a href="https://github.com/Bhanuka99/election_results_webpage" className="text-blue-800">
              Github link
            </a>
            </div>
            </div>
            <a href="https://github.com/Bhanuka99" className="text-blue-800 text-xl">
              See more...
            </a>
          </section>
          {/* footer */}
          <footer className="border-t-2 border-black text-sm opacity-70 flex flex-col gap-5 items-center justify-center py-6 mt-5 lg:flex lg:flex-row lg:items-start lg:justify-start">
              <h3 className="text-base mb-2">Contact me for more Details</h3>
              <p className="opacity-70 mb-4">  You can contact me at +94 717 175 259 or <a href="mailto:bhanuka.ariyarathne@gmail.com" className="text-blue-800">bhanuka.ariyarathne@gmail.com</a>. Also you can use my socials to contact me. I can make myself available to discuss at anytime.</p>
              <div className="text-5xl flex justify-center gap-6 text-gray-500 lg:justify-start">
                <a href="https://github.com/Bhanuka99"><FaGithub /></a>
                <a href="https://linkedin.com/in/bhanuka-ariyarathne"><FaLinkedin /></a>
                <a href="mailto:bhanuka.ariyarathne@gmail.com"><SiGmail /></a>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
