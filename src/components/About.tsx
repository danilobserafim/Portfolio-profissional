import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="max-w-5xl mx-auto py-20 px-4">
      <motion.h3
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        Sobre mim
      </motion.h3>
      <motion.p
        className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        Sou um desenvolvedor full stack com experiência sólida na criação de
        aplicações web modernas, escaláveis e orientadas a produto. Minha
        atuação abrange desde interfaces profissionais e eficientes até APIs
        robustas, arquitetadas com boas práticas, segurança e padrões modernos.
      </motion.p>
    </section>
  );
}
