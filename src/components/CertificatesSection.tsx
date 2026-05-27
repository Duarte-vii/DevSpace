import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const certificates = [
  {
    title: "Trilha PHP com Orientação a Objetos",
    type: "Trilha • 4 cursos",
    hours: "39h",
    date: "Jun 2025",
    url: "https://cursos.alura.com.br/degree/certificate/37c0ee4f-b8b0-41fc-9b37-a309f6e9220b",
  },
  {
    title: "PHP: Interfaces, Namespaces, Traits e Exceções",
    type: "Curso",
    hours: "8h",
    date: "Jun 2025",
    url: "https://cursos.alura.com.br/certificate/46b2c520-1a54-4799-932d-f5de842e4a26",
  },
  {
    title: "PHP: criando sua aplicação",
    type: "Curso",
    hours: "8h",
    date: "Mai 2025",
    url: "https://cursos.alura.com.br/certificate/735a1cdf-be00-4c3c-8c7e-32e86fb13bd7",
  },
  {
    title: "Git e GitHub: compartilhando e colaborando em projetos",
    type: "Curso",
    hours: "8h",
    date: "Mai 2025",
    url: "https://cursos.alura.com.br/certificate/91480ca2-bd57-4232-af54-f4cb330d43bb",
  },
  {
    title: "Gestão Ágil: explorando conceitos da agilidade",
    type: "Curso",
    hours: "8h",
    date: "Fev 2025",
    url: "https://cursos.alura.com.br/certificate/02e8c22c-5c75-4b11-870a-9b02b26e789f",
  },
];

const CARD_WIDTH = 380 + 24; // md card width + gap

const CertificatesSection = () => {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "right" ? CARD_WIDTH * 2 : -CARD_WIDTH * 2,
      behavior: "smooth",
    });
  };

  return (
    <section id="certificados" className="py-12 lg:py-16 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-8 lg:px-16 mb-8 flex items-end justify-between gap-4">
        <div>
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light text-foreground mb-4"
          >
            Certificados
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-muted-foreground"
          >
            Cursos concluídos na Alura. Clique para visualizar.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-2 shrink-0"
        >
          <button
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-code-keyword transition-all duration-200 hover:-translate-y-0.5"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Próximo"
            className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-code-keyword transition-all duration-200 hover:-translate-y-0.5"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          <div className="flex gap-6 w-max px-8 lg:px-16 py-3">
            {certificates.map((cert, i) => (
              <motion.a
                key={`${cert.url}-${i}`}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 40, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group relative w-[300px] md:w-[380px] shrink-0 snap-start rounded-xl bg-card border border-border p-6 hover:border-code-keyword transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <Award className="w-6 h-6 text-code-keyword" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-code-keyword transition-colors" />
                </div>

                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground">
                    {cert.type}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground leading-snug min-h-[3.5rem] group-hover:text-code-keyword transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between pt-3 border-t border-border text-sm text-muted-foreground">
                    <span>{cert.hours}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
