import React from 'react'

import { useDispatch } from 'react-redux'
import { progress } from '../../actions'
import { Button } from 'reactstrap'

/* TODO  
dispatch progress +1
set correct sizing
*/

const NextButton = () => {
  const dispatch = useDispatch()
  return (
    <div className="container d-flex justify-content-center ">
      <Button
        onClick={() => dispatch(progress())}
        className="bg-warning text-light border border-white w-25"
      >
        NEXT
      </Button>
    </div>
  )
}

export default NextButton
