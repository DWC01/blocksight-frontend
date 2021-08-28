import { render, screen } from '../../test-utils';
// import { useDispatch } from 'react-redux';
import App from './index';
// import { updateIsMetaMaskConnected } from '../../redux/slices/metamask-connected-slice';

describe('App', () => {
	describe('when not logged in with metamask', () => {
		test('should render the app home layout', () => {
			render(<App />);

			const layoutAppHome = screen.getByTestId('layoutAppHome');
			expect(layoutAppHome).toBeInTheDocument();
		});
	});
});
