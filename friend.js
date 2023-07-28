import React, {Component} from 'react';
class Bud extends React.Component{
    constructor(){
        super();
        this.state={
            data:[
                {"name":"Arjun Reddy ","buddy":"Bunny"},
                {"name":"Dhanush","buddy":"Rayman"},
                {"name":"Prathap Singh","buddy":"Terror"}
            ]
        }
    }

render(){
    return(
        <div>
            <Friens/>
            <ul>
                {this.state.data.map((item)=><List data={item}/>)}
            </ul>
        </div>
    );
}
}
class Friens extends React.Component{
    render(){
        return(
            <div>
                <h1>WELCOME TO BUDDY CLUB</h1>
                <h2 >It's About my Friends</h2>
            </div>
        );
    }
}
class List extends React.Component{
    render(){
        return(
        <ul>
            <h1><li>{this.props.data.name} : {this.props.data.buddy}</li></h1>
        </ul>
        );
    }
}
export default Bud;