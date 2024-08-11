import { Avatar, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

const DreamJob = () => {
  return (
    <div className='flex items-center px-16'>
      <div className='flex flex-col w-[45%] gap-3'>
        <div className='text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400' >
          Find your <span>dream job</span> with us
        </div>
        <div className='text-lg text-mine-shaft-200'>
            Good life begins with a good company. Start explore thousands of a jobs in one place.
        </div>
        <div className='flex gap-3 mt-5'>
        <TextInput
          className='bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100'
          variant="unstyled"
          label="Job Title"
          placeholder="profession*"
        />
        <TextInput
          className='bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100'
          variant="unstyled"
          label="Job Type"
          placeholder="fulltyme*"
        />
        <div className='flex items-center justify-center h-full w-20'>
          <IconSearch className='w-[85%] h-[85%] bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-600 cursor-pointer'/>
        </div>
        </div>
      </div>
      
      <div className='w-[55%] flex items-center justify-center'>
        <div className='w-[30rem] relative'>
          <img src="/img/boy.png" alt="employee" />
          <div className='absolute left-64 w-fit top-[50%] border-bright-sun-400 border rounded-lg  p-2 backdrop-blur-md'>
            <div className='text-center mb-1 text-sm text-mine-shaft-100'>
              5k+ got job
            </div>
            <Avatar.Group>
              <Avatar src="/img/employee.jpg"/>
              <Avatar src="/img/employee1.jpg"/>
              <Avatar src="/img/employee2.jpg"/>
              <Avatar>+4k</Avatar>
            </Avatar.Group>
          </div>
          
          <div className='absolute -left-20 w-fit top-[28%] border-bright-sun-400 border rounded-lg  p-2 backdrop-blur-md gap-3 flex flex-col'>
            <div className='flex gap-2 items-center'>
              <div className='w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg'>
                <img src="/img/Google.png" alt="google" />
              </div>
              <div className='text-sm text-mine-shaft-100'>
                <div>Sofware Enginer</div>
                <div className='text-mine-shaft-200 text-xs'>New York</div>
              </div>
            </div>
            <div className='flex gap-2 text-mine-shaft-200 text-xs'>
              <span>1 day ago,</span>
              <span>120 aplicants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DreamJob