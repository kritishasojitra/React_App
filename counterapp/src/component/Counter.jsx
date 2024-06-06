import { Component } from "react";
import "./style.css"



class Counter extends Component
{

constructor(props) {
    super(props)

    this.state={Count:0}

}

inc=()=>{
    this.setState({Count:this.state.Count+1})
}
dic=()=>{
    this.setState({Count:this.state.Count-1})
}




render(){
    return(
    <div className="main-box">
    <div className="card1">
        <div className="heading">
            <h2 className="mt-5 fw-bold">Shopping Card</h2>
        </div>
        <div className="card2 p-4">

        <div class="card shadow" style={{ width: '18rem' }}>
            <img src="s1.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                     <h3 class="card-title mt-2">Shoes</h3>
                     <span class="sp1">Qty : {this.state.Count}</span>
                     <button class="ms-5 mt-4 button1" onClick={this.inc}>+</button>
                     <button className="ms-3 button1"  onClick={this.dic} disabled={this.state.Count === 0}>-</button><br></br>
                    <button class="btn btn-success mt-5 w-100 fw-bold">Shop Now</button>
                </div>
        </div>

        <div class="card shadow " style={{ width: '18rem' }}>
            <img src="s2.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                     <h3 class="card-title">Shoes</h3>
                     <span class="sp1">Qty : {this.state.Count}</span>
                     <button class="ms-5 mt-4 button1" onClick={this.inc1}>+</button>
                     <button className="ms-3 button1"  onClick={this.dic1} disabled={this.state.Count === 0}>-</button><br></br>
                    <button class="btn btn-success mt-5 w-100 fw-bold">Shop Now</button>
                </div>
        </div>

        <div class="card shadow" style={{ width: '18rem' }}>
            <img src="s3.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                     <h3 class="card-title">Shoes</h3>
                     <span class="sp1">Qty : {this.state.Count}</span>
                     <button class="ms-5 mt-4 button1" onClick={this.inc2}>+</button>
                     <button className="ms-3 button1"  onClick={this.dic2} disabled={this.state.Count === 0}>-</button><br></br>
                    <button class="btn btn-success mt-5 w-100 fw-bold">Shop Now</button>
                </div>
        </div>
    </div>
</div>

<p>Functional components are similar to JavaScript functions that receive properties (props) and return React elements for rendering. Class components are preferred for complex components that demand precise control over state and lifecycle behavior. </p>
</div>
    )
}
}

export default Counter;
