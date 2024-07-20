"use client";
import { ReactNode, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { STICKER_SIZE, StickerInfo, StickerParams } from "@/lib/stickers";

export const Canvas: React.FC<{
	stickerInfo: StickerInfo;
	stickerParams: StickerParams;
	children: ReactNode;
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
		<div className="px-5">
			<div className="m-auto my-6 flex w-min flex-col gap-12">
				<div className="rounded-3xl bg-white p-5">
					<canvas
						ref={canvasRef}
						width={STICKER_SIZE}
						height={STICKER_SIZE}
						className={`aspect-square w-60 sm:w-[35rem] ${props.stickerInfo.shape === "square" ? "rounded-md" : "rounded-full"}`}
					/>
				</div>
			</div>
			<div className="flex flex-wrap justify-stretch gap-5 [&>*]:min-w-full [&>*]:flex-1 [&>*]:min-[360px]:min-w-[calc(50%-10px)] [&>*]:sm:min-w-min">
				{props.children}
				<Button type="button" onClick={handleDownload}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="mr-2 size-6"
					>
						<path
							stroke="#fff"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
						/>
					</svg>
					Download
				</Button>
			</div>
		</div>
	);
};
