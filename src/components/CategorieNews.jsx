import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

const CategorieNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categorieNews, setCategorieNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategorieNews(data);
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategorieNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      setCategorieNews(filterNews);
    }
  }, [data, id]);

  return (
    <div>
      <h1>Totall {categorieNews.length} found</h1>
      <div className="grid grid-cols-1 gap-5">
        {categorieNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategorieNews;
