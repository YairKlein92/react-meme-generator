import './App.css';
import { Input } from 'postcss';
import React, { useState } from 'react';
import { EventEmitter } from 'stream';
import { arrayBuffer, blob, json, text } from 'stream-consumers';
import logo from './logo.svg';

export default function App() {
  function httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }

  const htmlString = httpGet('https://api.memegen.link/templates');
  const jsonData = JSON.parse(htmlString);
  // console.log(jsonData);
  let memeList = '';
  const links = [];
  let i = 1;
  for (const api of jsonData) {
    memeList += i + ', ' + JSON.stringify(api.id) + '      ';
    links.push(JSON.stringify(api.blank));
    i++;
  }

  let linkArray = [];

  linkArray = links.map((link) => {
    return link.slice(1, link.length - 5);
  });
  // console.log(linkArray);
  const [chosenMeme, setChosenMeme] = useState(
    'https://api.memegen.link/images/country',
  );
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');
  const memeLink = `https://api.memegen.link/images/${chosenMeme}/${top}/${bottom}.png`;

  // item.id, item.type

  // async function fetchDemo() {
  //   const resp = await fetch('https://api.memegen.link/templates/');
  //   return JSON.parse(resp);
  // }
  // const arrayData = [];
  // fetchDemo()
  //   .then((resp) => resp.push(arrayData))
  //   .catch(console.error);
  // console.log(arrayData);
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
      <label htmlFor="bottom">Choose a meme by its number </label>
      <input
        id="meme"
        onChange={(event) => {
          setChosenMeme(event.target.value);
          console.log(linkArray[chosenMeme - 5]);
        }}
      />
      <br />
      Download
      <button>Download</button>
      <img
        data-test-id="meme-image"
        style={{ width: '400px', height: '400px' }}
        alt="meme"
        src={`${linkArray[chosenMeme - 1]}/${top === '' ? '_' : top}${
          bottom === '' ? bottom : '/' + bottom
        }.png`}
        // src={`https://api.memegen.link/images/${chosenMeme}/${top}/${bottom}.png`}
      />
      <br /> <br /> <br /> <br /> <br /> <br />
      memes you can choose from: <br />
      {memeList}
      {/* data-test-id="meme-image" */}
    </>
  );
}
