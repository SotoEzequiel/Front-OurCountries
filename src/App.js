import './App.css';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import Inicio from "./componentes/Inicio.jsx";
import Home from "./componentes/Home.jsx"
import ActivityCreate from "../src/componentes/ActivityCreate.jsx"
import { Details } from './componentes/Details';
import estilos from "./style/Inicio.module.css"
import NavBar from './componentes/nav-bar';
import Creado from "./componentes/Creado.jsx"

function App() {
  return (
    <BrowserRouter>  
      <div className="App">
        <Route exact path="/" component={Inicio}/>
        <Route path="/home"><NavBar/><Home/></Route>
        <Route path="/creation"><NavBar/><ActivityCreate/></Route>
        <Route path="/details/:id" render={(props)=><Details id={props.match.params.id}/>}  />
        <Route path="/created" render={()=><Creado/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
