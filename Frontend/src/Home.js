import {Link} from 'react-router-dom';

const Create = () => {
    return(
        <div className="create">
            <h2>Create a New Note</h2>
            <Link to="/login">
                <button>Begin</button>
            </Link>
        </div>
    );
}

export default Create;