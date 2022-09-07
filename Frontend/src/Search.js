import {Link} from 'react-router-dom';

const Search = () => {
    return(
        <div className="create">
            <h2>Create a New Note</h2>
            <Link to="/Upload">
                <button>Upload</button>
            </Link>
            <Link to="/Process">
                <button>Search</button>
            </Link>
        </div>
    );
}

export default Search;