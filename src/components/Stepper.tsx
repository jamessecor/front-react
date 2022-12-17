// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Stepper.css';
import { IImage } from '../models/Artist';
import { Typography } from '@mui/material';
import useImages from '../hooks/useImages';
import { IShowImage } from '../models/Show';

interface IStepperProps {
  images: Array<IImage | IShowImage>;
}

const Stepper: React.FC<IStepperProps> = ({ images }) => {
  const { getFullImagePath } = useImages();

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ horizontalClass: 'stepper-scrollbar', draggable: true }}
      onSwiper={(swiper) => console.log('swiper', swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {images.map((image) =>
        <SwiperSlide>
          <img width={'100%'} src={getFullImagePath(image.src)} />
          {image.text && (
            <Typography align={'center'} sx={{ pb: 2 }} variant={'body1'}>
              {image.text}
            </Typography>
          )}
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default Stepper;