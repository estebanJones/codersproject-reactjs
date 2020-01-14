import React, { Component } from "react";
import Column from "../componenToDoList/Column";

class Table extends Component {
  state = {
    terms: [],
    columns: [
      {
        id: 1,
        name: "À faire",
        cards: []
      },
      {
        id: 2,
        name: "En cours",
        cards: []
      },
      {
        id: 3,
        name: "Fait",
        cards: []
      }
    ],
    card_to_edit: {}
  };
  card_count = 0;

  clickButton = (e, clickedTerm) => {
    console.log("dans clickButton");

    const state_local = { ...this.state };

    for (let i = 0; i < state_local.terms.length; i++) {
      state_local.terms[i].selected = false;
    }
    const cliked_index_term = state_local.terms.indexOf(clickedTerm);

    state_local.terms[cliked_index_term].selected = true;

    this.setState(state_local);
  };

  addCard = (e, target_column) => {
    console.log("dans addCard");

    //copie du state de table
    const state_local = { ...this.state };

    // this.setCardCount(1);

    const new_card = {
      // id: this.getCardCount(),
      question: "question ?"
      // response: "reponse !"
    };

    //index de la colonne concerner
    const index_column = state_local.columns.indexOf(target_column);

    //ajout de l objet new_card dans la colonne concerner
    state_local.columns[index_column].cards.push(new_card);

    this.setState(state_local);
  };

  deleteCard = (e, card_to_delete, card_column) => {
    console.log("dans deleteCard", card_to_delete);
    const state_local = { ...this.state };
    if (Object.keys(this.state.card_to_edit).length === 0) {
      //recup index de la colonne de la carte a delete
      const index_column = state_local.columns.indexOf(card_column);
      ///recup index de la carte
      const index_card = state_local.columns[index_column].cards.indexOf(
        card_to_delete
      );
      state_local.columns[index_column].cards.splice(index_card, 1);
      this.setState(state_local);
    } else {
      alert("vous ne pouvez pas suprimer une carte en court de modification");
    }
  };

  editCard = (e, card_to_edit, card_column) => {
    const state_local = { ...this.state };

    const index_column = state_local.columns.indexOf(card_column);
    const index_card = state_local.columns[index_column].cards.indexOf(
      card_to_edit
    );

    state_local.card_to_edit = {
      column_index: index_column,
      card_index: index_card
    };

    console.log("dans editCard", state_local.card_to_edit);
    this.setState(state_local);
  };
  handleSubmit = e => {
    console.log("jesuis dans handleSubmit");
    e.preventDefault();

    const state_local = { ...this.state };
    //modif de card_to_edit du state_local
    state_local.card_to_edit = {};
    this.setState(state_local);
  };

  handleChangeQuestion = e => {
    console.log("jesuis dans handleChangeQuestion");
    console.log(e.target.value);
    //copie state
    const state_local = { ...this.state };

    state_local.columns[state_local.card_to_edit.column_index].cards[
      state_local.card_to_edit.card_index
    ].question = e.target.value;

    this.setState(state_local);

    e.preventDefault();
  };

  showForm = () => {
    if (Object.keys(this.state.card_to_edit).length !== 0) {
      return (
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <label>
            Question :
            <input
              onChange={e => {
                this.handleChangeQuestion(e);
              }}
              type="text"
              name="question"
              placeholder="question"
            />
          </label>
          <input type="submit" value="Fermer" />
        </form>
      );
    }
  };

  render() {
    return (
      <section className="">
        <main className="container-fluid">
          {this.showForm()}
          <section className="mt-4 d-flex justify-content-around">
            {this.state.columns.map(c => {
              return (
                <Column
                  key={c.id}
                  column={c}
                  onClickAddCard={this.addCard}
                  onDeleteCard={this.deleteCard}
                  onEditCard={this.editCard}
                  onClickLeft={this.clickLeft}
                  onClickRight={this.clickRight}
                />
              );
            })}
          </section>
        </main>
      </section>
    );
  }
}

export default Table;
