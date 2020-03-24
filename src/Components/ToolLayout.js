import React, {Component} from 'react';
import ComputerPanels from './ComputerPanels';

class ToolLayout extends Component{
  constructor(){
    super();
    this.state={
      deviceGivenWidth: this.widthToDevice(),
    }
    this.windowResizeHandler = this.windowResizeHandler.bind(this);
  }
  windowResizeHandler(){
    let deviceGivenWidth =this.widthToDevice();
    if(this.state.deviceGivenWidth !== deviceGivenWidth){
      this.setState({deviceGivenWidth: deviceGivenWidth});
    }
  }
  widthToDevice(){
    let w = document.documentElement.clientWidth;
    if(w>=1024){return 'computer';}
    if(w>1024 && w>=768) {return "tablet";}
    return "phone";
  }
  componentDidMount(){
    window.addEventListener('resize', this.windowResizeHandler)
  }
  componetWillUnmount(){
    window.removeEventListener('resize', this.windowResizeHandler);
  }

  render(){
    if(this.state.deviceGivenWidth === 'computer'){
      return <ComputerPanels>
                <p>1</p>
                <p>2</p>
                <p>3</p>

             </ComputerPanels>
    }else if (this.state.deviceGivenWidth === 'tablet'){
      return 'tablet'
    } else {
      return 'phone'
    }
  }
}
export default ToolLayout;
