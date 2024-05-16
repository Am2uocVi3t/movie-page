import Carousel from "../../components/carousel";
import Header from "../../components/header";

function HomePage() {
  return <div>
    <Header/>
    <Carousel numberOfSlide={3} category={"Trending"}/>
    <Carousel numberOfSlide={5} category={"Action"}/>
    <Carousel numberOfSlide={3} category={"Horror"}/>
  </div>;
}

export default HomePage;
