import React from 'react'
import Footer from '../../components/footer/Footer'
import Main from '../../main/Main'
import Login from '../login/Login'
import './home.css'



const Home = () => {
  return (
  
      <section className="homeBody">
      
      
      <Main />
      <Login />
      <Footer />
      </section>
      
      );
    }
    
    export default Home