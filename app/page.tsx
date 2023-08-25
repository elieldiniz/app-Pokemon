import Image from 'next/image'



export default function Home() {

  return (
    <>
    <section className="flex min-h-screen flex-col gap-5 items-center  bg-yellow-950">
      <Image
        src="/image.svg"
        className='mt-10'
        alt="Description of the image"
        width={500}
        height={300}
      />
      <h1 className=' text-white text-2xl font-medium font-mono'>
      Bem vindo a Pokemon <span className='text-3xl font-semibold font-serif text-orange-300'>Generations</span>
      </h1>
      <p className='text-white text-xl font-medium font-mono'>Aqui voce podera saber sobre movimentos de Pokémon, <br/>
      incluindo seus efeitos, tipos, potência, precisão e quais<br/>
      Pokémon podem aprender esses movimentos.</p>
      <button className=' text-white border border-cyan-600 py-2 px-8 rounded-lg bg-cyan-700 hover:text-black hover:bg-cyan-300'>
        <a href="/pokemon">Comecar</a>
      </button>

    </section>
    </>
  )
}


