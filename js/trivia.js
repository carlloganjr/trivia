var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var questionAnswer = [{
  question: "When the Doctor meets Amelia Pond, what is it that " + "he eats and actually likes?",
  multiChoice: ["Cheese muffins", "Pudding and bacon", "Tofu Mac and cheese", "Fish fingers and custard"],
  answer: "Fish fingers and custard"
}, {
  question: "Which one of the following is given the nickname 'Potato Heads'?",
  multiChoice: ["Ood", "Sontarans", "Daleks", "Cyber men"],
  answer: "Sontarans"
}, {
  question: "What name was given to the huge Dalek leader?",
  multiChoice: ["King Dalek", "Emperor Dalek", "The Big Can-hoona", "Super Duper Tin Can"],
  answer: "Emperor Dalek"
}, {
  question: "Where did The Doctor and Rose first meet Captain Jack?",
  multiChoice: ["The backseat of the Tardis", "Joe's Diner", "A space bar", "World War II"],
  answer: "World War II"
}, {
  question: "Which one of the following villains is also a timelord like the Doctor?",
  multiChoice: ["Cyber Men", "The Brain", "The Master", "Cobra Commander"],
  answer: "The Master"
}];
var x = 0;

function Question(props) {
  return React.createElement(
    "h1",
    null,
    props.question
  );
}

function Selections(props) {
  var choice = props.multiChoice;
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
    marginLeft: "3em",
    marginBottom: "3em"
  };
  for (i = 0; i < choice.length; i++) {
    if (choice[i] == props.answerIs) {
      choices.push(React.createElement(
        "button",
        { id: props.highlight, "class": "mainButton", style: style,
          onClick: props.buttonClick },
        choice[i]
      ));
    } else {
      choices.push(React.createElement(
        "button",
        { "class": "mainButton", style: style,
          onClick: props.buttonClick },
        choice[i]
      ));
    }
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
    marginTop: "4em",
    padding: ".25em"
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
      { id: props.correctStyle, style: { padding: ".25em" } },
      "Correct:",
      props.correct
    ),
    React.createElement(
      "h2",
      { id: props.incorrectStyle, style: style },
      "Incorrect:",
      props.incorrect
    )
  );
}

function PlayAgain(props) {
  var divStyle = {
    display: props.visible,
    flexDirection: "row",
    alignItems: "center",
    clear: "both",
    width: "100%",
    height: "2em"
  },
      style = {
    marginLeft: "3em"
  };
  return React.createElement(
    "div",
    { style: divStyle },
    React.createElement(
      "h2",
      { style: style },
      props.message
    ),
    React.createElement(
      "button",
      { "class": "playButton", style: style,
        onClick: props.playAgainClick },
      props.button
    )
  );
}

var TriviaGame = function (_React$Component) {
  _inherits(TriviaGame, _React$Component);

  function TriviaGame(props) {
    _classCallCheck(this, TriviaGame);

    var _this = _possibleConstructorReturn(this, (TriviaGame.__proto__ || Object.getPrototypeOf(TriviaGame)).call(this, props));

    _this.buttonClick = _this.buttonClick.bind(_this);
    _this.playAgainClick = _this.playAgainClick.bind(_this);
    _this.state = {
      displayQuestion: questionAnswer[x].question,
      correct: 0,
      incorrect: 0,
      correctAnswer: questionAnswer[x].answer,
      choice: questionAnswer[x].multiChoice,
      visible: "none",
      correctStyle: "",
      incorrectStyle: "",
      highlight: ""
    };
    return _this;
  }

  _createClass(TriviaGame, [{
    key: "playAgainClick",
    value: function playAgainClick() {
      x = 0;
      this.setState({
        displayQuestion: questionAnswer[x].question,
        correct: 0,
        incorrect: 0,
        correctAnswer: questionAnswer[x].answer,
        choice: questionAnswer[x].multiChoice,
        visible: "none",
        correctStyle: "",
        incorrectStyle: "",
        highlight: ""
      });
    }
  }, {
    key: "buttonClick",
    value: function buttonClick(e) {
      var _this2 = this;

      if (e.target.innerHTML == this.state.correctAnswer) {
        this.setState({ correct: this.state.correct + 1,
          correctStyle: "answerStyle",
          incorrectStyle: "",
          highlight: "highlight" });
      } else {
        this.setState({ incorrect: this.state.incorrect + 1,
          correctStyle: "",
          incorrectStyle: "answerStyle",
          highlight: "highlight" });
      }

      setTimeout(function () {
        return _this2.setState({
          displayQuestion: questionAnswer[x].question,
          correctAnswer: questionAnswer[x].answer,
          choice: questionAnswer[x].multiChoice,
          highlight: ""
        });
      }, 1500);

      {
        if (x < questionAnswer.length - 1) {
          x++;
        } else if (this.state.correct + this.state.incorrect == questionAnswer.length) {
          this.setState({
            correct: this.state.correct,
            incorrect: this.state.incorrect });
        } else if (x == questionAnswer.length - 1) {
          this.setState({ visible: "flex" });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Question, { question: this.state.displayQuestion }),
        React.createElement(Selections, { multiChoice: this.state.choice,
          answerIs: this.state.correctAnswer,
          highlight: this.state.highlight,
          buttonClick: this.buttonClick }),
        React.createElement(AnswersCorrect, {
          correctStyle: this.state.correctStyle,
          incorrectStyle: this.state.incorrectStyle,
          correct: this.state.correct,
          incorrect: this.state.incorrect }),
        React.createElement(PlayAgain, { message: "Way to go! That's all of the questions!",
          button: "Play again?",
          visible: this.state.visible,
          playAgainClick: this.playAgainClick })
      );
    }
  }]);

  return TriviaGame;
}(React.Component);

ReactDOM.render(React.createElement(TriviaGame, null), document.getElementById('root'));