import Image from 'next/image'


    
export default function Card({}){

   

    

    return(
        <div >
            <div className="flex flex-1 flex-col justify-center items-center  bg--500 w-64 h-80 border bg-yellow-900 rounded-2xl mt-5">
                <h1 className='text-xl font-semibold font-serif text-white'>Pokemon :<span className='font-semibold text-lg font-serif text-orange-300'> </span> </h1>
                <div className='border '>
                    <Image
                    src="/image.svg"
                    alt=""
                    width={200}
                    height={200}
                    />
                </div>

                <div className='text-ms font-semibold font-serif text-white '>
                    <div>
                        <p>Poder :</p>
                    </div>
                    
                    <div>
                        <p>HP :</p>
                    </div>
                    
                    <div>
                        <p>Dano :</p>
                    
                    </div>
                
    
                    <div className='text-sm text-yellow-500'> 
                        <p>Sobre o Pokemon:</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}









