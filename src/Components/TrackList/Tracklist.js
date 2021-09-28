import React from "react";
import "./Tracklist.css";
import Track from '../Track/Track.js';

class TrackList extends React.Component {
  render() {    
    return (
      <div className="Tracklist">
        {
          this.props.tracks.map(track => {
            console.log(track)
            return <Track track={track} key={track.id}/>
          })
        }
      </div>
    )
  }
}

export default TrackList  ;