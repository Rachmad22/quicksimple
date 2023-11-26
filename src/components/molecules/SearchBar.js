import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "../../styles/searchBar.css"

const SearchBar = () => {
  return (
    <>
      <div className='bar-wrapper'>
        <SearchOutlinedIcon sx={{ color: "white" }} />
        <input type="text" />
      </div>
    </>
  )
}

export default SearchBar