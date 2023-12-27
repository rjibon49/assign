import Image from "next/image";
import Model from "./Model";

async function getBannerImage() {
    const response = await fetch("https://fakestoreapi.com/products", {
        next: { revalidate: 60 },
    });
    return await response.json();
}

const BlogPage = async () => {
    const bannerImg = await getBannerImage();

    return (
        <div>
            {bannerImg.map((item:any) => (
                <Model key={item.id} data={item} />
            )).slice(0,1)}
        </div>
    )
}

export default BlogPage;