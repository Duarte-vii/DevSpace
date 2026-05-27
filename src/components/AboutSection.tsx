import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const codeLines = [
  { num: 1, tokens: [{ type: "keyword", text: "const" }, { type: "var", text: " name" }, { type: "op", text: " = " }, { type: "string", text: '"Matheus Duarte"' }, { type: "op", text: ";" }] },
  { num: 2, tokens: [{ type: "keyword", text: "const" }, { type: "var", text: " role" }, { type: "op", text: " = " }, { type: "string", text: '"Full Stack Developer"' }, { type: "op", text: ";" }] },
  { num: 3, tokens: [{ type: "keyword", text: "const" }, { type: "var", text: " location" }, { type: "op", text: " = " }, { type: "string", text: '"Jundiaí - SP"' }, { type: "op", text: ";" }] },
  { num: 4, tokens: [{ type: "keyword", text: "const" }, { type: "var", text: " phone" }, { type: "op", text: " = " }, { type: "string", text: '"(11) 9 5530-3539"' }, { type: "op", text: ";" }] },
  { num: 5, tokens: [{ type: "keyword", text: "const" }, { type: "var", text: " email" }, { type: "op", text: " = " }, { type: "string", text: '"matheus240377@gmail.com"' }, { type: "op", text: ";" }] },
  { num: 6, tokens: [{ type: "keyword", text: "let" }, { type: "var", text: "  hobbies" }, { type: "op", text: " = " }, { type: "bracket", text: "[" }, { type: "string", text: "'Código'" }, { type: "op", text: ", " }, { type: "string", text: "'Games'" }, { type: "op", text: ", " }, { type: "string", text: "'Música'" }, { type: "op", text: ", " }, { type: "string", text: "'Viagens'" }, { type: "bracket", text: "]" }, { type: "op", text: ";" }] },
  { num: 7, tokens: [{ type: "comment", text: "// Disponível para novas oportunidades!" }] },
  { num: 8, tokens: [{ type: "var", text: "console" }, { type: "op", text: "." }, { type: "var", text: "log" }, { type: "op", text: "(" }, { type: "string", text: "'Vamos trabalhar juntos!'" }, { type: "op", text: ");" }] },
];

const tokenColors: Record<string, string> = {
  keyword: "text-code-keyword",
  string: "text-code-string",
  comment: "text-code-comment",
  bracket: "text-code-bracket",
  var: "text-foreground",
  op: "text-muted-foreground",
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mim" className="py-12 lg:py-16" ref={ref}>
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-xl overflow-hidden bg-code-bg border border-border"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-code-line border-b border-border">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-code-bg rounded-md text-xs text-muted-foreground">
              <span className="text-code-bracket font-bold">JS</span>
              <span>SobreMim.js</span>
              <span className="ml-2 opacity-50">×</span>
            </div>
          </div>

          <div className="p-6 md:p-8 font-mono-code text-sm md:text-base overflow-x-auto">
            {codeLines.map((line, i) => (
              <motion.div
                key={line.num}
                initial={{ x: -30, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start py-1.5"
              >
                <span className="w-8 text-right mr-6 text-muted-foreground select-none text-sm">
                  {line.num}
                </span>
                <span className="flex flex-wrap">
                  {line.tokens.map((token, j) => (
                    <span key={j} className={tokenColors[token.type] || "text-foreground"}>
                      {token.text}
                    </span>
                  ))}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
