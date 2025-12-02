import { motion } from "framer-motion";
export default function Contact() {
  return (
    <section
      id="contato"
      className=" bg-gray-100 dark:bg-gray-800  dark:text-gray-100 py-20 px-4 text-center"
    >
      <motion.h3
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contato
      </motion.h3>
      <motion.p
        className="dark:text-gray-300 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Entre em contato para projetos, parcerias ou oportunidades.
      </motion.p>
      <motion.p className="text-lg font-medium">
        danilob.serafim@gmail.com
      </motion.p>
      <motion.p className="text-lg font-medium">(81)9 9768-6925</motion.p>
    </section>
  );
}
