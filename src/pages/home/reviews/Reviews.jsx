
import { useQuery } from '@tanstack/react-query';
import '@smastrom/react-rating/style.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Rating, Star } from '@smastrom/react-rating';
import Heading from '../../../components/heading/Heading';
const Reviews = () => {
    const axiosPublic = useAxiosPublic()
    const { data } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const { data } = await axiosPublic('/review')
            return data
        }
    })

    const customStyles = {
        itemShapes: Star,
        activeFillColor: '#ffd60a',
        inactiveFillColor: '#ffffff'
    }

    return (
        <div>
            <Heading title={'What Our Members Saying'} sub={'Gym Reviews'}></Heading>
            <Swiper
            style={{marginTop:'20px' , marginBottom:'20px'}}
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                {
                    data?.map(d => <SwiperSlide key={d._id}><div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md bg-red-400 text-white dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-between p-4">
                            <div className="flex items-center space-x-4">
                                <div>
                                    <img src={d?.photo} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">{d.name}</h4>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <Rating
                                itemStyles={customStyles}
                                    style={{ maxWidth: 180 }}
                                    value={d?.ratings}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                            <p>{d?.review}</p>
                        </div>
                    </div></SwiperSlide>)
                }


            </Swiper>

        </div>
    );
};

export default Reviews;