import React from "react";

/**
 * RootLayout.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child nodes.
 * @returns {React.ReactElement} The rendered component.
 */
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="/styles.css" />
			</head>
			<body>{children}</body>
		</html>
	);
}
