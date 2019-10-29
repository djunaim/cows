import './cowList.scss';
import cowData from '../../helpers/data/cows';

const buildCows = () => {
  cowData.getCows()
    .then((response) => {
      console.log('cow array from cowList', response);

      // call a domString builder function and pass in cows
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
