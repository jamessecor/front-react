// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface IStepperProps {
  images: Array<string>;
}

const Stepper: React.FC<IStepperProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log('swiper', swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {images.map((image) => <SwiperSlide><img width={'100%'} src={image} /></SwiperSlide>)}
    </Swiper>
  );
};

export default Stepper;