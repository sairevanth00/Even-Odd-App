// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
    state= {randomNum : 0}

    onIncrement=()=>{
        let randomNumber = Math.ceil(Math.random() * 100);
        this.setState(prevState =>({randomNum :prevState.randomNum + randomNumber}))
    }

    isOddOrEven=()=>{
        const {randomNum} = this.state
        if(randomNum%2 === 0){
            return("Even")
        }else{
            return("Odd")
        }
    }

  render() {
      const {randomNum} = this.state
      const oddEvenTxt = this.isOddOrEven()
    return (
     <div className="main-container">
        <div className="bg-container">
            <h1 className="main-heading">Count {randomNum}</h1>
            <p className="even-odd-txt">Count is {oddEvenTxt}</p>
            <button className="button" type="button" onClick={this.onIncrement}>Increment</button>
            <p className="message">Increase By Random Number Between 0 To 100</p>
        </div>
     </div>
  )
}

export default EvenOddApp
