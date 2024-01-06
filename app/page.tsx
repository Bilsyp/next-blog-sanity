import CardBlog from "@/components/CardBlog";
import { Blog } from "@/interface";
import { client } from "@/connection/client";

export const revalidate = 30;

export async function getData() {
  try {
    const query = `
    *[_type == "blog" ] | order(releaseDate desc) | order(_createdAt asc){
      title,
      smallDescription,
      "currentSlug":slug.current,
       titleImage}`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const data: Blog[] = await getData();
  return (
    <div className="containers  grid grid-cols-1 lg:grid-cols-2 gap-4">
      {data.reverse().map((item, idx) => {
        return <CardBlog {...item} key={idx} />;
      })}
    </div>
  );
}
