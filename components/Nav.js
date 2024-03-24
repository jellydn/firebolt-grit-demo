import { Link } from "firebolt";
import React from "react";

import { css } from "../styled-system/css/index.mjs";

/**
 * Nav component
 * @param {Object} props - Component props
 * @param {Array} props.links - Array of link objects
 * @param {Object} props.css - Inline styles
 * @returns {React.ReactNode} - Nav component
 */
export function Nav({ links = [], css: cssProps = {} }) {
	return (
		<nav
			className={css(
				{
					display: "flex",
					justifyContent: "space-around",
					px: 3,
					py: 2,
					color: "green.500",
				},
				cssProps,
			)}
		>
			{links.map((link) => (
				<Link key={link.href} href={link.href}>
					<span
						className={css({
							color: "inherit",
							px: 2,
							py: 1,
							textDecoration: "none",
							"&:hover": {
								textDecoration: "underline",
							},
						})}
					>
						{link.text}
					</span>
				</Link>
			))}
		</nav>
	);
}
