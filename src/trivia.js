const questionAnswer =
[
  {
    question: "When the Doctor meets Amelia Pond, what is it that " +
    "he eats and actually likes?",
    multiChoice: [
      "Cheese muffins",
      "Pudding and bacon",
      "Tofu Mac and cheese",
      "Fish fingers and custard"],
    answer: "Fish fingers and custard"
  },
  {
    question: "Which one of the following is given the nickname 'Potato Heads'?",
    multiChoice: [
      "Ood",
      "Sontarans",
      "Daleks",
      "Cyber men"],
    answer: "Sontarans"
  },
  {
    question: "What name was given to the huge Dalek leader?",
    multiChoice: [
      "King Dalek",
      "Emperor Dalek",
      "The Big Can-hoona",
      "Super Duper Tin Can"],
    answer: "Emperor Dalek"
  },
  {
    question: "Where did The Doctor and Rose first meet Captain Jack?",
    multiChoice: [
      "The backseat of the Tardis",
      "Joe's Diner",
      "A space bar",
      "World War II"],
    answer: "World War II"
  },
  {
    question: "Which one of the following villains is also a timelord like the Doctor?",
    multiChoice: [
      "Cyber Men",
      "The Brain",
      "The Master",
      "Cobra Commander"],
    answer: "The Master"
  }
]
let x = 0

function Question(props) {
  return (
    <h1>
      {props.question}
    </h1>
  )
}

function Selections(props) {
  const choice = props.multiChoice
  let choices = []
  const style = {
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
  }
  for (i=0; i<choice.length; i++) {
    if (choice[i] == props.answerIs) {
      choices.push(
        <button id = {props.highlight} class = "mainButton" style = {style}
        onClick = {props.buttonClick}>{choice[i]}</button>
      )
    }
    else {
      choices.push(
        <button class = "mainButton" style = {style}
        onClick = {props.buttonClick}>{choice[i]}</button>
      )
    }

  }
  return (
    <div style = {divStyle}>
      {choices}
    </div>
  )
}

function AnswersCorrect(props) {
  const style = {
    display: "flex",
    marginTop: "4em",
    padding: ".25em"
  },
  divStyle = {
    width: "25%",
    float: "left"
  }
  return (
    <div style = {divStyle}>
      <h2 id = {props.correctStyle} style = {{padding: ".25em"}}>Correct:{props.correct}</h2>
      <h2 id = {props.incorrectStyle} style = {style}>Incorrect:{props.incorrect}</h2>
    </div>
  )
}

function PlayAgain(props) {
  const divStyle = {
    display: props.visible,
    flexDirection: "row",
    alignItems: "center",
    clear: "both",
    width: "100%",
    height: "2em"
  },
  style = {
    marginLeft: "3em"
  }
  return (
    <div style = {divStyle}>
      <h2 style = {style}>{props.message}</h2>
      <button class = "playButton" style = {style}
      onClick = {props.playAgainClick}>{props.button}</button>
    </div>
  )
}



class TriviaGame extends React.Component {
  constructor(props) {
    super(props)
    this.buttonClick = this.buttonClick.bind(this)
    this.playAgainClick = this.playAgainClick.bind(this)
    this.state =
    {
      displayQuestion: questionAnswer[x].question,
      correct: 0,
      incorrect: 0,
      correctAnswer: questionAnswer[x].answer,
      choice: questionAnswer[x].multiChoice,
      visible: "none",
      correctStyle: "",
      incorrectStyle: "",
      highlight: ""
    }
  }

  playAgainClick() {
    x = 0
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
    })
  }

  buttonClick(e) {
    if (e.target.innerHTML == this.state.correctAnswer) {
        this.setState({correct: this.state.correct + 1,
                       correctStyle: "answerStyle",
                       incorrectStyle: "",
                       highlight: "highlight"})
    }
    else {
      this.setState({incorrect: this.state.incorrect + 1,
                     correctStyle: "",
                     incorrectStyle: "answerStyle",
                     highlight: "highlight"})
    }

    setTimeout(() => this.setState({
      displayQuestion: questionAnswer[x].question,
      correctAnswer: questionAnswer[x].answer,
      choice: questionAnswer[x].multiChoice,
      highlight: ""
      }), 1500)

    {
      if (x < questionAnswer.length-1) {
          x++
      }
      else if ((this.state.correct + this.state.incorrect)
                == questionAnswer.length) {
        this.setState({
          correct: this.state.correct,
          incorrect: this.state.incorrect})
      }
      else if (x == questionAnswer.length-1) {
        this.setState({visible: "flex"})
      }
    }
  }

  render() {
    return (
      <div>
        <Question question = {this.state.displayQuestion}/>
        <Selections multiChoice = {this.state.choice}
        answerIs = {this.state.correctAnswer}
        highlight = {this.state.highlight}
        buttonClick = {this.buttonClick}/>
        <AnswersCorrect
        correctStyle = {this.state.correctStyle}
        incorrectStyle = {this.state.incorrectStyle}
        correct = {this.state.correct}
        incorrect = {this.state.incorrect}/>
        <PlayAgain message = "Way to go! That's all of the questions!"
        button = "Play again?"
        visible = {this.state.visible}
        playAgainClick = {this.playAgainClick}/>
      </div>
    )
  }
}

ReactDOM.render(
  <TriviaGame/>,
  document.getElementById('root')
)
