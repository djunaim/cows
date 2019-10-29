import axios from 'axios';

// const getCows = () => axios.get('https://teamtreehouse.com/monicadjunaidi.json');

const getCows = () => new Promise((resolve, reject) => {
  // promise within promise so to wait until data has been modified
  axios.get('../../../../db/cows.json').then((response) => {
    const demCows = response.data.cows;
    const cows = [];
    // gets array of keys in object. Now can do forEach on array
    Object.keys(demCows).forEach((cowID) => {
      // inside object get value of key, in this case cowID. '.id' creates key of id and value of cowID
      demCows[cowID].id = cowID;
      cows.push(demCows[cowID]);
    });
    resolve(cows);
  }).catch((error) => reject(error));
});


export default { getCows };
