import { BackToHome } from "@/components/BackToHome";
import { Context } from "@/components/Context";
import { Heading } from "@/components/Heading";
import { useRoute } from "firebolt";

export default function blog() {
	const { slug } = useRoute().params;
	return (
		<Context>
			<Heading>Post</Heading>
			<p>Slug: {slug}</p>

			<BackToHome />
		</Context>
	);
}
