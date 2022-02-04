//import logo from '../logo.svg';
import {useState, useEffect} from 'react'
import logo from '../assets/logo.png'
import '../App.css';
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from './ShoppingList';
import QuestionForm from "./QuestionForm";
import Footer from "./Footer";
import '../styles/Layout.css';


function App() {
    const title = 'La maison jungle'
    const savedCart = localStorage.getItem('cart')
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(cart))
    }, [cart])
    //const [cart,updateCart] = useState([])

    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1>{ title }</h1>
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart}/>
                <ShoppingList cart={cart} updateCart={updateCart}/>
            </div>
            {/*<QuestionForm />*/}
            <Footer />
        </div>
    );
}

export default App;
