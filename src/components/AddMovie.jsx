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
  }
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
        <input data-testid="title-input" type="text"
          onChange={this.handleChange}
          value={state.title}
        />
      </form>
    </div>
  );
}
}

export default AddMovie;
