import '../stylesheets/layout/filters.scss';


const Filters = (props) => {

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
                        <option value="">Todos</option>
                        <option value="Human">Humano</option>
                        <option value="Alien">Alien</option>
                        <option value="Animal">Animal</option>
                        <option value="Humanoid">Humanoide</option>
                    </select>
                </div>
            </form >
        </div>
    );
};

export default Filters;