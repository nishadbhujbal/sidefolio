import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Vishv Salvi",
  description:
    "Vishv Salvi is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  const blogData = [
    {
      title: "Data Validation Using Zod",
      description: "Let's see how Zod validates datatype efficiently as compared to manual validation. Use the command written below to install zod into your node project.",
      link: "https://vishvsalvi.hashnode.dev/zod",
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1708534169798/71e6c600-5041-4ee5-a3a9-ca8828322b43.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
    },
    {
      title: "Accelerate Your Dream Projects with These Lightning-Fast UI Libraries!",
      description: "There are numerous UI libraries that offer visually stunning and responsive components, thus eliminating the necessity of writing CSS code.",
      link: "https://vishvsalvi.hashnode.dev/accelerate-your-dream-projects-with-these-lightning-fast-ui-libraries",
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1712903122034/8961fe4a-c73a-4229-94a0-43e29a813cd5.webp?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
    },
    {
      title: "Recoil: A New Approach to State Management in React",
      description: "Recoil is a state management library for React that provides several capabilities for managing the state of your application.",
      link: "https://vishvsalvi.hashnode.dev/recoil-a-new-approach-to-state-management-in-react",
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1713598112335/22f5d8ec-78de-47f1-88f9-2cfaff4fe2af.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"

    },
    {
      title: "Difference Between Access Token And Refresh Token",
      description: "Access tokens and refresh tokens are two types of tokens that are used to authenticate users in an application.",
      link: "https://vishvsalvi.hashnode.dev/difference-between-access-token-and-refresh-token",
      image:"https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/-XiKxvvFGgU/upload/135ad373efbd86ae791c9cd79d706566.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
    }
  ]

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">I write about technology</Heading>
      <Paragraph className="pb-10">
        Ever since <Highlight> I was a kid</Highlight>, I&apos;ve been
        fascinated by technology.
      </Paragraph>
      <Blogs blogs={blogData} />
    </Container>
  );
}
