import { renderCircularText } from "@/lib/canvas-helper";
import { StickerRenderer } from "@/lib/stickers";

export const hasstDieAfdRenderer: StickerRenderer = async (params, ctx) => {
	const fg = params.foregroundColor || "#fff";

	ctx.fillStyle = params.backgroundColor;
	ctx.beginPath();
	ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
	ctx.fill();
	ctx.closePath();

	const image = new Image();

	image.src = `data:image/svg+xml;base64,${window.btoa(`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1080 1080"><path fill="${fg}" d="m749.3 707.4-12.3-6.3c-3.5-1.8-7-3.7-10.4-5.5-7.4-4-15.1-8.1-23.1-11.5-66.4-29-136.4-43.1-214-43.1-17.1 0-34.8.7-52.6 2.1-18.3 1.5-38.4 7.5-59.7 18-11.3 5.5-19.3 15.3-22.6 27.7-3.5 13-1.4 27.4 5.8 40.5 4.1 7.5 8.7 14.5 13.3 21.2-15.2-1.4-31.1-4.9-43.3-9.7-47.3-18.8-73.8-49.5-83.3-96.8-6.5-32.1 2.1-56 26.3-73.1 21.7-15.3 47.9-24.1 80.2-26.9 19.9-1.7 39.9-2.6 59.4-2.6 88 0 173.9 17.5 255.1 52 20.2 8.6 39.7 17.7 60.4 27.3 9.3 4.3 18.9 8.8 28.5 13.2l13 5.9 16.3-45 48.8 110.9-100.7 46.7 14.9-45zM385.9 327.6c-4 2.7-7.9 5.8-11.4 9.3-28.2 28.2-28.2 73.8 0 101.9s73.8 28.2 101.9 0c18.7-18.7 25-45.1 18.8-69-39.9-6.1-77-20.8-109.3-42.2zm52.9 105.2c-11.7 11.7-30.7 11.7-42.5 0-11.7-11.7-11.7-30.7 0-42.5 11.7-11.7 30.7-11.7 42.5 0 11.7 11.8 11.7 30.8 0 42.5zM685.6 330.3c-33.6 21.3-72.1 35.6-113.4 40.7-5.7 23.6.7 49.5 19.1 67.9 28.2 28.2 73.8 28.2 101.9 0 28.2-28.2 28.2-73.8 0-101.9-2.4-2.5-4.9-4.7-7.6-6.7zm-30 102.5c-11.7 11.7-30.7 11.7-42.5 0-11.7-11.7-11.7-30.7 0-42.5 11.7-11.7 30.7-11.7 42.5 0 11.7 11.8 11.7 30.8 0 42.5z"/></svg>`)}`;
	image.onload = () => {
		ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height);
	};

	const fontSize = 1080 / 10;
	ctx.fillStyle = params.foregroundColor;
	ctx.font = `${fontSize}px 'Bagel Fat One'`;
	const halfWidth = ctx.canvas.width / 2;

	const config = {
		ctx,
		radius: halfWidth - 100,
		fillStyle: params.foregroundColor,
		font: "100px 'Bagel Fat One'",
		angleCalculation: "auto",
		letterAngle: 0.175,
	} as const;

	// top text
	renderCircularText({
		...config,
		text: `Ganz ${params.text1}`.toUpperCase(),
		position: "top",
	});

	// bottom text
	renderCircularText({
		...config,
		text: "hasst die AfD!".toUpperCase(),
		position: "bottom",
	});
};
