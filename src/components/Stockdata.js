import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const Stockdata = () => {
   
    const dataStock = useSelector(state => state);
    
    // useEffect(() =>{
    //     localStorage.setItem("data" , JSON.stringify(dataStock))
    //     },[dataStock]);

    return (
        <>
        <h1>welcome to stock data page</h1>
        <div className="main-table">
        <table class="table">
  <thead>
    <tr>
      <th className="table-secondary" scope="col">Id</th>
      <th className="table-secondary" scope="col">Stock Name</th>
      <th className="table-secondary" scope="col">Stock Price ( buy )</th>
      <th className="table-secondary" scope="col">Stock Price ( current )</th>
      <th className="table-secondary" scope="col">Sign</th>
      <th className="table-secondary" scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {
   dataStock.map((dataStock , id )=> (
       <tr>
           <td>{id+1}</td>
           <td>{dataStock.stockName}</td>
           <td>{dataStock.stockPricebuy}</td>
           <td>{dataStock.stockPricecurrent}</td>
           <td>{dataStock.sign}</td> 
           <td>
               <Link to = {`/edit/${dataStock.id}`}
               className="btn btn-small btn-primary mr-2">Edit</Link>
               &emsp;
                <button type="button" to = {`/edit/${dataStock.id}`}
               className="btn btn-small btn-danger mr-2">Delete</button>
           </td>
       </tr>

   ))     
         
  }
    </tbody>
    </table>
    </div>


        </>
    )
}

export default Stockdata
