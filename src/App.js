import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';

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
