import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import logger from "@/logger";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function get(ctx) {
	try {
		logger.info("GET /styles.css");
		const css = fs.readFileSync(
			path.resolve(__dirname, "../../styled-system/styles.css"),
			"utf8",
		);
		return new Response(css, {
			headers: {
				"Content-Type": "text/css",
			},
		});
	} catch (error) {
		logger.error("Error while serving styles.css:", error);
		ctx.status = 500;
		return ctx;
	}
}
