import micro from '@assets/icons/micro.svg'
import settings from '@assets/icons/settings.svg'
import zoom from '@assets/icons/zoom.svg'

import './style.scss'

const Toolbar = () => {
    return (
      <div className='toolbar'>
          <button className='micro'>
            <img src={micro} alt='micro' />
          </button>
          <div className='search'>
            <input className='search__input' type='text' placeholder='Search' />
            <button className='search__submit'>
              <img src={zoom} alt='zoom' />
            </button>
          </div>
          <button className='settings'>
            <img src={settings} alt='settings' />
          </button>
      </div>
    )
  }
  
  export default Toolbar
  