import { StickerRenderer } from "@/lib/stickers";

export const hcknzsRenderer: StickerRenderer = async (params, ctx) => {
	const fg = params.foregroundColor;

	ctx.fillStyle = params.backgroundColor;
	ctx.beginPath();
	ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
	ctx.fill();
	ctx.closePath();

	const image = new Image();

	image.src = `data:image/svg+xml;base64,${window.btoa(`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" x="0" y="0" style="enable-background:new 0 0 724.9 644.1" version="1.1" viewBox="0 0 724.9 644.1">
	<style>.st0{fill:${fg}}</style>
	<path d="M106.5 625.9c-7.2-11.6-8.9-17.2-16.1-17.2-7.7 0-15.1 13.4-20.1 32.3l-25.6-5.3c6.9-32.8 23.6-58 48.1-58 17.9 0 26.3 10.1 31.3 18.2 7.2 11.6 8.9 17.2 16.1 17.2 7.7 0 15.1-13.4 20.1-32.3l25.6 5.3c-6.9 32.8-23.6 58-48.1 58-17.9 0-26.3-10.1-31.3-18.2zM257.3 625.9c-7.2-11.6-8.9-17.2-16.1-17.2-7.7 0-15.1 13.4-20.1 32.3l-25.6-5.3c6.9-32.8 23.6-58 48.1-58 17.9 0 26.3 10.1 31.3 18.2 7.2 11.6 8.9 17.2 16.1 17.2 7.7 0 15.1-13.4 20.1-32.3l25.6 5.3c-6.9 32.8-23.6 58-48.1 58-17.9 0-26.4-10.1-31.3-18.2zM408 625.9c-7.2-11.6-8.9-17.2-16.1-17.2-7.7 0-15.1 13.4-20.1 32.3l-25.6-5.3c6.9-32.8 23.6-58 48.1-58 17.9 0 26.3 10.1 31.3 18.2 7.2 11.6 8.9 17.2 16.1 17.2 7.7 0 15.1-13.4 20.1-32.3l25.6 5.3c-6.9 32.8-23.6 58-48.1 58-17.9 0-26.3-10.1-31.3-18.2zM197.5 48.2c-7.2-11.6-8.9-17.2-16.1-17.2-7.7 0-15.1 13.4-20.1 32.3L135.7 58c6.9-32.8 23.6-58 48.1-58 17.9 0 26.3 10.1 31.3 18.2 7.2 11.6 8.9 17.2 16.1 17.2 7.7 0 15.1-13.4 20.1-32.3l25.6 5.3c-6.9 32.8-23.6 58-48.1 58-17.9 0-26.3-10.1-31.3-18.2zM348.3 48.2c-7.2-11.6-8.9-17.2-16.1-17.2-7.7 0-15.1 13.4-20.1 32.3L286.5 58c6.9-32.8 23.6-58 48.1-58 17.9 0 26.3 10.1 31.3 18.2 7.2 11.6 8.9 17.2 16.1 17.2 7.7 0 15.1-13.4 20.1-32.3l25.6 5.3c-6.9 32.8-23.6 58-48.1 58-17.9 0-26.4-10.1-31.3-18.2zM499 48.2c-7.2-11.6-8.9-17.2-16.1-17.2-7.7 0-15.1 13.4-20.1 32.3L437.2 58c6.9-32.8 23.6-58 48.1-58 17.9 0 26.3 10.1 31.3 18.2 7.2 11.6 8.9 17.2 16.1 17.2 7.7 0 15.1-13.4 20.1-32.3l25.6 5.3c-6.9 32.8-23.6 58-48.1 58-17.9 0-26.3-10.1-31.3-18.2z" class="st0"/>
	<path d="M143.1 119.4h36.2L165.2 207h1.2c9.7-21.2 21.3-34.1 41.7-34.1 25.1 0 35 17.4 35 37.6 0 7.3-.7 14.1-2.7 26.2L229 306.1h-36.2l12.2-73.9c.7-4.5 1.7-9.3 1.7-15.6 0-6.8-3.7-15.4-14.9-15.4-8.4 0-14.4 4.3-20.1 11.9-3.7 5-9.9 14.6-11.7 25.2l-11.2 67.9h-36.2l30.5-186.8zM268.3 253.6c0-44.4 25.3-81.2 71-81.2 29.3 0 44.2 13.4 49.6 33l-29.5 14.1c-3.5-10.8-8.7-17.7-23.1-17.7-14.1 0-24.6 9.6-27.5 27.8l-2.5 15.1c-.5 3-1 7.8-1 11.9 0 13.4 6.2 22.5 22.6 22.5 10.4 0 17.9-3.5 36-27.8l22.6 14.9c-16.9 27.2-33.8 42.4-64.5 42.4-34.9 0-53.7-20.2-53.7-55zM434.2 118.9h36.2l-14.1 87.5h1.5c8.7-19.4 22.3-34.1 44.2-34.1 21.1 0 33.3 13.6 33.3 30.8 0 24-15.4 38.6-43.9 47.4l10.4 27.8 3.7.8 20.4-20.2 17.4 17.4-12.9 14.1c-10.7 11.6-21.6 18.2-34.7 18.2-15.6 0-23.8-9.6-29.5-25.7l-12.4-34.6c29.5-8.8 45.4-17.7 45.4-33.8 0-8.6-6-14.6-16.6-14.6-6.2 0-12.4 2.5-19.9 12.1-5 6.3-9.4 13.6-11.4 25.7l-11.2 67.9h-36.2l30.3-186.7z" class="st0"/>
	<path d="M0 486.4c0-2.8.5-6.8 1.5-12.9 1.7-10.6 10.4-20.2 28.5-20.2 16.4 0 22.8 7.6 22.8 16.9 0 2.8-.5 6.8-1.5 12.9-1.7 10.6-10.4 20.2-28.5 20.2-16.3 0-22.8-7.6-22.8-16.9zM601 320.5h35.5C601 346 572.2 381.1 566 418.9l-4 24c-1 6.1-1.2 10.3-1.2 15.6 0 33 18.9 68.1 38.7 88.3H567c-20.1-19.9-36.2-55.3-36.2-94.9 0-56 32.5-105.9 70.2-131.4zM654.7 546.8h-35.5c35.5-25.5 64.3-60.5 70.5-98.4l4-24c1-6.1 1.2-10.3 1.2-15.6 0-33.1-18.9-68.1-38.7-88.3h32.5c20.1 19.9 36.2 55.3 36.2 94.9 0 56-32.5 105.9-70.2 131.4z" class="st0"/>
	<path d="M80.7 500.3 102 370.1h36.2l-5 31h1.2c9.7-21.2 21.3-34.1 41.7-34.1 25.1 0 35 17.4 35 37.6 0 7.3-.7 14.1-2.7 26.2L197 500.2h-36.2l12.2-73.9c.7-4.5 1.7-9.3 1.7-15.6 0-6.8-3.7-15.4-14.9-15.4-8.4 0-14.4 4.3-20.1 11.9-3.7 5-9.9 14.6-11.7 25.2l-11.2 67.9H80.7zM291.5 494.2l-25.1-13.1-1 .8-3 18.4h-31l5-30.3 79.4-64.1c-9.4-7.6-16.9-10.3-27.5-10.3-8.4 0-15.9 4.5-15.9 19.2h-26.8v-2.3c0-29 15.9-45.4 40.5-45.4 15.4 0 32 4.8 49.1 22.2l.5.5 1.5-1.3 3-18.4h31l-5 30.3-80.4 65.1 48.6 9.3 2.7-3.3-7.4-22.2 21.1-9.3 3.7 6.8c5.5 9.8 7.4 17.2 7.4 24.7 0 16.4-12.2 31.8-32.3 31.8-11.8 0-24.7-2-38.1-9.1zM384.3 482.1l20.4-20.4c7.2 10.3 20.8 15.6 36 15.6 14.9 0 24.3-5 24.3-14.4 0-7.1-5.5-9.6-13.2-11.4l-18.4-4c-19.4-4.3-34.5-12.6-34.5-35.6 0-29.3 24.8-44.9 58.1-44.9 22.8 0 42.2 7.1 50.9 18.4L488 406.1c-5.7-7.3-17.6-13.1-32-13.1-12.9 0-21.3 4.8-21.3 14.1 0 7.1 4.7 9.1 12.7 10.8l19.1 4.3c21.3 4.8 34.5 13.9 34.5 35.1 0 28.8-24.6 45.9-62.8 45.9-25.6.1-45.2-7.5-53.9-21.1z" class="st0"/>
</svg>`)}`;

	if (!image.complete) {
		await new Promise((resolve) => (image.onload = resolve));
	}

	const margin = 80;
	ctx.drawImage(
		image,
		margin,
		margin,
		ctx.canvas.width - margin * 2,
		ctx.canvas.height - margin * 2,
	);
};