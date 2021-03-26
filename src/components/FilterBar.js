const FilterBar = (props) => {

    const onOrderYearChange = (e) => {
        props.orderMovies(e.target.value);
    }

    return (
        <div className="filter-bar">
            <select onChange={e => onOrderYearChange(e)}>
            <option value="YEAR_NEW">Neueste zuerst</option>
            <option value="YEAR_OLD">Ältere zuerst</option>
            </select>
        </div>
    );
}
 
export default FilterBar;