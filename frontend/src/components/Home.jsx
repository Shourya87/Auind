import React from 'react'
import Navbar from './Navbar'
import Headline from './Headline'
import Hero from './Hero'
import StyleThatShow from './StyleThatShow'
import JustDropped from './JustDropped'
import ShopByCategory from './ShopByCategory'
import FestiveDeals from './FestiveDeals'
import BestSeller from './BestSeller'
import WhyChoose from './WhyChoose'
import Footer from './Footer'
import TopRatedProduct from './TopRatedProduct'
import NewsLetterSignup from './NewsLetterSignup'
import Testimonials from './Testimonials'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Headline/>
      <Hero/>
      <StyleThatShow/>
      <BestSeller/>
      <TopRatedProduct/>
      <ShopByCategory/>
      <JustDropped/>
      <NewsLetterSignup/>
      <FestiveDeals/>
      <Testimonials/>
      <WhyChoose/>
      <Footer/>
    </div>
  )
}
