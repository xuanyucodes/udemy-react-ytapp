// purpose is to get an input search term, and output a way to search for the videos, and final output of a list of videos
import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
    };

    return [videos, search]; // as long as we provide a term, we will get back 1) a list of videos, and 2) a fn to update that list of videos.
};

export default useVideos;