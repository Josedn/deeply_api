import ShortUrl, { IShortUrl } from "../models/ShortUrl";

export default class ShortUrlController {
    static async create(slug: string, source: string): Promise<IShortUrl> {
        try {
            const data = await ShortUrl.create({
                slug,
                source,
            });
            return data;
        } catch (error) {
            throw error;
        }
    }

    static async retrieve(slug: string): Promise<IShortUrl | null> {
        try {
            const data = await ShortUrl.findOne({
                slug,
            });
            return data;
        } catch (error) {
            throw error;
        }
    }
}