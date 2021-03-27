import { Box } from "@chakra-ui/react"
import PropTypes from 'prop-types';

export default function ProductPrice({ price, color, fontWeight, textAlign }) {
  return (
    <Box 
      textAlign={textAlign}
      fontWeight={fontWeight}
      color={color}>
      {price}
    </Box>
  );
}

ProductPrice.propTypes = {
  textAlign: PropTypes.oneOf(["left", "right", "center"]),
  fontWeight: PropTypes.oneOf(['normal', 'bold']),
  color: PropTypes.oneOf(["black", "gray", "red", "orange", "yellow", "green", "teal", "blue", "cyan", "purple", "pink"]),
  price: PropTypes.string.isRequired
};

ProductPrice.defaultProps = {
  textAlign: 'center',
  fontWeight: 'bold',
  color: 'teal',
  price: '$100.00'
};