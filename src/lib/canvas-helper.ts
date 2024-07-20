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
			ctx.rotate(-totalAngle / 2 - props.letterAngle);

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

			ctx.rotate(totalAngle / 2 + props.letterAngle);

			for (const char of text) {
				ctx.rotate(-props.letterAngle);
				ctx.save();
				// the 0.1 * fontSize makes it look more symmetrical
				ctx.translate(0, radius + 0.1 * fontSize);
				ctx.fillText(char, 0, 0);
				ctx.restore();
			}
		}

		ctx.restore();
		ctx.save();
	}
};
