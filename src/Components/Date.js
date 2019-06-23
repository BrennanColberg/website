export default ({ date, short = false, zeroPadded = false }) => {
	const [yyyy, mm, dd] = date.split("-");
	const month = [
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
	][parseInt(mm)];
	return (
		(short ? month.substr(0, 3) : month) +
		" " +
		(zeroPadded ? dd : parseInt(dd)) +
		", " +
		yyyy
	);
};
