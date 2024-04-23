import PropTypes from 'prop-types';
import classNames from 'classnames';
import { gmail } from '../../../assets/images';
import Loader from '../../../components/loader';

/**
 * Button component.
 * @param {{loading: boolean, text: string, type: "gmail" | "default"} & React.BaseHTMLAttributes} props - The props for the Button component.
 * @returns {JSX.Element} - A button element.
 */

const Button = ({ loading, text = 'text', type, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={classNames(
        `h-[45px] w-full bg-primary font-medium text-light-dark capitalize rounded-[10px] flex items-center justify-center gap-4 ${restProps.className}`,
        { 'opacity-70 cursor-not-allowed': restProps.disabled || loading },
      )}
    >
      {!loading ? (
        <>
          {type === 'gmail' && <img src={gmail} alt="" />}
          <span>{text}</span>
        </>
      ) : (
        <span>
          <Loader size="28" color="#fff" />
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  loading: PropTypes.bool,
};

export default Button;
