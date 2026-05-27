import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const educationItems = [
  { title: "Engenharia de Software", place: "UniAnchieta — Jundiaí/SP", status: "Em andamento" },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="educacao" className="py-12 lg:py-16" ref={ref}>
      <div className="container mx-auto px-8 lg:px-16">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-light text-foreground mb-12"
        >
          Educação
        </motion.h2>

        <div className="flex flex-col gap-6">
          {educationItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ x: -30, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border"
            >
              <span className="mt-1.5 w-3 h-3 rounded-full bg-code-keyword shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground mt-1">{item.place}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-secondary text-foreground">
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
