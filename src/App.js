import './App.css';
import React, { Component } from 'react';
import Box from './components/Box/Box.js';
import '../node_modules/react-vis/dist/style.css';
import { XYPlot,XAxis, YAxis, VerticalBarSeries } from 'react-vis';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			languages: [
				{ name: 'Php', vote: 0 },
				{ name: 'C++', vote: 0 },
				{ name: 'Js', vote: 0 },
				{ name: 'C#', vote: 0 },
				{ name: 'Python', vote: 0 },
				{ name: 'C', vote: 0 }
			]
		};
	}

	vote(i) {
		let newLanguages = [ ...this.state.languages ];
		newLanguages[i].vote++;
		this.setState({ languages: newLanguages });
	}

  render() {
		const data = [
			{ x: 0, y: this.state.languages[0].vote },
			{ x: 1, y: this.state.languages[1].vote },
			{ x: 2, y: this.state.languages[2].vote },
			{ x: 3, y: this.state.languages[3].vote },
			{ x: 4, y: this.state.languages[4].vote },
			{ x: 5, y: this.state.languages[5].vote }
		];
		return (
			<div>
				<h1>Vote Your Language</h1>
				<div className="languages">
					{this.state.languages.map((lang, i) => (
						<div key={i} className="language">
							<div className="languageName">{lang.name}</div>
							<button className="languageButton" onClick={this.vote.bind(this, i)}>
								+
							</button>
						</div>
					))}
				</div>
        <div className="votes">
		<div className="App">
        	<XYPlot height={200} width={200}>
				<YAxis tickFormat={v => `${v}`} />
				<XAxis/>
    			<VerticalBarSeries data={data} color="#08f"/>
			</XYPlot>
      	</div>
		</div>
	</div>
		);
	}
}

export default App;
