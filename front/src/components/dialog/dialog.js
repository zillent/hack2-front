import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "./dialog.css";

class Dialog extends Component {
  state = {
    questionAnswer: "",
    question: "Вы хотите что-то улучшить?",
    answers: [
      { answer: "да", id: 1 },
      { answer: "нет", id: 2 },
      { answer: "затрудняюcь ответить", id: 3 },
    ],
    question_history: "",
  };
  doNextQuestion = (id) => {
    let question_history =
      this.state.question_history + ">" + this.state.question + ":";
    let answers = this.state.answers;
    answers.map((answer) => {
      if (answer.id == id) {
        question_history += answer.answer;
      }
      return question_history;
    });
    if (id == 1) {
      this.setState({
        questionAnswer: "",
        question_history: question_history,
        question: "Связано с программным обеспечением?",
        answers: [
          { answer: "да", id: 5 },
          { answer: "нет", id: 6 },
          { answer: "затрудняюcь ответить", id: 7 },
        ],
      });
      return;
    }
    if (id == 3 || id == 7 || id == 10 || id == 13 || id == 16) {
      this.setState({
        questionAnswer: "0",
        question_history: question_history,
        question: "Не определено",
        answers: [],
      });
    }
    if (id == 5) {
      this.setState({
        questionAnswer: "",
        question_history: question_history,
        question: "Хотите предложить автоматизировать?",
        answers: [
          { answer: "да", id: 8 },
          { answer: "нет", id: 9 },
          { answer: "затрудняюcь ответить", id: 10 },
        ],
      });
    }
    if (id == 6) {
      this.setState({
        questionAnswer: "",
        question_history: question_history,
        question: "Улучшить трудовое место?",
        answers: [
          { answer: "да", id: 11 },
          { answer: "нет", id: 12 },
          { answer: "затрудняюcь ответить", id: 13 },
        ],
      });
    }
    if (id == 11) {
      this.setState({
        questionAnswer: "0",
        question_history: question_history,
        question: "Улучшение условий труда",
        answers: [],
      });
    }

    if (id == 12 || id == 9) {
      this.setState({
        questionAnswer: "0",
        question_history: question_history,
        question: "Другое",
        answers: [],
      });
    }

    if (id == 8) {
      this.setState({
        questionAnswer: "0",
        question_history: question_history,
        question: "Автоматизация",
        answers: [],
      });
    }
  };

  questionAnswerClick = (e) => {
    this.doNextQuestion(e.target.id);
  };

  render() {
    if (this.state.answers.length == 0) {
      this.props.close_dlg(
        this.state.question_history + ", Категория: " + this.state.question
      );
    }

    let questionView = "";
    console.log(this.state.questionAnswer);
    if (!this.state.questionAnswer) {
      questionView = (
        <div>
          <div>{this.state.question}</div>
          <table>
            <tbody>
              <tr>
                {this.state.answers.map((answer) => (
                  <td key={answer.id}>
                    <Form.Check
                      type="radio"
                      onChange={this.questionAnswerClick}
                      label={answer.answer}
                      name="answers"
                      id={answer.id}
                    ></Form.Check>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <Container className="top-dialog">
        <div className="top-dialog__header">
          Для определения направления и ответственных, необходимо ответить на
          ряд вопросов.
          <br />
          Ответы на эти вопросы способствую ускорению рассмотрения и снижению
          лишних перенаправлений между службами
        </div>
        <div className="top-dialog__body">{questionView}</div>
        <div className="top-dialog__footer">{this.state.question_history}</div>
      </Container>
    );
  }
}

export default Dialog;
