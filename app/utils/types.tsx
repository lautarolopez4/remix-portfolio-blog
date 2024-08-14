export type Frontmatter = {
  title: string;
  description: string;
  published: string; // YYYY-MM-DD
  featured: boolean;
};

export type WindowData = {
  title: string;
  content: string | null;
  children?: React.ReactNode;
}
export type PostMeta = {
  slug: string;
  frontmatter: Frontmatter;
};
