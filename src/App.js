import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watchpage from "./components/Watchpage";
import MainContainer from "./components/MainContainer";
function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[{
        path:"/",
        element:<MainContainer/>
      },{
        path:"/watch",
        element:<Watchpage/>
      }]
    },
  ])
  return (
    <div>
    <Provider store = {store}>
        <Head/>
       <RouterProvider router={appRouter}/>
    </Provider>
    </div>
  );
}

export default App;
