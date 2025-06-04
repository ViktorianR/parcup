import { useDispatch } from 'react-redux'
import { setPark } from '@state/commonSlice'
import useEvent from '@hooks/useEvent'

import './style.scss'

const ParkItem = ({
    image,
    name,
    address,
    id,
}) => {
    const dispatch = useDispatch()

    const handleClick = useEvent(() => dispatch(setPark({ id })))

    return (
        <div className='park' onClick={handleClick}>
            <div className='park__image'>
                <img src={image} alt='park' />
            </div>
            <div className='park__info'>
                <span className='park__name'>
                    {name}
                </span>
                <address className='park__address'>
                    {address}
                </address>
            </div>
        </div>
    )
}

export default ParkItem