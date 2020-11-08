import './App.css';
import Header from './ccomponents/Header';
import Footer from './ccomponents/Footer';
import Products from './ccomponents/Products';

function App() {
  return (
    <>
        <Header />
        <Products />
        <Footer>
          <div className="container text-center mt-5"> &copy; all Right reserved</div>
        </Footer>
    </>
  
  );
}

export default App;
