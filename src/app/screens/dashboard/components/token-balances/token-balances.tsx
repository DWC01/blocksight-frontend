import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TokenBalance from '../token-balance';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { selectMetaMaskWallet } from '../../../../../redux/slices/metamask-slice';
import {
	fetchTokenBalances,
	selectTokenBalances,
	selectTokenBalancesStatus,
	selectTokenBalancesError,
} from '../../../../../redux/slices/token-balances-slice';
import {
	fetchTokenData,
	selectTokenData,
	selectTokenDataStatus,
	selectTokenDataError,
} from '../../../../../redux/slices/token-data-slice';

const useStyles = makeStyles((theme) => ({
	tokenContainer: {
		padding: theme.spacing(2),
	},
	tokenBalancesTable: {},
	tokenBalancesHeader: {
		marginTop: theme.spacing(2),
	},
	tokenBalanceHeader: {
		fontWeight: 'bold',
		fontSize: '1.1rem',
		marginBottom: theme.spacing(2),
	},
	tokenBalancesColumn: {
		textAlign: 'right',
		'&:first-child': {
			textAlign: 'left',
		},
	},
}));

const TokenBalances = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { selectedAddress } = useSelector(selectMetaMaskWallet);
	const tokenBalances = useSelector(selectTokenBalances);
	const tokenBalancesStatus = useSelector(selectTokenBalancesStatus);
	const tokenBalancesError = useSelector(selectTokenBalancesError);
	const tokenData = useSelector(selectTokenData);
	const tokenDataStatus = useSelector(selectTokenDataStatus);
	const tokenDataError = useSelector(selectTokenDataError);

	useEffect(() => {
		if (selectedAddress && tokenBalancesStatus === 'idle') {
			dispatch(fetchTokenBalances(selectedAddress));
		}
	}, [tokenBalancesStatus, selectedAddress, dispatch]);

	useEffect(() => {
		if (
			selectedAddress &&
			tokenBalances.length > 0 &&
			tokenDataStatus === 'idle'
		) {
			let symbols = '';

			tokenBalances.forEach((token, index) => {
				if (index === 0) {
					symbols += `${token.contract_ticker_symbol}`;
				} else {
					symbols += `,${token.contract_ticker_symbol}`;
				}
			});

			dispatch(fetchTokenData(symbols));
		}
	}, [tokenDataStatus, selectedAddress, tokenBalances, dispatch]);

	const tokenBalancesHTML = tokenBalances
		.filter((tokenBalance) => {
			const { balance } = tokenBalance;
			return balance !== '0';
		})
		.map((tokenBalance) => {
			const { contract_address, contract_ticker_symbol } = tokenBalance;
			const singleTokenData =
				tokenData[contract_ticker_symbol.toUpperCase()];

			return (
				<TokenBalance
					key={contract_address}
					tokenData={singleTokenData}
					tokenBalance={tokenBalance}
				/>
			);
		});

	console.log('tokenData', tokenData);

	return (
		<Paper elevation={2} className={classes.tokenContainer}>
			<Typography className={classes.tokenBalanceHeader}>
				Tokens
			</Typography>
			<Divider />
			<div className={classes.tokenBalancesTable}>
				<div className={classes.tokenBalancesHeader}>
					<Grid
						container
						direction="row"
						justify="space-between"
						alignItems="center"
						spacing={3}
					>
						<Grid item xs className={classes.tokenBalancesColumn}>
							<Typography>Asset</Typography>
						</Grid>
						<Grid item xs className={classes.tokenBalancesColumn}>
							<Typography>Amount</Typography>
						</Grid>
						<Grid item xs className={classes.tokenBalancesColumn}>
							<Typography>Price</Typography>
						</Grid>
						<Grid item xs className={classes.tokenBalancesColumn}>
							<Typography>Total</Typography>
						</Grid>
					</Grid>
				</div>
				{tokenBalancesHTML}
			</div>
		</Paper>
	);
};

export default TokenBalances;
