import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          id="rating"
          step="any"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}.isRequired;

export default InputRating;
