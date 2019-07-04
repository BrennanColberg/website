const citationName = (name, initials = true) => {
	let parts = name.split(/\s/);
	return `${parts.splice(-1)}, ${parts
		.map(part => (initials ? part[0] + "." : part))
		.join(" ")}`;
};

const PageNumberCitation = ({ quote: { page } }) => {
	// input validation
	if (page === undefined || page.length === 0) return null;

	return page.length === 1
		? `(page ${page[0]})`
		: page.length === 2
		? `(pages ${page[0]} and ${page[1]})`
		: `(pages ${page[0]} to ${page[1]})`;
};

const APACitation = ({ book, quote }) => {
	const { title, subtitle, authors, year, publisher } = book;
	const { page } = quote;
	let parts = [];
	if (authors) {
		let result = authors.map(author => citationName(author));
		if (result.length > 1)
			result[result.length - 1] = `& ${result[result.length - 1]}`;
		parts.push(result.join(", "));
	}
	if (year) {
		parts.push(`(${year})`);
	}
	if (title) {
		let result = title;
		if (subtitle) result += `: ${subtitle}`;
		result = `_${result}_`;
		if (page) {
			if (page.length === 1) result += ` (p. ${quote.page[0]})`;
			else result += ` (pp. ${quote.page.join("-")})`;
		}
		parts.push(result);
	}
	if (publisher) {
		const { city, state, name } = publisher;
		let result = "";
		if (city) result += city;
		if (state) {
			if (city) result += ", ";
			result += state;
		}
		if (name) {
			if (city || state) result += ": ";
			result += name;
		}
		if (result.trim()) parts.push(result);
	}
	if (parts.length > 0) {
		parts.push("");
		return parts.join(". ");
	} else return null;
};

const MLACitation = ({ book, quote }) => "";

export { PageNumberCitation, APACitation, MLACitation };
