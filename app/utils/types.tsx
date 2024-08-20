export type Frontmatter = {
  title: string;
  description: string;
  published: string;
  featured: boolean;
};

export interface MdxPage<T = Record<string, any>> {
  code: string;
  frontmatter: T;
  slug: string;
}

export type WindowData = {
  title: string;
  content: string | null;
  children?: React.ReactNode;
  classname?: string;
}

export interface Post {
  frontmatter: Frontmatter;
  contentMDX: string;
}

export type PostMeta = {
  slug: string;
  frontmatter: Frontmatter;
};
