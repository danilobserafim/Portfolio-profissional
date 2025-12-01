export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <a href="#">
          <h1 className="text-xl font-bold">Danilo Barbosa</h1>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#sobre"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
          >
            Sobre
          </a>
          <a
            href="#habilidades"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
          >
            Habilidades
          </a>
          <a
            href="#projetos"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
          >
            Projetos
          </a>
        </nav>
      </div>
    </header>
  );
}
