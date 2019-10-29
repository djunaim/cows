import './cowList.scss';
import cowData from '../helpers/cows';

const buildCows = () => {
  cowData.getCows()
    .then((response) => {
      const demCows = response.data.cows;
      const cows = [];
      // gets array of keys in object. Now can do forEach on array
      Object.keys(demCows).forEach((cowID) => {
        // inside object get value of key, in this case cowID. '.id' creates key of id and value of cowID
        demCows[cowID].id = cowID;
        cows.push(demCows[cowID]);
      });
      console.log('It worked!', cows);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
