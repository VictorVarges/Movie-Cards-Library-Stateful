import React from 'react';

class inputImagem extends React.Component {
  render() {
    return (
      <div>
        <label
          htmlFor="imagePath"
          data-testid="image-input-label"
        >
          Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            onChange={ this.handleChange }
            value={ state.imagePath }
          />
        </label>
      </div>
    );
  }
}

export default inputImagem;