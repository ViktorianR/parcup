import { useSelector } from 'react-redux'

import ParkItem from '@components/ParkItem'

import './style.scss'

const Dashboard = () => {
  const { parks } = useSelector(state => ({
    parks: state.common.parks,
  }))
  
  return (
    <div className='dashboard'>
      <div className='locations'>
        {
          parks.map(park => (
            <ParkItem
              key={park.id}
              {...park}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard
