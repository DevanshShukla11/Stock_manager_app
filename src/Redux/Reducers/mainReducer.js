
//Firstly we have to initialize the initial state of our application 

const initialState = [
    {
      id:0,
      stockName:"Zomato",
      stockPricebuy:140,
      stockPricecurrent:160,
      sign:"Devansh Shukla"
    },
    {
      id:1,
      stockName:"Ola",
      stockPricebuy:140,
      stockPricecurrent:150,
      sign:"Virat Shukla",
    }  
];



// const getLocalItems=()=>{
//   let data = localStorage.getItem("data") 
//   console.log(data); 
  
//   if(data){
//     return  JSON.parse(localStorage.getItem("data"));
//   }
//   else{
//     return [];
//   }
//  }

//Then we are passing our initial state to our state variable to use it further 

const mainReducer = (state = initialState,action) =>{
    switch (action.type) {
      case "ADD_STOCK":
        state = [...state, action.payload]
        return state;
        default:
             return state;
    
    }
}
export default mainReducer;
