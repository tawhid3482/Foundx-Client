/* eslint-disable padding-line-between-statements */
/* eslint-disable no-console */
/* eslint-disable import/order */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getRecentPosts } from "@/src/services/RecentPosts";
import { Button } from "@heroui/button";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

const RecentPost = async () => {
  const { data: posts } = await getRecentPosts();
  console.log(posts);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Recent Posts</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-5 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.description}</p>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <img
                  src={Array.isArray(post.images) ? post.images[0] : post.images}
                  alt={post.title}
                  className=""
                />
                <span>{post.author || "Unknown"}</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                <span>
                  {new Date(post.dateFound).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <Link href={`/found-items/${post._id}`}>
                <span className="text-sm text-[#833d47] hover:underline font-medium cursor-pointer">
                  Read more →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-8">
        <Link href="/found-items">
          <Button className="px-6 py-2 bg-[#833d47] text-white hover:bg-[#6b2f39] rounded-full transition">
            See All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RecentPost;
