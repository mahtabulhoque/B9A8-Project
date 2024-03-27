import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBook from './components/ListedBook/ListedBook';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BooksDetails/BookDetails';
import Movies from './components/Movies/Movies';
import PagesToRead from './components/PagesToRead/PagesToRead';
import Diary from './components/Diary/Diary';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listed-book',
        element:<ListedBook></ListedBook>,
      },

      {
        path:'/chart',
        element:<PagesToRead></PagesToRead>
      },
      {
        element:<ErrorPage></ErrorPage>
      },
      {
        path:'/movies',
        element:<Movies></Movies>
      },
      {
        path:'/diary',
        element:<Diary></Diary>
      },
      {
        path:'/book/:bookId',
        element:<BookDetails></BookDetails>,
        loader: () => fetch('/bookData.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
 
)
