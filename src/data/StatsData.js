import React from 'react'

import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/fa'



export const StatsData = [
    {
        icon: (<GiEarthAmerica css={`color: #047bf1`} />),
        title: "Exotic Destinations",
        desc: "Learn about beautiful places across the globe"
    },
    {
        icon: (<MdAirplanemodeActive css={`color: #f3a82e`} />),
        title: "100's of Trips Ahead",
        desc: "Tons of trips last year."
    },
    {
        icon: (<MdTimer css={`color: #f34f2e`}/>),
        title: "Frequent Reviews",
        desc: "Learn about destinations while Nicholas is there."
    },
    {
        icon: (<FaMoneyCheck css={`color: #3af576`}/>),
        title: "Price Check",
        desc: "Learn how much a destination costs."
    },
]