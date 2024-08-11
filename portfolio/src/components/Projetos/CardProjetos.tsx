import axios from 'axios';
import React, { useEffect, useState } from 'react';
import projetos from '../../projetos/projetos.json';
interface Repo {
    id: number;
    nome: string;
    url: string;
    linguagem: string;
    description: string;
  }

export default function CardProjetos() {

const repos = projetos as Repo[];

    return (
        <div className='flex text-slate-300 justify-center'>

          <ul className="mt-10 justify-center align-middle flex-col flex gap-3 md:flex-row">

            {repos.map(repo => ( 
            <div className='rounded-lg text-gray-800 flex h-[200px] w-[300px] bg-slate-200 justify-center'>

              <li className="p-5" key={repo.id}>
                <a className="text-xl font-bold"  target="_blank" href={repo.url}>{repo.nome} </a>
                <p className="text-justify">{repo.description}</p>
              </li>
            </div>
            ))}

          </ul>
        </div>
      );

}