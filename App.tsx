import { Provider } from 'react-redux';
import Layout from './layout/Layout';
import Navigation from './routes/Routes';
import { store } from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Navigation />
      </Layout>
    </Provider>
  );
}