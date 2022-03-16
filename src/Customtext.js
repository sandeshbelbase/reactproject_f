import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { Controller } from 'react-hook-form'

const Customtext = ({name, control, type, rows, cols}) => {
  return (
    <>
        <Controller
        name={name}
        control={control}
        cols={cols}
        render={({field:{value, onChange}}) => <textarea onChange={onChange} style={{ width:"100%" }} name={name} value={value} rows={rows} type={type}/>}
        />
    </>
  )
}

export default Customtext