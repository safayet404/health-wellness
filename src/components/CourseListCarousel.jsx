import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CourseListCarousel = () => {
  return (
    <Swiper spaceBetween={20} slidesPerView={3}>
      {courses.map((course, index) => (
        <SwiperSlide key={index}>
          <CourseCard course={course} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
