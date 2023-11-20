import React from 'react'
import { LiaShippingFastSolid, LiaMoneyBillWaveAltSolid, LiaGiftSolid  } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import FeatureCard from './FeatureCard';

const data = [
    {title: "Free Shipping", icon: <LiaShippingFastSolid />},
    {title: "Best Price Guarantee", icon: <LiaMoneyBillWaveAltSolid />},
    {title: "Free Curbside Pickup", icon: <LiaGiftSolid  />},
    {title: "Support 24/7", icon: <BiSupport  />}
]

const Feature = () => {
  return (
    <div className='container pt-16'>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {data.map(element => <FeatureCard key={element.title} title={element.title} icon={element.icon} />)}
        </div>
    </div>
  )
}

export default Feature