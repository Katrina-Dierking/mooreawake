import React from 'react'
import Footer from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { TopNav } from '../../components/topNav/TopNav'
import TestPage from '../../testpage/TestPage'
import './home.css'



const Home = () => {
  return (
  
      <section className="homeBody">
      <TopNav />
      <Header />
      <Footer />
      </section>
      
      );
    }
    
    export default Home
    // <TestPage />