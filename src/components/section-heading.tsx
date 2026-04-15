import { ReactNode } from 'react';

type TProps = {
  heading: string;
  content?: string | ReactNode | undefined;
};

export const SectionHeading = ({ heading, content }: TProps) => {
  return (
    <div className="mb-10 text-center">
      <h2 className="font-heading text-3xl font-semibold">{heading}</h2>
      {content && (
        <p className="mt-3 text-sm text-muted-foreground">{content}</p>
      )}
    </div>
  );
};
