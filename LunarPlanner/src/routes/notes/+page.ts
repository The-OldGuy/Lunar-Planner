import { apiGet } from "$lib/api";

export async function load() {
    const notes = await apiGet("/notes");
    return { notes };
}
