import React from "react";
import { useLoaderData, useParams } from "react-router";

const CategorieNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1>categorie news - {id}</h1>
    </div>
  );
};

export default CategorieNews;
