import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ProviderGender from './store/storeGender/context';
import './common/styles';
import ProviderProducts from './store/firebase/context';

ReactDOM.render(
      <ProviderProducts>
        <ProviderGender>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ProviderGender>
    </ProviderProducts>,
  document.getElementById('root')
);

