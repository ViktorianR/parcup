import { useRef, useMemo, createRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sortByID } from '@helpers/sorts'

import Space from './Space'

import markIcon from '@assets/icons/mark.svg'

import './style.scss'

const Park = () => {
    const { park } = useSelector(state => ({
        park: state.common.park,
    }))

    const schemaWrapperRef = useRef(null);

    const spacesArray = useMemo(() => {
        return park?.spaces ? sortByID(Object.values(park.spaces)) : [];
    }, [park])

    if (!park) {
        return null
    }

    return (
        <div className="park-screen">
            <div className="park-screen__info">
                <div className="park-screen__header">
                    <div className="park-screen__image">
                        <img src={park.image} alt="park-screen-1" />
                    </div>
                    <div className="park-screen__name-container">
                        <h1 className="park-screen__name">{park.name}</h1>
                        <div className="park-screen__address">
                            <span className="park-screen__address-icon">
                                <img src={markIcon} alt="mark-icon" />
                            </span>
                            <span className="park-screen__address-text">{park.address}</span>
                        </div>
                    </div>
                </div>
                <div className="park-screen__amount">
                    <div className="park-screen__amount-item">
                        <span className="park-screen__amount-item-title">Amount</span>
                        <span className="park-screen__amount-item-text">12/HR</span>
                    </div>
                    <div className="park-screen__amount-item">
                        <span className="park-screen__amount-item-title">Available Slots</span>
                        <span className="park-screen__amount-item-text">12/546</span>
                    </div>
                    <div className="park-screen__amount-item">
                        <span className="park-screen__amount-item-title">Distance / KM</span>
                        <span className="park-screen__amount-item-text">2 KM</span>
                    </div>
                </div>
            </div>
            {
                spacesArray.length > 0 && (
                    <div className="park-schema" ref={schemaWrapperRef}>
                        {
                            spacesArray.map(({ id, booked, price, busy }, index) => (
                                <Space 
                                    key={id}
                                    id={id}
                                    booked={booked}
                                    price={price}
                                    busy={busy}
                                    index={index}
                                    parkID={park.id}
                                />
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Park