import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectAfterTimeout = ({ timeout = 3000 }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, timeout);

        return () => clearTimeout(timer);
    }, [navigate, timeout]);

    return null;
};

export default RedirectAfterTimeout;
