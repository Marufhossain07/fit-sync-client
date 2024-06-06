import { Card } from 'flowbite-react';


const Class = ({singleData}) => {
    const {name, photo, details} = singleData;
    return (
        <Card className="max-w-sm border-2 border-red-400" imgSrc={photo} horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {details}
        </p>
        <h3 className='font-inter text-xl font-medium'>You can select any Trainer you want</h3>
      </Card>
    );
};

export default Class;