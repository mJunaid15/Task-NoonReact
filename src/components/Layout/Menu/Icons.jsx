import React from 'react'
import home from '../../../Assets/home-inactive.svg'
import cat from '../../../Assets/categories-v2-inactive.svg'
import fa from '../../../Assets/fashion-outfit@3x.png'
import ac from '../../../Assets/account-inactive.svg'
import car from '../../../Assets/cart-inactive.svg'

 const Home = () => {
  return (
    <img src={home} alt="home" />
  )
}
 const Cate = () => {
    return (
      <img src={cat} alt="home" className="h-8" />
    )
  }
  const Fashion = () => {
    return (
      <img src={fa} alt="home" className="h-8" />
    )
  } 
   const Account = () => {
    return (
      <img src={ac} alt="home" className="h-8" />
    )
  }
  const Cart = () => {
    return (
      <img src={car} alt="home" className="h-8" />
    )
  }

  

export {Home,Cate,Fashion, Account, Cart};