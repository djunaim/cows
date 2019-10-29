import axios from 'axios';

const getFarmerCows = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/farmerCows.json')
    .then((response) => {
      const demFarmerCows = response.data.farmerCows;
      const farmerCows = [];
      Object.keys(demFarmerCows).forEach((farmerCowsID) => {
        demFarmerCows[farmerCowsID].id = farmerCowsID;
        farmerCows.push(demFarmerCows[farmerCowsID]);
      });
      resolve(farmerCows);
    })
    .catch((error) => reject(error));
});

export default { getFarmerCows };
