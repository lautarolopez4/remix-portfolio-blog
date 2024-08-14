import type { MetaFunction } from "@remix-run/node";
import { getPosts } from "~/server/getPosts";
import { json, useLoaderData } from "@remix-run/react";
import { Window } from "~/components/Window";


export const meta: MetaFunction = () => {
  return [
    { title: "Lautaro Lopez blog" },
    { name: "description", content: "Nice stuff!" },
  ];
};

export const loader = async () => json(await getPosts());

export default function BlogIndex() {
  const featuredPosts = useLoaderData<typeof loader>();

  return (
    <main className="block isolate min-w-0 ml-2">
      <Window title={"about me "} content={"Software Engineer. Interested in infra, swe & security"} />
      <Window title="recent posts" content={null} >
        <ul className="">
          {featuredPosts.map((post) => (
            <li key={post.slug}>
            </li>
          ))}
        </ul>
      </Window>

    </main>
  );
}
