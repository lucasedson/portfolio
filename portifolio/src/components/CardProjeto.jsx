import React from 'react';

export default function CardProjeto({ nome, descricao, tecnologias, url, imagem, periodo }) {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-full transform transition-all hover:scale-105 duration-300 ease-in-out">
      {imagem && (
        <img
          src={imagem}
          alt={`Imagem do projeto ${nome}`}
          className="w-full h-48 object-cover"
          loading="lazy" // Otimização de carregamento
        />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-2 text-blue-700">{nome}</h3>
        {periodo && <p className="text-xs text-gray-500 mb-2 italic">{periodo}</p>}
        <p className="text-gray-700 mb-4 text-sm flex-grow">{descricao}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-1 text-gray-600 text-xs">Tecnologias:</h4>
          <div className="flex flex-wrap gap-2">
            {tecnologias && tecnologias.map(tech => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors text-sm self-start"
          >
            Acessar Projeto
          </a>
        )}
      </div>
    </div>
  );
}