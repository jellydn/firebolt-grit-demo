import cors from "@firebolt-dev/cors";

export const config = {
	plugins: [
		cors({
			origin: "*",
		}),
	],
	cookie: {
		expires: 30, // expire in 30 days
	},
};
