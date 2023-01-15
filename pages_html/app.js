(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
          a: "The <head> section",
          b: "The <body> section",
          c: "Both the <head> section and the <body> section are correct  "
        },
        correctAnswer: "c"
      },
      {
        question: "To insert a JavaScript into an HTML page, which tag is used?",
        answers: {
          a: "< javascript>",
          b: "< js>",
          c: "< script>"
        },
        correctAnswer: "c"
      },
      {
        question: "How do you write Hello World in an alert box?",
        answers: {
          a: "alertBox(Hello World);",
          b: "msg(Hello World);",
          c: "alert(Hello World);"
        },
        correctAnswer: "c"
      },
      {
        question: "Javascript is an object oriented language?",
        answers: {
          a: "False",
          b: "True"
        },
        correctAnswer: "b"
      },
      {
        question: "How do you create a function in JavaScript?",
        answers: {
          a: "function = myFunction()",
          b: "function myFunction()"
        },
        correctAnswer: "b"
      },
      {
        question: "Is it possible to declare a variable in Java Script along its type?",
        answers: {
          a: "Yes",
          b: "No"
        },
        correctAnswer: "a"
      },
      {
        question: "What language defines the behavior of a web page?",
        answers: {
          a: "HTML",
          b: "CSS",
          c: "XML",
          d: "Java Script"
        },
        correctAnswer: "d"
      },
      {
        question: "How to write an IF statement in JavaScript?",
        answers: {
          a: "if i = 5 then",
          b: "if i == 5 then",
          c: "if (i == 5)  ",
          d: "if i = 5"
        },
        correctAnswer: "c"
      },
      {
        question: "How can you add a comment in a JavaScript?",
        answers: {
          a: "<!--This is a comment-->",
          b: "//This is a comment  ",
          c: "'This is a comment"
        },
        correctAnswer: "b"
      },
      {
        question: "How to append a value to an array of Java Script",
        answers: {
          a: "arr[arr.length] = value",
          b: "arr[arr.length+1] = new Arrays()",
          c: "arr[arr.length-1] = value",
          d: "arr[arr.length*1] = value"
        },
        correctAnswer: "a"
      }
    ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();