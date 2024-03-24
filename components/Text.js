import React from "react";

import { css } from "../styled-system/css/index.mjs";

/**
 * Text component
 * @param {React.ParamHTMLAttributes<HTMLElement>} props
 */
export function Text(props) {
	return (
		<p className={css({ px: "2", py: "3" }, props?.css ?? {})}>
			{props.children}
		</p>
	);
}
