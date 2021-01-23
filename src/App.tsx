import { Provider } from 'react-redux';
import './App.css';
import RepositoriesList from './components/RepositoriesList'
import { store } from './state';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Search NPM Package</h1>
        <RepositoriesList />
      </div>

    </Provider>
  );
}

export default App;
