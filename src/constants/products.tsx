
// import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
// import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import { title } from "process";
import hrlanding from "public/images/hrlanding.png";
import hrlanding2 from "public/images/hrlanding2.png";
import hrlanding3 from "public/images/hrlanding3.png";

import conceptmap1 from "public/images/conceptmap1.png";
import conceptmap2 from "public/images/conceptmap2.png";
import conceptmap3 from "public/images/conceptmap3.png";
import documindpage1 from "public/images/documindpage1.png";
import documindpage2 from "public/images/documindpage2.png";
import mindcanvaspage1 from "public/images/mindcanvaspage1.png";
import mindcanvaspage2 from "public/images/mindcanvaspage2.png";
import cleverbooks2 from "public/images/nishad_project_2.png";
import cleverbooks1 from "public/images/nishad_project_1.png";

export const products = [
  {
    href: "https://cleverbooks-zb36.onrender.com/",
    title: "Cleverbooks",
    description: "A book store landing page built with Nextjs and Tailwindcss.",
    thumbnail: cleverbooks2,
    images: [cleverbooks2, cleverbooks1],
    slug: "cleverbooks",
    stack: ["Nextjs", "Tailwindcss"],
  },
  {
    href: "https://documind-nine.vercel.app/",
    title: "Documind",
    description: "An AI pdf chat application where users can upload pdfs and chat with the AI related to the content of the pdf.",
    thumbnail: documindpage1,
    images: [documindpage1, documindpage2],
    slug: "documind",
    stack: ["Nextjs", "Tailwindcss", "OpenAI", "PostgreSQL", "Drizzle", "Pinecone", "AWS S3"],
    content: (
      <div>
        <p>
          Documind is a pdf chat application where users can upload pdfs and chat with the AI related to the content of the pdf. The website was built using Nextjs and Tailwindcss. The website has a clean and modern design. The website has a pdf uploader where the users can upload pdfs and chat with the AI. The website has a dashboard where the users can see the chat history. The website is hosted on Vercel.
        </p>
      </div>
    )
  },

  {
    href: "https://hrclasses.co.in/",
    title: "HR Website",
    description:
      "A website for a local coaching class to showcase their business and services.",
    thumbnail: hrlanding,
    images: [hrlanding2, hrlanding3],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "hrclass",
    content: (
      <div>
        <p>
       This website was my secong freelance project and was built for a local coaching class to showcase their business and services. The website was built using Nextjs and Tailwindcss. The website is fully responsive and has a clean and modern design. The website has a announcement section where the admin can post announcments and the users can read them. The website also has a contact form where the users can contact the admin. The website is hosted on Vercel.
        </p>
        
      </div>
    ),
  },

 
];
