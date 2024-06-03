import { Button, ButtonGroup } from "@mui/material"

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// import PropTypes from 'prop-types'

function ButtonsAfterBeforeStatusCode(
  // { currentId, onNavigate }
) {
  return (
    <>
      <ButtonGroup className="w-auto" variant="outlined" >
        <Button
          // onClick={() => onNavigate(currentId - 1)}
          className="w-72"
          sx={{
            color: 'red', borderColor: 'red',
            '&:hover': {
              borderColor: 'red',
            },
            '&:focus': {
              borderColor: 'red',
            },
            '&:active': {
              borderColor: 'red',
            },
          }} >
          <NavigateBeforeIcon />
        </Button>
        <Button
          // onClick={() => onNavigate(currentId + 1)} 
          className="w-72"
          sx={{
            color: 'gray', borderColor: 'gray',
            '&:hover': {
              borderColor: 'gray',
            },
            '&:focus': {
              borderColor: 'gray',
            },
            '&:active': {
              borderColor: 'gray',
            },
          }} >
          <NavigateNextIcon />
        </Button>
      </ButtonGroup>
    </>
  )
}

ButtonsAfterBeforeStatusCode.propTypes = {
  // currentId: PropTypes.number,
  // onNavigate: PropTypes.func.isRequired,
}


export default ButtonsAfterBeforeStatusCode