import '../Searchbar/Searchbar.css';
const Searchbar = () => {
  return (
    <form className='searchbar-form-styles'>
      <label className='searchbar-label'>
        <span>Enter ZipCode</span>
        <input type="number" name="searchbar" placeholder="ZipCode" />
      </label>
    </form>
  );
};

export default Searchbar;
