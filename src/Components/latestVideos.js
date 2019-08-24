import React from 'react'
import './style.css';
import ReactPlayer from 'react-player';

let item = [1, 2, 3]
export default class LatestVideos extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      language: this.props.language
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ language: nextProps.language })
  }

  render () {
    let languageSelected = this.state.language

    return (
      <div className='item-body video-body'>
        <div>
          <div className='item-header'>
            <div className='item-heading'>
              {languageSelected.VideoSectionHeader.heading}
            </div>
            <div className='item-button'>
              {languageSelected.VideoSectionHeader.viewall}
            </div>
          </div>
          <div className='item-container'>
            {item.map(i => (
              <div className='item-single video-single'>
                <div className='item-image video-image'>
                  <ReactPlayer
                    url='https://www.youtube.com/watch?v=bXwJHdpwtvs&list=RDbXwJHdpwtvs&start_radio=1'
                    className='item-image'
                    playing
                    width='100%'
                    height='100%'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
