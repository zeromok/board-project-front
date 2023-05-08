import axios from 'axios';
import { useEffect, useState } from 'react';

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    
});

const useGet = (path: string) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(null);

    useEffect(() => {
        instance
            .get(path, {
                headers: {},
            })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error);
            });
    }, [path]);

    return { data, error, pending };
};

export default useGet;
