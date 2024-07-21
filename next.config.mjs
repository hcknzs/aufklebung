/** @type {import('next').NextConfig} */
const nextConfig = {
	logging: {
		fetches: {
			fullUrl: process.env.LOCALHOST === "true",
		},
	},
};

export default nextConfig;
