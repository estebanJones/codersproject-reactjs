import React, { Component } from "react";
import Card from "../componenToDoList/Card";
import { GiBroadsword } from "react-icons/gi";

class Column extends Component {
  state = {};
  render() {
    return (
      <section className="">
        <h2 className="text-light mr-2 ml-2">

          {this.props.column.name}
        </h2>
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
      </section>
    );
  }
}

export default Column;
