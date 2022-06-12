import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select
} from '@mui/material'

import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import ImageIcon from '@mui/icons-material/Image'
import ShortTextIcon from '@mui/icons-material/ShortText'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import styled from '@emotion/styled'
import { useFormContext } from 'react-hook-form'
import { memo } from 'react'
import { itemType } from '../constants/itemType'

const MenuItemCustom = styled(MenuItem)`
  border-radius: '4px';
`

const MenuProps = {
  PaperProps: {
    style: {
      boxShadow:
        'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
      marginTop: 8,
      padding: '4px 12px'
    }
  }
}

interface Props {
  regName?: any
}

const SelectType = memo(({ regName }: Props) => {
  const methods = useFormContext()
  return (
    <FormControl
      sx={{
        width: 200
      }}
      size='small'
    >
      <InputLabel shrink>Lựa chọn</InputLabel>

      <Select
        variant='outlined'
        sx={{ width: 200, height: 40 }}
        size='small'
        input={<OutlinedInput notched label='Lựa chọn' size='small' />}
        MenuProps={MenuProps}
        {...methods.register(regName)}
        // value={methods.watch(regName) || itemType.text}
        defaultValue={itemType.text}
      >
        <MenuItemCustom value={itemType.text}>
          <div className='flex gap-1'>
            <ShortTextIcon />
            <span>Text</span>
          </div>
        </MenuItemCustom>
        <MenuItem value={itemType.checkbox}>
          <div className='flex gap-1'>
            <CheckBoxIcon />
            <span>Checkbox</span>
          </div>
        </MenuItem>
        <MenuItem value={itemType.radio}>
          <div className='flex gap-1'>
            <RadioButtonCheckedIcon />
            <span>Radio</span>
          </div>
        </MenuItem>

        <MenuItem value={itemType.time}>
          <div className='flex gap-1'>
            <AccessTimeIcon />
            <span>Time</span>
          </div>
        </MenuItem>
        <MenuItem value={itemType.date}>
          <div className='flex gap-1'>
            <CalendarTodayIcon />
            <span>Date</span>
          </div>
        </MenuItem>
        <MenuItem value={itemType.image}>
          <div className='flex gap-1'>
            <ImageIcon />
            <span>Image</span>
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  )
})

export default SelectType
