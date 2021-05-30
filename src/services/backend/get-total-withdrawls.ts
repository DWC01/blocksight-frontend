import axios from 'axios';
import environment from '../../constants/environment';
import TokenWithdrawlsResponse from '../../interfaces/total-withdrawls-response-interface';

const { NODE_ENV } = process.env;
const { serverBaseUrl } = environment[NODE_ENV];

interface AxiosResponse {
	data: TokenWithdrawlsResponse;
}

const getTotalWithdrawls = async (): Promise<TokenWithdrawlsResponse> => {
	const url = `${serverBaseUrl}/total-fiat-withdrawls`;
	const response: AxiosResponse = await axios.get(url);
	const { data } = response;

	return data;
};

export default getTotalWithdrawls;
