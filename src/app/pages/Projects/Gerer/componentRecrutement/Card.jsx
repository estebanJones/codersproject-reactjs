import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    return (
      <article
        id={this.props.card.id}
        className="border border-light rounded m-2"
      >
        <h3 className="text-light">
          {this.props.card.id}-{this.props.card.question}
        </h3>
        {/* <p className="text-light">{this.props.card.response}</p> */}
        <button
          onClick={e => {
            this.props.onClickLeft(e, this.props.card, this.props.column);
          }}
        >
          -
        </button>
        <button
          onClick={e => {
            this.props.onDeleteCard(e, this.props.card, this.props.column);
          }}
          className="btn btn-danger"
        >
          Supprimer
        </button>
        <button
          className="btn btn-primary"
          onClick={e => {
            this.props.onEditCard(e, this.props.card, this.props.column);
          }}
        >
          Modifier
        </button>
        <button
          onClick={e => {
            this.props.onClickRight(e, this.props.Card, this.props.column);
          }}
        >
          +
        </button>
      </article>
    );
  }
}

export default Card;
