import Banner from './Banner';
import About from './About';
import Services from './Services';

const Home = () => {
  return (
    <div className="space-y-16">
      <Banner />
      <About />
      <Services />
    </div>
  );
};

export default Home;
