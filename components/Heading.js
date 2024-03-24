import React from "react";

import { css } from "../styled-system/css/index.mjs";

/**
 * Heading component
 * @param {object} props - Component props
 * @param {object} props.css - Inline styles
 * @param {React.ReactNode} props.children - Child components
 * @returns {React.ReactNode} - Heading component
 */
export function Heading(props) {
	return (
		<h1
			className={css(
				{
					px: 4,
					py: 2,
					color: "blue.400",
					fontWeight: "bold",
					fontSize: "3xl",
				},
				props?.css ?? {},
			)}
		>
			{props.children}
		</h1>
	);
}
