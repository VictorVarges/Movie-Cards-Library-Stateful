import React from "react";

class button extends React.Component {
  render() {
    return (
      <div>
        <button
          type="submit"
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

export default button;