import { StickerRenderer } from "@/lib/stickers";
import { renderCircularText } from "@/lib/canvas-helper";

export const alternativeRenderer: StickerRenderer = async (params, ctx) => {
	ctx.fillStyle = params.backgroundColor;
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	const halfWidth = ctx.canvas.width / 2;

	const svg = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1080 1080"><ellipse cx="540" cy="540" rx="146.6" ry="323.8" style="fill:#fff;stroke:${params.foregroundColor};stroke-width:10.2569;stroke-miterlimit:10"/><ellipse cx="466.7" cy="540" rx="48.7" ry="107.5" style="stroke:#fff;stroke-width:1.4653;stroke-miterlimit:10" fill="${params.foregroundColor}"/></svg>`;

	const image = new Image();

	image.src = `data:image/svg+xml;base64,${window.btoa(svg)}`;

	if (!image.complete) {
		await new Promise((resolve) => (image.onload = resolve));
	}

	const eyeOffset = 75;
	const size = ctx.canvas.width / 1.25;
	const canvasOffset = (ctx.canvas.width - size) / 2;

	ctx.drawImage(image, canvasOffset - eyeOffset, canvasOffset, size, size);
	ctx.drawImage(image, canvasOffset + eyeOffset, canvasOffset, size, size);

	// wait for font to load
	await document.fonts.load("100px IBM Plex Mono");

	// ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
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
		text: "ist keine Alternative!",
		position: "bottom",
	});
};
