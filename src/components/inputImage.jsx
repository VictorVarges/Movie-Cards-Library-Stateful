import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          id="image"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputImage;
