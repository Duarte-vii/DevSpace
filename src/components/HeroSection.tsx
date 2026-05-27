import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import heroImg from "@/assets/hero-portrait-bw.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="container mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="z-10">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground uppercase"
          >
            MATHEUS DUARTE
          </motion.h1>
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground mt-2"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 text-sm md:text-base text-muted-foreground max-w-md leading-relaxed"
          >
            Desenvolvedor Full Stack com experiência em diversas tecnologias modernas.
            Apaixonado por criar soluções eficientes e escaláveis. Estudante de Engenharia
            de Software na UniAnchieta — Jundiaí/SP.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex items-center gap-4 mt-8"
          >
            <a
              href="https://wa.me/5511955303539"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#25D366] text-foreground hover:scale-110 transition-transform"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/matheusduarte07"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0A66C2] text-foreground hover:scale-110 transition-transform"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://github.com/Duarte-vii"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary text-foreground hover:scale-110 transition-transform"
            >
              <FaGithub size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative hidden lg:flex justify-center lg:justify-end"
        >
          <div className="relative w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px] h-[340px] sm:h-[420px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl lg:rounded-none">
            <img
              src={heroImg}
              alt="Matheus Duarte"
              className="w-full h-full object-cover object-[center_20%] lg:object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
