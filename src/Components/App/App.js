import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../PlayList/Playlist";

class App extends React.Component {
  constructor(props) {
    // STATE
    super(props);
    this.state = {
      searchResults: [
        {
          id: 4,
          name: "Title0",
          artist: "Artist0",
          album: "Album0",
        },
        {
          id: 5,
          name: "Title1",
          artist: "Artist1",
          album: "Album1",
        },
        {
          id: 6,
          name: "Title2",
          artist: "Artist2",
          album: "Album2",
        },
      ],
      playlistName: "myNewPlaylkist",
      playlistTracks: [
        {
          id: "1",
          name: "Song1",
          artist: "Artist0",
          album: "Album0",
        },
        {
          id: "2",
          name: "Song2",
          artist: "Artist1",
          album: "Album1",
        },
        {
          id: "3",
          name: "Song3",
          artist: "Artist2",
          album: "Album2",
        },
      ],
    };

    // THIS BINDING
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    // use track id property is the song is already present in the playlistTrack state
    let tracks = this.state.playlistTracks;
    //if the id is new add to playlist
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    //set new state

    this.setState({
      playlistTracks: tracks,
    });
  }

  removeTrack(track) {
      let tracks = this.state.playlistTracks;
      tracks = tracks.filter(currentTrack => currentTrack.id !== track.id )

      this.setState({playlistTracks: tracks})
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  savePlaylist() {
    //Uri is the way spotify identify the track
    const trackUris = this.state.playlistTracks.map(track => track.uri)
  }

  search(term) {
    // Search in the spotify database the term
    console.log(term);

  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              onAdd={this.addTrack}
              searchResults={this.state.searchResults}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
