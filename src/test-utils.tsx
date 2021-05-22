import './setup-tests';
import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './redux/store';
import theme from './theme';
import { BrowserRouter as Router } from 'react-router-dom';

const AllTheProviders: FC = ({ children }) => {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Router>{children}</Router>
				</ThemeProvider>
			</Provider>
		</React.StrictMode>
	);
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
