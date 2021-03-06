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
import { Controller, useFormContext } from 'react-hook-form'
import { itemType } from '../../constants/itemType'

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

export function SelectType({ regName }: Props) {
  const methods = useFormContext()
  return (
    <>
      <FormControl
        sx={{
          width: 200
        }}
        size='small'
      >
        <InputLabel shrink>Lựa chọn</InputLabel>

        <Controller
          control={methods.control}
          name={`${regName}`}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Select
              variant='outlined'
              sx={{ width: 200, height: 40 }}
              size='small'
              input={<OutlinedInput notched label='Lựa chọn' size='small' />}
              MenuProps={MenuProps}
              onChange={e => {
                onChange(e)
                onBlur()
              }}
              value={value || itemType.text}
            >
              <MenuItem
                sx={{ borderRadius: '4px', marginT: '4px' }}
                value={itemType.text}
              >
                <div className='flex gap-1'>
                  <ShortTextIcon />
                  <span>Text</span>
                </div>
              </MenuItem>
              <MenuItem
                sx={{ borderRadius: '4px', marginY: '4px' }}
                value={itemType.checkbox}
              >
                <div className='flex gap-1'>
                  <CheckBoxIcon />
                  <span>Checkbox</span>
                </div>
              </MenuItem>
              <MenuItem
                sx={{ borderRadius: '4px', marginY: '4px' }}
                value={itemType.radio}
              >
                <div className='flex gap-1'>
                  <RadioButtonCheckedIcon />
                  <span>Radio</span>
                </div>
              </MenuItem>

              <MenuItem
                sx={{ borderRadius: '4px', marginY: '4px' }}
                value={itemType.time}
              >
                <div className='flex gap-1'>
                  <AccessTimeIcon />
                  <span>Time</span>
                </div>
              </MenuItem>
              <MenuItem
                sx={{ borderRadius: '4px', marginY: '4px' }}
                value={itemType.date}
              >
                <div className='flex gap-1'>
                  <CalendarTodayIcon />
                  <span>Date</span>
                </div>
              </MenuItem>
              <MenuItem
                sx={{ borderRadius: '4px', marginY: '4px' }}
                value={itemType.image}
              >
                <div className='flex gap-1'>
                  <ImageIcon />
                  <span>Image</span>
                </div>
              </MenuItem>

              <MenuItem sx={{ borderRadius: '4px', marginY: '4px' }} disabled>
                <div className='h-0.5 w-full bg-gray-900'></div>
              </MenuItem>

              <MenuItem
                sx={{ borderRadius: '4px', marginY: '4px' }}
                value={itemType.vectorCheckbox}
              >
                <div className='flex gap-1'>
                  <ImageIcon />
                  <span>Lưới chọn nhiều</span>
                </div>
              </MenuItem>
            </Select>
          )}
        />
      </FormControl>
    </>
  )
}
