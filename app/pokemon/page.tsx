
export default function Page(){



 

    return(
        <>
        <section className={` bg-yellow-950 flex justify-center py-44 shadow-lg shadow-cyan-500/50  
                            
                            `}>
            <div className="flex flex-col gap-10 ">
                <h1 className={`cursor-pointer text-white text-2xl font-medium font-mono text-center 
                             shadow-lg shadow-cyan-500/50 rounded-lg px-5 py-2 hover:bg-cyan-500/50
                             max-[414px]:text-xl
                              `}> 
                Bem vindo a Pokemon <span className='text-3xl font-semibold font-serif text-orange-300 max-[414px]:text-xl'>Generations {}</span>
                </h1>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-2xl font-semibold font-serif text-orange-300 max-[414px]:text-xl'>Nome ou Numero</p>
                    <div className='flex gap-4 max-[313px]:flex-col '>
                    <input
                    type="text"
                    value={''}
                    placeholder="Digite algo..."
                    className="border rounded p-2 max-[414px]:p-0 mt-2 "
                    />
                    <button className='border rounded  mt-2  bg-cyan-500 hover:bg-cyan-500/50 hover:border-none hover:shadow-lg hover:text-white hover:shadow-cyan-300/50   ' >Procurar</button>
                    </div>
                   <p className='text-xl font-semibold font-serif text-orange-300 mt-4  max-[414px]:text-base max-[313px]:text-center '>Procure um pokemon pelo nome ou <br/>
                   usando seu numero pokedex nacional.</p>
                </div>
            </div>
        </section>
        <div className={`
           flex flex-wrap gap-4 md:flex-no-wrap
           justify-center bg-yellow-800
        `}>
       
        </div>
       
    
        </>
    )
}