import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.textCheck = this.textCheck.bind(this);
    this.filterChanges = this.filterChanges.bind(this);
  }

  textCheck({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  filterChanges({ movies, bookmarkedOnly, selectedGenre, searchText }) {
    const FilteredMovies = movies.filter((movie) => {
      const textFiltered = `${movie.title} ${movie.subtitle} ${movie.storyline}`;

      return textFiltered.includes(searchText);
    });

    if (bookmarkedOnly) {
      return FilteredMovies.filter((movie) => movie.bookmarked);
    }

    if (selectedGenre) {
      return FilteredMovies.filter(({ genre }) => genre === selectedGenre);
    }

    return FilteredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.textCheck }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.textCheck }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.textCheck }
        />
        <MovieList movies={ this.filterChanges(this.state) } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
