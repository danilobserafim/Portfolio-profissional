import { motion } from "framer-motion";
export default function Skills() {
  return (
    <section
      id="habilidades"
      className="bg-gray-100 dark:bg-gray-800 py-20 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h3
          className="text-2xl font-bold mb-10"
          initial={{ opacity: 0, x: 8 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          Habilidades
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            <h4 className="text-xl font-semibold mb-4">Frontend</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>React, Next.js</li>
              <li>Componentização avançada</li>
              <li>Tailwind CSS</li>
              <li>Integração com APIs REST/GraphQL</li>
              <li>Boas práticas de UI/UX aplicadas ao código</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            <h4 className="text-xl font-semibold mb-4">Backend</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Node.js (Express, Fastify, NestJS)</li>
              <li>Prisma ORM</li>
              <li>MongoDB, PostgreSQL</li>
              <li>Autenticação JWT, OAuth, RBAC</li>
              <li>Arquitetura limpa e escalável</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
