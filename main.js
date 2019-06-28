const { menubar } = require('menubar')

const w = 360
const h = 60

const mb = menubar({
  browserWindow: {
    width: w,
    minWidth: w,
    maxWidth: w,
    height: h,
    minHeight: h,
    maxHeight: h
  },
  alwaysOnTop: process.env.NODE_ENV === 'dev' ? true : false
})

mb.on('ready', () => {
  console.log('app is ready!')
})
