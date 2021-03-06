; (function () {
	"use strict";
	const trackTemplate = document.querySelector('.ba-track-template');
	const trackTemplateInner = trackTemplate.content;
	const trackList = document.querySelector('.ba-playlist__list');

	// remove template from DOM 
	trackList.removeChild(trackTemplate);

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
		newTrack = document.importNode(trackTemplateInner, true);

		// write content from variables to template
		newTrack.querySelector('.ba-track__duration').textContent = `${track.duration}`;
		newTrack.querySelector('.ba-track__artist').textContent = `${track.author}`;
		newTrack.querySelector('.ba-track__title').textContent = `${track.song}`;

		// insert redy content
		trackList.appendChild(newTrack);
	});

})();

