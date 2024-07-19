"use client";
import { useEffect, useRef } from "react";
import { Sticker, stickerRenderers } from "@/data/stickers";

export const Canvas: React.FC<{
	sticker: Sticker;
}> = (props) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (!canvasRef.current) return;

		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();

		const renderer = stickerRenderers[props.sticker.type](
			props.sticker,
			ctx,
		);
	}, [props.sticker]);

	return (
		<div className="flex flex-col items-center gap-8">
			<canvas
				ref={canvasRef}
				className="bg-red-500"
				width="400"
				height="400"
			/>
		</div>
	);
};
