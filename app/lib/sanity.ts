import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    apiVersion: '2023-05-03',
    dataset: 'production',
    projectId: 's3qx53uu',  // 유출위험
    useCdn: false,
    token: 'skY8XrvMN1VZpdul59LtNDPYzlhHAPObIIvxt4Q3mQc99GZ0E7DnnORJFk5W1JOPUvcWGfyNu6UTSOZmAgnW6YIN5DHH01BUKieVNtmnyJCVBAZj7Jiajj9FXqNC7bPBQitfwx8z2z1NiloHISGvNEWEbjOoezkI1kcvMGbWrsjtHm3buRZK',
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any){
    return builder.image(source);
}