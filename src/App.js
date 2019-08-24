import React from 'react';
import Header from './Components/Header';
import './App.css';
import { englishData } from "./languages/en.json"
import { frenchData } from "./languages/fr.json";
import { dutchData } from "./languages/dt.json";
import PopularItems from './Components/popularItems';
import LatestVideos from './Components/latestVideos';
import Footer from './Components/footer';
let languageData = "";
class App extends React.Component{
  languageData = englishData;

    constructor(props){
      super(props);
      this.state={
        language: frenchData
      };
      languageData = englishData;
    };
    sampleFunction = (e) => {
      console.log(e)
      debugger;
      switch(e){
        case 1:
          languageData = englishData;
          this.setState({ language: englishData })
          break;
        case 3:
        languageData = frenchData;
          this.setState({ language: frenchData })
          break;
        case 2: 
        languageData = dutchData;
          this.setState({ language: dutchData })
          break;
      }
    }
    render(){
      return(
        <div className="mainApplication">
        <Header sampleFunction={this.sampleFunction} language={languageData}/>
        <PopularItems language={languageData}/>
        <LatestVideos language={languageData}/>
        <Footer language={languageData}/>
        </div>
      )
    }
}

export default App;
