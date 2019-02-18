import React, { Component } from "react";
class App extends Component {
  state={
    pictures:[]
  }
  componentDidMount() {
    let pics = document.getElementById("pics");
    if(pics){
     let modals=[];
      for (let i = 0; i < 149; i++) {
        //对模型option进行循环
        if(i<10){
          modals.push(<img src={require(`./assets/xihu/xihu_0000${i}.jpg`)} alt=""/>)  
        }else if(10<i & i < 100){
          modals.push(<img src={require(`./assets/xihu/xihu_000${i}.jpg`)} alt=""/>)  
        }else if(100<=i & i <149){
          modals.push(<img src={require(`./assets/xihu/xihu_00${i}.jpg`)} alt=""/>)  
        }
        
      }

      let pic = document.getElementById("pic");
      let time = 0;
      function cycle(){
       time++;
       pic.src=modals[time].props.src
       if(time === 147){
        time = 0 
       }
       setTimeout(cycle,66.7);
      }
      cycle()

      
      this.setState({
        pictures : modals
      })
    }
  }
  

  render() {
    
    return (
      <div className="content" id="pics" >
        <h1>第一种是用一帧一帧图片拼接而成实现视频的方法</h1>
        <img src={require("./assets/xihu/xihu_00001.jpg")} alt="" id="pic" style={{width:"100%"}}/>
        <h1>第二种是利用gif图片实现视频的方式</h1>
         <img src={[require("./westlake.gif")]} width="96%"style={{borderRadius:'5px'}} alt=""/>
      </div>
    );
  }
}
export default App;
