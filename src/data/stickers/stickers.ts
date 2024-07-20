import { antifaStickerRenderer } from "./antifa";
import { xNeinDankeStickerRenderer } from "./x-nein-danke";

export type StickerType = "antifa" | "xNeinDanke";

export type Sticker = {
	type: StickerType;
	size: number;
	params: object;
} & (
	| {
			shape: "square" | "circle";
	  }
	| {
			shape: "rectangle";
			aspectRatio: number;
	  }
);

export const stickerConfig = {
	antifa: {
		type: "antifa",
		shape: "circle",
		size: 1080,
		params: {
			text: "nazis",
			lowerText: "hacken",
			bgColor: "#666",
		},
	},
	xNeinDanke: {
		type: "xNeinDanke",
		shape: "rectangle",
		aspectRatio: 1.5,
		size: 600,
		params: {
			text: "nazis",
		},
	},
} satisfies Record<StickerType, Sticker>;

export type StickerConfig = typeof stickerConfig;
export type StickerRenderer<TSticker = any> = (
	sticker: TSticker,
	ctx: CanvasRenderingContext2D,
) => void;

export const stickerRenderers: Record<StickerType, StickerRenderer> = {
	antifa: antifaStickerRenderer,
	xNeinDanke: xNeinDankeStickerRenderer,
};
