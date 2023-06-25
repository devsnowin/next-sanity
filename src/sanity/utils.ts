import { createClient, groq } from 'next-sanity';

export async function getProducts() {
  const client = createClient({
    projectId: 'sa4z4d8f',
    dataset: 'production',
  });

  return client.fetch(
    groq`*[_type == "product"]{
        _id,
        _createdAt,
        name,
        description,
        price,
        category,
        "image": image.asset->url,
        "alt": image.alt,
    }`
  );
}
