import { Avatar, Card } from 'flowbite-react';


const Class = ({singleData}) => {
    const {name, photo, details, difficulty} = singleData;
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
        <Avatar img="/images/people/profile-picture-5.jpg" rounded bordered color="pink" />
        </div>
      </Card>
    );
};

export default Class;