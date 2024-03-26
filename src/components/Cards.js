import React from 'react'
import CardItems from './CardItems'
import Add from './Add'
const Navbar = (props) => {
  
const cardContent=[
  {
      id: 1,
      Image: require('../assets/pic1.png'),
      title: "Sacramento River Cats",
      events: "48",
      sport: "baseball"
  },
  {
    id: 2,
      Image: require('../assets/pic2.png'),
      title: "Las Vegas Aviators",
      events: "28",
      sport: "baseball"
  },
  {
    id: 3,
      Image: require('../assets/pic3.png'),
      title: "New Jersey Devils",
      events: "15",
      sport: "Ice Hockey"
  },
  {
    id: 4,
      Image: require('../assets/pic2.png'),
      title: "Las Vegas Aviators",
      events: "28",
      sport: "baseball"
  }
]

  const handleBtnText=()=>{
      if(props.mode==='light')
      return 'Dark Mode'
    else return 'Light Mode'
  }

  const bgButton= props.mode=== 'dark' ? 'bg-gradient-to-r from-slate-900 to-slate-300' : 'bg-gradient-to-r from-slate-300 to-slate-900';
  return (
    <div className='mx-8'>
      <div className="flex items-center justify-between">
        <div className='sports my-4 ml-3'>
            <div className={`text-left text-${props.mode==='light' ? 'black' : 'white'} text-lg font-bold`}>Sports</div>
            <div className="h-1 w-14 bg-blue-500"></div>
        </div>
        <button className={`${bgButton} text-${props.mode==='light'? 'white' : 'black'}  rounded-lg px-2 h-9`} onClick={()=>{props.handleDarkMode()}}>{handleBtnText()}</button>
      </div>
    <div className="cards flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-center">
      
      {
        cardContent.map((card)=>{
          return <CardItems  key={card.id} Image={card.Image} title={card.title} events={card.events} sport={card.sport} mode={props.mode} />
        })
      }
      <Add mode={props.mode}/>    
      </div>
    <button className="btn my-5 px-4 py-2 bg-blue-500 text-white text-sm rounded-sm">See More</button>
    </div>
  )
}

export default Navbar


