import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label
          data-testid="subtitle-input-label"
          htmlFor="subtitle"
        >
          Subtítulo
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            onChange={ onChange }
            value={ value }
          />
        </label>
      </div>
    );
  }
}
InputSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSubtitle;
