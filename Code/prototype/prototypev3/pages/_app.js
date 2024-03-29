/*
import '../styles/globals.css'
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
  
}

export default MyApp;
*/
import '../styles/globals.css';
import Layout from '../components/Layout';
import { getPrimaryMenu } from '../lib/api';

function MyApp({ Component, pageProps, menuItems }) {
  return (
    <Layout menu={menuItems}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async () => {
  const menuItems = await getPrimaryMenu();
  return { menuItems };
};

export default MyApp;
