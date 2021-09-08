// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value
    });

    render(); {
      const { state } = this;
      return (
        <div>
          <form
            data-testid="add-movie-form"
          >
            <label
              htmlFor="title"
              data-testid="title-input-label">
              Título
            </label>
            <input
              data-testid="title-input" type="text"
              onChange={this.handleChange}
              value={state.title}
            />
            <label data-testid="subtitle-input-label"
              htmlFor="subtitle">Subtítulo
              <input
                type="text"
                name="subtitle"
                data-testid="subtitle-input"
                onChange={this.handleChange}
                value={state.subtitle} />
            </label>
            <label data-testid="image-input-label"
            >Imagem
              <input
                type="text"
                name="imagePath"
                data-testid="image-input"
                onChange={this.handleChange}
                value={state.imagePath}
              />
            </label>
            <label data-testid="storyline-input-label">
              <textarea
                type="text"
                name="storyline" data-testid="storyline-input"
                onChange={this.handleChange}
                value={state.storyline}>
                Sinopse
              </textarea>
            </label>
            <label data-testid="rating-input-label">
              <input
                type="number"
                name="rating" data-testid="rating-input"
                onChange={this.handleChange}
                value={state.rating}>
                Avaliação
              </input>
            </label>
            <label data-testid="genre-input-label">
              <select
                name="genre"
                data-testid="genre-input"
                onChange={this.handleChange}
                value={state.genre}
              >Gênero
                <option data-testid="genre-option"
                  value="action">Ação</option>
                <option data-testid="genre-option"
                  value="comedy">Comédia</option>
                <option data-testid="genre-option"
                  value="thriller">Suspense</option>
              </select>
            </label>
            <button data-testid="send-button"
            >Adicionar filme</button>
          </form>
        </div>
      );
    }
    export default AddMovie;
