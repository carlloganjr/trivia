var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var questionAnswer = [{
  question: "Question 1",
  multiChoice: ["a", "b", "c", "d"],
  answer: "b"
}, {
  question: "Question 2",
  multiChoice: ["e", "f", "g", "h"],
  answer: "e"
}, {
  question: "Question 3",
  multiChoice: ["i", "j", "k", "l"],
  answer: "l"
}];

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

var TriviaGame = function (_React$Component) {
  _inherits(TriviaGame, _React$Component);

  function TriviaGame(props) {
    _classCallCheck(this, TriviaGame);

    var _this = _possibleConstructorReturn(this, (TriviaGame.__proto__ || Object.getPrototypeOf(TriviaGame)).call(this, props));

    var x = 2;
    _this.state = {
      index: x,
      displayQuestion: questionAnswer[x].question,
      correct: 0,
      incorrect: 0,
      correctAnswer: questionAnswer[x].answer
    };
    return _this;
  }

  _createClass(TriviaGame, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Question, { question: this.state.displayQuestion }),
        React.createElement(Selections, { index: this.state.index }),
        React.createElement(AnswersCorrect, {
          correct: this.state.correct,
          incorrect: this.state.incorrect })
      );
    }
  }]);

  return TriviaGame;
}(React.Component);

ReactDOM.render(React.createElement(TriviaGame, null), document.getElementById('root'));