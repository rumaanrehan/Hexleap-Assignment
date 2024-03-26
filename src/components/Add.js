import React from 'react'
import add from '../assets/ad.png'

const Add = (props) => {

  const bgCard = props.mode=== 'light' ? 'bg-white' : 'bg-bgCardDark';
  return (
    <div className={`mx-2 text-${props.mode==='light' ? 'black' : 'white'} ${bgCard} bg-card text-card-foreground shadow-sm w-[250px]`} data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-3">
            <img src={add} alt="Sacramento River Cats" className="w-[200px]" />
            <div className="p-2">
                <h3 className="text-lg font-semibold">Advertisement title</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus at optio ea ipsum quia sequi quaerat rem reiciendis accusantium? Molestias provident veniam officiis quas quam incidunt alias inventore doloribus iusto?
                </p>
            </div>
        </div>
    </div>
  )
}

export default Add