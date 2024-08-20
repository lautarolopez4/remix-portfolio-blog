import * as mdxBundler from 'mdx-bundler/client/index.js'
import { Heading, Subheading, Paragraph, Quote, Link, BlogImage, TitleProps } from '~/components/mdxCustomComponents';

const mdxComponents = {
  h1: (props: TitleProps) => <Heading as="h1" {...props} />,
  h2: (props: TitleProps) => <Heading as="h2" {...props} />,
  h3: (props: TitleProps) => <Heading as="h3" {...props} />,
  h4: (props: TitleProps) => <Subheading as="h4" {...props} />,
  h5: (props: TitleProps) => <Subheading as="h5" {...props} />,
  h6: (props: TitleProps) => <Subheading as="h6" {...props} />,
  blockquote: Quote,
  p: Paragraph,
  a: Link,
  img: (imgProps: React.ComponentProps<'img'> & { transparentBackground?: boolean }) => <BlogImage  {...imgProps} />,
};

export function useMdxComponent(code: string) {
  const Component = mdxBundler.getMDXComponent(code);
  return function MdxComponent({ components, ...rest }: Parameters<typeof Component>[0]) {
    return <Component components={{ ...mdxComponents, ...components }} {...rest} />;
  };
}

