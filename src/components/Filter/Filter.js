export const Filter = () => {
  return (
    <div className="filter">
      <label htmlFor="select-status">Favorite Status</label>
      <select name="favorite-status" id="select-status">
        <option value="any">Any</option>
        <option value="favorite">Favorite</option>
        <option value="no favorite">No favorite</option>
      </select>

      <label htmlFor="select-gender">Gender Status</label>
      <select name="gender-status" id="select-gender">
        <option value="any">Any</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
    </div>
  );
};
