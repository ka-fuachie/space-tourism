import { useState, useEffect } from "react"
import data from "../data.json"
import Header from "../components/Header"
import SliderBar, {NumberElement} from "../components/SliderBar"

// Import images
import vehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg'
import vehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg'

import spaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg'
import spaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg'

import capsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg'
import capsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg'


const TechnologyPage = () => {
    const technologies = data.technology
    const [technology, setTechnology] = useState("launch vehicle")
    const [technologyData, setTechnologyData] = useState({})
    const [technologyImage, setTechnologyImage] = useState({portrait: '', landscape: ''})

    // Update technology data when technology changes
    useEffect(() => {
        const newTechnology = technologies.filter((value) => value.name.toLowerCase() === technology.toLowerCase())

        setTechnologyData(newTechnology[0])

        setTechnologyImage(() => {
            switch (newTechnology[0].name.toLowerCase()) {
                case 'launch vehicle':
                    return {
                        portrait: vehiclePortrait,
                        landscape: vehicleLandscape
                    }
                case 'spaceport':
                    return {
                        portrait: spaceportPortrait,
                        landscape: spaceportLandscape
                    }

                case 'space capsule':
                    return {
                        portrait: capsulePortrait,
                        landscape: capsuleLandscape
                    }

                default:
                    return {
                        portrait: '',
                        landscape: ''
                    }
            }
        })

    }, [technology, technologies])

    // Change Tab
    const changeTab = (tab) => {
        setTechnology(tab)
    }
    

    return (
        <div className="technology flex">
            <Header active="technology" />
            <main>
                <h1 className="numbered-title"><span>03</span>space launch 101</h1>
                <div className="main flex">
                    <div className="flex">
                        <SliderBar>
                            {technologies.map((value, index) => (
                                <NumberElement
                                    selected = {value.name.toLowerCase() === technology.toLowerCase()}
                                    onClick = {() => changeTab(value.name)}
                                    key={index}
                                >
                                    {index + 1}<span className="sr-only">{value.name}</span>
                                </NumberElement>
                            ))}
                        </SliderBar>
                        <div role="tabpanel">
                            <h2 className="sub-heading-2">the terminology ...</h2>
                            <h3 className="heading-3">{technologyData.name}</h3>
                            <p className="body-text">{technologyData.description}</p>
                        </div>
                    </div>
                    <div className="flex">
                        <picture>
                            <source srcSet={technologyImage.landscape} media="(max-width: 55rem)" />
                            <source srcSet={technologyImage.portrait} media="(mim-width: 55rem)" />
                            <img src={technologyImage.portrait} alt={technologyData.name} />
                        </picture>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default TechnologyPage
