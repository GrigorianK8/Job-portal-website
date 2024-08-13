import { Divider, RangeSlider } from '@mantine/core'
import { useState } from 'react'
import { dropdownData } from '../data/jobsData'
import MultiInput from './MultiInput'

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);
  return <div className='flex px-5 py-8'>
    {
      dropdownData.map((item, index) => <><div key={index} className='w-1/5'>
      <MultiInput {...item}/>
    </div>
    <Divider mr='xs'size="xs" orientation="vertical" />
    </>)
    }
    <div className='w-1/5 [&_.mantine-Slider-label]:!translate-y-10'>
      <div className='flex text-sm justify-between'>
        <div>Salary</div>
        <div>${value[0]} USD - ${value[1]} USD</div>
      </div>
      <RangeSlider 
        color='yellow' 
        size='xs' 
        value={value} 
        onChange={setValue}
        labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}
      />
    </div>
  </div>
}

export default SearchBar