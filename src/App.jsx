import { Component, useState,useEffect ,useMemo} from 'react';
import './App.css';
import KBC from './Components/KBC';
import Timer from './Components/Timer';
import Start from './Components/Start';

function App() {
  const [userName, setUserName] = useState()
  const [questionNumber,setQuestionNumber] = useState(1); 
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("₹ 0")

  const data = [
    {
      id : 1,
      question : "Who is abhishek",
      answers : [
        {
          text : "Developer" ,
          correct : false
        },
        {
          text : "Software Engineer",
          correct : true
        },
        {
          text : "Gamer",
          correct : false
        },
        {
          text : "Psychologist",
          correct : false
        }
      ]
    },
    {
      id : 2,
      question : "What is my salary",
      answers : [
        {
          text : "400000/yr" ,
          correct : false
        },
        {
          text : "700000/yr",
          correct : false
        },
        {
          text : "1000000/yr",
          correct : true
        },
        {
          text : "500000/yr",
          correct : false
        }
      ]
    },
    {
      id : 3,
      question : "who won ipl 2022",
      answers : [
        {
          text : "Mumbai Indians" ,
          correct : false
        },
        {
          text : "Gujrat Titans",
          correct : true
        },
        {
          text : "Chennai Super Kings",
          correct : false
        },
        {
          text : "RCB",
          correct : false
        }
      ]
    },
    {
      id : 4,
      question : "who invented gravity",
      answers : [
        {
          text : "Newton" ,
          correct : true
        },
        {
          text : "Einstein ",
          correct : false
        },
        {
          text : "Bohr",
          correct : false
        },
        {
          text : "Farmer",
          correct : false
        }
      ]
    },
    {
      id : 5,
      question : "In which year india got freedom",
      answers : [
        {
          text : "1955" ,
          correct : false
        },
        {
          text : "2001",
          correct : false
        },
        {
          text : "1947",
          correct : true
        },
        {
          text : "1901",
          correct : false
        }
      ]
    }
       
  ] 
  //useMemo is used because there is no change in array
  const moneyPyramid = useMemo(() => 
  [
    {id : 1 , amount : "₹ 1000"},
    {id : 2 , amount : "₹ 2000"},
    {id : 3 , amount : "₹ 3000"},
    {id : 4 , amount : "₹ 4000"},
    {id : 5 , amount : "₹ 5000"},
    {id : 6 ,amount : "₹ 10000"},
    {id : 7 ,amount : "₹ 20000"},
    {id : 8 ,amount : "₹ 50000"},
    {id : 9, amount : "₹ 100000"},
    {id : 10 ,amount : "₹ 500000"},
    {id : 11, amount : "₹ 1250000"},
    {id : 12, amount : "₹ 250000"},
    {id : 13, amount : "₹ 500000"},
    {id : 14 , amount : "₹ 1crore"},
    {id : 15 , amount : "₹ 5crore"},
    ].reverse()
  , [])
  

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m=>m.id === questionNumber-1).amount)
  }, [questionNumber,moneyPyramid])
  
  return (
      <div className="App">
      {userName ? (
        <>
        <div className="main">
        {stop?<h1
         className='endGame'>You earned : {earned}</h1>:(
          <>
          <div className="top">
          <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
          
          </div>
          
          <div className="bottom">
          <KBC data = {data} setStop={setStop} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber}/>
          </div>
          </>
     )}
         </div>   
        <div className="pyramid">
          <ul className="moneylist">
            {
              moneyPyramid.map((e,key)=>{
                return <li className={questionNumber === e.id ? "moneyitem active": "moneyitem"}>
   
                <span className="moneyListItemNumber">{e.id}</span>
                <span className="moneyListItemAmount">{e.amount}</span>
              </li>
              })
            }
            
           
   
          </ul>
         </div>   
        </>
      ) : <Start setUserName={setUserName}/>}
      </div>
      );
     
}

export default App;
