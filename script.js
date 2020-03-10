// a.external => <a {...} target="_blank" rel="noopener noreferrer">
window.addEventListener("load", function() {
	const links = document.querySelectorAll("a.external");
	links.forEach(link => {
		link.setAttribute("target", "_blank");
		link.setAttribute("rel", "noopener noreferrer");
	});
});

// date formatter:
// <.date>YYYY-MM-DD</.date> => <>MMMM DD, YYYY</>
const DATE_REGEX = /^\d{4}-\d{1,2}-\d{1,2}$/;
const MONTH_NAMES = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
window.addEventListener("load", function() {
	const dates = document.querySelectorAll(".date");
	dates.forEach(date => {
		// only process if content matches ISO
		if (date.textContent.match(DATE_REGEX)) {
			const content = new Date(date.textContent);
			const text = `${
				MONTH_NAMES[content.getMonth()]
			} ${content.getDay()}, ${content.getFullYear()}`;
			date.textContent = text;
		}
	});
});
