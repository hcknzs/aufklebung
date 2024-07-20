"use client";
import { useEffect, useRef } from "react";
import { STICKER_SIZE, StickerInfo, StickerParams } from "@/lib/stickers";

export const Canvas: React.FC<{
	stickerInfo: StickerInfo;
	stickerParams: StickerParams;
}> = (props) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const handleDownload = () => {
		const base64 = canvasRef.current?.toDataURL("image/png");
		if (base64 === undefined) throw new Error("Export failed");

		const virtualA = document.createElement("a");
		virtualA.href = base64;
		virtualA.download = `sticker-${props.stickerInfo.slug}.png`;

		virtualA.click();
	};

	useEffect(() => {
		if (!canvasRef.current) return;
		const canvas = canvasRef.current;

		// create a new canvas
		const shadowCanvas = document.createElement("canvas");
		shadowCanvas.width = STICKER_SIZE;
		shadowCanvas.height = STICKER_SIZE;
		const ctx = shadowCanvas.getContext("2d");

		if (!ctx) return;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();

		Promise.all([
			props.stickerInfo.renderer(props.stickerParams, ctx),
		]).then(() => {
			// draw the shadow canvas to the main canvas
			const mainCtx = canvas.getContext("2d");
			if (!mainCtx) return;

			mainCtx.clearRect(0, 0, canvas.width, canvas.height);
			mainCtx.drawImage(shadowCanvas, 0, 0);
			mainCtx.restore();
		});
	}, [props.stickerInfo, props.stickerParams]);

	return (
		<>
			<div className="m-auto my-8 flex w-min flex-col gap-12">
				<div className="rounded-3xl bg-white p-5">
					<canvas
						ref={canvasRef}
						width={STICKER_SIZE}
						height={STICKER_SIZE}
						className={`size-96 ${props.stickerInfo.shape === "square" ? "rounded-md" : "rounded-full"}`}
					/>
				</div>
			</div>
			<button type="button" onClick={handleDownload}>
				download
			</button>
		</>
	);
};
