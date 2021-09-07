import react from 'react';
import movies from '/'

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onBookmarkedChange,
      bookmarkedOnly,
      onSearchTextChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="searchText" data-testid="text-input-label"
      </form>
    )
  }
}

export default SearchBar;
// this.state = {
//   searchText: '',
//   onSearchTextChange: () => (undefined),
//   bookmarkedOnly: false,
//   onBookmarkedChange: () => (undefined),
//   selectedGenre: '',
//   onSelectedGenreChange: () => (undefined)
// }