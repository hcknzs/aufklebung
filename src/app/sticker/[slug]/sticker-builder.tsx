"use client";

import { useState } from "react";
import { getStickerInfoBySlug, stickers } from "@/lib/stickers";
import { Canvas } from "@/components/canvas/canvas";
import { Button } from "@/components/ui/button";
import { ColorButton } from "@/components/color-button";
import { Input } from "@/components/ui/input";
import { ColorRandomizer } from "@/components/color-randomizer";

export const StickerBuilder: React.FC<{
	slug: (typeof stickers)[number]["slug"];
}> = ({ slug }) => {
	// this is definitely not null, since it is checked in the parent
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const stickerInfo = getStickerInfoBySlug(slug)!;

	const [stickerParams, setStickerParams] = useState(
		stickerInfo.initialValues,
	);

	return (
		<Canvas stickerInfo={stickerInfo} stickerParams={stickerParams}>
			{stickerInfo.parameters.foregroundColor ? (
				<ColorButton
					value={stickerParams.foregroundColor}
					onChange={(e) =>
						setStickerParams({
							...stickerParams,
							foregroundColor: e.target.value,
						})
					}
				/>
			) : null}
			{stickerInfo.parameters.backgroundColor ? (
				<ColorButton
					value={stickerParams.backgroundColor}
					onChange={(e) =>
						setStickerParams({
							...stickerParams,
							backgroundColor: e.target.value,
						})
					}
				/>
			) : null}
			{stickerInfo.parameters.backgroundColor &&
			// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
			stickerInfo.parameters.foregroundColor ? (
				<ColorRandomizer
					onChange={([backgroundColor, foregroundColor]) => {
						setStickerParams({
							...stickerParams,
							backgroundColor,
							foregroundColor,
						});
					}}
				/>
			) : null}
			{stickerInfo.parameters.text1 ? (
				<Input
					type="text"
					value={stickerParams.text1}
					placeholder="Text 1"
					onChange={(e) =>
						setStickerParams({
							...stickerParams,
							text1: e.target.value,
						})
					}
				/>
			) : null}
			{stickerInfo.parameters.text2 ? (
				<Input
					type="text"
					placeholder="Text 2"
					value={stickerParams.text2}
					onChange={(e) =>
						setStickerParams({
							...stickerParams,
							text2: e.target.value,
						})
					}
				/>
			) : null}
			{stickerInfo.parameters.url ? (
				<Input
					type="url"
					value={stickerParams.url}
					onChange={(e) =>
						setStickerParams({
							...stickerParams,
							url: e.target.value,
						})
					}
				>
					<Button className="pointer-events-none rounded-e-none">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="size-6"
						>
							<path
								stroke="#fff"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M7 3H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM20 3h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM7 16H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1ZM21 16h-3a2 2 0 0 0-2 2v3M21 21v.01M12 7v3a2 2 0 0 1-2 2H7M3 12h.01M12 3h.01M12 16v.01M16 12h1M21 12v.01M12 21v-1"
							/>
						</svg>
					</Button>
				</Input>
			) : null}
		</Canvas>
	);
};
