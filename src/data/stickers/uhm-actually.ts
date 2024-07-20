import QRCode from "qrcode";
import { StickerRenderer } from "@/lib/stickers";
export const uhmActuallySticker: StickerRenderer = async (params, ctx) => {
	ctx.fillStyle = params.backgroundColor;
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	await document.fonts.load("100px IBM Plex Mono");
	ctx.font = "100px IBM Plex Mono";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillStyle = params.foregroundColor;

	ctx.fillText(
		"Uhm, actually...",
		ctx.canvas.width / 2,
		ctx.canvas.height * 0.2,
	);

	const code = await QRCode.toDataURL(
		params.url.length > 0 ? params.url : "https://aufklebung.app",
		{
			margin: 1,
			errorCorrectionLevel: "H",
			maskPattern: 1,
		},
	);

	const img = new Image();
	img.src = code;

	await new Promise((resolve) => (img.onload = resolve));

	ctx.imageSmoothingEnabled = false;
	ctx.drawImage(
		img,
		ctx.canvas.width / 4,
		ctx.canvas.width * 0.375,
		ctx.canvas.width / 2,
		ctx.canvas.height / 2,
	);
};
