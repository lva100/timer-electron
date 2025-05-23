const path = require('path')
const { Application } = require('spectron')

const appPath = () => {
  switch (process.platform) {
    case 'darwin':
      return path.join(__dirname, '..', '.tmp', 'mac', 'TimerElectron.app', 'Contents', 'MacOS', 'TimerElectron')
    case 'linux':
      return path.join(__dirname, '..', '.tmp', 'linux', 'TimerElectron')
    case 'win32':
      return path.join(__dirname, '..', '.tmp', 'win-unpacked', 'TimerElectron.exe')
    default:
      throw Error(`Unsupported platform ${process.platform}`)
  }
}
global.app = new Application({ path: appPath() })
