import React from 'react';

class StageButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let style = {
            width: this.props.width +'px',
            height: '50px',
            transform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)',
            WebkitTransform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)'
        };
        return (
            <button className={"stageChanger"} style={style} onClick={this.props.action}>{ this.props.side }</button>
        );
    }
}

export default StageButton;