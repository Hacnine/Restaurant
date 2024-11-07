import React from 'react'
const Commentary = () => {
    return (
        <div className="lg:w-[45%] sm:w-[515px] w-fit bg-commenttext lgh-[90%] text-400 xl:p-16 p-8 ">
            <div className="text-lg font-semibold mb-4">
                <span><img src="/icon/quote.svg" alt="" /></span>
                <p className="pl-4 text-xs xl:text-sm"> You can't go wrong with Chicken Mandi, I  had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.</p>
            </div>
            <div className="between pl-4  xl:mt-16 mt-16 lg:mt-[51px] pb-4 border-b-2 border-black">
              
                <div>
                    <p className=" font-bebus">Khalid Al Dawsry</p>
                    <p className="text-sm text-black font-poppins">Jeddah, Saudi</p>
                </div>

                <div className="flex flex-col relative">
                    
                <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Khalid Al Dawsry"
                    className="w-10 h-10 rounded-full"
                />

                <div className="bg-red-600 w-10 absolute -bottom-5 h-1"></div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Commentary
