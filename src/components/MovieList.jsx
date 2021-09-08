import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
// {/* searchText={searchText}
// onSearchTextChange={this.handleChange}
// bookmarkedOnly={bookmarkedOnly}
// selectedGenre={selectedGenre}
// onSelectedGenreChange={this.handleChange}
// onBookmarkedChange={this.handleChange}
// <MovieList movies={ movies } */}
