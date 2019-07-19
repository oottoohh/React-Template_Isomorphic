import React, { Component } from "react";
import "./Captcha.css";

let numbers = [];
function NumberList() {
    console.log("Called");
    var rand = Math.random()
        .toString(36)
        .substr(2, 4);
    var a = rand.split("").join(",");
    var array = a.split(",");
    numbers = array;
    console.log("numbers", numbers);
    const listItems = numbers.map(number => (
        <div key={number.toString()}>{number}</div>
    ));
    return <div className="randomChars">{listItems}</div>;
}

// Captcha.
class Captcha extends Component {
    componentDidMount() {
        this.props.onRef(this);
    }
    componentWillUnmount() {
        this.props.onRef(undefined);
    }

    fetchCaptcha() {
        let concatNumbers = numbers.join("");
        return concatNumbers;
    }
    render() {
        return (
            <div className="Captcha" ref="childref">
                <NumberList />
            </div>
        );
    }

    // Should Component Update.
    shouldComponentUpdate = () => false;
}

export default Captcha;
