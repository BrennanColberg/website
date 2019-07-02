const fs = require("fs");
const path = require("path");

const parseArgs = args => {
	args = args.splice(2);
	if (args.length === 1) {
		const slug = args[0].split(".")[0];
		return [slug, slug];
	} else if (args.length === 2) {
		return args.map(arg => arg.split(".")[0]);
	} else
		throw "bad arguments; please enter a single slug, or two slugs (first for input, second for output)";
};

const [fromSlug, toSlug] = parseArgs(process.argv);

// read file
const fromFile = fs.readFileSync(path.join(__dirname, `${fromSlug}.txt`));
const fromText = fromFile.toString();

let [review, quotes] = fromText.split("Excerpts");

// cut off intro (title, subtitle, author)
review = review
	.split("\n")
	.splice(2)
	.join("\n")
	.trim();
// done! write review to markdown if there's any length left
fs.writeFile(path.join(__dirname, `${toSlug}.md`), review, err =>
	console.log(err || "Wrote Markdown Successfully")
);

// prepare for markdown parsing
quotes = quotes.replace(/\[/g, "\\[").trim();
// split quotes apart
quotes = quotes.split(/\n\n/);
// turn into proper JSON format
quotes = quotes.map(quote => {
	// cut off page number at end
	const text = quote.replace(/\\\[\d+-?\d*]\s*$/, "").trim();
	// find page numbers
	const pages = quote.match(/\\\[\d+-?\d*]\s*$/);
	if (pages === null) {
		return { text };
	} else {
		// find numbers within page numbers, turn them into numbers
		const numbers = pages[0].match(/\d+/g).map(num => parseInt(num));
		return { text, page: numbers };
	}
});
fs.writeFile(
	path.join(__dirname, `${toSlug}.json`),
	JSON.stringify(quotes, null, 2),
	"utf8",
	err => console.log(err || "Wrote JSON Successfully")
);
