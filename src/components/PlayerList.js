import React from "react";
import DynamicDisplay from "./DynamicDisplay";

class PlayerList extends React.Component {
	render() {
		const players = this.props.players;
        const player = players[0];

		// return a dropdown of all players
		// each of these will have an onselect,
		// which will send the specific player to
		// the component dynamic display
		return (
			<div>
				<DynamicDisplay player={player} />
			</div>
		);
	}
}

export default PlayerList;
