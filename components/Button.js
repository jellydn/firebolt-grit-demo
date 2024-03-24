import React from "react";

import { css } from "../styled-system/css/index.mjs";

/**
 * Button component
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props
 */
export function Button(props) {
	return (
		<button
			className={css({ bg: "gray.300", px: "2", py: "3" }, props?.css ?? {})}
			type={props?.type ?? "button"}
			{...props}
		/>
	);
}
