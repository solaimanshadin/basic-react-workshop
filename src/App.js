import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Details from './components/Details';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from "./components/Login";
import Products from './components/Products';
import Signup from "./components/Signup";
import { AuthProvider } from './custom_hook/useAuth';

function App() {
  return (
    <AuthProvider>
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
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <h1 className="text-center my-5">Not Found!</h1>
            </Route>

          </Switch>
          

          <Footer>
            <div className="container text-center mt-5"> &copy; all Right reserved</div>
          </Footer>
      </Router>
    </AuthProvider>
  
  );
}

export default App;
