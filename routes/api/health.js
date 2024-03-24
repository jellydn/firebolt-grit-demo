import logger from "@/logger";

export async function get(_ctx) {
	logger.info("Health check");
	return { status: "ok" };
}
