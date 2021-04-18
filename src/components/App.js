import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('buildings');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    // note for VideoList\s whenVidSelect(), if the arg is just the only input and the code is just the fn, then can write the below way. identically the same: "video => setSV(video)" = "setSV"
    return (
        <div className="ui container">
            <SearchBar whenFormSubmits={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} whenVideoSelect={setSelectedVideo}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default App;