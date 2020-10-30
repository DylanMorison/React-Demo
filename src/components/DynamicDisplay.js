import React from "react";

class DynamicDisplay extends React.Component {
	// get single player, and update a bunch of text attributes based off of the player
	render() {
		if (this.props.player) {
			return (
				<div>
					<h1>{this.props.player.name}</h1>
				</div>
			);
		} else {
			return (
				<div>
					<h1>Waiting for data!</h1>
				</div>
			);
		}
	}
}

export default DynamicDisplay;
