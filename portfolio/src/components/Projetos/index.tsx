import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardProjetos from './CardProjetos';


export default function Projetos() {


    return (
      <div className='mt-10 flex flex-col align-middle justify-center text-slate-300 text-center'>
        <div>

      <h1 className="text-3xl font-bold">Projetos:</h1>
        <CardProjetos />

        </div>
      </div>
    )
    };