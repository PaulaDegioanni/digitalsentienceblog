import { defineCollection, z } from "astro:content";
import { notionLoader } from "notion-astro-loader";
import {
  notionPageSchema,
  propertySchema,
  transformedPropertySchema,
} from "notion-astro-loader/schemas";

const blog = defineCollection({
  loader: notionLoader({
    auth: import.meta.env.NOTION_TOKEN,
    database_id: import.meta.env.NOTION_DATABASE_ID
  }),
});

export const collections = { blog };