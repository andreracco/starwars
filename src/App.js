import React from 'react'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import theme from './common/styles/theme'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

const App = () => (
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</ThemeProvider>
)

export default App
