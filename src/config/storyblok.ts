import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

if (!process.env.STORYBLOK_API_TOKEN) {
  throw new Error("STORYBLOK_API_TOKEN is not defined");
}

export const storyblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
    version: "draft"
  }
})(); 