import { FaRegCalendarAlt } from "react-icons/fa";
import { useLoaderData } from "react-router";

const LeftNews = () => {
  const data = useLoaderData();
  const safeData = Array.isArray(data) ? data : [];
  const sportsNews = safeData.filter((item) => item.tags?.includes("sports"));

  return (
    <div className="space-y-6">
      {sportsNews.map((news) => (
        <div
          key={news.id}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
        >
          {/* Thumbnail */}
          <img
            src={news.thumbnail_url}
            alt={news.title}
            className="w-full h-48 object-cover"
          />

          {/* Content */}
          <div className="p-4">
            <h2 className="text-base font-semibold text-gray-900 leading-snug hover:text-blue-600 transition-colors">
              {news.title}
            </h2>

            <div className="flex items-center justify-start gap-4 mt-3 text-sm text-gray-500">
              <p className="font-medium text-gray-700">Sports</p>
              <div className="flex items-center gap-1">
                <FaRegCalendarAlt className="text-gray-500" />
                <span>
                  {new Date(news.author.published_date).toLocaleDateString(
                    "en-US",
                    {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftNews;
