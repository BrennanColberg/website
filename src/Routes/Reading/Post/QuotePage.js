import React from "react";

import Quote from "../../../Components/Quote";
import { APACitation } from "../../../Components/Citation";

// will enhance later; for now, cloning
export default ({ book, quote }) => (
	<Quote {...{ book, quote }} citation={APACitation} />
);
