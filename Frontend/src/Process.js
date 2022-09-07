import React, {useRef,useState,useContext} from 'react'
import axios from 'axios';
import AuthContext from "./context/AuthProvider";

function Process() {

    
    const [searchText, setSearchText] = useState("");
    const [responseData,setResponseData] = useState({});
    const searchForPlayer = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:8000/search/alpha/search",
                JSON.stringify({ searchText }),
                {
                    headers: { 'Content-Type': 'application/json',
                               'Authorization': 'Bearer ' 
                            },      
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            setResponseData(response.data);
        } catch (err) {
            console.log(err);
        }
    }
  return (
    <div>
        <h5>Search Files</h5>
        <input type="text" onChange={e=>setSearchText(e.target.value)}/>
        <button onClick={searchForPlayer}>Search</button>
    </div>
  )
}

export default Process