; (function () {
	"use strict";
	const trackTemplate = document.querySelector('.ba-track-template').content;
	// variable for copy of the template
	let newTrack;

	const playList = [{
		author: "led zeppelin",
		song: "stairway to heaven",
		duration: "2:03"
	},
	{
		author: "queen",
		song: "bohemian rhapsody",
		duration: "2:30"
	},
	{
		author: "lynyrd skynyrd",
		song: "free bird",
		duration: "1:56"
	},
	{
		author: "deep purple",
		song: "smoke on the water",
		duration: "3:03"
	},
	{
		author: "jimi hendrix",
		song: "all along the watchtower",
		duration: "2:53"
	},
	{
		author: "AC/DC",
		song: "back in black",
		duration: "2:43"
	},
	{
		author: "queen",
		song: "we will rock you",
		duration: "2:13"
	},
	{
		author: "metallica",
		song: "enter sandman",
		duration: "3:03"
	}
	];


	playList.forEach(track => {
		// copy template for adding content
		newTrack = document.importNode(trackTemplate, true);

		// write content from/to variables
		newTrack.querySelector('.ba-track__duration').textContent = `${track.duration}`;
		newTrack.querySelector('.ba-track__artist').textContent = `${track.author}`;
		newTrack.querySelector('.ba-track__title').textContent = `${track.song}`;

		// incert redy content
		document.querySelector('.ba-playlist__list').appendChild(newTrack);
	});




})();

