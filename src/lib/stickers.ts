import { typoStyle } from "@/data/stickers/_typo";
import { antifaStickerRenderer } from "@/data/stickers/antifa";
import { frownieRenderer } from "@/data/stickers/frownie";
import { innenRenderer } from "@/data/stickers/innen";
import { uhmActuallySticker } from "@/data/stickers/uhm-actually";

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
) => Promise<void> | void;

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
		slug: "frownie",
		shape: "circle",
		name: "Frownie",
		thumbnailSrc:
			"https://media2.giphy.com/media/ZJaXOsbM012mRodFiQ/giphy.gif?cid=47028fa8sx12d824xrvy8zo8bq3w00f23hoj11gqqzus7q0f&ep=v1_gifs&rid=giphy.gif&ct=g",
		parameters: {
			text1: false,
			text2: false,
			backgroundColor: false,
			foregroundColor: false,
			url: false,
		},
		initialValues: {
			backgroundColor: "#009ee0",
			foregroundColor: "#C1152D",
			text1: "",
			text2: "",
			url: "",
		},
		renderer: frownieRenderer,
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
			text1: "Lorem ipsum",
			text2: "Dolor sit amet!",
			url: "",
		},
		renderer: antifaStickerRenderer,
	},
	{
		slug: "ganz-x-liebt-demokratie",
		shape: "square",
		name: "Ganz … liebt Demokratie",
		thumbnailSrc: "/ganz.gif",
		parameters: {
			text1: true,
			text2: false,
			backgroundColor: true,
			foregroundColor: true,
			url: false,
		},
		initialValues: {
			backgroundColor: "#ECA72C",
			foregroundColor: "#44355B",
			text1: "Augsburg",
			text2: "",
			url: "",
		},
		renderer: typoStyle(
			["ganz", "liebt", "Demokratie!"],
			1,
			"200px 'Bagel Fat One'",
		),
	},
	{
		slug: "enteignen",
		shape: "square",
		name: "… enteignen!",
		thumbnailSrc:
			"https://media3.giphy.com/media/Y01jP8QeLOox2/giphy.gif?cid=47028fa8sx12d824xrvy8zo8bq3w00f23hoj11gqqzus7q0f&ep=v1_gifs&rid=giphy.gif&ct=g",
		parameters: {
			text1: true,
			text2: false,
			backgroundColor: true,
			foregroundColor: true,
			url: false,
		},
		initialValues: {
			backgroundColor: "#FF0000",
			foregroundColor: "#FFFFFF",
			text1: "Springer",
			text2: "",
			url: "",
		},
		renderer: typoStyle(["enteignen!"], 0, "200px Anton", 100),
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
			backgroundColor: "",
			foregroundColor: "",
			text1: "",
			text2: "",
			url: "https://de.wikipedia.org/wiki/COVID-19",
		},
		renderer: uhmActuallySticker,
	},
	{
		slug: "-innen",
		shape: "square",
		name: "*INNEN",
		thumbnailSrc: "/innen.gif",
		parameters: {
			text1: false,
			text2: false,
			backgroundColor: true,
			foregroundColor: true,
			url: false,
		},
		initialValues: {
			backgroundColor: "#8a3fa5",
			foregroundColor: "#f8ffe7",
			text1: "",
			text2: "",
			url: "",
		},
		renderer: innenRenderer,
	},
] satisfies Array<StickerInfo>;

export const getStickerInfoBySlug = (slug: string) => {
	return stickers.find((sticker) => sticker.slug === slug);
};
