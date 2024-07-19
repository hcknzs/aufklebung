import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const fail = (error: string) => {
	return NextResponse.json({ error, data: null }, { status: 400 });
};

export const succeed = <T extends Record<string, unknown>>(data?: T) => {
	return NextResponse.json(
		{ error: null, data: data ? data : { success: true } },
		{ status: 200 },
	);
};

export const catchAll = (error: unknown) => {
	if (error instanceof ZodError) {
		const serialized = Object.entries(error.flatten().fieldErrors)
			.map(([key, value]) => {
				return `${key}: ${value}`;
			})
			.join(", ");

		return fail(serialized);
	}

	if (error instanceof Error) {
		return fail(error.message);
	}

	return fail("Unknown error");
};
