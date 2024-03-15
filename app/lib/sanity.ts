import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

const projectid = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_TOKEN;

export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: projectid,  // 유출위험
    useCdn: false,
    token: token,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any){
    return builder.image(source);
}