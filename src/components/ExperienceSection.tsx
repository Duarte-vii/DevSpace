import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Empresa A",
    role: "Full Stack Developer",
    type: "Full-time",
    period: "2023 - Presente",
    duration: "2 anos",
    color: "bg-blue-600",
  },
  {
    company: "Empresa B",
    role: "Backend Developer",
    type: "Full-time",
    period: "2021 - 2023",
    duration: "2 anos",
    color: "bg-yellow-500",
  },
  {
    company: "Empresa C",
    role: "Frontend Developer",
    type: "Full-time",
    period: "2019 - 2021",
    duration: "2 anos",
    color: "bg-pink-500",
  },
  {
    company: "Empresa D",
    role: "Desenvolvedor Jr.",
    type: "Full-time",
    period: "2017 - 2019",
    duration: "2 anos",
    color: "bg-red-600",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-8 lg:px-16">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-light text-center text-foreground mb-16"
        >
          Experience
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`${exp.color} rounded-2xl p-5 flex flex-col gap-4 hover:scale-[1.03] transition-transform duration-300`}
            >
              <div className="w-full aspect-square rounded-xl bg-background/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-foreground/80">
                  {exp.company.charAt(exp.company.length - 1)}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{exp.company}</h3>
                <p className="text-sm text-foreground/80">• {exp.type}</p>
                <p className="text-sm text-foreground/80">• {exp.period}</p>
                <p className="text-sm text-foreground/80">• {exp.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
