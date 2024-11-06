import React from 'react'
import SectionHeader from '../../Common/SectionHeader'
import FoodItemSlider from './FoodItemSlider'

const FoodItems = () => {
    return (
        <div className='bg-fooditem wrapper pt-10 pb-20'>
             <SectionHeader inspirationWord={"Crispy, Every Bite Test"} title={"Popular Food Items"}/>
            <FoodItemSlider />
        </div>
    )
}

export default FoodItems
