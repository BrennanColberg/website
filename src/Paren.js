import React from "react";
import classNames from "classnames";

export default ({ className, children }) => (
	<span className={classNames(className, "paren")}>{children}</span>
);
