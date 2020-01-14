import React, { Component } from "react";

import Column from "./Column";
// import ModalWindow from "./ModalWindow";

import "./todo.css";
import "./colonnes.css";
import {
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
// import FirstContext from "./FirstContext";

class Table extends Component {
  state = {
    columns: [
      { id: 1, name: "To-Do", task: [] },
      { id: 2, name: "Doing", task: [] },
      { id: 3, name: "Done", task: [] }
    ],
    taches: "",
    currentTask: [{}],
    task_to_edit: [{}],
    isOpen: false
  };

  importanceOfTask = [];
  countTask = 0;

  getImportance = () => {
    return this.importanceOfTask;
  };

  setImportance = levelImportance => {
    return (this.importanceOfTask = this.importanceOfTask + levelImportance);
  };
  getcountTask = () => {
    // COUNT TASK EST LE FUTUR ID DE LA TASK
    return this.countTask;
  };

  setcountTask = step => {
    return (this.countTask = this.countTask + step);
  };

  // OUVRE LE MODAL D'AJOUT DE TASK
  openTaskModal = () => {
    const state_local = { ...this.state };
    state_local.isOpen = true;
    this.setState(state_local);
  };
  // FERME LE MODAL D'AJOUT DE TASK
  // FERME LE MODAL D AJOUT
  closeTaskModal = e => {
    e.preventDefault();
    const state_local = { ...this.state };
    state_local.isOpen = false;
    this.setState(state_local);
  };
  // GERE L AJOUT DE TACHE
  handleSubmit = e => {
    e.preventDefault();
    const state_local = { ...this.state };
    // J INCREMENTE L'ID DE 1
    const newId = this.setcountTask(1);

    // JE RECUPERE LE NIVEAU D IMPORTANCE
    const level = this.importanceOfTask.length - 1;
    // JE LA STOCK DANS toKeep
    const toKeep = this.importanceOfTask.splice(level, 1);

    // JE CREER LA STRUCTURE DE LA TACHE
    const newTask = {
      id: newId,
      content: state_local.taches,
      importance: toKeep
    };
    // J INSERE LA TACHE DANS LA COLONNE "TO DO"
    state_local.columns[0].task.push(newTask);
    state_local.isOpen = false;
    state_local.taches = "";

    this.setState(state_local);
  };

  // récupere la value du champs "saisir la tache"
  handleChange = e => {
    const state_local = { ...this.state };
    state_local.taches = e.currentTarget.value;
    this.setState(state_local);
  };

  // RECUPERE L IMPORTANCE
  changeSelect = e => {
    this.importanceOfTask.push(e.currentTarget.value);
  };

  // DEPLACEMENT DE LA CARTE
  clickRight = (e, idColumn, idTask) => {
    console.log("dans click-right. idCard: ", idTask);

    const state_local = { ...this.state };

    // JE CAPTURE LES INDEX ACTUELS
    const index_column = state_local.columns.findIndex(
      column => column.id === idColumn
    );
    const index_task = state_local.columns[index_column].task.findIndex(
      t => t.id === idTask
    );

    state_local.currentTask = {
      currentIdColumn: index_column,
      currentIdTask: index_task
    };

    // LA NOUVELLE TASK A DEPLACER
    const movingCard = {
      id: state_local.columns[index_column].task.length + 1,
      content: state_local.columns[index_column].task[index_task].content,
      importance: state_local.columns[index_column].task[index_task].importance
    };

    const nextCol = index_column + 1;
    state_local.columns[index_column].task.splice(index_task, 1);
    if (
      state_local.currentTask.currentIdColumn >= 0 &&
      state_local.currentTask.currentIdColumn < 2
    ) {
      state_local.columns[nextCol].task.push(movingCard);
      // nextCol.push(nextCard);
      console.log("nextCol", state_local.columns[nextCol]);
    } else if (state_local.currentTask.currentIdColumn === 2) {
      state_local.columns[0].task.push(movingCard);
    }
    console.log("indexCol: ", index_column);
    console.log("indexTask: ", index_task);
    console.log("content: ", movingCard);
    this.setState(state_local);
  };

  // DEPLACEMENT DE LA CARTE
  clickLeft = (e, idColumn, idTask) => {
    console.log("dans click-right. idCard: ", idTask);

    const state_local = { ...this.state };

    // JE CAPTURE LES INDEX ACTUELS
    const index_column = state_local.columns.findIndex(
      column => column.id === idColumn
    );
    const index_task = state_local.columns[index_column].task.findIndex(
      t => t.id === idTask
    );

    state_local.currentTask = {
      currentIdColumn: index_column,
      currentIdTask: index_task
    };

    // LA NOUVELLE TASK A DEPLACER
    const movingCard = {
      id: state_local.columns[index_column].task.length + 1,
      content: state_local.columns[index_column].task[index_task].content,
      importance: state_local.columns[index_column].task[index_task].importance
    };

    const nextCol = index_column - 1;
    state_local.columns[index_column].task.splice(index_task, 1);
    if (
      state_local.currentTask.currentIdColumn <= 2 &&
      state_local.currentTask.currentIdColumn > 0
    ) {
      state_local.columns[nextCol].task.push(movingCard);
      // nextCol.push(nextCard);
      console.log("nextCol", state_local.columns[nextCol]);
    } else if (state_local.currentTask.currentIdColumn === 0) {
      state_local.columns[2].task.push(movingCard);
    }
    console.log("indexCol: ", index_column);
    console.log("indexTask: ", index_task);
    console.log("content: ", movingCard);
    this.setState(state_local);
  };

  // GERE LE BOUTTON MODIFIER
  editTask = (e, idColumn, idTask) => {
    e.preventDefault();
    const state_local = { ...this.state };

    const index_column = state_local.columns.findIndex(
      column => column.id === idColumn
    );
    const index_task = state_local.columns[index_column].task.findIndex(
      t => t.id === idTask
    );

    const task_for_edit = state_local.columns[index_column].task[index_task];

    state_local.task_to_edit.push(task_for_edit);
    this.setState(state_local);

    console.log("Task a edit", this.state.task_to_edit);
  };

  // GERE LE INPUT MODIFIER CONTENT
  editChangeContent = e => {
    const state_local = { ...this.state };
    state_local.task_to_edit[1].content = e.currentTarget.value;
    console.log("editChangeContent", e.currentTarget.value);
    this.setState(state_local);
  };
  // GERE LA NOUVELLE IMPORTANCE
  editSelect = e => {
    this.importanceOfTask.push(e.currentTarget.value);
  };

  // GERE LE BOUTTON ENVOYER DU MODAL MODIFIER
  editSubmit = e => {
    e.preventDefault();
    const state_local = { ...this.state };
    const level = this.importanceOfTask.length - 1;
    // JE LA STOCK DANS toKeep
    const toKeep = this.importanceOfTask.splice(level, 1);
    state_local.task_to_edit[1].importance = toKeep;

    // REMET LA CARD EDIT A VIDE POUR FAIRE DISPARAITRE LE MODAL
    state_local.task_to_edit = [{}];
    this.setState(state_local);
  };
  // FERME LE MODAL EDIT TASK
  closeEditTaskModal = e => {
    e.preventDefault();
    const state_local = { ...this.state };
    // REMET LA CARD EDIT A VIDE POUR FAIRE DISPARAITRE LE MODAL
    state_local.task_to_edit = [{}];
    this.setState(state_local);
  };

  // SUPPRIME UNE TACHE
  deletTask = (e, idColumn, idTask) => {
    e.preventDefault();
    const state_local = { ...this.state };

    const index_column = state_local.columns.findIndex(
      column => column.id === idColumn
    );
    const index_task = state_local.columns[index_column].task.findIndex(
      t => t.id === idTask
    );

    state_local.columns[index_column].task.splice(index_task, 1);
    this.setState(state_local);
    console.log("dans deletTask", e.currentTarget);
  };

  showEditForm = () => {
    // LA VALEUR CHOISI 1 CAR DE BASE LE TABLEAU CONTIENT UN OBJET VIDE
    // SI LA CARD TO EDIT EST VIDE ALORS AFFICHE LE MODAL
    if (this.state.task_to_edit.length !== 1) {
      return (
        <Container>
          <Modal isOpen={!this.state.isOpen}>
            <ModalHeader>Modifier la tâche</ModalHeader>
            <form>
              <ModalBody>
                <div>
                  <label>
                    Tâche
                    <input
                      value={this.state.task_to_edit[1].content}
                      onChange={e => this.editChangeContent(e)}
                    ></input>
                  </label>
                </div>
                <div>
                  <label>
                    Importance:
                    <select name="priorite" onChange={e => this.editSelect(e)}>
                      <option value="0" style={{ backgroundColor: "red" }}>
                        Choose
                      </option>
                      <option value="1" style={{ backgroundColor: "red" }}>
                        important
                      </option>
                      <option value="2" style={{ backgroundColor: "yellow" }}>
                        modéré
                      </option>
                      <option value="3" style={{ backgroundColor: "green" }}>
                        bas
                      </option>
                    </select>
                  </label>
                </div>
              </ModalBody>
              <ModalFooter>
                <button
                  onClick={e => this.editSubmit(e)}
                  type="submit"
                  className="btn btn-primary"
                >
                  Envoyer
                </button>
                <button
                  onClick={e => this.closeEditTaskModal(e)}
                  className="btn btn-danger"
                >
                  Annuler
                </button>
              </ModalFooter>
            </form>
          </Modal>
        </Container>
      );
    }
  };

  editValue = e => {
    console.log("dans editValue", e.currentTarget.value);
    const newImp = this.setImportance(e.currentTarget.value);

    console.log("editValue, importanceOfTask: ", newImp);
  };

  render() {
    return (
      <main>
        <section>
          <div>
            {this.showEditForm()}
            <p>To-Do List</p>
            <ModalWindow
              isOpen={this.state.isOpen}
              onHandleSubmit={this.handleSubmit}
              theValue={this.state.taches}
              onHandleChange={this.handleChange}
              onCloseTaskModal={this.closeTaskModal}
              handleChangeSelect={this.changeSelect}
            />

            <button
              className="btnAjouteruneclasse"
              onClick={this.openTaskModal}
            >
              Ajouter une tache
            </button>
          </div>

          <div></div>
          <div className="colonnes">
            {this.state.columns.map(column => {
              return (
                // <FirstContext.Provider value={column.id}>
                <Column
                  key={"col" + (column.id + 1)}
                  id={column.id}
                  name={column.name}
                  tasks={column.task}
                  onClickLeft={this.clickLeft}
                  onClickRight={this.clickRight}
                  onDeletTask={this.deletTask}
                  onEditTask={this.editTask}
                />
                // {/* </FirstContext.Provider> */}
              );
            })}
          </div>
        </section>
      </main>
    );
  }
}

export default Table;
