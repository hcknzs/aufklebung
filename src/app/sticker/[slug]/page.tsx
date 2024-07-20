import { notFound } from "next/navigation";
import Image from "next/image";
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
		<main>
			<h1>{stickerInfo.name}</h1>

			<Image
				width="200"
				height="200"
				alt={stickerInfo.name}
				src={stickerInfo.thumbnailSrc}
			/>
			<StickerBuilder slug={slug} />
		</main>
	);
};

export default SingleStickerPage;
