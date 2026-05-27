import { motion } from "framer-motion";

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const links = ["Sobre Mim", "Skills", "Educação", "Certificados"];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-5 bg-background/80 backdrop-blur-md"
    >
      <div className="text-xl font-bold tracking-wider text-foreground">
        {"<MD />"}
      </div>

      <div className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => onNavigate(link)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {link}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
