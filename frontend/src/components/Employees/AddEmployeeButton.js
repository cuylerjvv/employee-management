import React from 'react'
import AddEmployeeModal from './AddEmployeeModal'
import Box from '@mui/material/Box';

import './AddEmployeeModal'

function AddEmployeeButton(props) {

  return (
    
      <Box>
        <AddEmployeeModal
          open={props.addEmployeePopUp}
          setEmployeesList={props.setEmployeesList}
        >
        </AddEmployeeModal>

      </Box>
  )
}

export default AddEmployeeButton