
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

const headingStyles = 'font-bold text-sm';
const subheadingStyles = 'font-bold text-xs';

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

export { Heading, Subheading, Paragraph };
