import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import style from '../styles/App.module.css'
import CardContainer from './CardContainer'
import ActionAreaCard from './MovieCard'
import Navbar from './Navbar'
import Layout from './Layout'
import HomePage from '../pages/Home'
import AddPage from '../pages/Add'
import UpdatePage from '../pages/Update'
import DeletePage from '../pages/Delete'
import MoviesContextProvider from '../contexts/movieContextProvider'
import Movie from '../pages/Movie'

function App() {
 const provider = createBrowserRouter(
      [
        {path:"/",element:<Layout></Layout>,children:[
          {index:true,element:<HomePage></HomePage>},
          {path:"/add",element:<AddPage></AddPage>},
          {path:"/update/:ID",element:<UpdatePage></UpdatePage>},
          {path:"/delete",element:<DeletePage></DeletePage>},
          {path:'/movie/:ID',element:<Movie></Movie>}
        ]}
      ]
    )
  return (
    
    <>
      <MoviesContextProvider>
        <RouterProvider router={provider}></RouterProvider>
      </MoviesContextProvider>
    </>
  )
}

export default App
