import "@fontsource/bagel-fat-one";
import "@fontsource/anton";

import {
	prepareRenderWithScaledText,
	renderWidthScaledText,
} from "@/lib/canvas-helper";
import { StickerRenderer } from "@/lib/stickers";

export const typoStyle =
	({
		textPieces,
		textOffset,
		font,
		gap,
		margin,
		letterSpacing = 1,
	}: {
		textPieces: Array<string>;
		textOffset: number;
		font: string;
		gap: number;
		margin: number;
		letterSpacing?: number;
	}): StickerRenderer =>
	async (params, ctx) => {
		// wait for font to load
		await document.fonts.load(font);
		ctx.fillStyle = params.backgroundColor;
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		const maxWidth = ctx.canvas.width - 2*margin;

		// render text
		ctx.fillStyle = params.foregroundColor;
		ctx.textBaseline = "alphabetic";
		ctx.textAlign = "center";
		ctx.font = font;
		ctx.letterSpacing = letterSpacing + "px";

		const text = params.text1.length < 5 ? "xxxxx" : params.text1;

		const words = [
			...textPieces.slice(0, textOffset),
			text,
			...textPieces.slice(textOffset),
		];

		let topOffset = 0;

		const predictedSizes = words.map((word) =>
			prepareRenderWithScaledText({
				ctx,
				text: word.toUpperCase(),
				letterSpacing,
				font,
				maxWidth,
				maxHeight: 600,
				scaleLetterSpacing: false,
				y: 0,
				x: 0,
			}),
		);

		const totalHeight = predictedSizes.reduce(
			(acc, val) => acc + val.height + gap,
			gap / 2,
		);
		topOffset = (ctx.canvas.height - totalHeight) / 2;

		words.forEach((word, index) => {
			// @ts-expect-error i'm sure it is defined
			topOffset += gap + predictedSizes[index].height;

			renderWidthScaledText({
				ctx,
				text: word.toUpperCase(),
				letterSpacing,
				font,
				maxWidth,
				maxHeight: 600,
				scaleLetterSpacing: false,
				y: topOffset,
				x: ctx.canvas.width / 2,
			});
		});
	};
