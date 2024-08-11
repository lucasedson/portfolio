import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Repo {
    id: number;
    name: string;
    html_url: string;
  }

export default function Projetos() {

    const provisorio: Array<Repo> = [{
        id: 1,
        name: 'provisorio',
        html_url: 'https://github.com/lucasedson/provisorio'
    },

    {
        id: 2,
        name: 'provisorio2',
        html_url: 'https://github.com/lucasedson/provisorio2'
    }

]

    const url = 'https://api.github.com/users/lucasedson/repos';
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null)



useEffect(() => {
        axios
          .get<Repo[]>(url)
          .then(response => {
            setRepos(response.data);
            setLoading(false);
          })
          .catch(err => {
            setError('Erro ao buscar os repositórios');
            setLoading(false);
          });
      });
    
    //   if (loading) return <p>Carregando...</p>;
    //   if (error) return <p>{error}</p>;
    
  

    // console.log(repos)

    return (
        <div className='text-slate-300'>
          <h2>Meus Repositórios no GitHub</h2>
          <ul>

            {repos.map(repo => ( 
              <li key={repo.id}>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
            ))}

          </ul>
        </div>
      );
    };