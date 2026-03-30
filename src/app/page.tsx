import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { RecentProjects } from '@/components/recent-projects';
import { SectionDivider } from '@/components/section-divider';
import { Sidebar } from '@/components/sidebar';
import { SidebarMobile } from '@/components/sidebar-mobile';
import { ThemeToggle } from '@/components/theme-toggle';

const HomePage = async () => {
  return (
    <>
      <div className="container flex flex-col items-center">
        <Header />
        <Sidebar />
        <SidebarMobile />
        <Intro />
        <SectionDivider />
        <About />
        <Experience />
        <RecentProjects />
        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
};

export default HomePage;
