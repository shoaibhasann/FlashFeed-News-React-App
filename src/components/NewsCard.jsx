import React from "react";

function NewsCard({ title, description, imageUrl, cardKey, url }) {
  const cardClassName =
    cardKey === 0
      ? "col-span-2  bg-white border border-black shadow p-1"
      : cardKey === 8
      ? "col-span-2  bg-white border border-black shadow p-1"
      : "max-w-sm bg-white border border-black shadow p-1";

  return (
    <div key={cardKey} className={cardClassName}>
      <a href="#">
        <img src={imageUrl} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#ea504c] focus:ring-4 focus:outline-none hover:text-[#ea504c] hover:bg-white hover:border hover:border-[#ea504c]"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
