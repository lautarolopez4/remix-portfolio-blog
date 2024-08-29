import type { MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { Window } from "~/components/Window";
import { getMdxListItems } from "~/utils/mdx.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Lautaro Lopez blog" },
    { name: "description", content: "Nice stuff!" },
  ];
};

export const loader = async () => json(await getMdxListItems());

export default function BlogIndex() {
  const posts = useLoaderData<typeof loader>();

  const formattedPosts = posts.map(post => {
  const date = new Date(post.frontmatter.published);
  
  const year = String(date.getFullYear()).slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  const formattedDate = `${year}-${month}-${day}`;
  
  return {
    ...post,
    published: formattedDate,
  };
});
  
  return (
    <main className="block isolate min-w-0 ml-2">
      <Window title={"about me"} content={null}>
        <p className="text-xs p-2">Software Engineer with a focus on infrastructure, software development, and security. Currently working at Media.Lab, where I use C# .NET and Unity. I am expanding my skills in AWS and Cloud Security to better integrate into cloud development and digital security.</p>
        <p className="text-xs p-2">It might seem confusing to juggle different interests, but here’s the deal: Over the past year (2024), I dove deep into security basics, taking courses on red teaming and Hack The Box (HTB), and found myself really drawn to infrastructure. I consider myself a jack of all trades, balancing a main focus on infrastructure with a love for software development and security projects. </p>
        <blockquote className="border-l-2 border-white-300 pl-4 my-3 italic text-gray-400 text-xs ml-2">
          I am a generalist. I am most engaged when working on hard problems that I have not yet wrapped my brain around. <br/>
          -<a href="https://andrewkelley.me/post/not-a-js-developer.html" className="text-blue-400">Andrew Kelley </a> 
        </blockquote>
      </Window>
      <Window title="recent posts" content={null} >
        <ul className="text-xs p-2">
          {formattedPosts.map((post) => (
            <li key={post.slug}>
              <a href={`/posts/${post.slug}`}>{post.published} :: {post.frontmatter.title}</a>
            </li>
          ))}
        </ul>
      </Window>
    </main>);
}
