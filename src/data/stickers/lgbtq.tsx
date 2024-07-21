import { StickerRenderer } from "@/lib/stickers";
import { renderWidthScaledText } from "@/lib/canvas-helper";

export const lgbtqRenderer: StickerRenderer = async (params, ctx) => {
	const font = "200px 'Bagel Fat One'";
	await document.fonts.load(font);
	ctx.fillStyle = params.backgroundColor;
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6000 3810"><path fill="#750787" d="M0 0h6000v3810H0z"/><path fill="#004dff" d="M0 0h6000v3175H0z"/><path fill="#008026" d="M0 0h6000v2540H0z"/><path fill="#ffed00" d="M0 0h6000v1905H0z"/><path fill="#ff8c00" d="M0 0h6000v1270H0z"/><path fill="#e40303" d="M0 0h6000v635H0z"/><path d="M480 0h480l1904 1905L960 3810H480V0Z"/><path fill="#613915" d="M-1 0v3810h481l1904-1905L480 0H-1Z"/><path fill="#74d7ee" d="M-1 3810V0l1913 1905L-1 3810Z"/><path fill="#ffafc8" d="M-1 3330V480l1421 1425L-1 3330Z"/><path fill="#fff" d="m-1 960 951 945-951 945z"/></svg>`;

	const image = new Image();

	image.src = `data:image/svg+xml;base64,${window.btoa(svg)}`;

	if (!image.complete) {
		await new Promise((resolve) => (image.onload = resolve));
	}

	const f = 1.7;
	const size = ctx.canvas.height * f;
	const offset = (ctx.canvas.width - size) / 2;

	ctx.drawImage(image, offset / 2, offset, size, size);
	ctx.textBaseline = "middle";

	const topOffset = 20;
	const shadowOffset = 20;

	renderWidthScaledText({
		ctx,
		text: params.text1.toUpperCase(),
		letterSpacing: 1,
		font,
		maxWidth: ctx.canvas.width * 0.8,
		maxHeight: 600,
		scaleLetterSpacing: false,
		y: ctx.canvas.height / 2 + shadowOffset + topOffset,
		x: ctx.canvas.width * 0.1 + shadowOffset,
		fillStyle: "black",
	});

	renderWidthScaledText({
		ctx,
		text: params.text1.toUpperCase(),
		letterSpacing: 1,
		font,
		maxWidth: ctx.canvas.width * 0.8,
		maxHeight: 600,
		scaleLetterSpacing: false,
		y: ctx.canvas.height / 2 + topOffset,
		x: ctx.canvas.width * 0.1,
		fillStyle: "white",
	});
};
