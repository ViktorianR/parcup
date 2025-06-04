import React from 'react'
import { useSelector } from 'react-redux'

import close from '@assets/icons/close.svg'
import { useDispatch } from 'react-redux'
import { bookSpace, clearSpaceToPay } from '@state/commonSlice'
import useEvent from '@hooks/useEvent'

import './style.scss'

const BookingModal = () => {
    const { spaceToPay } = useSelector(state => ({
        spaceToPay: state.common.spaceToPay,
    }))

    const dispatch = useDispatch()

    const price = spaceToPay.price

    const handleClose = useEvent(() => dispatch(clearSpaceToPay()))

    const handleSubmit = useEvent(() => {
        dispatch(bookSpace({
            id: spaceToPay.id > 9 ? spaceToPay.id : `0${spaceToPay.id}`,
            parkID: spaceToPay.parkID,
        }))

        setTimeout(() => {
            dispatch(clearSpaceToPay())
        }, 100)
    })

    return (
        <div className='booking-modal'>
            <div className='booking-modal__content'>
                <button className='booking-modal__close' onClick={handleClose}>
                    <img src={close} alt='close' />
                </button>
                <div className='booking-modal__body'>
                    <div className='booking-modal__price'>
                        <span>$</span>
                        <span>{price}</span>
                    </div>
                    <button 
                        className='booking-modal__pay' 
                        onClick={handleSubmit}
                        type='button'
                    >Pay</button>
                </div>
            </div>
        </div>
    )
}

export default BookingModal
