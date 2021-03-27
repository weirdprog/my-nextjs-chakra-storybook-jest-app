import { Box } from "@chakra-ui/react"
import PropTypes from 'prop-types';

export default function ProductDescription({ description, textAlign, fontWeight, color }) {
  return (
    <Box 
      textAlign={textAlign}
      fontWeight={fontWeight}
      color={color}>
      {description}
    </Box>
  );
}

ProductDescription.propTypes = {
  textAlign: PropTypes.oneOf(["left", "right", "center"]),
  fontWeight: PropTypes.oneOf(['normal', 'bold']),
  color: PropTypes.oneOf(["black", "gray", "red", "orange", "yellow", "green", "teal", "blue", "cyan", "purple", "pink"]),
  description: PropTypes.string.isRequired
};

ProductDescription.defaultProps = {
  textAlign: 'center',
  fontWeight: 'normal',
  color: 'black',
  description: 'Test Description'
};