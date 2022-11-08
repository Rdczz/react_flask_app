import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Form() {
    const [data, setdata] = useState("");
    function makePostRequest(path, queryObj) {
        axios.post(path, queryObj).then(
            (response) => {
                var result = response.data;
                console.log(result);
            },
            (error) => {
                console.log(error);
            }
        );
    }   
    let handleSubmit = (e) => {
        e.preventDefault();
        let queryObj = { name: data};
        makePostRequest('http://localhost:5000/test', queryObj);
    }
  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
            <label className="form-label">Sample text</label>
            <input type="text" className="form-control" placeholder="enter sample text" value={data} onChange={(e)=>setdata(e.target.value)} required/>
            <button>Submit</button>
        </form>
    </div>
    </>
  )
}

export default Form