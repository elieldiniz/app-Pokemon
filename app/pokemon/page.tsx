import React, { useState } from 'react';
import Card from '@/components/card'

export default function Page(){


    return(
        
        <section className=" bg-yellow-950 flex justify-center py-44  ">
            <div className="flex flex-col gap-10 ">
                <h1 className='cursor-pointer text-white text-2xl font-medium font-mono shadow-lg shadow-cyan-500/50 rounded-lg px-5 py-2 hover:bg-cyan-500/50 '> 
                Bem vindo a Pokemon <span className='text-3xl font-semibold font-serif text-orange-300'>Generations</span>
                </h1>
                <div className=''>
                    <p className='text-2xl font-semibold font-serif text-orange-300'>Nome ou Numero</p>
                    <div className='flex gap-4'>
                    <input
                    type="text"
                    value={''}
                    placeholder="Digite algo..."
                    className="border rounded p-2 mt-2"
                    />
                    <button className='border rounded p-2 mt-2  bg-cyan-500 hover:bg-cyan-500/50 hover:border-none hover:shadow-lg hover:text-white hover:shadow-cyan-300/50   ' onClick={''}>Procurar</button>
                    </div>
                   <p className='text-xl font-semibold font-serif text-orange-300 mt-4 '>Procure um pokemon pelo nome ou <br/>
                   usando se numero pokedex nacional.</p>
                </div>
            </div>
            

        </section>
            

        
    )
}