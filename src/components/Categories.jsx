import React, { use } from "react";
import { NavLink } from "react-router";

const CaterogyPromis = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(CaterogyPromis);
  return (
    <div>
      <h1 className="font-semibold">All Caterogy {categories.length}</h1>
      <div className="grid grid-cols-1 mt-5">
        {categories.map((categorie) => (
          <NavLink key={categorie.id}>{categorie.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
