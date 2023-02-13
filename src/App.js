import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import OrderReview from './Components/OrderReview/OrderReview';
import Inventory from './Components/Inventory/Inventory';
import { productsAndCartLoader } from './Loaders/ProductsAndCartLoader';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: productsAndCartLoader,
          element: <Shop></Shop>
        },
        {
          path: 'order',
          loader: productsAndCartLoader,
          element: <OrderReview></OrderReview>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        }
      ]
    }
  ]);



  return (
    <div>

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
