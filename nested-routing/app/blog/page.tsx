"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
interface ProductCategory {
  slug: string;
}
const Blog = () => {
  const [data, setData] = useState<ProductCategory[]>([]);
  useEffect(() => {
    const getAllProducts = async () => {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data: ProductCategory[] = await response.json();
      console.log(data);
      setData(data);
    };
    getAllProducts();
  }, []);

  return (
    <>
      <h1>main blog page</h1>
      {data.map((i, ind) => {
        return (
          <div key={ind}>
            <Link href={`/blog/${i.slug}`}>{i.slug}</Link>
          </div>
        );
      })}
    </>
  );
};

export default Blog;
