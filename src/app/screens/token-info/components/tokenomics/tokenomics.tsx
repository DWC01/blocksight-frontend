import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { themeColors } from '../../../../../theme/colors';
import TokenBalance from '../../../../../interfaces/token-balance-interface';

const { coinbaseBorderColor } = themeColors;

const useStyles = makeStyles((theme) => ({
	tokenInfosContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		borderRadius: '10px',
		padding: '13px 30px',
		marginTop: '50px',
		maxWidth: '1300px',
	},
	tokenInfoContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignContent: 'center',
		padding: '13px 30px',
		borderRight: `1px solid ${coinbaseBorderColor}`,
	},
	tokenInfoHeader: {
		fontSize: '1.2rem',
		textAlign: 'center',
	},
	tokenInfo: {
		fontSize: '1.2rem',
		textAlign: 'center',
	},
}));

interface Props {
	tokenBalance: TokenBalance;
}

const Tokenomics = ({ tokenBalance }: Props) => {
	const classes = useStyles();
	const { balance, price, totalValue } = tokenBalance;

	return (
		<Paper elevation={2} className={classes.tokenInfosContainer}>
			<div className={classes.tokenInfoContainer}>
				<Typography className={classes.tokenInfoHeader}>
					Tokens
				</Typography>
				<Typography className={classes.tokenInfo}>{balance}</Typography>
			</div>
			<div className={classes.tokenInfoContainer}>
				<Typography className={classes.tokenInfoHeader}>
					Current Price
				</Typography>
				<Typography className={classes.tokenInfo}>
					{price.formatted}
				</Typography>
			</div>
			<div className={classes.tokenInfoContainer}>
				<Typography className={classes.tokenInfoHeader}>
					Total Value
				</Typography>
				<Typography className={classes.tokenInfo}>
					{totalValue.formatted}
				</Typography>
			</div>
			<div className={classes.tokenInfoContainer}>
				<Typography className={classes.tokenInfoHeader}>
					Total Invested
				</Typography>
				<Typography className={classes.tokenInfo}>??</Typography>
			</div>
			<div className={classes.tokenInfoContainer}>
				<Typography className={classes.tokenInfoHeader}>DOA</Typography>
				<Typography className={classes.tokenInfo}>??</Typography>
			</div>
			<div className={classes.tokenInfoContainer}>
				<Typography className={classes.tokenInfoHeader}>
					Profit/Loss
				</Typography>
				<Typography className={classes.tokenInfo}>??</Typography>
			</div>
			<div className={classes.tokenInfoContainer}>
				<Typography className={classes.tokenInfoHeader}>
					After Taxes
				</Typography>
				<Typography className={classes.tokenInfo}>??</Typography>
			</div>
		</Paper>
	);
};

export default Tokenomics;
