import React from 'react'
import './style.css'
export default class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      language: this.props.language
    }
  }


  componentWillReceiveProps(nextProps){
    this.setState({ language: nextProps.language })
}


  render () {
    let languageData = this.state.language;
    return (
        <div className="footer-body">
        <div className="footer-content">
            <div className="item-logo">
            <div>
            <h3>LOGO</h3>
            <p>Phone : 123456789</p>
            <p>entuze.carrer@gmail.com</p>
            <p>entuze.io</p>
            </div>
            </div>
            <div className="item-logo">
            <div>
            <h3>{languageData.Footer.Company}</h3>
            <p>{languageData.Footer.aboutUS}</p>
            <p>{languageData.Footer.Contact}</p>
            <p>{languageData.Footer.partner}</p>
            </div>
            </div>
            <div className="item-logo">
            <div>
            <h3>{languageData.Footer.Links}</h3>
            <p>{languageData.Footer.Course}</p>
            <p>{languageData.Footer.Blogs}</p>
            </div>
            </div>
            <div className="item-logo">
            <div>
            <h3>{languageData.Footer.Others}</h3>
            <p>{languageData.Footer.tandc}</p>
            <p>{languageData.Footer.sitemap}</p>
            </div>
            </div>
        </div>
      </div>
        )
    }
}