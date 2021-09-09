import React from 'react';

class inputTitle extends React.Component {
  render() {
    // const { value, onChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          id="title"
        />
      </label>
    );
  }
}
export default inputTitle;
