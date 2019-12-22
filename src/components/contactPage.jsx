import React, { Component } from 'react';
import { Animated } from 'react-animated-css';

import './contactPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ContactPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailSelected: false,
      emailHasContent: false,
      messageSelected: false,
      messageHasContent: false,
      emailContent: "",
      messageContent: "",
      invalidFormReason: "",
      submitError: false,
      submitted: false
    };

    this.sendEmail = this.sendEmail.bind(this);
    this.emailClicked = this.emailClicked.bind(this);
    this.emailContentWritten = this.emailContentWritten.bind(this);
    this.emailFocused = this.emailFocused.bind(this);
    this.messageClicked = this.messageClicked.bind(this);
    this.messageContentWritten = this.messageContentWritten.bind(this);
    this.messageFocused = this.messageFocused.bind(this);
    this.formBlurred = this.formBlurred.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendEmail(from, body){
    window.Email.send({
        SecureToken: '46448342-af4d-40e4-b780-08ea9ff53ca6',
        To: 'kthai-hang@mail.usciences.edu',
        From: 'claytonfinney@berkeley.edu',
        Subject : "New Contact Message from kimberlythaihang.com",
        Body : "====================\nNew Message from " + from + "\n====================\n\n" + body
    })
    .then(message=>{
      console.log(message);
      if (!this.state.submitError) {    
        this.setState({submitted: true})
      }
    });
  }

  emailContentWritten = (e) => {
    this.setState({
      emailContent: e.target.textContent
    });
  }

  messageContentWritten = (e) => {
    this.setState({ 
      messageContent: e.target.textContent
    });
  }

  emailClicked() {
    this.setState({ 
      emailSelected: true,
      messageSelected: false,
      invalidFormReason: ""
    });
  }

  emailFocused() {
    this.setState({ 
      emailSelected: true,
      messageSelected: false,
      invalidFormReason: ""
    });
  }

  messageFocused() {
    this.setState({ 
      emailSelected: false,
      messageSelected: true,
      invalidFormReason: ""
    });
  }

  messageClicked() {
    this.setState({ 
      emailSelected: false,
      messageSelected: true,
      invalidFormReason: ""
    });
  }

  formBlurred() {
    this.setState({ 
      emailSelected: false,
      messageSelected: false
    });
  }

  isValidMessage(email, message) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.setState({invalidFormReason: "Invalid email address format!"});
      return false;
    }
    if (message.length > 500) {
      this.setState({invalidFormReason: "The message you tried to send is too long!"});
      return false;
    }
    return true;
  }

  sendMessage() {
    if (!this.isValidMessage(this.state.emailContent, this.state.messageContent)) {
      return;
    }
    this.sendEmail(this.state.emailContent, this.state.messageContent);
  }


  emailContent() {
    if (!this.state.emailSelected && this.state.emailContent == "") {
      return true
    } else {
      return false
    }
  }

  messageContent() {
    if (!this.state.messageSelected && this.state.messageContent == "") {
      return true
    } else {
      return false
    }
  }

  render() {
    let {header, text, selected, index, hidden} = this.props;
    if (selected === index) {
      if (this.state.submitted) {
        return (
          <div className="contact-container">
            <p className="submitted-thank-you">Thank you for contacting me and checking out my site! Have a great day :)</p>
          </div>
        )
      } else {
        return (
          <div className="contact-container">
            <Animated animationIn="fadeIn" animationInDelay={200}>
              <p 
                className="email-content" 
                contentEditable="true" 
                autoFocus={this.state.emailSelected}
                onClick={this.emailClicked}
                onBlur={this.formBlurred}
                onInput={this.emailContentWritten}
                spellCheck="false"
              >
                {this.emailContent() ? "Write your email address here!" : ""}
              </p>
            </Animated> 
            <Animated animationIn="fadeIn" animationInDelay={800}>
              <p 
                className="message-content" 
                contentEditable="true"
                autoFocus={this.state.messageSelected}
                onClick={this.messageClicked}
                onBlur={this.formBlurred}
                onInput={this.messageContentWritten}
                spellCheck="false"
              >
                {this.messageContent() ? "Write your message here!" : ""}
              </p>
            </Animated>
            <Animated animationIn="fadeIn" animationInDelay={1500}>
              <p 
                className="submit-button"
              >
                Submit
              </p>
            </Animated>
            <span className={this.state.invalidFormReason !== "" ? "invalid-flash" : "invalid-flash-hidden"}>
              {this.state.invalidFormReason}
            </span>
          </div> 
        )
      } 
    } else {
      return <div />
    }
  }
}

export default ContactPage;
