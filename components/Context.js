import React from "react";

import { css } from "../styled-system/css/index.mjs";

/**
 * Context component
 * @param {React.HTMLAttributes<HTMLDivElement>} props
 */
export function Context(props) {
	return (
		<main
			className={css(
				{
					marginTop: "var(--spacing-10)",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100vw",
					flexDirection: "column",
				},
				props?.css ?? {},
			)}
		>
			{props.children}
		</main>
	);
}
