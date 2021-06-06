import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ProviderGender from './store/storeGender/context';
import './common/styles';

ReactDOM.render(
    <ProviderGender>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProviderGender>,
  document.getElementById('root')
);

