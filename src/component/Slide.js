import React from 'react';
import styles from '../css/Slide.module.css';
import { Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


function Slide(props) {


          return (
          
            <Swiper
                // install Swiper modules
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='swiperWrap'
                >
                <SwiperSlide>
                  <div>
                      <img src={props.slideContent[0].img} alt={props.slideContent[0].img}/>
                    <h4 className={styles['featured-title']}>{props.slideContent[0].name}</h4>
                    <p className={styles['featured-text']}>{props.slideContent[0].category}<br/>
                    {props.slideContent[0].price}
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <img src={props.slideContent[1].img} alt={props.slideContent[1].img}/>
                    <h4 className={styles['featured-title']}>{props.slideContent[1].name}</h4>
                    <p className={styles['featured-text']}>{props.slideContent[1].category}<br/>
                    {props.slideContent[1].price}
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <img src={props.slideContent[2].img} alt={props.slideContent[2].img}/>
                    <h4 className={styles['featured-title']}>{props.slideContent[2].name}</h4>
                    <p className={styles['featured-text']}>{props.slideContent[2].category}<br/>
                    {props.slideContent[2].price}
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <img src={props.slideContent[3].img} alt={props.slideContent[3].img}/>
                    <h4 className={styles['featured-title']}>{props.slideContent[3].name}</h4>
                    <p className={styles['featured-text']}>{props.slideContent[3].category}<br/>
                    {props.slideContent[3].price}
                    </p>
                  </div>
                </SwiperSlide>
                
                <SwiperSlide>
                  <div>
                    <img src={props.slideContent[4].img} alt={props.slideContent[4].img}/>
                    <h4 className={styles['featured-title']}>{props.slideContent[4].name}</h4>
                    <p className={styles['featured-text']}>{props.slideContent[4].category}<br/>
                    {props.slideContent[4].price}
                    </p>
                  </div>
                  
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <img src={props.slideContent[5].img} alt={props.slideContent[5].img}/>
                    <h4 className={styles['featured-title']}>{props.slideContent[5].name}</h4>
                    <p className={styles['featured-text']}>{props.slideContent[5].category}<br/>
                    {props.slideContent[5].price}
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <img src={props.slideContent[6].img} alt={props.slideContent[6].img}/>
                    <h4 className={styles['featured-title']}>{props.slideContent[6].name}</h4>
                    <p className={styles['featured-text']}>{props.slideContent[6].category}<br/>
                    {props.slideContent[6].price}
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                    <img src={props.slideContent[7].img} alt={props.slideContent[7].img}/>
                    <h4 className={styles['featured-title']}>{props.slideContent[7].name}</h4>
                    <p className={styles['featured-text']}>{props.slideContent[7].category}<br/>
                    {props.slideContent[7].price}
                    </p>
                  </div>
                </SwiperSlide>
             
            </Swiper>
        );
    }

export default Slide;