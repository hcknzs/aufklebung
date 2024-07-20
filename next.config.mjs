/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["media2.giphy.com", "media3.giphy.com"],
	},
	logging: {
		fetches: {
			fullUrl: process.env.LOCALHOST === "true",
		},
	},
};

export default nextConfig;
