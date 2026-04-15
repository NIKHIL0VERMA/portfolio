import { Button } from '@/components/button';

export const Footer = () => {
  return (
    <footer className="my-2 text-sm text-muted-foreground">
      © {new Date().getFullYear()}{' '}
      <Button variant="link" className="p-0 font-medium text-muted-foreground">
        <a href="https://github.com/Skolaczk">Nikhil Verma</a>
      </Button>
      . All rights reserved.
    </footer>
  );
};
