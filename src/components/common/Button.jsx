import PropTypes from "prop-types";
import cn from "../../utils/cn";

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={cn(
        `w-full bg-btn p-4 text-primary rounded-2xl font-semibold text-base hover:opacity-85 duration-300`,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;