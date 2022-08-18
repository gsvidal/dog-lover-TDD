import './Filter.css';

export const Filter = (props) => {
  const { filters, setFilters } = props;

  const handleFilter = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="filter">
      <div className="select-container">
        <label htmlFor="select-status" className="select-label">
          Favorite Status
        </label>
        <select
          name="favorite"
          id="select-status"
          className="select"
          onChange={handleFilter}
        >
          <option value="any">Any</option>
          <option value="favorite">Favorite</option>
          <option value="no favorite">No favorite</option>
        </select>
      </div>

      <div className="select-container">
        <label htmlFor="select-gender" className="select-label">
          Gender Status
        </label>
        <select
          name="gender"
          id="select-gender"
          className="select"
          onChange={handleFilter}
        >
          <option value="any">Any</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
    </div>
  );
};
