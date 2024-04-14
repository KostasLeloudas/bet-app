import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import NavBar from '../../components/NavBar/NavBar';
import './App.scss';

// const LazyProductPage = React.lazy( () =>
//   import( '../ProductPage/ProductPage' ).then( ( module ) => ( {
//     default: module.ProductPage
//   } ) )
// );

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          {/* <NavBar /> */}
          <Switch>
            {/* <Route path="/product/:productId" exact component={LazyProductPage} /> */}
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
