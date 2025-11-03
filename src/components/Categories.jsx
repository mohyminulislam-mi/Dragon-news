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
          <NavLink
            to={`/categorie/${categorie.id}`}
            key={categorie.id}
            className="py-2 text-center font-semibold mt-2 border-0 bg-base-100 hover:bg-base-200"
          >
            {categorie.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
