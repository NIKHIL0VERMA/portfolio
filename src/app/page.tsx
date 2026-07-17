import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { RecentProjects } from '@/components/recent-projects';
import { Sidebar } from '@/components/sidebar';
import { SidebarMobile } from '@/components/sidebar-mobile';
import { ThemeToggle } from '@/components/theme-toggle';
import { SpeedInsights } from "@vercel/speed-insights/next";

const HomePage = async () => {
  return (
    <>
      <div className="container flex flex-col items-center">
        <Sidebar />
        <SidebarMobile />
        <About />
        <Experience />
        <RecentProjects />
        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="hidden bg-background sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
      <SpeedInsights />
    </>
  );
};

export default HomePage;
