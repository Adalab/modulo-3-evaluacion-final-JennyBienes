const GetApiData = (filterSpecie) => {
    return fetch(
        `https://rickandmortyapi.com/api/character/?species=${filterSpecie}`
    )
        .then((response) => response.json())
        .then((data) => {
            const ApiData = data.results.map((character)=>{
                return {
                    id: character.id,
                    name: character.name,
                    status: character.status,
                    species: character.species,
                    image: character.image,
                    origin: character.origin.name,
                    episodes: character.episode.length, //longitud del array
                    
                };
            });
            console.log('La data extraida es');
            console.log(ApiData);
            
            return ApiData;
        });
};

export default GetApiData;


