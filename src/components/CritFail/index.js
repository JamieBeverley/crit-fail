import React, {Component} from 'react';

class CritFail extends Component {

    state={
        playerName:'',
        die:20
    };

    rollToComponent(id,index){
        const roll = this.props.rolls.values[id];
        return <li key={index}>{roll.name} - {roll.value}</li>
    }

    nameChange(e){
        this.setState({playerName:e.target.value});
    }

    dieChange(e){
        this.setState({die:e.target.value})
    }

    rollDie(){
        this.props.actions.CREATE_ROLL(this.state.playerName,this.state.die);
    }

    render() {
        const diceOptions = [4,6,8,10,12,20];
        return (
            <div className={'crit-fail'}>
                <div>
                    <input value={this.state.playerName} onChange={this.nameChange.bind(this)}/>
                    <select value={this.state.die} onChange={this.dieChange.bind(this)}>
                        {diceOptions.map(x=><option key={x}>{x}</option>)}
                    </select>
                    <button onClick={this.rollDie.bind(this)}>Roll</button>
                </div>
                <ul>
                    {this.props.rolls.order.map(this.rollToComponent.bind(this))}
                </ul>

            </div>
        );
    }
}

export default CritFail;