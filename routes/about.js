import { BackToHome } from "@/components/BackToHome";
import { Context } from "@/components/Context";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";

export default function About() {
	return (
		<Context>
			<Heading>About Us</Heading>
			<Text>
				This is the about page. You can edit this page in{" "}
				<code>routes/about.js</code>
			</Text>

			<BackToHome />
		</Context>
	);
}
