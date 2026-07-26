'use client'
import YouTube, { YouTubeEvent } from 'react-youtube'

type VidedoProps = {
    videoID: string;
    start: number;
    end: number;
}

export default function VideoLink({videoID, start, end}: VidedoProps) {
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            controls: 1,
            playsinline: 1,
            start: start,
            end: end,
            rel: 0,
            fs: 1,
        }
    };

    function handlePlayerReady(event: YouTubeEvent<any>){
        cueSnippet(event);
    }

    function handleStateChange(event: YouTubeEvent<any>) {
        if (event.data === YouTube.PlayerState.ENDED) {
            cueSnippet(event);
        }
    }

    function cueSnippet(event: YouTubeEvent<any>) {
        event.target.cueVideoById({
            videoId: videoID,
            startSeconds: start,
            endSeconds: end,
        });
    }
    return (
        <YouTube className="video-container aspect-video" videoId={videoID} onStateChange={e => handleStateChange(e)} onReady={e => handlePlayerReady(e)} opts={opts} />
    );
}