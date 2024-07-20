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

		const renderer = stickerRenderers[props.sticker.type];
		renderer(props.sticker, ctx);
	}, [props.sticker]);

	return (
		<div className="flex flex-col items-center gap-8">
			<canvas
				ref={canvasRef}
				width={
					props.sticker.shape === "rectangle"
						? props.sticker.size * props.sticker.aspectRatio
						: props.sticker.size
				}
				height={props.sticker.size}
				className="h-72"
			/>
		</div>
	);
};
