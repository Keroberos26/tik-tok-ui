import "./GlobalStyles.scss";
import PropTypes from "prop-types";

const GlobalStyles = ({ children }) => {
  return children;
};

GlobalStyles.prototype = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyles;
