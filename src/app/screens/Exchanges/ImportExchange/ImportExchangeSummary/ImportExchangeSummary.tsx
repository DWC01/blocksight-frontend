import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import { IExchange } from '../../../../../interfaces';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles()((theme) => ({
	accordianSummary: {
		height: '58px',
		width: '100%',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: 'rgba(17, 51, 83, 0.04)',
		},
	},
	accordianSummarIsOpen: {
		backgroundColor: 'rgba(17, 51, 83, 0.04)',
		borderBottom: `1px solid rgba(17, 51, 83, 0.06)`,
	},
	accordianSummaryContent: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'start',
		alignContent: 'center',
		alignItems: 'center',
		padding: `${theme.spacing(1)}`,
	},
	noBorderRadius: {
		borderRadius: 0,
	},
	exchangeContainerImage: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
	},
	exchangeImage: {
		width: '30px',
		height: '30px',
	},
	exchangeContainerItem: {
		marginRight: '10px',
	},
	exchangeName: {
		fontSize: '1.2rem',
	},
	chipTest: {
		fontSize: '.7rem',
	},
}));

interface IProps {
	exchange: IExchange;
	isExpanded?: boolean;
	isAccordianMode?: boolean;
}

const ImportExchangeSummary = ({
	exchange,
	isExpanded = false,
	isAccordianMode = true,
}: IProps) => {
	const { classes } = useStyles();
	const ExpandIcon = isAccordianMode ? <ExpandMoreIcon /> : '';

	const isExpandedClass =
		isAccordianMode && isExpanded ? classes.accordianSummarIsOpen : '';

	return (
		<AccordionSummary
			expandIcon={ExpandIcon}
			aria-controls="panel1bh-content"
			id="panel1bh-header"
			className={`${classes.accordianSummary} ${isExpandedClass}`}
			classes={{ content: classes.accordianSummaryContent }}
		>
			<div
				className={`${classes.exchangeContainerItem} ${classes.exchangeContainerImage}`}
			>
				<img
					className={classes.exchangeImage}
					src={exchange.logoUrl}
					alt=""
				/>
			</div>
			<div className={classes.exchangeContainerItem}>
				<Typography className={classes.exchangeName}>
					{exchange.name}
				</Typography>
			</div>
			<div className={classes.exchangeContainerItem}>
				<Chip
					className={classes.chipTest}
					label="API"
					size="small"
					variant="outlined"
				/>
			</div>
		</AccordionSummary>
	);
};

export default ImportExchangeSummary;
