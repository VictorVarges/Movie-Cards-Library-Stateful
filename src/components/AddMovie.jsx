// implement AddMovie component here
import React from 'react';
import LigaLabels from './ligaLabels';

export default class AddMovie extends React.Component {
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
    this.handleChange = this.handleChange.bind(this);
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

            <ligaLabels />
          </form>
        </div>
      );
    }
  }
}