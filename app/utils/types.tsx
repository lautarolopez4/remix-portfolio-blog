export type Frontmatter = {
  title: string;
  description: string;
  published: string; // YYYY-MM-DD
  featured: boolean;
};

export interface MdxPage<T = Record<string, any>> {
  code: string; // Código JavaScript generado por la compilación del MDX
  frontmatter: T; // Metadatos extraídos del frontmatter del MDX
  slug: string; // Identificador único para la página
}

export type WindowData = {
  title: string;
  content: string | null;
  children?: React.ReactNode;
  classname?: string;
}

export interface Post {
  frontmatter: Frontmatter;
  contentMDX: string; // El contenido del MDX como un componente React
}

export type PostMeta = {
  slug: string;
  frontmatter: Frontmatter;
};
