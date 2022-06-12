import React, { useEffect, useState } from 'react'
import "../App.css";
import useSound from 'use-sound';
import Play from "../assets/Play.mp3";
import Right from "../assets/Right.mp3";
import Wrong from "../assets/Wrong.mp3";


const KBC = (props) => {
  const {data , setStop,questionNumber,setQuestionNumber} = props;
const [question, setQuestion] = useState(null)
const [selectedAnswer, setSelectedAnswer] = useState(null)

const [className, setClassName] = useState("answer")

// const [letsPlay] = useSound(Play);
// const [RightAnswer] = useSound(Right);
// const [WrongAnswer] = useSound(Wrong);

// useEffect(()=>{
//   letsPlay()
// },[letsPlay])

useEffect(()=>{
    setQuestion(data[questionNumber -1] )
  },[data,questionNumber])


  const delay = (duration,callback)=>{
    setTimeout(()=>{
      callback();
    },duration);
  }
  const handleClick = (a)=>{
    setSelectedAnswer(a)
    setClassName("answer active")
    delay(3000,()=>{
      setClassName(a.correct ? "answer correct" : "answer wrong ")
    })
    delay(3000,()=>{
      if(a.correct){
        // RightAnswer()
        delay(1000,()=>{

          setQuestionNumber(prev=>prev+1)
          setSelectedAnswer(null)
        })
      }
      else{
        // WrongAnswer()
        delay(1000,()=>{

          setStop(true)
        })
      }
    })
    // setTimeout(() => {
    //   setClassName(a.correct ? "answer correct" : "answer wrong ")
    // }, 3000);
  }

  return (
    <>
   
      <div className='kbc'>
      <div className="questions">{question?.question}</div>
      <div className="answers">
      {question?.answers.map((a)=>
        (
       <div className={selectedAnswer===a?className:"answer"} onClick={()=>handleClick(a)}>
        {a.text}
        </div>
        )
        )
      }     
        </div>
      </div>
      </>
  
    
  ) 
}

export default KBC