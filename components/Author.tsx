import Image from "next/image";
import React from "react";

type Props = {
  author: any;
};

const Author = ({ author }: Props) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-white bg-opacity-20">
      <div className="w-full flex justify-center  ">
        <Image
          unoptimized
          alt={author.name}
          height={100}
          width={100}
          src={author.photo.url}
        />
      </div>
      
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
        <div className="text-white text-lg">{author.bio}</div>
    </div>
  );
};

export default Author;
