import { StickerConfig, StickerRenderer } from "./stickers";
import { renderCircularText } from "@/lib/canvas-helper";

export const antifaStickerRenderer: StickerRenderer<
	StickerConfig["antifa"]
> = async (sticker, ctx) => {
	const halfWidth = sticker.size / 2;
	ctx.fillStyle = sticker.params.bgColor;
	ctx.beginPath();
	ctx.arc(halfWidth, halfWidth, halfWidth, 0, Math.PI * 2);
	ctx.fill();
	ctx.closePath();

	const img = new Image();
	img.src = "/antifa-flag.svg";
	await new Promise((resolve) => {
		img.onload = resolve;
	});

	ctx.drawImage(img, 0, 0, sticker.size, sticker.size);

	// render text
	ctx.fillStyle = "#fff";
	ctx.font = "80px IBM Plex Mono";
	const radius = halfWidth - 80;

	renderCircularText({
		ctx,
		text: sticker.params.text,
		radius,
		startAngle: -Math.PI / 2,
		angleCalculation: "fraction",
		totalAngle: Math.PI * 0.6,
	});

	// renderCircularText({
	// 	ctx,
	// 	text: sticker.params.text,
	// 	radius,
	// 	angleCalculation: "auto",
	// 	position: "top",
	// 	letterAngle: 0.05,
	// });
};
