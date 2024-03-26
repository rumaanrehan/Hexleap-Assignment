import React from 'react'


const Tickets = (props) => {
  const {img, title, date, day, time, add, button} = props.ticket;
  const bgCard = props.mode=== 'light' ? 'bg-white' : 'bg-bgCardDark';
  const addColor = props.mode ==='light'?'text-[#525965]' : 'text-[#DFDFDF]';
  return (
  <div className={`my-2 lg:my-0 lg:mx-2 text-${props.mode==='light' ? 'black' : 'white'} ${bgCard} my-4 lg:my-0 lg:mx-2 border p-3 bg-card text-card-foreground shadow-lg border-none w-[300px]`} data-v0-t="card">
        <img src={img} alt="Las Vegas Aviators" className=" w-fit object-cover" />
          <div className="p-6">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm ">{date} | {day} | {time}</p>
            <p className={`text-sm ${addColor}`}>{add}</p>
            <button className="inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium  h-10 px-4 py-2 mt-4 w-full bg-black text-white">{button}</button>
          </div> 
        
      </div>
  
  
  )
}

export default Tickets
