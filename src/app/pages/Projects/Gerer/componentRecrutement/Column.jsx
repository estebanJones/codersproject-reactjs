import React, { Component } from "react";
import Card from "./Card";
import { GiBroadsword } from "react-icons/gi";

class Column extends Component {
  state = {};
  render() {
    return (
      <section className="">
        <div className="row ">
          <h2 className="text-light mr-2 ml-2">
            <button
              onClick={e => {
                //appelle au click de la methde addCard avec pour parametre e et la colonne concerner
                this.props.onClickAddCard(e, this.props.column);
              }}
              className="btn btn-success mr-2 ml-2"
            >
              <GiBroadsword />
              {this.props.column.name}
            </button>
          </h2>
          {/* <ul></ul> */}
          {this.props.column.cards.map(card => {
            return (
              <Card
                key={card.id}
                onDeleteCard={this.props.onDeleteCard}
                onEditCard={this.props.onEditCard}
                onClickLeft={this.props.onClickLeft}
                onClickRight={this.props.onClickRight}
                card={card}
                column={this.props.column}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default Column;
