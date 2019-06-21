// I know that this is a ridicously unnecessary component.
// It's made like this so that I can change my email address easily.
import React from "react";
export default ({ children }) => (
	<a href="mailto:brennan.colberg@gmail.com">{children}</a>
);
