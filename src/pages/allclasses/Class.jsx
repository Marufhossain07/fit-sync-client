import { useQuery } from '@tanstack/react-query';
import { Avatar, Card, Spinner } from 'flowbite-react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';


const Class = ({singleData}) => {
    const {name, photo, details, difficulty} = singleData;
    const axiosPublic = useAxiosPublic()
    const {data, isLoading} = useQuery({
      queryKey:['avatars', name],
      queryFn: async()=>{
        const {data} = await axiosPublic(`/trainer/${name}`)
        return data
      }
    })
    if (isLoading) {
      return <Spinner className="mx-auto w-full mt-48" color='failure' aria-label="Extra large spinner example" size="xl" />
  }
    return (
        <Card className="mx-auto border-2 border-red-400" imgSrc={photo} horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {details}
        </p>
        <p className='font-inter font-medium'>
            Difficulty: {difficulty}
        </p>
        <h3 className='font-inter text-xl font-medium'>Select Trainer For You</h3>
        <div className='flex gap-2'>
        {
          data.slice(0,5).map(trainer=> <Link to={`/trainer/details/${trainer?.email}`} key={trainer._id} ><Avatar id='trainer-avatar' size='lg'  img={trainer.photo}  bordered color="pink" /></Link>)
        }
        </div>
      </Card>
    );
};

export default Class;