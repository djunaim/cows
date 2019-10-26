import './cowList.scss';
import cows from '../helpers/cows';

const buildCows = () => {
  cows.getCows()
    .then((response) => {
      console.log('It worked!', response);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
