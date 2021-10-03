import '../stylesheets/layout/filters.scss';


const Filters = (props) => {
    //const handleFilterSpecie = (ev) => {
    //    ev.preventDefault();
    //    props.handleFilters({
    //        key: ev.target.id,
    //        value: ev.target.value,
    //    });
    //};
    //const handleFilterName = (ev) => {
     //   ev.preventDefault();
    //    props.handleFilters({
    //        key: ev.target.id,
    //        value: ev.target.value,
    //        });
    //    };
    
    const handleSubmit = (ev) => {
        if (ev.key === 'Enter') {
            ev.preventDefault();
        }
    };

    return (
        <div className="filters">
            <form className="form__search" onKeyDown={handleSubmit}>
                <input
                    className="input__search"
                    type="text"
                    placeholder="Escribe el nombre de un personaje"
                    id="filterName"
                    value={props.filterName}
                    onChange={props.handleFilterName}
                />
                <div className="select__filter">
                    <label htmlFor="filterSpecie">Selecciona la especie </label>
                    <select
                        className="select__input"
                        name="filterSpecie"
                        id="filterSpecie"
                        value={props.filterSpecie}
                        onChange={props.handleFilterSpecie}
                    >
                        <option value="Human">Humano</option>
                        <option value="Alien">Alien</option>
                    </select>
                </div>
            </form >
        </div>
    );
};

export default Filters;