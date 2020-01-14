import React, { Component } from "react";
// import Term from "./Term";
import Column from "./Column";
// import { GitBrainTentacle, GiConsoleController } from "react-icons/gi";
// import { GiBrutalHelm } from "react-icons/gi";
// import Fetch from "./Fetch";

class Table extends Component {
  state = {
    terms: [
      //   { id: 1, name: "js", selected: false },
      //   { id: 2, name: "html", selected: true },
      //   { id: 3, name: "css", selected: false },
      //   { id: 4, name: "react", selected: false },
      //   { id: 5, name: "node", selected: false }
    ],
    columns: [
      {
        id: 1,
        name: "+ Ajouetr",
        cards: [
          // {
          //   id: 1,
          //   question: "qu'est ce que le html?",
          //   response: "hyper text markup language"
          // }
        ]
      }
      // {
      //   id: 2,
      //   name: "En cours",
      //   cards: [
      //     // {
      //     //   id: 2,
      //     //   question: "qu'est ce que le html?",
      //     //   response: "hyper text markup language"
      //     // }
      //   ]
      // },
      // {
      //   id: 3,
      //   name: "Fait",
      //   cards: [
      //     // {
      //     //   id: 3,
      //     //   question: "qu'est ce que le html?",
      //     //   response: "hyper text markup language"
      //     // }
      //   ]
      // }
    ],
    card_to_edit: {}
  };
  card_count = 0;

  success_terms = data => {
    console.log("dans success_terms", data);
    for (let i = 0; i < data.length; i++) {
      data[i].salected = false;
    }
    console.log("dans success_terms", data);
    const state_local = { ...this.state };
    state_local.terms = data;
    this.setState(state_local);
  };
  failure_terms = error => {
    console.log("dans failure_terms", error);
  };
  failureToken = error => {
    console.log("dans failureToken", error);
  };
  getCardCount() {
    return this.card_count;
  }
  setCardCount(step) {
    this.card_count += step;
  }
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

    const new_card = {
      question: "question ?"
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
    //state.card_t_edit column_index et card_index

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
              // value={
              //   this.state.columns[this.state.card_to_edit.column_index].cards[
              //     this.state.card_to_edit.card_index
              //   ].question
              // }
            />
          </label>
          <input type="submit" value="Fermer" />
        </form>
      );
    }
  };

  // moveCardLeft = (e, card_to_edit, card_column) => {
  //   //Fonction qui change une card de colonne vers la gauche
  //   let indexColumn = this.knowIndexColumn(idColumn);
  //   let indexCard = this.knowIndexCard(indexColumn, idCard);

  //   const state_local = { ...this.state };

  //   const index_column = state_local.columns.indexOf(card_column);
  //   const index_card = state_local.columns[index_column].cards.indexOf(
  //     card_to_edit
  //   );

  //   let oldCard = state_local.columns[index_column].cards[index_card];

  //   state_local.columns[index_column].cards.splice(index_card, 1);
  //   if (index_column > 0) {
  //     state_local.columns[index_column - 1].cards.push(oldCard);
  //   } else {
  //     state_local.columns[3].cards.push(oldCard);
  //   }
  //   this.setState(state_local);
  // };

  // moveCardRight = (e, idCard, idColumn) => {
  //   //Fonction qui change une card de colonne vers la droite
  //   let indexColumn = this.knowIndexColumn(idColumn);
  //   let indexCard = this.knowIndexCard(indexColumn, idCard);

  //   const st = { ...this.state };

  //   let oldCard = st.columns[indexColumn].cards[indexCard];

  //   st.columns[indexColumn].cards.splice(indexCard, 1);
  //   if (indexColumn < 3) {
  //     st.columns[indexColumn + 1].cards.push(oldCard);
  //   } else {
  //     st.columns[0].cards.push(oldCard);
  //   }
  // };

  render() {
    return (
      <section>
        <header>
          {/* <p>test {this.card_count}</p>
          <nav className="mt-4">
            {this.state.terms.map(t => {
              return (
                <Term key={t.id} term={t} onClickTerm={this.clickButton} />
              );
            })}
          </nav> */}
        </header>
        <main className="">
          {this.showForm()}
          <section className="d-flex justify-content-start">
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
                  // onMoveLeft={this.moveCardLeft}
                  // onMoveRight={this.moveCardRight}
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
