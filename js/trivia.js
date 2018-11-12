var index = 2;
var questionAnswer = [{
  question: "Question 1",
  multiChoice: ["a", "b", "c", "d"],
  answer: "b"
}, {
  question: "Question 2",
  multiChoice: ["e", "f", "g", "h"],
  answer: "b"
}, {
  question: "Question 3",
  multiChoice: ["i", "j", "k", "l"],
  answer: "b"
}],
    displayQuestion = questionAnswer[index].question;

function Question(props) {
  return React.createElement(
    "h1",
    null,
    props.question
  );
}

function Selections(props) {
  var choice = questionAnswer[props.index].multiChoice;
  var choices = [];
  var style = {
    display: "flex",
    width: "200px",
    height: "50px",
    justifyContent: "center"
  },
      divStyle = {
    float: "left",
    width: "40%",
    marginLeft: "3em"
  };
  for (i = 0; i < choice.length; i++) {
    choices.push(React.createElement(
      "button",
      { style: style },
      choice[i]
    ));
  }
  return React.createElement(
    "div",
    { style: divStyle },
    choices
  );
}

function AnswersCorrect(props) {
  var style = {
    display: "flex",
    marginTop: "4em"
  },
      divStyle = {
    width: "25%",
    float: "left"
  };
  return React.createElement(
    "div",
    { style: divStyle },
    React.createElement(
      "h2",
      null,
      "Correct:",
      props.correct
    ),
    React.createElement(
      "h2",
      { style: style },
      "Incorrect:",
      props.incorrect
    )
  );
}

ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(Question, { question: displayQuestion }),
  React.createElement(Selections, { index: index }),
  React.createElement(AnswersCorrect, { correct: 7, incorrect: 2 })
), document.getElementById('root'));