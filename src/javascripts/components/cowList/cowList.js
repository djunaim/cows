import './cowList.scss';
import smash from '../../helpers/data/smash';

const buildCows = () => {
  smash.getCompleteCows()
    .then((cows) => {
      console.log('cow array from cowList', cows);

      // call a domString builder function and pass in cows
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
