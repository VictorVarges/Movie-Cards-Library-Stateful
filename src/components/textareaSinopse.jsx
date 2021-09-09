import React from 'react';
import PropTypes from 'prop-types';

class TextSinopse extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          type="textarea"
          name="storyline"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextSinopse.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextSinopse;
