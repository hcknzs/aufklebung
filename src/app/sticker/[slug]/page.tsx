import { notFound } from "next/navigation";
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
			<h1 className="sr-only">{stickerInfo.name}</h1>

			<StickerBuilder slug={slug} />
		</main>
	);
};

export default SingleStickerPage;
