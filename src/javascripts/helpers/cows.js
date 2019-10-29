import axios from 'axios';

// const getCows = () => axios.get('https://teamtreehouse.com/monicadjunaidi.json');

const getCows = () => axios.get('../../../../db/cows.json');


export default { getCows };
