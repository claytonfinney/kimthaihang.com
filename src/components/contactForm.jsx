import React, { Component } from 'react';
import { Animated } from 'react-animated-css';

import './contactForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailSelected: false,
      emailHasContent: false,
      messageSelected: false,
      messageHasContent: false
    };

    this.emailContentWritten.bind(this);
    this.messageContentWritten.bind(this);
    this.contentClicked.bind(this);
    this.sendMessage.bind(this);
  }

  emailContentWritten(e) {
    this.setState({
      emailContent: e.target.value
    });
  }

  messageContentWritten(e) {
    this.setState({ 
      messageContent: e.target.value
    });
  }

  contentClicked(e) {

  }

  sendMessage() {

  }

  render() {
    return <h1>Hello!</h1>   
  }
}

export default ContactForm;
