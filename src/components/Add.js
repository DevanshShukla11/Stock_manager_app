import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Add = () => {

    const [stockName,setStockName] = useState("");
    const [stockPricebuy,setStockPricebuy] = useState("");
    const [stockPricecurrent,setStockPricecurrent] = useState("");
    const [sign,setSign] = useState("");
     
     //We are getting data of our state variable useing useSelector hook 
     const dataStock =  useSelector(state => state);
    //  console.log(dataStock);
     const dispatch = useDispatch();
     const history  = useHistory();


     const handleSubmit = (e) => {
         e.preventDefault();

        const checkStockname = dataStock.find(
            (dataStock) => dataStock.stockName === stockName);

        const checkStockbuyprice = dataStock.find(
            (dataStock) => dataStock.stockPricebuy === parseInt(stockPricebuy));
             console.log(checkStockbuyprice);

        const checkStockcurrentprice = dataStock.find(
             (dataStock) => dataStock.stockPricecurrent === parseInt(stockPricecurrent));
             console.log(checkStockcurrentprice);
          
        const checkSign = dataStock.find((dataStock) => dataStock.sign === sign);
        

         if(!stockName || !stockPricebuy || !stockPricecurrent || !sign)
         {
             return toast.warning("Plese fill in all fields")
         }
         if(checkStockname)
         {
             return toast.error("Stock name already Exists")
         }
         if(checkStockbuyprice)
         {
             return toast.error("Stock buy price cannot be Same as previous Stocks");
         }
         if(checkStockcurrentprice)
         {
             return toast.error("Stock current price cannot be Same as previous Stocks");
         }
         if(!checkSign)
         {
            return toast.error("Signature is not matching");
         }

        const data = {
            id: dataStock[dataStock.length - 1].id + 1,
            stockName,
            stockPricebuy,
            stockPricecurrent,
            sign,
         }
        //  console.log(data);

         dispatch({
             type:"ADD_STOCK",
             payload:data,
         })
         toast.success("Stock added successfully...")
         history.push("/stock-data")

     }

    return (
        <>
        <div className="add-main">
        <span className="add-post">Add Stock</span>
        </div>

        <div className="main-form">
            <form  onSubmit={handleSubmit}>
                <input 
                placeholder="Stock Name"
                value={stockName}
                onChange= {(e) => setStockName(e.target.value)}
                type="text"/>
                <br/>
                <input
                placeholder="Stock Price (Buy)"
                value={stockPricebuy}
                onChange= {(e) => setStockPricebuy(e.target.value)}
                 type="number"/>
                <br/>
                <input
                placeholder="Stock Price (Current)"
                value={stockPricecurrent}
                onChange= {(e) => setStockPricecurrent(e.target.value)}
                 type="number"/>
                <br/>
                 <input 
                placeholder="Signature "
                value={sign}
                onChange= {(e) => setSign(e.target.value)}
                type="text"/>
                <br/>
                <button
                className="btns" 
                 type="submit">Add Data
                </button>
            </form>
        </div>
        </>
    )
}

export default Add
