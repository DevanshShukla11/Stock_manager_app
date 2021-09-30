import './App.css';
import Navbar from './components/Navbar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import Stockdata from './components/Stockdata';

function App() {
  return (
   <>
   <Navbar/>
   <ToastContainer/>
   <Switch>
    <Route exact path="/"  component={()=> <Home/>}/>
    <Route exact path="/contact" component={()=> <Add/>}  />
    <Route  path="/add" component={()=> <Add/>} />
    <Route  path="/edit/:id" component={()=> <Edit/>} />
    <Route  path="/stock-data" component={()=> <Stockdata/>} />
   </Switch>
   </>
  );
}

export default App;
