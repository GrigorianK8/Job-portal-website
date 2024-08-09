import { Avatar } from '@mantine/core'
import { IconBell, IconBow, IconSettings } from '@tabler/icons-react'


const Header = () => {
  return <div className='w-full bg-black px-16 h-28 text-white flex justify-between items-center'>
    
    <div className='flex gap-3 items-center'>
      <IconBow className='h-10 w-10' stroke={1.25}/>
      <div className='text-2xl font-semibold'>jobHunter</div>
    </div>
    
    <div className='flex gap-3'>
      <a href="">Find Jobs</a>
      <a href="">Find Talent</a>
      <a href="">Upload Job</a>
      <a href="">About us</a>
    </div>
    
    <div className='flex gap-5 items-center'>
      <div className='flex gap-2 items-center'>
        <div>Name</div>
        <Avatar src="" alt=''/>
      </div>
      <IconBell />
      <IconSettings />
    </div>
  </div>
}

export default Header