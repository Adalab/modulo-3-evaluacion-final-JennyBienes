import '../stylesheets/layout/filters.scss';


const Filters = (props) => {
    const handleFilterNameChild = (ev) => {
        ev.preventDefault();
        props.handleFilters({
            key: ev.target.id,
            value: ev.target.value,
        });
    };
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
                value={props.filterName }
                onChange={handleFilterNameChild}
                />
                
            </form >
        </div>
    );
};

export default Filters;