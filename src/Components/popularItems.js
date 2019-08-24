import React from 'react'
import './style.css'
let item = [1, 2, 3, 4]
export default class PopularItems extends React.Component {
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
      let languageSelected = this.state.language;
    return (
      <div className="item-body">
        <div>
        <div className="item-header">
            <div className="item-heading">
                {languageSelected.ItemSectionHeader.heading}
            </div>
            <div className="item-button">
            {languageSelected.ItemSectionHeader.viewall}
            </div>
        </div>
        <div  className='item-container'>
          {item.map(i => 
            <div className='item-single'>
              <div className='item-image'>
                <img
                  src='https://i-cdn.phonearena.com/images/articles/97667-image/retina-display.png'
                  className='item-image'
                />
              </div>
              <div className='item-content'>
                <p>{languageSelected.ItemSectionContent}</p>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    )
  }
}
