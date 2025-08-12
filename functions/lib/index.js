import { onRequest } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
dotenv.config();
initializeApp();
export const health = onRequest(async (_req, res) => {
    res.json({ ok: true, app: process.env.APP_NAME || "cosplay.ai" });
});
export const pingMongo = onRequest(async (_req, res) => {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        res.status(500).json({ ok: false, error: "Missing MONGO_URI" });
        return;
    }
    try {
        const client = new MongoClient(uri);
        await client.connect();
        const adminDb = client.db().admin();
        const info = await adminDb.command({ ping: 1 });
        await client.close();
        res.json({ ok: true, info });
    }
    catch (e) {
        res.status(500).json({ ok: false, error: e?.message || "Unknown error" });
    }
});
//# sourceMappingURL=index.js.map