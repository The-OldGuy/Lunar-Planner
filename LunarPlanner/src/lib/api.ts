const API_BASE = "https://lunar-planner.onrender.com";

export async function apiGet(path: string) {
    const res = await fetch(`${API_BASE}${path}`);
    if (!res.ok) throw new Error(`GET ${path} failed`);
    return res.json();
}

export async function apiPost(path: string, data: any) {
    const res = await fetch(`${API_BASE}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error(`POST ${path} failed`);
    return res.json();
}
