const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '1px',
      '2px': '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px'
    },
    extend: {
      boxShadow: {
        34: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
        11: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
        42: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px',
        55: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px',
        58: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'
      }
    },

    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },

    colors: {
      'violet-50': 'rgb(245 243 255)',
      'violet-100': 'rgb(237 233 254)',
      'violet-200': 'rgb(221 214 254)',
      'violet-300': 'rgb(196 181 253)',
      'violet-400': 'rgb(167 139 250)',
      'violet-500': 'rgb(139 92 246)',
      'violet-600': 'rgb(124 58 237)',
      'violet-700': 'rgb(109 40 217)',
      'violet-800': 'rgb(91 33 182)',
      'violet-900': 'rgb(76 29 149)',

      'slate-50': 'rgb(248 250 252)',
      'slate-100': 'rgb(241 245 249)',
      'slate-200': 'rgb(226 232 240)',
      'slate-300': 'rgb(203 213 225)',
      'slate-400': 'rgb(148 163 184)',
      'slate-500': 'rgb(100 116 139)',
      'slate-600': 'rgb(71 85 105)',
      'slate-700': 'rgb(51 65 85)',
      'slate-800': 'rgb(30 41 59)',
      'slate-900': 'rgb(15 23 42)',

      'bg-gray-50': 'rgb(249 250 251)',
      'bg-gray-100': 'rgb(243 244 246)',
      'bg-gray-200': 'rgb(229 231 235)',
      'bg-gray-300': 'rgb(209 213 219)',
      'bg-gray-400': 'rgb(156 163 175)',
      'bg-gray-500': 'rgb(107 114 128)',
      'bg-gray-600': 'rgb(75 85 99)',
      'bg-gray-700': 'rgb(55 65 81)',
      'bg-gray-800': 'rgb(31 41 55)',
      'bg-gray-900': 'rgb(17 24 39)'
    }
  },

  plugins: []
})
