import { Avatar, Rating } from '@mantine/core'
import { testimonials } from '../data/Data'

const Testimonials = () => {
  return <div className='mt-20 pb-5'>
    <div className='text-4xl font-semibold text-mine-shaft-100 text-center mb-10'>
      What <span className='text-bright-sun-400'>User</span> says about us?
    </div>
    <div className='flex justify-evenly'>
    {
      testimonials.map((data, index) => <div key={index} className='flex flex-col gap-3 w-[23%] p-3 mt-10 border border-bright-sun-400 rounded-xl'>
      <div className='flex gap-2 items-center'>
        <Avatar 
        className='!w-14 !h-14'
        src=''
        alt="it's me"
        />
        <div>
          <div className='text-lg text-mine-shaft-100 font-semibold'>
            {data.name}
          </div>
          <Rating value={data.rating} fractions={2} readOnly />
        </div>
      </div>
      <div className='text-xs text-mine-shaft-300'>
        {data.testimonal}
      </div>
    </div>)
    }
    </div>
  </div>
}

export default Testimonials