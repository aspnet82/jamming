import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../PlayList/Playlist';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchResults: [
                {
                    id: '1',
                    name: 'Title0',
                    artist: 'Artist0',
                    album: 'Album0'
                },
                {   
                    id: '2',
                    name: "Title1",
                    artist: 'Artist1',
                    album: 'Album1'
                },
                {
                    id: '3',
                    name: 'Title2',
                    artist: 'Artist2',
                    album: 'Album2'
                }
            ]
            
        }
    }

    render() {
        return(
            <div>
                 <h1>Ja<span className="highlight">mmm</span>ing</h1>
                 <div className="App">
                     <SearchBar />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults}/>
                         <Playlist />
                </div>
                </div>
            </div >
        )
    }
}

export default App;