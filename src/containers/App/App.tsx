import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";

import { LoadingComponent } from "../../components/LoadingComponent/LoadingComponent";
import { fetchProducts } from "../../redux/ducks/products/slice";

const LazyProductsList = React.lazy(() =>
  import("../ProductsList/ProductsList").then((module) => ({
    default: module.ProductsList,
  }))
);
const LazyProductPage = React.lazy(() =>
  import("../ProductPage/ProductPage").then((module) => ({
    default: module.ProductPage,
  }))
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Router>
      <div className="App">
        <Layout>
          <NavBar />
          <Suspense fallback={<LoadingComponent />}>
            <Switch>
              <Route path="/" exact component={LazyProductsList} />
              <Route
                path="/product/:productId"
                exact
                component={LazyProductPage}
              />
            </Switch>
          </Suspense>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
