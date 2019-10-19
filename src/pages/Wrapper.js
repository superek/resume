/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';

import Menu from '../components/Menu';
import Main from './Main';
import Projects from './Projects';
import Profile from './Profile';


class FullpageWrapper extends React.Component {
	onLeave(origin, destination, direction) {
		console.log("Leaving section " + origin.index);
	}
	afterLoad(origin, destination, direction) {
		console.log("After load: " + destination.index);
	}

 	render() {
		return (
			<React.Fragment>
				<header className={"header"}>
					<Menu />
				</header>
				<ReactFullpage
					anchors={ ['home', 'profile', 'projects']}
					scrollOverflow={true}
					onLeave={this.onLeave.bind(this)}
					afterLoad={this.afterLoad.bind(this)}
					render={({ state, fullpageApi }) => {
						return (
							<div id="fullpage-wrapper">
								<div className="section section-home">
									<Main />
								</div>
								<div className="section section-profile">
									<Profile />
								</div>
								<div className="section section-projects">
									<Projects/>
									<button onClick={() => fullpageApi.moveTo(1, 0)}>
									Move top
									</button>
								</div>
							</div>
						);
					}}
				/>
			</React.Fragment>
		);
	}
}

export default FullpageWrapper;
