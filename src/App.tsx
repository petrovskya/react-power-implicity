import '../../react-power-implicity/src/ui/reset.scss';
import '../../react-power-implicity/src/ui/main.scss';
import { Header } from './components/Header/Header';
import { Slider } from './components/Slider/Slider';

export const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Slider />
    </div>
  );
};
