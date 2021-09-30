import React from 'react'
import { Link , useParams } from 'react-router-dom'

const Edit = () => {
    const {id} = useParams();
    return (
       <>
       <div className="add-main">
        <span className="add-post">Edit Stock {id} </span>
        </div>

        <div className="main-forms">
        
            <form >
        
                <input 
                placeholder="Stock Name"
                type="text"/>
                <br/>
                <input
                placeholder="Stock Price (Buy)"
                 type="number"/>
                <br/>
                <input
                placeholder="Stock Price (Current)"
                 type="number"/>
                 <br/>
                 <input 
                placeholder="Status"
                type="text"/>
                <br/>
                <br/>
                <br/>
                <Link to="/"
                 className="btn-4" 
                 type="submit">Update value
                </Link>
                &emsp;
                <Link to="/"
                 className="btn-5" 
                 type="submit">Cancel
                </Link>
            </form>
        </div>
       </>
    )
}

export default Edit
