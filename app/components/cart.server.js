import Cart from '../path-to-your-components/Cart';
import { getServerSidePropsWrapper } from '../path-to-your-utils/getServerSidePropsWrapper';

const YourPageServer = ({ initialReduxState }) => {
  return <Cart />;
};

export const getServerSideProps = getServerSidePropsWrapper();

export default YourPageServer;
