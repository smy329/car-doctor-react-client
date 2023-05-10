import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';
import img5 from '../../assets/images/banner/5.jpg';
import img6 from '../../assets/images/banner/6.jpg';
const Banner = () => {
  const sliderText1 = (
    <>
      <div className="absolute flex items-center gap-5 bottom-0 top-0 left-0 bg-gradient-to-r from-slate-950 to-[rgba(21, 21, 21, 0)] rounded-xl">
        <div className="text-white space-y-7 w-3/5 pl-20">
          <h1 className="text-6xl font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <button className="btn btn-primary">Discover More</button>
            <button className="btn btn-outline btn-secondary">
              Latest Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        {sliderText1}

        <div className="absolute flex justify-end gap-5 left-5 right-5 bottom-5">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center gap-5 bottom-0 top-0 left-0 bg-gradient-to-r from-slate-950 to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 w-3/5 pl-20">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
              <button className="btn btn-primary">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center gap-5 bottom-0 top-0 left-0 bg-gradient-to-r from-slate-950 to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 w-3/5 pl-20">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
              <button className="btn btn-primary">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute flex rounded-xl items-center gap-5 bottom-0 top-0 left-0 bg-gradient-to-r from-slate-950 to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 w-3/5 pl-20">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
              <button className="btn btn-primary">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full rounded-xl" />
        <div className="absolute flex rounded-xl items-center gap-5 bottom-0 top-0 left-0 bg-gradient-to-r from-slate-950 to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 w-3/5 pl-20">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
              <button className="btn btn-primary">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full rounded-xl" />
        <div className="absolute flex rounded-xl items-center gap-5 bottom-0 top-0 left-0 bg-gradient-to-r from-slate-950 to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 w-3/5 pl-20">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
              <button className="btn btn-primary">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
