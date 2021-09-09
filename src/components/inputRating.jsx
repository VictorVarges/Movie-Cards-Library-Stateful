import React from 'react';

class inputRating extends React.Component {
  render() {
    return (
      <div>
        <label
          htmlFor="rating"
          data-testid="rating-input-label"
        >
          Avaliação
          <input
            type="number"
            name="rating"
            data-testid="rating-input"
            onChange={ this.handleChange }
            value={ state.rating }
          />
        </label>
      </div>
    );
  }
}

export default inputRating;
