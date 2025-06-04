import React, { useMemo, useRef } from 'react'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { setBookCandidate } from '@state/commonSlice'

import carIcon from '@assets/icons/car.svg'
import useEvent from '@hooks/useEvent'

const Space = ({ 
    booked, 
    price, 
    busy, 
    id,
    index,
    parkID,
}) => {
    const dispatch = useDispatch()

    const imgRef = useRef(null)

    const handleClick = useEvent(() => {
        dispatch(setBookCandidate({
            id: id > 9 ? id : `0${id}`,
            parkID,
        }))
    })

    const content = useMemo(() => {
        if (busy) {
            return (
                <img
                    src={carIcon} 
                    alt="car-icon" 
                    height={52} 
                    className={classNames('park-schema__car', {
                        'left': index % 2 === 0,
                        'right': index % 2 !== 0,
                    })}
                    ref={imgRef}
                />
            )
        }

        if (booked) {
            return <span className="park-schema__num">{id > 9 ? id : `0${id}`}</span>
        }

        return <button className="park-schema__book" onClick={handleClick}>{id > 9 ? id : `0${id}`}</button>
    }, [
        booked,
        busy,
        id,
    ])

    return (
        <div className="park-schema__place">
            {content}
        </div>
    )
}

export default React.memo(Space);