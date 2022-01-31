import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';

import styles from './customerComment.module.scss';
import './customSwiper.scss'
import { Arrow } from '../styles';
import * as constants from '../../commons/constants';
import { data } from './data';
import ReviewCard from '../ReviewCard';
import useWindowDimensions from '../../commons/useWindowDimensions'

function CustomerComment() {

    const {width, height} = useWindowDimensions();

    let slidesPerView;

    if(width >= 1440){
        slidesPerView = 3;
    } else if (width >= 1000) {
        slidesPerView = 2;
    } else {
        slidesPerView = 1;
    }


    return (
        <div className={styles.cusReview}>
            <div className={styles.title}>
                Khách hàng nói gì về {constants.COMPANY_NAME.toUpperCase()} Solution
            </div>
            <div className={styles.review}>
                <div className={styles.arrowContainer}>
                    <Arrow
                        className='arrow-left'
                        color='white'
                        arrowThick='3'
                        arrowSize='10'
                        arrowDirection={constants.ARROW_LEFT}
                        cursor='pointer'

                    />
                </div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={slidesPerView}
                    navigation={{
                        nextEl: 'arrow-left',
                        prevEl: 'arrow-right'
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <div className={styles.slideContainer}>
                        {data.map((reviewData, index) => (
                            <SwiperSlide key={index}>
                                <ReviewCard reviewData={reviewData} />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
                <div className={styles.arrowContainer}>
                    <Arrow
                        className='arrow-right'
                        color='white'
                        arrowThick='3'
                        arrowSize='10'
                        arrowDirection={constants.ARROW_RIGHT}
                        cursor='pointer'
                    />
                </div>
            </div>
        </div>
    );
}

export default CustomerComment;