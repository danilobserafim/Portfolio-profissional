import { motion } from "framer-motion";
export default function Contact() {
  return (
    <motion.section
      id="contato"
      className=" bg-gray-100 dark:bg-gray-800  dark:text-gray-100 py-20 px-4 text-center"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <motion.h3 className="text-2xl font-bold mb-6">Contato</motion.h3>
      <motion.p className="dark:text-gray-300 mb-4">
        Entre em contato para projetos, parcerias ou oportunidades.
      </motion.p>
      <motion.p className="text-lg font-medium flex justify-center gap-2 items-center">
        <img style={{ maxWidth: "24px" }} src="email.png" />
        danilob.serafim@gmail.com
      </motion.p>
      <motion.p className="text-lg font-medium flex justify-center gap-2 items-center">
        <img style={{ maxWidth: "24px" }} src="whatsapp.png" />
        (81)9 9768-6925
      </motion.p>
    </motion.section>
  );
}
