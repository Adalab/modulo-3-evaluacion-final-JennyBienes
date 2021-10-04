const GetApiData = (filterSpecie, filterName) => {
  return fetch(
    `https://rickandmortyapi.com/api/character/?name=${filterName}&species=${filterSpecie}`
  )
    .then((response) => {
      console.log ('El Resultado del fetch es', response.status)
        if (response.ok) return response.json();
      else return null;
    })
    .then((data) => {
      if (!data) {
       console.log('El response trajo error, por lo que se devuelve array vacio')
        return [];
      }
      console.log('La cantidad de elementos que encuentra en Api es ', data);
      const ApiData = data.results.map((character) => {
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

      console.log(
        'La data extraida para la búsqueda por ',
        filterName,
        filterSpecie,
        'es:'
      );

      return ApiData;
    });
};

export default GetApiData;