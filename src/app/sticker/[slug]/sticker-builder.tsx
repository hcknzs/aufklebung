"use client";

import { useState } from "react";
import { getStickerInfoBySlug, stickers } from "@/lib/stickers";
import { Canvas } from "@/components/canvas/canvas";

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
		<>
			{/* TODO: make this nice (code cleanup, debouncing, layout, performance) */}
			{stickerInfo.parameters.text1 ? (
				<input
					type="text"
					value={stickerParams.text1}
					onChange={(e) =>
						setStickerParams({
							...stickerParams,
							text1: e.target.value,
						})
					}
				/>
			) : null}
			{stickerInfo.parameters.text2 ? (
				<input
					type="text"
					value={stickerParams.text2}
					onChange={(e) =>
						setStickerParams({
							...stickerParams,
							text2: e.target.value,
						})
					}
				/>
			) : null}
			{stickerInfo.parameters.foregroundColor ? (
				<input
					type="color"
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
				<input
					type="color"
					value={stickerParams.backgroundColor}
					onChange={(e) =>
						setStickerParams({
							...stickerParams,
							backgroundColor: e.target.value,
						})
					}
				/>
			) : null}
			{stickerInfo.parameters.url ? (
				<input
					type="url"
					value={stickerParams.url}
					onChange={(e) =>
						setStickerParams({
							...stickerParams,
							url: e.target.value,
						})
					}
				/>
			) : null}
			<Canvas stickerInfo={stickerInfo} stickerParams={stickerParams} />
		</>
	);
};
