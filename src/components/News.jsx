import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard.jsx";
import{ AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

function News({category}) {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState();

  const handlePrevious = () => {
       setLoading(true);
       setPage(page - 1);
       window.scrollTo(0, 0);
  }

  const handleNext = () => {
       if(page + 1 > Math.floor(totalResults/10)){

       } else {
          setLoading(true);
          setPage(page + 1);
          window.scrollTo(0,0);
       }
  }

  useEffect(() => {
    setLoading(true);
    fetch(
     `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=715699df7edf42189c9a87f20cd049f4&page=${page}&pageSize=10`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setNewsData(data.articles);
        setTotalResults(data.totalResults);
      })
      .catch((error) => {
        setLoading(false);
        setError("Error fetching data");
      });
  }, [ page ]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <button
          type="button"
          className="bg-[#ea504c] h-max w-max  text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]"
          disabled
        >
          <div className="flex items-center justify-center m-[10px]">
            <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
            <div className="ml-2">Loading...</div>
          </div>
        </button>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-[1240px] m-auto my-4">
      <h1 className="text-[#ea504c] font-bold md:text-3xl text-xl m-6">
        Top Headlines
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6">
        {newsData.map((newsItem, index) => (
          <NewsCard
            key={index}
            title={newsItem.title}
            description={newsItem.description}
            imageUrl={newsItem.urlToImage}
            url={newsItem.url}
            cardKey={index}
          />
        ))}
      </div>
      <div className="flex justify-between my-5">
        <button disabled={page <= 1} onClick={handlePrevious} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#ea504c]  hover:text-[#ea504c] hover:bg-white hover:border hover:border-[#ea504c]">
           <AiOutlineArrowLeft/> Previous
        </button>
        <button disabled={page + 1 > Math.floor(totalResults/10)}  onClick={handleNext} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#ea504c]  hover:text-[#ea504c] hover:bg-white hover:border hover:border-[#ea504c]">
         <AiOutlineArrowRight/> Next
        </button>
      </div>
    </div>
  );
}

export default News;
