import cowData from './cows';
import farmerData from './farmerData';
import farmerCowData from './farmerCowData';

// this file is where you write function that bring multiple collections together
const getCompleteCows = () => new Promise((resolve, reject) => {
  cowData.getCows()
    .then((cows) => {
      farmerData.getFarmers().then((farmers) => {
        farmerCowData.getFarmerCows().then((farmerCows) => {
          // do stuff
          const finalCows = [];
          cows.forEach((cow) => {
            const newCow = { ...cow };
            // get farmerCowRecord object
            const farmerCowRecord = farmerCows.find((x) => x.cowID === cow.id);
            const owner = farmers.find((x) => x.id === farmerCowRecord.farmerID);
            newCow.owner = owner;
            finalCows.push(newCow);
          });
          resolve(finalCows);
        });
      });
    })
    .catch((error) => reject(error));
});

export default { getCompleteCows };
