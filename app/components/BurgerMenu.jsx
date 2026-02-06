'use client'

import { useSelector, useDispatch } from 'react-redux';
import { setIsOpen } from '../GlobalRedux/Features/burger/burgerSlice';

const BurgerMenu = () => {

  const isOpen = useSelector((state) => state.burger.isOpen)
  const dispatch = useDispatch()
  return (
<<<<<<< HEAD
    <div>
=======
    <div className='min-[960px]:hidden'>
>>>>>>> 806ff73 (update)
      {
          isOpen ? (
            <button type="button" onClick={() => dispatch(setIsOpen(false))}>
              <div className="">
                <svg
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
            </button>
          ) : (
            <button type="button" onClick={() => dispatch(setIsOpen(true))}>
              <div className="w-8 space-y-2" >
                <span className="block h-0.5 w-8 bg-white"></span>
                <span className="block h-0.5 w-8 bg-white"></span>
                <span className="block h-0.5 w-6 bg-white"></span>
              </div>
            </button>
          )
        }
    </div>
  )
}

export default BurgerMenu