import { renderWidthScaledText } from "@/lib/canvas-helper";
import { StickerRenderer } from "@/lib/stickers";

export const xLiebtDemokratie: StickerRenderer = (params, ctx) => {
	ctx.fillStyle = params.backgroundColor;
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	const letterSpacing = 10;

	// render text
	ctx.fillStyle = params.foregroundColor;
	ctx.textAlign = "left";
	ctx.textBaseline = "top";

	ctx.font = "200px sans-serif";
	ctx.letterSpacing = letterSpacing + "px";
	ctx.fillText("ganz", 0, 0, ctx.canvas.width);
	ctx.textBaseline = "middle";

	renderWidthScaledText({
		ctx,
		text: params.text1,
		letterSpacing,
		font: "200px sans-serif",
		maxWidth: ctx.canvas.width * 0.5,
		maxHeight: 200,
		scaleLetterSpacing: true,
		y: ctx.canvas.height / 2,
		x: ctx.canvas.width / 4,
	});
};
