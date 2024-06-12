import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import useTrainer from '../hooks/useTrainer';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const TrainerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const [isTrainer , isTrainerLoading] = useTrainer()
    const location = useLocation()

    if (loading || isTrainerLoading) {
        return <Spinner className="mx-auto w-full mt-48" color='failure' aria-label="Extra large spinner example" size="xl" />
    }
    if (user && isTrainer) {
        return children
    }

    return <Navigate loading={location.pathname} to='/login'></Navigate>
};

export default TrainerRoute;