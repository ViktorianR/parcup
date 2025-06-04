import SwipeableViews from 'react-swipeable-views';
import { useSelector, useDispatch } from 'react-redux'
import { setPageIndex, clearBookCandidate } from '@state/commonSlice'
import Toolbar from '@components/Toolbar'
import Dashboard from '@screens/Home/index'
import Park from '@screens/Park/index'
import Actions from '@components/Actions'
import BookingModal from '@components/BookingModal'

import './style.scss'

const Layout = () => {
  const { pageIndex, spaceToPay, park } = useSelector(state => ({
    pageIndex: state.common.pageIndex,
    spaceToPay: state.common.spaceToPay,
    park: state.common.park,
  }))

  const dispatch = useDispatch()

  const swipeToHome = idx => {
    dispatch(setPageIndex(idx))
    dispatch(clearBookCandidate())
  }

  return (
    <div className='layout'>
      <Toolbar />
        <SwipeableViews
          className='layout__content'
          enableMouseEvents={false}
          disabled={!park}
          index={pageIndex}
          onChangeIndex={swipeToHome}
        >
          <Dashboard />
          <Park />
        </SwipeableViews>
        <Actions />
        {spaceToPay && <BookingModal />}
      </div>
    )
  }
  
  export default Layout
  