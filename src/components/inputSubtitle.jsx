import React from 'react';

class inputSubtitle extends React.Component {
  render() {
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
            onChange={ this.handleChange }
            value={ state.subtitle }
          />
        </label>
      </div>
    );
  }
}

export default inputSubtitle;
