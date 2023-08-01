import Header from './components/Header';
import Menu from './components/Menu';
import SlideShow from './components/Slider';
import Search from './components/Search';
import CarDetails from './components/CarDetails';
import Category from './components/Category';
import Gallery from './components/Gallery';
import Services from './components/Services';
import RecommendedCars from './components/RecommendedCars';
import WhyChooseUs from './components/WhyChooseUs';
import Blog from './components/Blog';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <SlideShow />
      <Search />
      <CarDetails />
      <Category />
      <Gallery />
      <Services />
      <RecommendedCars />
      <WhyChooseUs />
      <Blog />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
