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

import styled from 'styled-components'

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

export default function SelectType(props) {
  const { onChange, value } = props
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
        value={value}
        size='small'
        onChange={onChange}
        input={<OutlinedInput notched label='Lựa chọn' size='small' />}
        MenuProps={MenuProps}
        defaultValue='10'
      >
        <MenuItemCustom value={10}>
          <div className='flex gap-1'>
            <RadioButtonCheckedIcon />
            <span>Radio</span>
          </div>
        </MenuItemCustom>
        <MenuItem value={20}>
          <div className='flex gap-1'>
            <CheckBoxIcon />
            <span>Checkbox</span>
          </div>
        </MenuItem>
        <MenuItem value={30}>
          <div className='flex gap-1'>
            <ShortTextIcon />
            <span>Text</span>
          </div>
        </MenuItem>

        <MenuItem value={40}>
          <div className='flex gap-1'>
            <AccessTimeIcon />
            <span>Time</span>
          </div>
        </MenuItem>
        <MenuItem value={50}>
          <div className='flex gap-1'>
            <CalendarTodayIcon />
            <span>Date</span>
          </div>
        </MenuItem>
        <MenuItem value={60}>
          <div className='flex gap-1'>
            <ImageIcon />
            <span>Image</span>
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
