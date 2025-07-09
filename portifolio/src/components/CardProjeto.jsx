import React from 'react';

export default function CardProjeto({ nome, descricao, tecnologias, url, imagem, periodo }) {
  return (
    <div 
      className="rounded-lg shadow-xl overflow-hidden flex flex-col h-full transform transition-all hover:scale-105 duration-300 ease-in-out card-bg-light dark:card-bg-dark border-light dark:border-dark"
    >
      {imagem && (
        <img
          src={imagem}
          alt={`Imagem do projeto ${nome}`}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 
          className="text-2xl font-semibold mb-2 gradient-text"
        >
          {nome}
        </h3>
        {periodo && <p className="text-xs mb-2 italic secondary-text-light dark:secondary-text-dark">{periodo}</p>}
        <p className="mb-4 text-sm flex-grow secondary-text-light dark:secondary-text-dark">{descricao}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-1 text-xs primary-text-light dark:primary-text-dark">Tecnologias:</h4>
          <div className="flex flex-wrap gap-2">
            {tecnologias && tecnologias.map(tech => (
              <span
                key={tech}
                className="text-xs font-semibold px-2.5 py-0.5 rounded-full tech-bg-light dark:tech-bg-dark primary-text-light dark:primary-text-dark"
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