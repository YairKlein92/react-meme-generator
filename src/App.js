import './App.css';
import { saveAs } from 'file-saver';
import React, { useState } from 'react';

export default function App() {
  const memeList = [];
  const [chosenMeme, setChosenMeme] = useState('');
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');
  const src = `https://api.memegen.link/images/${chosenMeme || 'buzz'}/${
    top || '_'
  }/${bottom}.png`;

  async function componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch('https://api.memegen.link/templates');
    const data = await response.json();
    data.map((resp) => {
      return memeList.push(resp.id);
    });
    this.setState({ totalReactPackages: data.total });
  }
  const resp = componentDidMount().then((response) =>
    console.log(response).catch((err) => console.log(err)),
  );
  console.log(resp);
  console.log(memeList);

  return (
    <>
      <label htmlFor="meme">Meme template</label>
      <input
        id="meme"
        onChange={(event) => {
          setChosenMeme(event.target.value);
        }}
      />
      <br />
      <label htmlFor="top">Top text:</label>
      <input
        id="top"
        onChange={(event) => {
          setTop(event.target.value);
        }}
      />
      <br />
      <label htmlFor="bottom">Bottom text:</label>
      <input
        id="bottom"
        onChange={(event) => {
          setBottom(event.target.value);
        }}
      />
      <br />
      Download
      <button onClick={() => saveAs(src, 'meme.jpg')}>Download</button>
      <img
        data-test-id="meme-image"
        style={{ width: '400px', height: '400px' }}
        alt="meme"
        src={`https://api.memegen.link/images/${chosenMeme || 'buzz'}/${
          top || '_'
        }/${bottom}.png`}
      />
      <br /> <br /> <br /> <br /> <br /> <br />
      memes you can choose from: <br />
      {memeList}
    </>
  );
}
