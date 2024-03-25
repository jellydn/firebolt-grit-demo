import { css } from "firebolt";

import { Button } from "@/components/Button";
import { Context } from "@/components/Context";
import { Heading } from "@/components/Heading";
import { Nav } from "@/components/Nav";
import { Text } from "@/components/Text";

import logger from "@/logger";

export default function Home() {
	return (
		<Context>
			<title>Firebolt Simple Demo App</title>
			<meta name="description" content="Index page" />
			<Heading>Home</Heading>
			<Nav
				links={[
					{ href: "/about", text: "About" },
					{ href: "/blogs/123", text: "Post 123" },
				]}
			/>

			<div
				css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
margin: 10px;
        padding: 10px; 
        `}
			>
				<img alt="logo" src="logo.svg" />
				<Text>
					Edit <code>routes/index.js</code> to get started.
				</Text>
			</div>

			<Button onClick={() => logger.info("Hello there")}>Click me</Button>
		</Context>
	);
}
