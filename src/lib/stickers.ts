import { z } from "zod";
import stickersJson from "./stickers.json";

const stickerSchema = z.object({
	slug: z.string().min(1),
	name: z.string().min(1),
	thumbnailSrc: z.string().min(1),
});

export type Sticker = z.infer<typeof stickerSchema>;

const fileSchema = z.array(stickerSchema);

export const stickers = fileSchema.parse(stickersJson);

export const getStickerInfoBySlug = (slug: string) => {
	return stickers.find((sticker) => sticker.slug === slug);
};
