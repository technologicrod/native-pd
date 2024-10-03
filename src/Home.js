import React, { useState } from 'react';
import './App.css';

function Home() {
  const [playlists, setPlaylists] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    playlist: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedPlaylists = [...playlists];
      updatedPlaylists[editIndex] = formData;
      setPlaylists(updatedPlaylists);
      setEditIndex(null);
    } else {
      setPlaylists([...playlists, formData]);
    }

    setFormData({
      title: '',
      description: '',
      playlist: '',
    });
  };

  const handleEdit = (index) => {
    setFormData(playlists[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setPlaylists(playlists.filter((_, i) => i !== index));
  };

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
      
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              name="title"
              className="form-control input-dark"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              required
              style={{ backgroundColor: '#333', color: 'white', border: '1px solid white' }}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              name="description"
              className="form-control input-dark"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
              style={{ backgroundColor: '#333', color: 'white', border: '1px solid white' }}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              name="playlist"
              className="form-control input-dark"
              placeholder="Spotify Playlist URL"
              value={formData.playlist}
              onChange={handleChange}
              required
              style={{ backgroundColor: '#333', color: 'white', border: '1px solid white' }}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success mt-3">
          {editIndex !== null ? 'Update Playlist' : 'Add Playlist'}
        </button>
      </form>
      <div className="row">
      {playlists.map((playlist, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card h-100 playlist-card">
            <div className="card-header" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
              <h5 className="card-title">{playlist.title}</h5>
            </div>
            <div className="card-body">
              <p className="card-text">{playlist.description}</p>
              <div className="d-flex justify-space-between">
                <a
                  href={playlist.playlist}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success"
                  style={{ backgroundColor: '#1DB954', borderColor: '#1DB954' }}
                >
                  Open Playlist
                </a>
                <button
                  onClick={() => handleEdit(index)}
                  className="btn btn-warning"
                  style={{ marginLeft: '10px' }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="btn btn-danger"
                  style={{ marginLeft: '10px' }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    </div>
  );
}

export default Home;
