import logger from "@/logger";

export async function get(ctx) {
	logger.info("Health check");
	return { status: "ok" };
}
