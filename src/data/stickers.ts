export type AntifaSticker = {
	type: "antifa";
	params: {
		text: string;
		bgColor: string;
	};
};

export type XNeinDankeSticker = {
	type: "xNeinDanke";
	params: {
		text: string;
	};
};

export type Sticker = AntifaSticker | XNeinDankeSticker;

export type StickerTypes = Sticker["type"];

export const initialStickerParams = {
	antifa: {
		text: "hcknzs",
		bgColor: "#666",
	},
	xNeinDanke: {
		text: "nazis",
	},
} as const;

export const stickerRenderers = {
	antifa: (sticker: AntifaSticker, ctx: CanvasRenderingContext2D) => {
		ctx.fillStyle = sticker.params.bgColor;
		ctx.fillRect(0, 0, 400, 400);

		// render text
		ctx.fillStyle = "#fff";
		ctx.font = "48px IBM Plex Mono";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		const radius = 100;
		const angle = Math.PI * 2;

		ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
		ctx.rotate((-1 * angle) / 2);

		for (let i = 0; i < sticker.params.text.length; i++) {
			// const x = centerX + Math.cos(angle * i) * radius;
			// const y = centerY + Math.sin(angle * i) * radius;
			ctx.rotate(angle / sticker.params.text.length);
			ctx.save();
			ctx.translate(0, -1 * radius);
			ctx.fillText(sticker.params.text[i], 0, 0);
			ctx.restore();
		}
		ctx.restore();
	},
	xNeinDanke: (sticker: XNeinDankeSticker, ctx: CanvasRenderingContext2D) => {
		ctx.fillStyle = "#000";
		ctx.fillRect(0, 0, 400, 400);

		// render text
		ctx.fillStyle = "#fff";
		ctx.font = "48px sans-serif";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText(sticker.params.text + " nein danke", 200, 200);
	},
};
