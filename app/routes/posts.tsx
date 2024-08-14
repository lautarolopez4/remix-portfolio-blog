import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/server/getPosts"; // Asegúrate de que esta función devuelva los posts

export const loader = async () => {
  const posts = await getPosts(); // Obtiene los posts
  return json(posts);
};

export default function Posts() {
  const posts = useLoaderData<typeof loader>(); // Carga los datos de los posts
  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={`/posts/${post.slug}`}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
