import { useDispatch, useSelector } from 'react-redux'
import useEvent from '@hooks/useEvent'
import { setSpaceToPay } from '@state/commonSlice'

import './style.scss'

const Actions = () => {
    const dispatch = useDispatch()

    const { bookCandidate } = useSelector(state => ({
        bookCandidate: state.common.bookCandidate,
    }))

    const handleClick = useEvent(() => dispatch(setSpaceToPay()))

    if (!bookCandidate) return null

    return (
        <div className="actions">
            <button className="action" onClick={handleClick}>
                Park at slot {bookCandidate.id}
            </button>
        </div>
    )
}

export default Actions
