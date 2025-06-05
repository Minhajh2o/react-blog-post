import { GoBookmark } from "react-icons/go";

const Blog = ({ blog, addBookmark, addReadingTime }) => {
  const { banner, title, author, hashtags } = blog;
  const { profile_img, name, published_date, reading_time } = author;

  return (
    <div className="bg-white rounded-lg mb-6">
      {/* banner */}
      <img src={banner} alt={title} className="w-full rounded-md mb-4" />
      <div>
        <div className="flex justify-between items-center mb-2">
          {/* author info */}
          <div className="flex items-center gap-4 ">
            <img
              src={profile_img}
              alt={name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h5 className="font-semibold">{name}</h5>
              <p className="text-sm text-gray-500">
                {published_date.month} {published_date.date}
              </p>
            </div>
          </div>
          {/* reading time & bookmark */}
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-500">{reading_time} min read</p>
            <GoBookmark onClick={() => addBookmark(blog)} className="text-gray-500 cursor-pointer hover:text-blue-500" />
          </div>
        </div>
        {/* title and hashtags */}
        <h2 className="text-4xl font-bold">{title}</h2>
        <div className="mt-2 flex gap-2">
          {hashtags &&
            hashtags.map((tag) => (
              <span key={tag} className="text-blue-500">
                {tag}
              </span>
            ))}
        </div>
        {/* read more button */}
        <button
          type="button"
          onClick={() => addReadingTime(reading_time)}
          className="mt-2 btn cursor-pointer underline text-indigo-600"
        >
          Mark as Read
        </button>
      </div>
    </div>
  );
};

export default Blog;
