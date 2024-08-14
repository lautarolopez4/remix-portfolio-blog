import { Frontmatter, PostMeta } from "~/utils/types";

export const getPosts = async (): Promise<PostMeta[]> => {
  const modules = import.meta.glob<{ frontmatter: Frontmatter }>(
    "../posts/*.mdx",
    { eager: true }
  );

  const build = await import("virtual:remix/server-build");
  const posts = Object.entries(modules).map(([file, post]) => {
    let id = file.replace("../", "").replace(/\.mdx$/, "");

    console.log(id);
    console.log(build.routes);
    let slug = build.routes[id]?.path;
    if (slug === undefined) throw new Error(`No route for ${id}`);

    return {
      slug,
      frontmatter: post.frontmatter,
    };
  });

  return sortBy(posts, (post) => post.frontmatter.published, "desc");
};

function sortBy<T>(
  arr: T[],
  key: (item: T) => any,
  dir: "asc" | "desc" = "asc"
) {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b));
    return dir === "asc" ? res : -res;
  });
}

function compare<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
