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
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		props.stickerInfo.renderer(props.stickerParams, ctx);
	}, [props.stickerInfo, props.stickerParams]);

	return (
		<>
			<div className="flex flex-col items-center gap-8">
				<canvas
					ref={canvasRef}
					width={STICKER_SIZE}
					height={STICKER_SIZE}
					className={`size-96 ${props.stickerInfo.shape === "square" ? "rounded-md" : "rounded-full"}`}
				/>
			</div>

			<button type="button" onClick={handleDownload}>
				download
			</button>
		</>
	);
};
