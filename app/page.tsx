import Model from "./blog/Model";

async function getBannerImage() {
  const response = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 60 },
  });
  return await response.json();
}
const Home = async () => {
  const bannerImg = await getBannerImage();

    return (
        <div className="container mx-auto">
            {bannerImg.map((item:any) => (
                <Model key={item.id} data={item} />
            )).slice(0,1)}
            <h2>Welcome to my home page</h2>
        </div>
    )
}
export default Home
