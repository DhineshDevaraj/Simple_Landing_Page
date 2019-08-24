import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import  Select from 'react-select'
import './style.css'
const languages = [
    { label: "English", value: 1 },
    { label: "French", value: 3 },
    { label: "Dutch", value: 2 },
  ];


export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        selectedLanguage: 1,
        languageChosen: this.props.language
    }
  }

  languageChange = (e) => {
      this.setState({ selectedLanguage: e.value })
      this.props.sampleFunction(e.value)
  }

  componentWillReceiveProps(nextProps){
        this.setState({ languageChosen: nextProps.language })
  }

  render () {
      console.log(this.state.languageChosen.header.button1)
      let languageSelected = this.state.languageChosen;
      debugger;
    return (
      <div>
          <div className="header-section">
            <h3>LOGO</h3>
            <Button>{languageSelected.header.button1}</Button>  
            <Button>{languageSelected.header.button2}</Button>
            <Select className="select-language" options={ languages } onChange={e => this.languageChange(e)} placeholder="English" />
            <Button>{languageSelected.header.SignIN}</Button>  
            <Button>{languageSelected.header.Register}</Button>
          </div>
      </div>
    )
  }
}
