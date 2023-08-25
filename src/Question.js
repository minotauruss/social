import React from 'react'

function Question(props) {
    const{ title,answerOne,answerTwo,answerThree,answerFour,answerFive,subject,correct} = props.item



  return (
    <div>

<ul class="list-group">
  <li class="list-group-item">{title}</li>
  <li class="list-group-item">{answerOne}</li>
  <li class="list-group-item">{answerTwo}</li>
  <li class="list-group-item">{answerThree}</li>
  <li class="list-group-item">{answerFour}</li>
  <li class="list-group-item">{answerFive}</li>
  <li class="list-group-item">{subject}</li>
  <li class="list-group-item">{correct}</li>
</ul>

    </div>
  )
}export default Question;
