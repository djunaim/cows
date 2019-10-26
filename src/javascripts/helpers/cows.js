import axios from 'axios';

const getCows = () => axios.get('https://teamtreehouse.com/monicadjunaidi.json');

export default { getCows };
