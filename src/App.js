import './App.css';
import { saveAs } from 'file-saver';
import React, { useState } from 'react';

export default function App() {
  function httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }

  function containsNumbers(str) {
    return /\d/.test(str);
  }
  const htmlString = httpGet('https://api.memegen.link/templates');
  const jsonData = JSON.parse(htmlString);
  console.log(jsonData);
  let memeList = '';
  const links = [];
  let i = 1;
  for (const api of jsonData) {
    memeList += i + ', ' + JSON.stringify(api.id) + '  ';
    links.push(JSON.stringify(api.blank));
    i++;
  }

  let linkArray = [];

  linkArray = links.map((link) => {
    return link.slice(1, link.length - 5);
  });
  // console.log(linkArray);
  const [chosenMeme, setChosenMeme] = useState('');
  const link =
    'https://api.memegen.link/images/buzz/memes/memes_everywhere.gif';
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');

  // const downloadLink =
  //   chosenMeme === ''
  //     ? link
  //     : `${linkArray[chosenMeme - 1]}/${top === '' ? '_' : top}${
  //         bottom === '' ? bottom : '/' + bottom
  //       }.png`;

  return (
    <>
      <label htmlFor="top">Top text:</label>
      <input
        id="top"
        onChange={(event) => {
          setTop(top === '' ? '__' : event.target.value);
        }}
      />
      <label htmlFor="bottom">Bottom text:</label>
      <input
        id="bottom"
        onChange={(event) => {
          setBottom(event.target.value);
        }}
      />
      <label htmlFor="meme">Choose a meme by its number </label>
      <input
        id="meme"
        onChange={(event) => {
          setChosenMeme(event.target.value);
          console.log(linkArray[chosenMeme - 5]);
        }}
      />
      <br />
      Download
      <button
        onClick={() =>
          saveAs(
            chosenMeme === ''
              ? link
              : `${linkArray[chosenMeme - 1]}/${top === '' ? '_' : top}${
                  bottom === '' ? bottom : '/' + bottom
                }.png`,
            'meme.jpg',
          )
        }
      >
        Download
      </button>
      <img
        data-test-id="meme-image"
        style={{ width: '400px', height: '400px' }}
        alt="meme"
        src={
          chosenMeme.length === 0
            ? link
            : containsNumbers(chosenMeme) === false
            ? `https://api.memegen.link/images/${chosenMeme}/${
                top === '' ? '_' : top
              }${bottom === '' ? bottom : '/' + bottom}.png`
            : `${linkArray[chosenMeme - 1]}/${top === '' ? '_' : top}${
                bottom === '' ? bottom : '/' + bottom
              }.png`
        }
      />
      <br /> <br /> <br /> <br /> <br /> <br />
      memes you can choose from: <br />
      {memeList}
      {/* data-test-id="meme-image" */}
    </>
  );
}
