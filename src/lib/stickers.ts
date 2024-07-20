import { antifaStickerRenderer } from "@/data/stickers/antifa";
import { xNeinDankeStickerRenderer } from "@/data/stickers/x-nein-danke";

export type StickerParams = {
	backgroundColor: string;
	foregroundColor: string;
	text1: string;
	text2: string;
	url: string;
};

export type StickerRenderer = (
	params: StickerParams,
	ctx: CanvasRenderingContext2D,
) => void;

export type StickerInfo = {
	shape: "square" | "circle";
	slug: string;
	name: string;
	thumbnailSrc: string;
	parameters: Record<keyof StickerParams, boolean>;
	initialValues: StickerParams;
	renderer: StickerRenderer;
};

export const STICKER_SIZE = 1080;

export const stickers = [
	{
		slug: "hasst-die-afd",
		shape: "circle",
		name: "Ganz … hasst die AfD!",
		thumbnailSrc:
			"https://media2.giphy.com/media/ZJaXOsbM012mRodFiQ/giphy.gif?cid=47028fa8sx12d824xrvy8zo8bq3w00f23hoj11gqqzus7q0f&ep=v1_gifs&rid=giphy.gif&ct=g",
		parameters: {
			text1: true,
			text2: false,
			backgroundColor: true,
			foregroundColor: true,
			url: false,
		},
		initialValues: {
			backgroundColor: "#000",
			foregroundColor: "#fff",
			text1: "Augsburg",
			text2: "",
			url: "",
		},
		renderer: antifaStickerRenderer,
	},
	{
		slug: "antifa",
		shape: "circle",
		name: "Antifa Sticker",
		thumbnailSrc:
			"https://media2.giphy.com/media/ZJaXOsbM012mRodFiQ/giphy.gif?cid=47028fa8sx12d824xrvy8zo8bq3w00f23hoj11gqqzus7q0f&ep=v1_gifs&rid=giphy.gif&ct=g",
		parameters: {
			text1: true,
			text2: true,
			backgroundColor: false,
			foregroundColor: false,
			url: false,
		},
		initialValues: {
			backgroundColor: "#000",
			foregroundColor: "#fff",
			text1: "Augsburg",
			text2: "",
			url: "",
		},
		renderer: antifaStickerRenderer,
	},
	{
		slug: "uhm-actually",
		shape: "square",
		name: "Uhm, actually...",
		thumbnailSrc:
			"https://media2.giphy.com/media/ZJaXOsbM012mRodFiQ/giphy.gif?cid=47028fa8sx12d824xrvy8zo8bq3w00f23hoj11gqqzus7q0f&ep=v1_gifs&rid=giphy.gif&ct=g",
		parameters: {
			text1: false,
			text2: false,
			backgroundColor: false,
			foregroundColor: false,
			url: true,
		},
		initialValues: {
			backgroundColor: "#000000",
			foregroundColor: "#FFFFFF",
			text1: "",
			text2: "",
			url: "https://hcknzs.com",
		},
		renderer: xNeinDankeStickerRenderer,
	},
	{
		slug: "-innen",
		shape: "square",
		name: "*INNEN",
		thumbnailSrc:
			"https://media3.giphy.com/media/Y01jP8QeLOox2/giphy.gif?cid=47028fa8sx12d824xrvy8zo8bq3w00f23hoj11gqqzus7q0f&ep=v1_gifs&rid=giphy.gif&ct=g",
		parameters: {
			text1: false,
			text2: false,
			backgroundColor: true,
			foregroundColor: true,
			url: false,
		},
		initialValues: {
			backgroundColor: "#000000",
			foregroundColor: "#FFFFFF",
			text1: "",
			text2: "",
			url: "",
		},
		renderer: () => {},
	},
] satisfies Array<StickerInfo>;

export const getStickerInfoBySlug = (slug: string) => {
	return stickers.find((sticker) => sticker.slug === slug);
};
