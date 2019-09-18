import { createMuiTheme } from '@material-ui/core/styles'
const theme = createMuiTheme({
	palette: {
        primary: {
            light: '#ffac0030',
            main: '#ffac00',
            dark: '#e69b00',
            contrastText: '#3e3e3e',
        },
        secondary: {
            light: '#3e3e3e30',
            main: '#3e3e3e',
            dark: '#414141',
            contrastText: '#ffac00'
        },
	}
})
export default theme
