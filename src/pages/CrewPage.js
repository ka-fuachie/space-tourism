import { useEffect, useState } from "react"
import data from "../data.json"
import Header from "../components/Header"
import SliderBar, { DotElement } from "../components/SliderBar"

// Import images
import commanderPng from '../assets/crew/image-douglas-hurley.png'
import commanderWebp from '../assets/crew/image-douglas-hurley.webp'

import specialistPng from '../assets/crew/image-mark-shuttleworth.png'
import specialistWebp from '../assets/crew/image-mark-shuttleworth.webp'

import pilotPng from '../assets/crew/image-victor-glover.png'
import pilotWebp from '../assets/crew/image-victor-glover.webp'

import engineerPng from '../assets/crew/image-anousheh-ansari.png'
import engineerWebp from '../assets/crew/image-anousheh-ansari.webp'


const CrewPage = () => {
    const crews = data.crew
    const [crewData, setCrewData] = useState({})
    const [crew, setCrew] = useState('commander')
    const [crewImage, setCrewImage] = useState({ png: '', webp: '' })

    // Update crew data when crew changes
    useEffect(() => {
        const newCrew = crews.filter((value) => value.role.toLowerCase() === crew.toLowerCase())

        setCrewData(newCrew[0])
        setCrewImage(() => {
            switch (newCrew[0].role.toLowerCase()) {
                case 'commander':
                    return {
                        png: commanderPng,
                        webp: commanderWebp
                    }
                case 'mission specialist':
                    return {
                        png: specialistPng,
                        webp: specialistWebp
                    }

                case 'pilot':
                    return {
                        png: pilotPng,
                        webp: pilotWebp
                    }

                case 'flight engineer':
                    return {
                        png: engineerPng,
                        webp: engineerWebp
                    }


                default:
                    return {
                        png: '',
                        webp: ''
                    }
            }
        })

    }, [crew, crews])

    // Change Tab
    const changeTab = (tab) => {
        setCrew(tab)
    }

    return (
        <div className="crew flex">
            <Header active="crew" />
            <main className="flex">
                <h1 className="numbered-title"><span aria-hidden="true">02</span>meet your crew</h1>
                <div className="main flex">
                    <div className="flow flex">
                        <div role="tabpanel" className="flow">
                            <h2 className="heading-4">{crewData.role}</h2>
                            <h3 className="heading-3">{crewData.name}</h3>
                            <p className="body-text">{crewData.bio}</p>
                        </div>
                        <SliderBar type="dot" >
                            {crews.map((value, index) => (
                                <DotElement
                                    selected={value.role.toLowerCase() === crew.toLowerCase()}
                                    onClick={changeTab}
                                    key={index}
                                >
                                    {value.role}
                                </DotElement>
                            ))}
                        </SliderBar>
                    </div>
                    <div role="tabpanel" className="flex">
                        <picture>
                            <source srcSet={crewImage.webp} type="image/webp" />
                            <img src={crewImage.png} alt={crewData.name} />
                        </picture>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CrewPage
