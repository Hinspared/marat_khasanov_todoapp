import { Provider } from 'react-redux';
import Header from './components/Header';
import Main from './components/main/Main';
import { store } from './setup/store/store';
import { ThemeProvider } from '@emotion/react';
import theme from './setup/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Main />
        </div>
      </Provider>
    </ThemeProvider>
  );
}
