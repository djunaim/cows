import 'bootstrap';
import '../styles/main.scss';
import cowList from './cowList/cowList';

const init = () => {
  cowList.buildCows();
};

init();
