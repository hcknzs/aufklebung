import { StickerRenderer } from "@/lib/stickers";
import { renderCircularText } from "@/lib/canvas-helper";

export const antifaStickerRenderer: StickerRenderer = async (params, ctx) => {
	const halfWidth = ctx.canvas.width / 2;

	const img = new Image();
	img.src = "/antifa-flag.svg";

	if (!img.complete) {
		await new Promise((resolve) => (img.onload = resolve));
	}

	// wait for font to load
	await document.fonts.load("100px IBM Plex Mono");

	ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
	const config = {
		ctx,
		radius: halfWidth - 95,
		fillStyle: params.foregroundColor,
		font: "100px IBM Plex Mono",
		angleCalculation: "auto",
		letterAngle: 0.135,
	} as const;

	// top text
	renderCircularText({
		...config,
		text: params.text1,
		position: "top",
	});

	// bottom text
	renderCircularText({
		...config,
		text: params.text2,
		position: "bottom",
	});
};
