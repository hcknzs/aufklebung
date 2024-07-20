import QRCode from "qrcode";
import { StickerRenderer } from "@/lib/stickers";
export const uhmActuallySticker: StickerRenderer = async (params, ctx) => {
	ctx.fillStyle = "#540D6E";
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	const code = await QRCode.toDataURL(
		params.url.length > 0 ? params.url : "https://aufklebung.app",
		{
			margin: 1,
			errorCorrectionLevel: "H",
			maskPattern: 1,
		},
	);

	const imgFg = new Image();
	imgFg.src = "/uhm-actually.svg";

	const img = new Image();
	img.src = code;

	await new Promise((resolve) => (img.onload = resolve));
	await new Promise((resolve) => (imgFg.onload = resolve));

	const w = 600;
	ctx.imageSmoothingEnabled = false;
	ctx.drawImage(img, (ctx.canvas.width - w) / 2, 60, w, w);
	ctx.drawImage(imgFg, 0, 0, ctx.canvas.width, ctx.canvas.height);
};
