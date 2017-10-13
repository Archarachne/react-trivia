import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import StageButton from './StageButton';
import Headers from './Headers';
import request from './request';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight - 100,
            gameStage: 1,
            data: [],
            first_stage: [],
            second_stage: [],
            final_stage: [],
        };
        this.stageUp = this.stageUp.bind(this);
        this.stageDown = this.stageDown.bind(this);
        this.setItem = this.setItem.bind(this);
        this.getItem = this.getItem.bind(this);
        
    }

    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    stageUp() {
        if(this.state.gameStage === 3){
            this.setState({ gameStage: 3 });
        } else {
            let newStage = this.state.gameStage + 1;
            this.setState({ gameStage: newStage });
            this.setItem("gameStage", newStage);
        }
    }

    stageDown() {
        if (this.state.gameStage === 1) {
            this.setState({ gameStage: 1 });
        } else {
            let newStage = this.state.gameStage - 1;
            this.setState({ gameStage: newStage });
            this.setItem("gameStage", newStage);
        }
    }

    handleResize(event) {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));

        let gameStage = this.getItem("gameStage");
        if(!gameStage) {
            gameStage = 1;
            this.setItem("gameStage", gameStage);
        }

        let rows = 0;
        // TODO make this smarter
        first_stage.forEach(category => {
            if (category.questions.length > rows) {
                rows = category.questions.length;
            }
        });
        // TODO remove data references
        this.setState({
            data: data, 
            first_stage: first_stage, second_stage: second_stage, final_stage: final_stage,
            rows: rows, cols: data.length,
            gameStage: gameStage
        });
    }

    componentDidUpdate(prevProps, prevState){
        // if game stage has changed - rerender
        if(this.state.gameStage != prevState.gameStage) {
            this.forceUpdate();
        };
    }
    /*
    // Traditional XHR implementation. Getting questions from data.json using XHR. Will run into cross origin issues in some browsers
    // if loading index.html from the local file system (using the file:// protocol) -->
    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
        request({url: "data.json"}).then(result => {
            let data = JSON.parse(result),
                rows = 0;
            data.forEach(category => {
                if (category.questions.length > rows) {
                    rows = category.questions.length;
                }
            });
            this.setState({data: data, rows: rows, cols: data.length});
        });
    }
    */

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        let headerHeight = this.state.windowWidth > 640 ? 60 : 32,
            cardWidth = this.state.windowWidth / this.state.cols,
            cardHeight = (this.state.windowHeight - headerHeight) / this.state.rows,
            cards = [];

        let questions = null;
        switch(this.state.gameStage){
            case 2:
                questions = this.state.second_stage;
                break;
            case 3:
                questions = this.state.final_stage;
                break;
            default:
                questions = this.state.first_stage;
                break;
        }
        questions.forEach((category, categoryIndex) => {
            let left = categoryIndex * cardWidth;
            category.questions.forEach((question, questionIndex) => {
                cards.push(<Card left={left} top={questionIndex * cardHeight + headerHeight} height={cardHeight} width={cardWidth} question={question} key={categoryIndex + '-' + questionIndex}/>);
            })
        });
        return (
            <div>
                <Headers data={questions} headerWidth={cardWidth}/>
                {cards}
                <StageButton left={50} top={this.state.windowHeight + 10} action={ this.stageDown } side={ "left" }/>
                <StageButton left={300} top={this.state.windowHeight + 10} action={ this.stageUp } side={ "right" }/>
            </div>
        );
    }

};

ReactDOM.render(<App/>, document.getElementById('app'));