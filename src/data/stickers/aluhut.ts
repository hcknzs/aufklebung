import { StickerRenderer } from "@/lib/stickers";
import { renderCircularText } from "@/lib/canvas-helper";

export const aluhutRenderer: StickerRenderer = async (params, ctx) => {
	const halfWidth = ctx.canvas.width / 2;
	ctx.fillStyle = "#ffcd00";
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	const img = new Image();
	img.src = "/aluhut.svg";

	if (!img.complete) {
		await new Promise((resolve) => (img.onload = resolve));
	}

	// wait for font to load
	const font = "125px IBM Plex Mono";
	await document.fonts.load(font);

	const config = {
		ctx,
		radius: halfWidth - 120,
		fillStyle: "black",
		font,
		angleCalculation: "auto",
		letterAngle: 0.175,
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
	ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
};
