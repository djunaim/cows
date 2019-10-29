import axios from 'axios';

const getFarmers = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/farmers.json')
    .then((response) => {
      // do stuff to response
      const demFarmers = response.data.farmers;
      const farmers = [];
      Object.keys(demFarmers).forEach((farmerID) => {
        demFarmers[farmerID].id = farmerID;
        farmers.push(demFarmers[farmerID]);
      });
      resolve(farmers);
    })
    .catch((error) => reject(error));
});

export default { getFarmers };
