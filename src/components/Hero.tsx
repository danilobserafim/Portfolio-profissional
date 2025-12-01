import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-28 bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="text-4xl font-bold mb-4">Desenvolvedor Full Stack</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Construo soluções completas — do frontend ao backend — com foco em
          performance, escalabilidade e alto padrão de engenharia.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#projetos"
            className="inline-block px-5 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="inline-block px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Entrar em contato
          </a>
        </div>
      </motion.div>
    </section>
  );
}
