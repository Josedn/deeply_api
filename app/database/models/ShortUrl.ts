// Import the neccesary modules.
import mongoose from "mongoose";

// The schema used by mongoose.
const ShortUrlSchema = new mongoose.Schema({
    slug: String,
    source: String,
});

/**
 * A model object for short urls.
 * @type {ShortUrl}
 */

export type ShortUrlDao = {
    slug: string,
    source: string,
};

// Create the model.
const ShortUrl = mongoose.model("ShortUrl", ShortUrlSchema);

/**
 * A model object for short urls.
 * @type {ShortUrl}
 */
export {ShortUrl};