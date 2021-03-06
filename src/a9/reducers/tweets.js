import posts from './data/tweets.json';

const initialState = {
    tweets: posts
}

const tweets = (state = initialState, action) => {
    switch (action.type) {
        case 'fetch-all-tweets':
            return({
                tweets: action.tweets
            })
            break;

        case 'like-tweet':
            return ({
                tweets: state.tweets.map(tweet => {
                    if(tweet._id === action.tweet._id) {
                        if(tweet.liked === true) {
                            tweet.liked = false;
                            tweet.stats.likes--;
                        } else {
                            tweet.liked = true;
                            tweet.stats.likes++;
                        }
                        return tweet;
                    } else {
                        return tweet;
                    }
                })
            });
            
        case 'delete-tweet':
            return ({
                tweets: state.tweets.filter(tweet => tweet._id !== action.tweet._id)
            })
         
        case 'create-tweet':
            const tweet = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "Tim Cook",
                "verified": false,
                "handle": "timcook",
                "time": "now",
                ...action.tweet,
                "avatar-image": "/avators/timcook.jpeg",
                "logo-image": "/avators/timcook.jpeg",
                "stats": {
                    "comments": 0,
                    "retweets": 0,
                    "likes": 0
                },
            };
            return ({
                tweets: [
                    tweet,
                    ...state.tweets,
                ]
            });
            
        default:
            return(state);
    }
};

export default tweets;