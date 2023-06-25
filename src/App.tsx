import './App.css';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
