import axios from 'axios';

export const defaultParams = {
    part: "snippet",
    maxResults: 3,
    key: process.env.REACT_APP_YT_KEY
};

export const durationParams = {
    part: "contentDetails,statistics",
    key: process.env.REACT_APP_YT_KEY
};

export const relatedVideoParams = {
    part: "snippet",
    type: "video",
    maxResults: 2,
    key: process.env.REACT_APP_YT_KEY
};

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
});
