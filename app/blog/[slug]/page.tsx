import { Blog } from "@/interface";
import { client, urlFor } from "@/sanity/connection/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `*[_type == "blog" && slug.current == '${slug}']{
        "currentSlug":slug.current,
          title,
          content,
          titleImage
      }[0]`;
  const data = await client.fetch(query);

  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: Blog = await getData(params.slug);
  return (
    <div className="containers">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Bilsyp - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 tracking-tight font-bold sm:text-2xl">
          {data.title}
        </span>
      </h1>
      <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt="titleImage"
        priority
        className="my-8 rounded-md border"
      />
      <div className="my-10 prose-blue prose-xl  porse-p:text-[0.89rem] lg:prose-p:text-xl dark:prose-invert">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
