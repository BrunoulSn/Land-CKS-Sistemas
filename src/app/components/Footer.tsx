export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0F19] border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-lg font-bold text-white">
            CKS<span className="text-[#10B981]">Sistemas</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Fundada por Bruno Cristiano Silva e Jean Kaleb Silva.
          </p>
        </div>

        <div className="text-center sm:text-right">
          <p className="text-xs text-gray-400">
            &copy; {currentYear} CKS Sistemas. Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-gray-600 mt-1">
            Desenvolvido com foco em performance e resultados comerciais para
            PMEs.
          </p>
        </div>
      </div>
    </footer>
  );
}
