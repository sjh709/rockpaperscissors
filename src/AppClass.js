import React, { Component } from 'react';
import './App.css';
import BoxClass from './component/BoxClass';

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://www.sliceproducts.com/cdn/shop/products/10544_42f8515e-f918-4b7d-b1e8-d32ebaff0955.jpg?v=1660659479&width=1946',
  },
  paper: {
    name: 'Paper',
    img: 'https://img.ws.mms.shopee.com.my/d8839ae8a3b1c2d94d8c4a9025f44f33',
  },
};

export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: '',
    };
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 array로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  judgement = (user, computer) => {
    // user == computer tie
    // user == rock, computer == scissors user win
    // user == rock, computer == paper user lose
    // user == scissors, computer == paper user win
    // user == scissors, computer == rock user lose
    // user == paper, computer == rock user win
    // user == paper, computer == scissors user lose
    if (user.name == computer.name) {
      return 'tie';
    } else if (user.name == 'Rock') {
      return computer.name == 'Scissors' ? 'win' : 'lose';
    } else if (user.name == 'Scissors') {
      return computer.name == 'Paper' ? 'win' : 'lose';
    } else if (user.name == 'Paper') {
      return computer.name == 'Rock' ? 'win' : 'lose';
    }
  };

  render() {
    return (
      <div>
        <div className='main'>
          <BoxClass
            title='You'
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title='Computer'
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className='main'>
          <button onClick={() => this.play('scissors')}>가위</button>
          <button onClick={() => this.play('rock')}>바위</button>
          <button onClick={() => this.play('paper')}>보</button>
        </div>
      </div>
    );
  }
}
