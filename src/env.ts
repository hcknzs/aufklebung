import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-nextjs/presets";
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config({ path: [".env", ".env.local", ".env.ci"], override: true });

export const env = createEnv({
	extends: [vercel()],
	server: {
		LOCALHOST: z
			.literal("1")
			.optional()
			.transform((v) => v === "1"),
	},
	experimental__runtimeEnv: {},
});
