import { Avatar, Indicator } from '@mantine/core'
import { IconBell, IconBow, IconSettings } from '@tabler/icons-react'
import NavLinks from './NavLinks'


const Header = () => {
  return <div className='w-full bg-mine-shaft-950 px-16 h-20 text-white flex justify-between items-center font-["poppins"]'>
    
    <div className='flex gap-2 items-center text-bright-sun-400'>
      <IconBow className='h-10 w-10' stroke={2.1}/>
      <div className='text-2xl font-semibold'>jobHunter</div>
    </div>
    
    {NavLinks()}
    
    <div className='flex gap-3 items-center'>
      <div className='flex gap-2 items-center'>
        <div>Name</div>
        <Avatar src="/img/avatar.png" alt=''/>
      </div>
      <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
        <IconSettings stroke={1.5}  />
      </div>
      <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
        <Indicator color="bright-sun.4" processing>
          <IconBell stroke={1.5} />
        </Indicator>
      </div>
    </div>
  </div>
}

export default Header