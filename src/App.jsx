import './App.css';
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Inicio from './componentes/Inicio.jsx';
import HomeContainer from './container/HomeContainer';
import { Provider } from 'react-redux'
import store from './redux/store'
import CreationContainer from './container/CreationContainer';
import Details from './componentes/Details';
import Creado from './componentes/Creado';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Inicio />} />
        <Route path="/home" element={<HomeContainer />} />
        <Route path="/creation" element={<CreationContainer/>}/>
        <Route path="/details/:id" element={<Details />}/>
        <Route path="/created" element={<Creado/>}/>
      </>
    ));

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
