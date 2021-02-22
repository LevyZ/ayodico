// import React, { lazy, Suspense, useState, useEffect } from 'react'
import React, { lazy, Suspense } from 'react'
import Loader from '../Components/Loaders/Loader';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import {ApiConfig} from '../Utils/ApiConfig';
const Main = lazy(() => import("../Pages/Main"));
const NotFound = lazy(() => import("./NotFound"));
const Result = lazy(() => import("../Pages/Result"));
// const SingleProduct = lazy(() => import("../Pages/SingleProduct"));

// const Configurator = lazy(() => import('../Components/Landing/Configurator'));
// const Configurator2 = lazy(() => import('../Components/Landing/Configurator2'));
// const Configurator3 = lazy(() => import('../Components/Landing/Configurator3'));

const Routeur = () => {
  // const [products, setProducts] = useState([]);

  // const API_PATH  = 'products';

  // useEffect(() => {
  //   fetch(`${ApiConfig.baseURL+API_PATH}`).then(res => res.json()).then(res => {
  //     setProducts(res)
  //   });
  // }, []);

  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/result" component={Result} />
          {/*<Route path="/configurator2" component={Configurator2} />*/}
          {/*<Route path="/configurator3" component={Configurator3} />*/}
          {/*<Route path="/products" component={() => <Products products={products} setProducts={setProducts}/>}/>*/}
          {/*<Route path="/product/:id" component={ () => <SingleProduct data={products}/>} />*/}
          <Route path="/*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
};

export default Routeur;
