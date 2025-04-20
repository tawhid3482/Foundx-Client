import Container from "@/src/components/Ui/Container";
import Post from "@/src/components/Ui/Post";
import axiosInstance from "@/src/lib/axiosInstance";
import { IPost } from "@/src/types/post";


export default async function FoundItems() {
  const { data } = await axiosInstance.get(`/items`);

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: IPost) => <Post key={post?._id} post={post} />)}
      </div>
    </Container>
  );
}