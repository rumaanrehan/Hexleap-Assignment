

export default function Component(props) {
    const {Image, title, events, sport} = props;
    const bgCard = props.mode=== 'light' ? 'bg-white' : 'bg-bgCardDark';
    const bgStats= props.mode=== 'light' ? 'bg-offWhite' : 'bg-bgDark';
    return (
        <div className={`my-2 lg:my-0 lg:mx-2 text-${props.mode==='light' ? 'black' : 'white'} ${bgCard}  bg-card text-card-foreground shadow-sm w-[250px]`} data-v0-t="card">
            <div className="flex flex-col space-y-1.5 p-3">
                <img src={Image} alt="Sacramento River Cats" className="w-full" />
                <div className="p-0">
                    <h3 className="text-lg text-left font-semibold">{title}</h3>
                    <div className={`flex justify-between mt-3  ${bgStats} p-3 text-left`}>
                    <div className="flex flex-col">
                        <span className={`text-${props.mode==='light' ? 'text-gray-600' : '[#DFDFDF]'} text-sm`}>Total Events</span>
                        <span className="text-[16px] font-medium">{events} Events</span>
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-${props.mode==='light' ? 'text-gray-600' : '[#DFDFDF]'} text-sm`}>Sport</span>
                        <span className="text-[16px] font-medium">{sport}</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

