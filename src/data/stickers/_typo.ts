import "@fontsource/bagel-fat-one";
import "@fontsource/anton";

import { renderWidthScaledText } from "@/lib/canvas-helper";
import { StickerRenderer } from "@/lib/stickers";

export const typoStyle =
	(
		textPieces: Array<string>,
		textOffset: number,
		font: string,
		baseOffset = 0,
	): StickerRenderer =>
	async (params, ctx) => {
		// wait for font to load
		await document.fonts.load(font);
		ctx.fillStyle = params.backgroundColor;
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		const letterSpacing = 0;

		// render text
		ctx.fillStyle = params.foregroundColor;
		ctx.textAlign = "center";
		ctx.textBaseline = "top";

		ctx.font = font;
		ctx.letterSpacing = letterSpacing + "px";
		ctx.textBaseline = "top";

		const text = params.text1.length < 5 ? "xxxxx" : params.text1;

		const words = [
			...textPieces.slice(0, textOffset),
			text,
			...textPieces.slice(textOffset),
		];

		let topOffset = baseOffset;

		for (const word of words) {
			const offset = renderWidthScaledText({
				ctx,
				text: word.toUpperCase(),
				letterSpacing,
				font,
				maxWidth: ctx.canvas.width - 80,
				maxHeight: 400,
				scaleLetterSpacing: false,
				y: topOffset,
				x: ctx.canvas.width / 2,
			});

			topOffset += offset * 1.1;
		}

		// get canvas img data
		const imgData = ctx.getImageData(
			0,
			0,
			ctx.canvas.width,
			ctx.canvas.height,
		);

		// draw new background
		ctx.fillStyle = params.backgroundColor;
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		const marginTop = (ctx.canvas.height - topOffset) / 2 - 20;

		// draw img data to canvas
		ctx.putImageData(imgData, 0, marginTop);
	};
