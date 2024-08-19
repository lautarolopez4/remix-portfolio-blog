
import { clsx } from 'clsx';
import * as React from 'react';

type TitleProps = {
  variant?: 'primary' | 'secondary';
  as?: React.ElementType;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
} & (
    | { children: React.ReactNode }
    | {
      dangerouslySetInnerHTML: {
        __html: string;
      };
    }
  );

const headingStyles = 'font-bold text-sm pb-2 ';
const subheadingStyles = 'font-bold text-xs pb-1 ';

const titleColors = {
  primary: 'text-black dark:text-white',
  secondary: 'text-gray-600 dark:text-slate-500',
};

function Heading({
  variant = 'primary',
  as = 'h2',
  className,
  ...rest
}: TitleProps) {
  return React.createElement(as, {
    className: clsx(headingStyles, className),
    ...rest,
  });
}

function Subheading({
  variant = 'secondary',
  as = 'h4',
  className,
  ...rest
}: TitleProps) {
  return React.createElement(as, {
    className: clsx(subheadingStyles, className),
    ...rest,
  });
}

type ParagraphProps = {
  className?: string;
  prose?: boolean;
  textColorClassName?: string;
  as?: React.ElementType;
} & (
    | { children: React.ReactNode }
    | { dangerouslySetInnerHTML: { __html: string } }
  );

const paragraphStyles = ""

function Paragraph({
  className,
  prose = true,
  as = 'p',
  textColorClassName = 'text-secondary',
  ...rest
}: ParagraphProps) {
  return React.createElement(as, {
    className: clsx(paragraphStyles, className, {
      'prose prose-light dark:prose-dark': prose,
    }),
    ...rest,
  });
}

type QuoteProps = {
  children: React.ReactNode;
  className?: string;
};

const Quote = ({ children, className }: QuoteProps) => (
  <blockquote className={clsx("border-l-2 border-white-300 pl-4 italic text-gray-400", className)}>
    {children}
  </blockquote>
);


type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

function Link({ className, ...props }: LinkProps) {
  return (
    <a
      className={`text-blue-500 hover:text-blue-700 ${className}`}
      {...props}
    />
  );
}


const BlogImage = ({
  src,
  alt = '',
  transparentBackground = false,
  className,
  ...rest
}: React.ComponentProps<'img'> & { transparentBackground?: boolean }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full rounded-lg object-cover p-5 ${className || ''}`} // Combina className si se pasa
      style={{
        backgroundColor: transparentBackground ? 'transparent' : 'rgb:e6e9ee',
        ...rest.style,
      }}
      {...rest}
    />
  );
};
export { Heading, Subheading, Paragraph, Quote, Link, BlogImage };

