import * as mdxBundler from 'mdx-bundler/client/index.js'
import * as React from 'react'
import { Heading, Subheading, Paragraph, Quote, Link, BlogImage } from '~/components/mdxCustomComponents';

const mdxComponents = {
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
  h4: (props) => <Subheading as="h4" {...props} />,
  h5: (props) => <Subheading as="h5" {...props} />,
  h6: (props) => <Subheading as="h6" {...props} />,
  blockquote: Quote,
  p: Paragraph,
  a: Link,
  img: (imgProps) => <BlogImage as="img" {...imgProps} />,
};

export function useMdxComponent(code: string) {
  const Component = mdxBundler.getMDXComponent(code);
  return function MdxComponent({ components, ...rest }: Parameters<typeof Component>[0]) {
    return <Component components={{ ...mdxComponents, ...components }} {...rest} />;
  };
}

