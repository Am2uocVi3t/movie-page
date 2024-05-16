import Carousel from "../../components/carousel";
import Header from "../../components/header";

function HomePage() {
  return <div>
    <Header/>
    <Carousel numberOfSlide={1} category={"Action"} isUseNavigation={true}/>
    <Carousel numberOfSlide={6} category={"Trending"} title="Trending"/> 
    <Carousel numberOfSlide={6} category={"Horror"} title="Horror"/>
  </div>;
}

export default HomePage;
