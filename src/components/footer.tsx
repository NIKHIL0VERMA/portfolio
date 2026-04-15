import { Button } from '@/components/button';

export const Footer = () => {
  return (
    <footer className="my-2 text-sm text-muted-foreground">
      © {new Date().getFullYear()}{' '}
      <Button variant="link" className="text-muted-foreground p-0 font-medium">
        <a href="https://github.com/NIKHIL0VERMA">Nikhil Verma</a>
      </Button>
      . All rights reserved.
    </footer>
  );
};
