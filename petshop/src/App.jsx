import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import Home from './pages/Home/Home'
import ProductoDetalle from './pages/ProductoDetalle/ProductoDetalle'
import Carrito from './pages/Carrito/Carrito'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={ <Home /> }/>
        <Route path='/productos' element={ <ItemListContainer Mensaje="Nuestros productos" /> }/>
        <Route path='/producto/:id' element={ <ProductoDetalle /> }/>
        <Route path='/carrito' element={ <Carrito /> }/>
      </Route>
    </Routes>
  )
}

export default App;
