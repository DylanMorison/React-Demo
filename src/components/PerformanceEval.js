import React from "react";
import PlayerList from "./PlayerList";

class PerformanceEval extends React.Component {
	constructor(props) {
		super(props);
		this.state = { players: [] };
	}

	componentDidMount() {
		const player1 = { name: "player1", attributeOne: "", attributeTwo: "" };
		const player2 = { name: "player2", attributeOne: "", attributeTwo: "" };
		const player3 = { name: "player3", attributeOne: "", attributeTwo: "" };
		const tempList = [player1, player2, player3];
		this.setState({ players: tempList });
	}

	render() {
		return (
			<div>
				<PlayerList players={this.state.players} />
			</div>
		);
	}
}

export default PerformanceEval;
