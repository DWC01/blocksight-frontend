import Paper from '@material-ui/core/Paper';
import TokenBalance from './token-balance';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TokenBalanceInterface from '../../../../../../../interfaces/token-balance-interface';
import { themeColors } from '../../../../../../../theme/colors';
const { coinbaseBorderColor } = themeColors;

const useStyles = makeStyles((theme) => ({
	tokenBalancesContainer: {
		padding: theme.spacing(2),
		borderRadius: '10px',
	},
	tokenBalancesTable: {
		borderRadius: '10px',
		border: `1px solid ${coinbaseBorderColor}`,
	},
	tokenBalanceHeader: {
		fontSize: '1.2rem',
		marginBottom: theme.spacing(2),
	},
	tokenBalancesHeader: {
		fontSize: '.95rem',
		padding: '16px 30px',
		borderBottom: `1px solid ${coinbaseBorderColor}`,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	tokenBalancesColumn: {
		color: 'rgba(17, 51, 83, 0.6)',
		textAlign: 'right',
		'&:first-child': {
			textAlign: 'left',
		},
	},
	nameColumn: {
		width: '200px',
	},
	amountColumn: {
		width: '150px',
	},
	priceColumn: {
		width: '150px',
	},
	totalColumn: {
		width: '150px',
	},
}));

interface Props {
	tokenBalances: TokenBalanceInterface[];
}

const TokenBalances = ({ tokenBalances = [] }: Props) => {
	const classes = useStyles();

	const tokenBalanceComponents = tokenBalances.map((token) => {
		const { contractAddress } = token;
		return <TokenBalance key={contractAddress} token={token} />;
	});

	return (
		<Paper elevation={2} className={classes.tokenBalancesContainer}>
			<Typography className={classes.tokenBalanceHeader}>
				Tokens
			</Typography>
			<div className={classes.tokenBalancesTable}>
				<div className={classes.tokenBalancesHeader}>
					<div
						className={`${classes.tokenBalancesColumn} ${classes.nameColumn}`}
					>
						<Typography>Name</Typography>
					</div>
					<div
						className={`${classes.tokenBalancesColumn} ${classes.amountColumn}`}
					>
						<Typography>Amount</Typography>
					</div>
					<div
						className={`${classes.tokenBalancesColumn} ${classes.priceColumn}`}
					>
						<Typography>Price</Typography>
					</div>
					<div
						className={`${classes.tokenBalancesColumn} ${classes.totalColumn}`}
					>
						<Typography>Total</Typography>
					</div>
				</div>
				{tokenBalanceComponents}
			</div>
		</Paper>
	);
};

export default TokenBalances;
