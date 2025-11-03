import React, { Suspense } from "react";
import Categories from "../../components/Categories";
import LeftNews from "../../components/LeftNews";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <Categories></Categories>
      </Suspense>
      {/* -- LeftNews - */}
      <LeftNews></LeftNews>
    </div>
  );
};

export default LeftAside;
