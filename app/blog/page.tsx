import Image from "next/image";
import Model from "./Model";

async function getBannerImage() {
    const response = await fetch("https://fakestoreapi.com/products", {
        next: { revalidate: 60 },
    });
    return await response.json();
}
async function getAllPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache:'no-cache'
    });
    return await response.json();
}

const BlogPage = async () => {
    const bannerImg = await getBannerImage();
    const allPost = await getAllPost();

    return (
        <div className="container mx-auto">
            {bannerImg.map((item:any) => (
                <Model key={item.id} data={item} />
            )).slice(0,1)}
            <h2>Welcome to my Blog page</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8">
                {allPost.map((post:any) => (
                <div key={post.id} className="border border-sky-500 rounded-md p-5 ">
                    <h3 className="text-xl text-rose-800">{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )).slice(0,9)}
            </div>
        </div>
    )
}

export default BlogPage;