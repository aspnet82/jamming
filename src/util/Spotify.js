let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            //access token is present
            return accessToken;
        } else {
            //get access token
            const accessToken = window.location.href.match(/access_token=([^&]*)/);
            const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)
        }
    }
}


export default Spotify; 