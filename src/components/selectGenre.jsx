import React from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          id="genre"
          value={ value }
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectGenre.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default SelectGenre;
