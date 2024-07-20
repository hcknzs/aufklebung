import { StickerRenderer } from "@/lib/stickers";

export const frownieRenderer: StickerRenderer = async (params, ctx) => {
	const fg = params.foregroundColor || "#fff";
	const svg = `
	<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="Ebene_1" x="0" y="0" style="enable-background:new 0 0 1080 1080" version="1.1" viewBox="0 0 1080 1080">
	<path d="M266.3 226c-8.7 5.7-16.9 12.4-24.6 20-60.5 60.5-60.5 158.6 0 219.1s158.6 60.5 219.1 0c40.2-40.2 53.7-97 40.4-148.4-85.7-13.2-165.4-44.9-234.9-90.7zm113.6 226c-25.2 25.2-66.1 25.2-91.3 0-25.2-25.2-25.2-66.1 0-91.3 25.2-25.2 66.1-25.2 91.3 0 25.2 25.3 25.2 66.1 0 91.3zM840.4 231.8c-72.2 45.8-154.9 76.4-243.8 87.4-12.2 50.7 1.5 106.3 41.1 145.9 60.5 60.5 158.6 60.5 219.1 0s60.5-158.6 0-219.1c-5.2-5.2-10.7-9.9-16.4-14.2zM775.9 452c-25.2 25.2-66.1 25.2-91.3 0-25.2-25.2-25.2-66.1 0-91.3 25.2-25.2 66.1-25.2 91.3 0 25.2 25.3 25.2 66.1 0 91.3z" fill="white"/>
	<path d="M705.2 881.2c13.6-15.4 28.6-30 40.7-46.7 12.8-17.7 9.4-38.1-10-47.7-20.8-10.3-43.8-18.8-66.6-21.7-108.9-13.9-216.8-9.2-322.2 23.9-13.8 4.3-27.1 10.1-41.2 15.4 7.6 23.9 14.7 46.3 22.6 71.3-59-27.8-115.8-54.6-174.2-82.1 31.6-54.3 62.7-107.6 95.5-163.7 8.8 25 16.5 47.1 24.1 68.6 37.9-12.5 74.7-25.6 112-36.9C515.7 622.2 648 613 782.3 630.9c37.3 5 73 15.5 104.4 37.3 35 24.3 46.6 58 34.6 99-18 60.7-62.3 92.5-120.4 108.8-30.3 8.5-72 10.1-95.7 5.2z" fill="${fg}"/>
	</svg>
	`;

	ctx.fillStyle = params.backgroundColor;
	ctx.beginPath();
	ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
	ctx.fill();
	ctx.closePath();

	const image = new Image();

	image.src = `data:image/svg+xml;base64,${window.btoa(svg)}`;
	await new Promise((resolve) => (image.onload = resolve));
	ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height);
};
