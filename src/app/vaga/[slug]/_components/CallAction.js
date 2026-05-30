export default function CallAction(){

    return (

      <section className="mt-8 bg-linear-to-br from-blue-700 to-indigo-900 text-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-black tracking-tight">
            Sua empresa está contratando em Jaú?
          </h3>
          <p className="mt-1 text-sm text-blue-100 max-w-md">
            Coloque sua vaga em evidência máxima no topo do site e encontre o profissional ideal rapidamente.
          </p>
        </div>
        <a
          href="https://wa.me/14996031672"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white hover:bg-blue-50 text-blue-800 font-bold px-5 py-3 rounded-xl shadow-sm transition-colors text-sm whitespace-nowrap"
        >
          Anunciar Vaga Destaque
        </a>
      </section>
        
    )
}