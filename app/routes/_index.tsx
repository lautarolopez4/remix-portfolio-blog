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
    const formattedDate = date.toISOString().split('T')[0];
    return {
      ...post,
      published: formattedDate,
    };
  });

  return (
    <main className="block isolate min-w-0 ml-2">
      <Window title={"about me "} content={"Software Engineer. Interested in infra, swe & security"} />
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
