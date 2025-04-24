import { Typewriter } from 'react-simple-typewriter'

const Announcement = () => {
  return (
    <div className ="flex items-center justify-center bg-[#000000] text-white text-[18px] font-semibold h-[30ox]" >
        <Typewriter
            words={['Trendora', '70% VIP Discount', 'For SHA Students', ' Trend It ! Own It ! Love It !']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
    </div>
  )
}

export default Announcement