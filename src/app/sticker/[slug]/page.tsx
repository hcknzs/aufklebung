import { notFound } from "next/navigation";
import Link from "next/link";
import { StickerBuilder } from "./sticker-builder";
import { getStickerInfoBySlug } from "@/lib/stickers";

type Props = {
	params: {
		slug?: string;
	};
};

const SingleStickerPage = ({ params }: Props) => {
	const slug = params.slug;
	if (!slug) {
		return notFound();
	}

	const stickerInfo = getStickerInfoBySlug(slug);

	if (!stickerInfo) {
		return notFound();
	}

	return (
		<div className="px-5">
			<h1 className="sr-only">{stickerInfo.name}</h1>

			<Link href="/" className="flex font-bold text-purple-300">
				<svg
					width="9"
					height="24"
					viewBox="0 0 9 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="mr-2 block"
				>
					<path
						d="M8 18L2 12L8 6"
						stroke="#5852BF"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				Zurück
			</Link>
			{stickerInfo.description ? (
				<div className="mt-5">{stickerInfo.description}</div>
			) : null}
			<StickerBuilder slug={slug} />
		</div>
	);
};

export default SingleStickerPage;
