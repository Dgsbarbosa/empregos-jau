export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="/" className="flex items-baseline gap-1 text-2xl font-black text-blue-600 tracking-tight">
          <span>Empregos</span>
          <span className="text-gray-900 font-light text-lg">Jaú</span>
        </a>

        {/* Menu de Navegação */}
        <nav>
          <ul className="flex items-center gap-6 text-sm font-semibold text-gray-600">
            <li>
              <a href="/sobre" className="hover:text-blue-600 transition-colors">SOBRE</a>
            </li>
            <li>
              <a href="/vagas" className="hover:text-blue-600 transition-colors">VAGAS</a>
            </li>
            <li>
              <a href="/contato" className="hover:text-blue-600 transition-colors">CONTATO</a>
            </li>
          </ul>
        </nav>

        {/* Botão de Ação */}
        <div>
          <a
            href="/anunciar"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium shadow-sm transition-colors"
          >
            Anunciar Vaga
          </a>
        </div>

      </div>
    </header>
  );
}
