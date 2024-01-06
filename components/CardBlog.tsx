import { Blog } from "@/interface";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { urlFor } from "@/sanity/connection/client";
import { Button } from "./ui/button";
import Link from "next/link";
function CardBlog({ title, smallDescription, titleImage, currentSlug }: Blog) {
  return (
    <div>
      <Card className="">
        <CardHeader>
          <Image
            src={urlFor(titleImage).url()}
            alt="image"
            width={500}
            height={500}
            className="object-cover"
          />
          <CardTitle className=" text-lg font-bold  line-clamp-2">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          <p className=" text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
            {smallDescription}
          </p>
          <Button className=" mt-4 w-full">
            <Link href={`/blog/${currentSlug}`}>Read More</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardBlog;
