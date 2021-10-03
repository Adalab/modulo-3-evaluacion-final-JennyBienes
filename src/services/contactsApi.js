const GetApiData = (filterSpecie, filterName) => {
    return fetch(
        `https://rickandmortyapi.com/api/character/?name=${filterName}&species=${filterSpecie}`
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
                    episodes: character.episode.length,
                    
                };
            });
            console.log('La data extraida para la búsqueda por ', filterName, filterSpecie,'es:');
           // console.log(ApiData);
            
            return ApiData;
        });
};

export default GetApiData;


