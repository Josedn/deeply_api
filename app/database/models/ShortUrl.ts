import mongoose, { Schema, Document } from "mongoose";

export interface IShortUrl extends Document {
    slug: string;
    source: string;
}

const ShortUrlSchema: Schema = new Schema({
    slug: { type: String, required: true, unique: true },
    source: { type: String, required: true },
});

const ShortUrl = mongoose.model<IShortUrl>("ShortUrl", ShortUrlSchema, "shorturls");

export default ShortUrl;