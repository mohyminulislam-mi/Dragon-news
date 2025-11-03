import { FaStar, FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, thumbnail_url, details, rating, total_view, author, tags } =
    news;

  // Date formatting
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  return (
    <div className="rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white overflow-hidden">
      {/* Author Section */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author?.name}</h3>
            <p className="text-sm text-gray-500">
              {formatDate(author?.published_date)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <FaBookmark className="cursor-pointer hover:text-blue-500" />
          <FaShareAlt className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      {/* News Title */}
      <h2 className="px-4 pt-4 text-lg font-bold text-gray-900 leading-snug hover:text-blue-600 transition-colors cursor-pointer">
        {title}
      </h2>

      {/* Image */}
      <div className="px-4 py-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full object-cover max-h-60"
        />
      </div>

      {/* Details */}
      <div className="px-4 text-gray-600 text-sm mb-3">
        <p>{details.length > 180 ? `${details.slice(0, 180)}...` : details}</p>
        <button className="text-orange-500 font-semibold mt-2 hover:underline">
          Read More
        </button>
      </div>

      {/* Tags */}
      <div className="px-4 text-xs text-gray-500 mb-3">
        <span className="font-semibold">Tags:</span>{" "}
        {tags?.map((tag, i) => (
          <span key={i} className="mr-2 text-blue-500">
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t px-4 py-3">
        {/* Rating */}
        <div className="flex items-center text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < rating.number ? "text-orange-500" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-gray-700 font-medium">
            {rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-600 text-sm">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
