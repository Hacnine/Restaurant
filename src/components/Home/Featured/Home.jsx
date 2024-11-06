import React from 'react'
import MainPortion from './MainPortion'
import BookingForm from '../BookingForm/BookingForm'
import Hero from '../../Hero'
import CommentarySlider from '../../Customersay/CommentarySlider'
import FoodItemSlider from '../PopularFoodItems/FoodItemSlider'

export default function Home() {
  return (
    <div className=''>
      <Hero/>
      <MainPortion/>
      <FoodItemSlider/>
      <BookingForm/>
      <CommentarySlider/>
    </div>
  )
}
