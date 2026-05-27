import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiJavascript,
  SiPhp,
  SiLaravel,
  SiGit,
  SiPython,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiDjango,
  SiSpring,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "Spring", icon: SiSpring, color: "#6DB33F" },
  { name: "SQL", icon: FaDatabase, color: "#4479A1" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Split into two rows
  const row1 = skills.slice(0, 6);
  const row2 = skills.slice(6);

  return (
    <section id="skills" className="py-12 lg:py-16" ref={ref}>
      <div className="container mx-auto px-8 lg:px-16">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-light text-center text-foreground mb-16"
        >
          Skills
        </motion.h2>

        <div className="flex flex-col items-center gap-5">
          {[row1, row2].map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-wrap justify-center gap-4">
              {row.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: (rowIdx * 6 + i) * 0.06 }}
                    className="flex items-center gap-3 px-6 py-3 rounded-full border border-skill-border bg-secondary/50 hover:bg-secondary hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    <Icon size={20} style={{ color: skill.color }} />
                    <span className="text-sm md:text-base text-foreground font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
