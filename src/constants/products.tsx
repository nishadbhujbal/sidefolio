
// import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
// import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import { title } from "process";
import hrlanding from "public/images/hrlanding.png";
import hrlanding2 from "public/images/hrlanding2.png";
import hrlanding3 from "public/images/hrlanding3.png";
import k3dfpage from "public/images/k3dfpage.png";
import k3dfpage2 from "public/images/k3dfpage2.png";
import k3dfpage3 from "public/images/k3dfpage3.png";
import conceptmap1 from "public/images/conceptmap1.png";
import conceptmap2 from "public/images/conceptmap2.png";
import conceptmap3 from "public/images/conceptmap3.png";
import documindpage1 from "public/images/documindpage1.png";
import documindpage2 from "public/images/documindpage2.png";
import mindcanvaspage1 from "public/images/mindcanvaspage1.png";
import mindcanvaspage2 from "public/images/mindcanvaspage2.png";

export const products = [
  {
    href: "https://conceptmapai.vercel.app/",
    title: "Conceptmap.ai",
    description:
      "Create AI powered concept maps for learning new topics and subjects.",
    thumbnail: conceptmap1,
    images: [conceptmap1, conceptmap2, conceptmap3],
    slug: "conceptmapai",
    stack: ["Nextjs", "Tailwindcss", "X AI", "PostgreSQL", "Prisma", "React Flow"],
    content: (
      <div>
        <p>
          Conceptmap.ai is a web application where users can create AI powered concept maps for learning new topics and subjects. The website was built using Nextjs and Tailwindcss. The website has a clean and modern design. The website has a concept map editor where the users can create concept maps and the AI will suggest the nodes and connections. It has a dashboard where the users can see the concept maps they created. The website is hosted on Vercel.
        </p>
      </div>
    )

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
  {
    href: "https://k3df.vercel.app/",
    title: "Karnix 3D Farm landing page",
    description:
      "A landing page for a 3D printing farm to showcase their services and products.",
    thumbnail: k3dfpage,
    images: [k3dfpage2, k3dfpage3],
    stack: ["React", "Tailwindcss"],
    slug: "k3df",
    content: (
      <div>
        <p>
         This is my first even freelance gig and first earning through tech. The website was built for a 3D printing farm to showcase their services and products. The website was built using Reactjs and Tailwindcss. The website is fully responsive and has a clean and modern design. The website has a contact form where the users can contact the admin. The website is hosted on Cloudflare previously, but the owner took it down and hosted it somewhere else.
        </p>
       
      </div>
    ),
  },
 
];
