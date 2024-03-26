import React from 'react'
import Tickets from './Tickets'

const Collection = (props) => {
  const ticketDetail=[
    {
      id: 1,
      img: require('../assets/Ticket_Mockup 3.png'),
      title: "Las Vegas Aviators",
      date: "OCT 15",
      day: "SUN",
      time: "4:30 PM",
      add: "Las Vegas Ballpark, Las Vegas, Nevada",
      button: "Take Flight Collection"
    },
    {
      id: 2,
      img: require('../assets/unnamed 1.png'),
      title: "Sacramento River Cats",
      date: "OCT 15",
      day: "SUN",
      time: "4:30 PM",
      add: "Sutter Health Park, Sacramento, California",
      button: "Orange Collection"
    },
    {
      id: 3,
      img: require('../assets/Ticket_Mockup 3.png'),
      title: "Las Vegas Aviators",
      date: "OCT 15",
      day: "SUN",
      time: "4:30 PM",
      add: "Las Vegas Ballpark, Las Vegas, Nevada",
      button: "Take Flight Collection"
    }
  ]
  

  const bgCollection = props.mode=== 'light' ? 'bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF]' : 'bg-gradient-to-b from-[#18282A] to-[#221A2C]';


  return (
    <div>
      <div className={` ${bgCollection} text-${props.mode==='light' ? 'black' : 'white'} m-10 py-12`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center"> 
            <h2 className={`text-[30px] sm:text-[50px]  font-bold leading-8 tracking-tight  sm:text-4xl`}>Collection Spotlight</h2>
            <p className={`mt-4 max-w-2xl text-14px  lg:mx-auto`}>
              Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events
              for an unforgettable experience. Grab yours today!
            </p>
          </div>  
        </div>
        <div className="flex flex-col items-center justify-center lg:items-center lg:flex-row lg:justify-between py-8">
    <svg className=" hidden lg:block text-[#2C9CF0] border border-[#2C9CF0] w-10 h-10"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" >
    <path d="m15 18-6-6 6-6"></path></svg>
      {
        ticketDetail.map((ticket)=>{
          return <Tickets key={ticket.id} mode={props.mode} ticket={ticket}/>

        })

      }
        <svg className="rotate-90 lg:rotate-0 text-[#2C9CF0] border border-[#2C9CF0] w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
          <path d="m9 18 6-6-6-6"></path>
          </svg>
    </div>
      </div>
    </div>
  )
}

export default Collection

