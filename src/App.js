import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './components/Details';

function App() {
  return (
    <Router>
        <Header />
        <Switch>
          
          <Route exact path="/">
            <Products title="Products page - AwsomeSite" />
          </Route>
          <Route path="/food/:id/:slug">
            <Details/>
          </Route>
          <Route path="/about">
            <h1>About us</h1>
          </Route>
          <Route path="*">
            <h1 className="text-center my-5">Not Found!</h1>
          </Route>

        </Switch>
        

        <Footer>
          <div className="container text-center mt-5"> &copy; all Right reserved</div>
        </Footer>
    </Router>
  
  );
}

export default App;
