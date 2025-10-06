import React from "react";

const page = async ({ params }: any) => {
  console.log(await params);
  const { id } = await params;
  console.log(id);
  return <div>page {id}</div>;
};

export default page;
