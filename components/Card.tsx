
export default function Card(){


    
    
    async function logMovies(name: string, number: number) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
        const movies = await response.json();

        return console.log(movies)
    }
    
    
  
    
    

    interface Card{
        
    }
    
    return(
        <div className="">
            eliel diniz
        </div>
    )
}