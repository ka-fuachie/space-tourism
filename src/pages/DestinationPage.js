import { useState, useEffect } from "react"
import data from "../data.json"
import Header from "../components/Header"
import TabBar, { TabElement } from "../components/TabBar"

// Import images
import moonPng from '../assets/destination/image-moon.png'
import moonWebp from '../assets/destination/image-moon.webp'

import marsPng from '../assets/destination/image-mars.png'
import marsWebp from '../assets/destination/image-mars.webp'

import titanPng from '../assets/destination/image-titan.png'
import titanWebp from '../assets/destination/image-titan.webp'

import europaPng from '../assets/destination/image-europa.png'
import europaWebp from '../assets/destination/image-europa.webp'



const DestinationPage = () => {
    const destinations = data.destinations
    const [destinationData, setDestinationData] = useState([])
    const [destination, setDestination] = useState('moon')
    const [destinationimage, setDestinationImage] = useState({png:'', webp: ''})

    // Update destination data when destination changes
    useEffect(() => {
        const newDestination = destinations.filter((value) => value.name.toLowerCase() === destination.toLowerCase())

        setDestinationData(newDestination[0])
        setDestinationImage(() => {
            switch (newDestination[0].name.toLowerCase()) {
                case 'moon':
                    return {
                        png: moonPng,
                        webp: moonWebp
                    }
                case 'mars':
                    return {
                        png: marsPng,
                        webp: marsWebp
                    }
            
                case 'europa':
                    return {
                        png: europaPng,
                        webp: europaWebp
                    }
            
                case 'titan':
                    return {
                        png: titanPng,
                        webp: titanWebp
                    }                        
                        
            
                default:
                    return {
                        png: '',
                        webp: ''
                    }
            }
        })
    }, [destination, destinations])

    // Change Tab
    const changeTab = (tab) => {
        setDestination(tab)
    }


    return (
        <div className="destination flex">
            <Header active="destination" />
            <main>
                <h1 className="numbered-title"><span aria-hidden="true">01</span>Pick your destination</h1>
                <div className="main">
                    <div>
                        <picture>
                            <source srcSet={destinationimage.webp} type="image/webp"/>
                            <img src={destinationimage.png} alt={destinationData.name} />
                        </picture>
                    </div>
                    <div>
                        <TabBar>
                            {
                                destinations.map((value, index) => {
                                    return (
                                        <TabElement
                                            controls={`${value.name}-tab`}
                                            selected={value.name.toLowerCase() === destination.toLowerCase()}
                                            onClick = {changeTab}
                                            key = {index}
                                        >{value.name}</TabElement>
                                    )
                                })
                            }
                        </TabBar>
                        <div id={`${destinationData.name}-tab`} className="flow" role="tabpanel">
                            <h2 className="heading-2">{destinationData.name}</h2>
                            <p className="body-text">{destinationData.description}</p>
                            <div>
                                <div>
                                    <h3 className="sub-heading-2">avg. distance</h3>
                                    <p className="sub-heading-1">{destinationData.distance}</p>
                                </div>
                                <div>
                                    <h3 className="sub-heading-2">est. travel time</h3>
                                    <p className="sub-heading-1">{destinationData.travel}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default DestinationPage
