import React from 'react'

const CustomerCommentary = () => {
    return (
    <>
        <div>
            <div className="text-lg font-semibold flex items-start">
                <img src="/icon/quote.svg" alt="quote" className="w-6 h-6" />
                <p className="pl-4 text-sm lg:text-base">
                    You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.
                </p>
            </div>
        </div>

        <div className="flex items-center justify-between md:pl-10 sm:pt-14 mt-1 border-b-2 border-black pt-5 pb-[5px]">
            <div>
                <p className="font-bold">Khalid Al Dawsry</p>
                <p className="text-sm">Jeddah, Saudi</p>
            </div>
            <div className="relative">
                <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Khalid Al Dawsry"
                    className="w-10 h-10 rounded-full"
                />
                <div className="bg-red-600 w-10 h-1 absolute -bottom-2"></div>
            </div>
        </div>
    </>

    )
}

export default CustomerCommentary
