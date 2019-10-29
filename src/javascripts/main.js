import 'bootstrap';
import '../styles/main.scss';
import cowList from './components/cowList/cowList';
import farmerList from './components/farmerList/farmerList';
import farmerCowData from './helpers/data/farmerCowData';

const init = () => {
  cowList.buildCows();
  farmerList.buildFarmers();
  farmerCowData.getFarmerCows()
    .then((farmerCows) => {
      // farmerCows should be an array of farmerCow objects
      // they should also have the farmerCow id in them
      console.log('from main.js', farmerCows);
    })
    .catch((error) => console.error(error));
};

init();
