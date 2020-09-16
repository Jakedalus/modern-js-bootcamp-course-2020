const warriorsGames = [
	{
		awayTeam : {
			team     : 'Golden State',
			points   : 119,
			isWinner : true
		},
		homeTeam : {
			team     : 'Houston',
			points   : 106,
			isWinner : false
		}
	},
	{
		awayTeam : {
			team     : 'Golden State',
			points   : 105,
			isWinner : false
		},
		homeTeam : {
			team     : 'Houston',
			points   : 127,
			isWinner : true
		}
	},
	{
		homeTeam : {
			team     : 'Golden State',
			points   : 126,
			isWinner : true
		},
		awayTeam : {
			team     : 'Houston',
			points   : 85,
			isWinner : false
		}
	},
	{
		homeTeam : {
			team     : 'Golden State',
			points   : 92,
			isWinner : false
		},
		awayTeam : {
			team     : 'Houston',
			points   : 95,
			isWinner : true
		}
	},
	{
		awayTeam : {
			team     : 'Golden State',
			points   : 94,
			isWinner : false
		},
		homeTeam : {
			team     : 'Houston',
			points   : 98,
			isWinner : true
		}
	},
	{
		homeTeam : {
			team     : 'Golden State',
			points   : 115,
			isWinner : true
		},
		awayTeam : {
			team     : 'Houston',
			points   : 86,
			isWinner : false
		}
	},
	{
		awayTeam : {
			team     : 'Golden State',
			points   : 101,
			isWinner : true
		},
		homeTeam : {
			team     : 'Houston',
			points   : 92,
			isWinner : false
		}
	}
];

const makeChart = (games, targetTeam) => {
	const ulParent = document.createElement('ul');

	for (let game of games) {
		const gameLi = document.createElement('li');
		gameLi.innerHTML = getScoreLine(game);

		gameLi.classList.add(
			isWinner(game, targetTeam) ? 'win' : 'loss'
		);

		ulParent.append(gameLi);
	}

	return ulParent;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
	const { team: hTeam, points: hPoints } = homeTeam;
	const { team: aTeam, points: aPoints } = awayTeam;
	const teamNames = `${aTeam} @ ${hTeam}`;
	let scoreString;
	if (aPoints > hPoints) {
		scoreString = `<strong>${aPoints}</strong>-${hPoints}`;
	} else {
		scoreString = `${aPoints}-<strong>${hPoints}</strong>`;
	}

	return `${teamNames} ${scoreString}`;
};

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
	const target =
		homeTeam.team === targetTeam ? homeTeam : awayTeam;
	return target.isWinner;
};

const chart1 = makeChart(warriorsGames, 'Golden State');
const chart2 = makeChart(warriorsGames, 'Houston');

document.getElementById('GS').append(chart1);
document.getElementById('HR').append(chart2);
