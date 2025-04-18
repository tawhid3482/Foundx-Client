/* eslint-disable react/jsx-key */
/* eslint-disable react/self-closing-comp */
import CardSkeleton from "@/src/components/Ui/CardSkeleton";
import { Button } from "@heroui/button";
import Link from "next/link";

const RecentPost = async () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Recent Posts</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {[...Array(9)].map(() => (
          <CardSkeleton></CardSkeleton>
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
