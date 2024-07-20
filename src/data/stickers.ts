export type StickerType = "antifa" | "xNeinDanke";

export type Sticker = {
	type: StickerType;
	size: number;
	params: object;
} & (
	| {
			shape: "square" | "circle";
	  }
	| {
			shape: "rectangle";
			aspectRatio: number;
	  }
);

export const stickerConfig = {
	antifa: {
		type: "antifa",
		shape: "circle",
		size: 1080,
		params: {
			text: "hcknzs",
			bgColor: "#666",
		},
	},
	xNeinDanke: {
		type: "xNeinDanke",
		shape: "rectangle",
		aspectRatio: 1.5,
		size: 600,
		params: {
			text: "nazis",
		},
	},
} satisfies Record<StickerType, Sticker>;

export type StickerConfig = typeof stickerConfig;

export const stickerRenderers: Record<
	StickerType,
	(sticker: any, ctx: CanvasRenderingContext2D) => void
> = {
	antifa: (
		sticker: StickerConfig["antifa"],
		ctx: CanvasRenderingContext2D,
	) => {
		ctx.fillStyle = sticker.params.bgColor;
		const halfWidth = sticker.size / 2;
		ctx.beginPath();
		ctx.arc(halfWidth, halfWidth, halfWidth, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();

		// render text
		ctx.fillStyle = "#fff";
		ctx.font = "100px IBM Plex Mono";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		const radius = halfWidth - 100;
		const angle = Math.PI * 2;

		ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
		ctx.rotate((-1 * angle) / 2);

		for (const char of sticker.params.text) {
			ctx.rotate(angle / sticker.params.text.length);
			ctx.save();
			ctx.translate(0, -1 * radius);
			ctx.fillText(char, 0, 0);
			ctx.restore();
		}
		ctx.restore();
	},
	xNeinDanke: (
		sticker: StickerConfig["xNeinDanke"],
		ctx: CanvasRenderingContext2D,
	) => {
		ctx.fillStyle = "#000";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		// render text
		ctx.fillStyle = "#fff";
		ctx.font = "100px sans-serif";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText(
			sticker.params.text + " nein danke",
			ctx.canvas.width / 2,
			ctx.canvas.height / 2,
		);
	},
};
