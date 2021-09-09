import React from 'react';

class inputSelect extends React.Component {
  render() {
    return (
      <div>
        <label
          htmlFor="genre"
          data-testid="genre-input-label"
        >
          <select
            name="genre"
            data-testid="genre-input"
            onChange={ this.handleChange }
            value={ state.genre }
          >
            Gênero
            <option
              data-testid="genre-option"
              value="action"
            >
              Ação
            </option>
            <option
              data-testid="genre-option"
              value="comedy"
            >
              Comédia
            </option>
            <option
              data-testid="genre-option"
              value="thriller"
            >
              Suspense
            </option>
          </select>
        </label>
      </div>
    );
  }
}

export default inputSelect;
