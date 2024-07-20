export const renderCircularText = (
	props: {
		ctx: CanvasRenderingContext2D;
		text: string;
		radius: number;
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
		ctx.rotate(-totalAngle);

		for (const char of text) {
			ctx.rotate(props.letterAngle);
			ctx.save();
			ctx.translate(0, -1 * radius);
			ctx.fillText(char, 0, 0);
			ctx.restore();
		}
	}
};
