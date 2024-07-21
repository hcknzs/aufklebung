import { typoStyle } from "@/data/stickers/_typo";
import { alternativeRenderer } from "@/data/stickers/alternative";
import { aluhutRenderer } from "@/data/stickers/aluhut";
import { antifaStickerRenderer } from "@/data/stickers/antifa";
import { frownieRenderer } from "@/data/stickers/frownie";
import { hcknzsRenderer } from "@/data/stickers/hcknzs";
import { innenRenderer } from "@/data/stickers/innen";
import { lgbtqRenderer } from "@/data/stickers/lgbtq";
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
	description?: string;
};

export const STICKER_SIZE = 1080;

export const stickers = [
	{
		slug: "frownie",
		shape: "circle",
		name: "Frownie",
		thumbnailSrc: "/frownie.png",
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
		name: "Antifaschistische Aktion",
		thumbnailSrc: "/antifa.gif",
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
		slug: "aluhut",
		shape: "circle",
		name: "Aluhut",
		thumbnailSrc: "/aluhut.gif",
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
			text1: "Ein Aluhut",
			text2: "tut selten gut",
			url: "",
		},
		renderer: aluhutRenderer,
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
		renderer: typoStyle({
			font: "200px 'Bagel Fat One'",
			gap: 20,
			margin: 80,
			letterSpacing: 0,
			textPieces: ["ganz", "liebt", "Demokratie!"],
			textOffset: 1,
		}),
	},
	{
		slug: "enteignen",
		shape: "square",
		name: "… enteignen!",
		thumbnailSrc: "/enteignen.gif",
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
		renderer: typoStyle({
			font: "200px 'Anton'",
			gap: 40,
			margin: 80,
			letterSpacing: 0,
			textPieces: ["enteignen!"],
			textOffset: 0,
		}),
	},
	{
		slug: "wegstickern",
		shape: "square",
		name: "💩 einfach wegstickern!",
		thumbnailSrc: "/wegstickern.gif",
		parameters: {
			text1: true,
			text2: false,
			backgroundColor: true,
			foregroundColor: true,
			url: false,
		},
		initialValues: {
			backgroundColor: "#5C573E",
			foregroundColor: "#C8D96F",
			text1: "Nazi",
			text2: "",
			url: "",
		},
		renderer: typoStyle({
			font: "200px 'Anton'",
			gap: 40,
			margin: 80,
			letterSpacing: 0,
			textPieces: ["einfach", "wegstickern!"],
			textOffset: 0,
			textSuffix: "-💩",
		}),
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
		description:
			"Wenn du mal wieder draußen unterwegs bist und Falschinformationen auf Wahlplakaten, an Zetteln oder anderen Stickern siehst, kannst du hier mit Links zu Quellen dagegenhalten!",
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
	{
		slug: "hcknzs",
		shape: "square",
		name: "HCK.NZS",
		thumbnailSrc: "/hcknzs.gif",
		parameters: {
			text1: false,
			text2: false,
			backgroundColor: true,
			foregroundColor: true,
			url: false,
		},
		initialValues: {
			backgroundColor: "#dbfe87",
			foregroundColor: "#5852bf",
			text1: "",
			text2: "",
			url: "",
		},
		renderer: hcknzsRenderer,
	},
	{
		slug: "alternative",
		shape: "circle",
		name: "… ist keine Alternative",
		thumbnailSrc: "/alternative.gif",
		parameters: {
			text1: true,
			text2: false,
			backgroundColor: true,
			foregroundColor: true,
			url: false,
		},
		initialValues: {
			backgroundColor: "#F7F4F3",
			foregroundColor: "#E05263",
			text1: "Nationalismus",
			text2: "",
			url: "",
		},
		renderer: alternativeRenderer,
	},
	{
		slug: "lgbtq",
		shape: "circle",
		name: "🏳️‍🌈",
		thumbnailSrc: "/lgbtq.gif",
		parameters: {
			text1: true,
			text2: false,
			backgroundColor: false,
			foregroundColor: false,
			url: false,
		},
		initialValues: {
			backgroundColor: "",
			foregroundColor: "",
			text1: "LOVE",
			text2: "",
			url: "",
		},
		renderer: lgbtqRenderer,
	},
] satisfies Array<StickerInfo>;

export const getStickerInfoBySlug = (slug: string) => {
	return stickers.find((sticker) => sticker.slug === slug);
};
