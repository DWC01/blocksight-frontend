import { makeStyles } from '@material-ui/core/styles';
import TokenBalanceInterface from '../../../../../../../../interfaces/token-balance-interface';

const useStyles = makeStyles((theme) => ({
	tokenBalanceRow: {
		display: 'flex',
		justifyContent: 'space-between',
		fontSize: '.95rem',
		alignItems: 'center',
		padding: '13px 30px',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: 'rgba(17, 51, 83, 0.02)',
		},
	},
	tokenBalanceColumn: {
		textAlign: 'right',
		'&:first-child': {
			textAlign: 'left',
		},
	},
	nameColumn: {
		display: 'flex',
		alignItems: 'center',
		width: '200px',
	},
	image: {
		width: '32px',
		height: '32px',
		borderRadius: '50%',
		boxShadow: theme.shadows[2],
	},
	nameContainer: {},
	name: {
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		width: '150px',
		marginLeft: '16px',
	},
	symbol: {
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		width: '150px',
		marginLeft: '16px',
		color: 'rgba(17, 51, 83, 0.6)',
	},
	amountColumn: {
		width: '150px',
	},
	priceColumn: { width: '150px' },
	totalColumn: { width: '150px' },
}));

interface Props {
	token: TokenBalanceInterface;
}

const TokenBalance = ({ token }: Props) => {
	const classes = useStyles();
	const { name, price, symbol, balance, logoUrl, totalValue } = token;

	return (
		<div className={classes.tokenBalanceRow}>
			<div
				className={`${classes.tokenBalanceColumn} ${classes.nameColumn}`}
			>
				<img alt="" src={logoUrl} className={classes.image} />
				<div className={classes.nameContainer}>
					<div className={classes.symbol}>{symbol}</div>
					<div className={classes.name}>{name}</div>
				</div>
			</div>

			<div
				className={`${classes.tokenBalanceColumn} ${classes.amountColumn}`}
			>
				<div>{balance}</div>
			</div>

			<div
				className={`${classes.tokenBalanceColumn} ${classes.priceColumn}`}
			>
				<div>{price.formatted}</div>
			</div>

			<div
				className={`${classes.tokenBalanceColumn} ${classes.totalColumn}`}
			>
				<div>{totalValue.formatted}</div>
			</div>
		</div>
	);
};

export default TokenBalance;
