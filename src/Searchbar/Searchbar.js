import '../Searchbar/Searchbar.css';
const Searchbar = () => {
  return (
    <form>
      <label className='searchbar-label'>
        <span>Enter ZipCode</span>
        <input type="text" name="searchbar" placeholder="Search" />
      </label>
    </form>
  );
};

export default Searchbar;
