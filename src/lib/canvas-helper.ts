export const renderCircularText = (
	props: {
		ctx: CanvasRenderingContext2D;
		text: string;
		radius: number;
		fillStyle?: string;
		font?: string;
	} & (
		| {
				angleCalculation: "fraction";
				totalAngle: number;
				startAngle: number;
		  }
		| {
				angleCalculation: "auto";
				position: "top" | "bottom";
				letterAngle: number;
		  }
	),
) => {
	const { ctx, text, radius } = props;

	if (props.font) ctx.font = props.font;
	if (props.fillStyle) ctx.fillStyle = props.fillStyle;
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";

	if (props.angleCalculation === "fraction") {
		const angle = props.totalAngle;
		ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);

		ctx.rotate(props.startAngle - angle / text.length / 2);

		for (const char of text) {
			ctx.rotate(angle / text.length);
			ctx.save();
			ctx.translate(0, -1 * radius);
			ctx.fillText(char, 0, 0);
			ctx.restore();
		}
		ctx.restore();
	} else {
		const totalAngle = props.letterAngle * text.length;
		ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);

		if (props.position === "top") {
			ctx.rotate(-totalAngle / 2 - props.letterAngle / 2);

			for (const char of text) {
				ctx.rotate(props.letterAngle);
				ctx.save();
				ctx.translate(0, -radius);
				ctx.fillText(char, 0, 0);
				ctx.restore();
			}
		} else {
			let fontSize = parseInt(ctx.font);
			if (isNaN(fontSize)) fontSize = 0;
			ctx.rotate(Math.PI + totalAngle / 2 + props.letterAngle / 2);

			for (const char of text) {
				ctx.rotate(-props.letterAngle);
				ctx.save();
				// the 0.1 * fontSize makes it look more symmetrical
				ctx.translate(0, -radius - fontSize * 0.1);
				ctx.rotate(Math.PI);
				ctx.fillText(char, 0, 0);

				ctx.restore();
			}
		}

		ctx.restore();
		ctx.save();
	}
};

export const renderWidthScaledText = (props: {
	ctx: CanvasRenderingContext2D;
	text: string;
	letterSpacing: number;
	font: string;
	maxWidth: number;
	y: number;
	x: number;
	maxHeight?: number;
	scaleLetterSpacing?: boolean;
	fillStyle?: string;
}) => {
	const { ctx, text } = props;
	if (props.font) ctx.font = props.font;
	if (props.fillStyle) ctx.fillStyle = props.fillStyle;
	ctx.letterSpacing = props.letterSpacing + "px";

	// check if the text is too wide
	const predictedWidth = ctx.measureText(text).width;
	const textPartOfPredictedWidth =
		predictedWidth - props.letterSpacing * (text.length - 1);
	const currentFontSize = parseInt(ctx.font);

	let newFontSize = 0;

	if (props.scaleLetterSpacing) {
		newFontSize = (props.maxWidth / predictedWidth) * currentFontSize;
	} else {
		newFontSize =
			((props.maxWidth - props.letterSpacing * (text.length - 1)) /
				textPartOfPredictedWidth) *
			currentFontSize;
	}
	ctx.font = `${newFontSize}px sans-serif`;

	// check if the text is too high
	const predictedHeight =
		ctx.measureText(text).actualBoundingBoxAscent +
		ctx.measureText(text).actualBoundingBoxDescent;

	if (props.maxHeight && predictedHeight > props.maxHeight) {
		newFontSize = (props.maxHeight / predictedHeight) * newFontSize;
		ctx.font = `${newFontSize}px sans-serif`;
	}
	// if the height is too high, the letter spacing is probably not a problem
	else {
		if (props.scaleLetterSpacing) {
			ctx.letterSpacing =
				props.letterSpacing * (newFontSize / currentFontSize) + "px";
		}
	}

	ctx.fillText(text, props.x, props.y);
};
