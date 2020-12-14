import React from 'react';
import './App.css';
import styled from "styled-components";

const Button = styled.button`
    width: 288px;
    height: 99px; 
    color: #fff;
    font-size: 35px;
    background: #833AE0;
    margin-left: 100px;
    margin-top: 150px;
`;

const ButtonsContainer = styled.div`
    width: 900px;
    height: 550px;
    background: #E7E7E7;
`;

const TextQuestion = styled.p`
    padding-top: 100px;
    font-size: 47px;
    align-items: center;
    text-align: center;
`;

class DialogWindow extends React.Component {
  render() {
    return (
      <div className={`close ${this.props.isOpen ? "open" : null}`}>
        <ButtonsContainer>
            <TextQuestion>{this.props.questionText}</TextQuestion>
            <Button onClick={() => this.props.handleClear()}>OK</Button>
            <Button onClick={() => this.props.handleCancel()}>Cancel</Button>
        </ButtonsContainer>
      </div>
    );
  }
  
}

export default DialogWindow;
