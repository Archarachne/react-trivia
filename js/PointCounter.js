import React from 'react';

class PointCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 0, player: props.player, pointsKey: "vabanquePoints"};
        this.handleChange = this.handleChange.bind(this);        
    }

    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    handleChange(event) {
        let value = event.target.value;
        this.setState({value: value});
        let points = this.getItem(this.state.pointsKey);
        points[this.state.player] = value;
        this.setItem(this.state.pointsKey, points)
        console.log(event.target.value);
    }

    componentDidMount() {
        let points = this.getItem(this.state.pointsKey);
        if(points) {
            this.setState({value: points[this.state.player]})
        } else {
            this.setItem(this.state.pointsKey, {1: 0, 2: 0, 3: 0})
        }
    }

    render() {
        let style = {
            width: this.props.width+'px',
            height: '50px',
            textAlign: 'center',
            transform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)',
            WebkitTransform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)', 
        };
        return (
            <input className={"pointCounter"} type={"input"} onChange={this.handleChange} style={style} value={this.state.value}></input>  
        );
    }
}

export default PointCounter;