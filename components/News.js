import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(()=>{
    const getNews = async () => {
        const res = await fetch('https://newsapi.org/v2/everything?q=technology&apiKey=b4a749d8c892469abd9768961717a173')
        const data = await res.json()
        setNews(data)
        console.log(news);
    }
    getNews()
  },[])

  return (
    <div className="p-5 h-full w-full flex flex-col items-start">
      <Image
        className="rounded-md hover:scale-105 ease-in-out duration-300"
        src={news[3]?.urlToImage}
        width={400}
        height={400}
      />

      <div className="mt-5 font-news font-light text-4xl">TITLE OF POST</div>
      <div className="mb-5 text-white text-2xl font-news font-light">
        Author
      </div>

      <div className="py-10 text-md font-news font-light italic">
        President Joe Biden signed an executive order that puts new limits on
        American investment in certain types of Chinese tech firms. The order is
        meant to address national security concerns posed by com…
      </div>

      <div className="">Read more</div>
    </div>
  );
};

export default News;
