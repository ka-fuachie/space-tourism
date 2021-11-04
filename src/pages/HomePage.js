import Header from "../components/Header"
import LargeBtn from "../components/LargeBtn"

const Homepage = () => {
    return (
        <div className = "home">
           <Header active="home" />
           <main className="flex">
                <div>
                   <h1 className="heading-5">So, you want to travel to
                       <span className="heading-1 block">Space</span>
                   </h1>
                   <p>
                        Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!
                   </p>
               </div>
               <div>
                   <div>
                   <LargeBtn>Explore</LargeBtn>
                   </div>
               </div>
           </main>
        </div>
    )
}

export default Homepage
