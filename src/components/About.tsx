"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/hyper1.png",
    "/images/hyper2.png",
    "/images/hyper3.jpg",
    "/images/hyper4.jpg",




  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
         
        {/* // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />  */}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
        My name is Vishv Salvi, and I am a passionate full stack developer. My fascination with computers began when I received my first computer at the age of ten. Initially, I used it to play video games and explore the vast realms of history on Wikipedia. A few years ago, I stumbled upon HTML, CSS, and JavaScript, which marked the beginning of my development journey. I started with small projects, such as displaying GitHub profile data and creating simple backend APIs.
        </Paragraph>
        <Paragraph className=" mt-4">
        One day, I discovered that people actually paid for website development. This revelation sparked a new venture for me. I began cold-calling local gyms and businesses, offering my services to build websites for them. After contacting over 50 businesses, I landed my first two freelance projects. This was a milestone for me as I earned my first income through technology.
        </Paragraph>

        <Paragraph className=" mt-4">
        A few months later, I secured an internship at a health tech company in Mumbai, which was a remote position. Everything was going well, but unfortunately, I became complacent and lost the spark that once fueled my passion for coding and development.
        </Paragraph>
        <Paragraph className=" mt-4">
        Now, I&apos;m determined to restart my journey in full stack development and regain my lost skills. I document my progress by posting videos on Twitter and writing blogs, hoping to inspire others along the way. My ultimate goal is to land a job where my work can bring real value to people&apos;s lives.
        </Paragraph>
       
        <Paragraph className=" mt-4">
          Thank you for being a part of my journey. I hope you find my content valuable and inspiring. Feel free to reach out to me on Twitter or LinkedIn if you have any questions or just want to chat.
        </Paragraph>
      </div>
    </div>
  );
}
