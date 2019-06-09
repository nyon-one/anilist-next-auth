module.exports = [
    {
        providerName: 'Anilist',
        providerOptions: {scope: []},
        Strategy: require('passport-oauth2').Strategy,
        strategyOptions: {
            authorizationURL: 'https://anilist.co/api/v2/oauth/authorize',
            clientID: process.env.ANILIST_APP_ID,
            clientSecret: process.env.ANILIST_APP_SECRET,
            callbackURL: process.env.ANILIST_APP_REDIRECT_URL,
            userProfileURL: 'https://graphql.anilist.co?query={Viewer{id}}'
        },
        getProfile(profile) {
            console.log("Hello", profile)
            return profile
        }
    }
]