import axios from 'axios';

const defaultParams = {
    part: "snippet",
    maxResults: 5,
    key: process.env.REACT_APP_YT_KEY
};

const durationParams = {
    part: "contentDetails,statistics",
    key: process.env.REACT_APP_YT_KEY
};

const relatedVideoParams = {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: process.env.REACT_APP_YT_KEY
};

const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
});

export const fetchTermResults = async (term, filterPlaylist, token) => {
     try {
        const response = await youtube.get('/search', {
            params: {
                ...defaultParams,
                type: `video${filterPlaylist ? ',playlist': ''}`,
                ...(token && {pageToken: token}),
                q: term
            }
        });
        return response.data;
    } catch (error) {
        alert(error);
    };
}

export const fetchRelatedVideos = async (id) => {
     try {
        const response = await youtube.get('/search', {
            params: {
                ...relatedVideoParams,
                relatedToVideoId: id
            }
        });
        return response;
    } catch (error) {
        return {error};
    };
};

export const fetchRelatedVideosPaginated = async (id, token) => {
     try {
        const response = await youtube.get('/search', {
            params: {
                ...relatedVideoParams,
                relatedToVideoId: id,
                pageToken: token
            }
        });
        return response;
    } catch (error) {
        return {error};
    };
};

export const fetchVideoStatistics = async (videosId) => {
     try {
        const response = await youtube.get('/videos', {
                params: {
                    ...durationParams,
                    id: videosId
                }
            });
        return response.data;
    } catch (error) {
        alert(error);
    };
};

