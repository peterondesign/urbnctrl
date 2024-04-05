import { Bars } from 'react-loader-spinner';
import PropTypes from 'prop-types';

/**
 * @param {{size: string, color: string}} props
 * @returns {JSX.Element}
 */
const Loader = ({ size = '80', color = '#FFBB4C' }) => {
  return (
    <Bars
      height={size}
      width={size}
      color={color}
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

Loader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Loader;
