import React from "react";

class LigaLabels extends React.Component {
  render() {
    return (
      <div>
        <label
          htmlFor="storyline"
          data-testid="storyline-input-label">
          <textarea
            type="text"
            name="storyline" data-testid="storyline-input"
            onChange={this.handleChange}
            value={state.storyline}>
            Sinopse
          </textarea>
        </label>
      </div>
    )
  }
}

export default LigaLabels; I