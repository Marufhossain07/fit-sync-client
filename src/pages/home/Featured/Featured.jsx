
import { Card } from 'flowbite-react';
import Heading from '../../../components/heading/Heading';
import featured1 from '../../../assets/featured1.jfif'
import featured2 from '../../../assets/featured2.jfif'
import featured3 from '../../../assets/featured3.jfif'
import featured4 from '../../../assets/featured4.jfif'
import featured5 from '../../../assets/featured5.jfif'
import featured6 from '../../../assets/featured6.jfif'



const Featured = () => {
    return (
        <div className='mt-10'>
            <div>
                <Heading title={'Key Features for FitSync'} sub={"Featured"}></Heading>
                <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 mt-10'>
                    <Card className='rounded-none img-radius bg-slate-800' imgSrc={featured1} horizontal>
                        <h5 className="text-2xl font-bold tracking-tight text-white ">
                            Fitness Class
                        </h5>
                        <p className="font-normal  text-gray-300">
                        Join a variety of fitness classes designed for all levels, from beginners to advanced athletes.
                        </p>
                    </Card>
                    <Card className='rounded-none img-radius bg-[#fcbf49]' imgSrc={featured2} horizontal>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Personal Trainer
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        Get personalized fitness plans and one-on-one coaching from our certified personal trainers. 
                        </p>
                    </Card>
                    <Card className="rounded-none img-radius bg-slate-800" imgSrc={featured3} horizontal>
                        <h5 className="text-2xl font-bold tracking-tight text-white">
                        Bodyweight Training
                        </h5>
                        <p className="font-normal text-gray-300">
                        Perfect for building strength, flexibility, and endurance without the need for any equipment.
                        </p>
                    </Card>
                    <Card className="rounded-none img-radius bg-[#fcbf49]" imgSrc={featured4} horizontal>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Yoga
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        Experience the benefits of yoga with classes that focus on improving flexibility and balance.
                        </p>
                    </Card>
                    <Card className="rounded-none img-radius bg-slate-800" imgSrc={featured5} horizontal>
                        <h5 className="text-2xl font-bold tracking-tight text-white">
                        Bodybuilding
                        </h5>
                        <p className="font-normal text-gray-300">
                        Achieve your bodybuilding goals with our specialized programs and resources
                        </p>
                    </Card>
                    <Card className="rounded-none img-radius bg-[#fcbf49]" imgSrc={featured6} horizontal>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Weight Lifting
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        Enhance your strength and endurance with our comprehensive weight lifting programs.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Featured;