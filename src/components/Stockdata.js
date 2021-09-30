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
        <span  className= "main-stock">welcome to stock data page</span>
        <div className="main-table">
        <table class="table">
  <thead className="heading">
    <tr>
      <th className="table-primary" scope="col">Id</th>
      <th className="table-primary" scope="col">StockName</th>
      <th className="table-primary" scope="col">StockPrice (buy)</th>
      <th className="table-primary" scope="col">StockPrice (current)</th>
      <th className="table-primary" scope="col">Sign</th>
      <th className="table-primary" scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {
   dataStock.map((dataStock , id )=> (
       <tr>
           <td className="table-dark">{id+1}</td>
           <td  className="table-dark">{dataStock.stockName}</td>
           <td  className="table-dark">{dataStock.stockPricebuy}</td>
           <td  className="table-dark">{dataStock.stockPricecurrent}</td>
           <td  className="table-dark">{dataStock.sign}</td> 
           <td  className="table-dark">
               <Link to = {`/edit/${dataStock.id}`}
               className="btn-2">Edit</Link>
               &emsp;
                <button type="button" 
               className="btn-3">Delete</button>
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
