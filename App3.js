// import './App.css';
// import { saveAs } from 'file-saver';
// import React, { useState } from 'react';

// export default function App() {
//   function containsNumbers(str) {
//     return /\d/.test(str);
//   }

//   // const links = [];
//   // let i = 1;
//   // for (const api of jsonData) {
//   //   memeList += i + ', ' + JSON.stringify(api.id) + '  ';
//   //   links.push(JSON.stringify(api.blank));
//   //   i++;
//   // }

//   // linkArray = links.map((link) => {
//   //   return link.slice(1, link.length - 5);
//   // });
//   // console.log(linkArray);
//   let memeList = [];
//   let linkArray = [];
//   const [chosenMeme, setChosenMeme] = useState('');
//   const link =
//     'https://api.memegen.link/images/buzz/memes/memes_everywhere.gif';
//   const [top, setTop] = useState('');
//   const [bottom, setBottom] = useState('');
//   const src = `https://api.memegen.link/images/${chosenMeme || 'buzz'}/${
//     top || '_'
//   }/${bottom}.png`;

//   // const downloadLink =
//   //   chosenMeme === ''
//   //     ? link
//   //     : `${linkArray[chosenMeme - 1]}/${top === '' ? '_' : top}${
//   //         bottom === '' ? bottom : '/' + bottom
//   //       }.png`;
//   async function componentDidMount() {
//     // GET request using fetch with async/await
//     const response = await fetch('https://api.memegen.link/templates');
//     const data = await response.json();
//     data.map((resp) => {
//       return memeList.push(resp.id);
//     });
//     this.setState({ totalReactPackages: data.total });
//   }
//   componentDidMount();
//   console.log(memeList);

//   return (
//     <>
//       <label htmlFor="top">Top text:</label>
//       <input
//         id="top"
//         onChange={(event) => {
//           setTop(event.target.value);
//         }}
//       />
//       <label htmlFor="bottom">Bottom text:</label>
//       <input
//         id="bottom"
//         onChange={(event) => {
//           setBottom(event.target.value);
//         }}
//       />
//       <label htmlFor="meme">Choose a meme by its number </label>
//       <input
//         id="meme"
//         onChange={(event) => {
//           setChosenMeme(event.target.value);
//           console.log(linkArray[chosenMeme - 5]);
//         }}
//       />
//       <br />
//       Download
//       <button onClick={() => saveAs(src, 'meme.jpg')}>Download</button>
//       <img
//         data-test-id="meme-image"
//         style={{ width: '400px', height: '400px' }}
//         alt="meme"
//         src={`https://api.memegen.link/images/${chosenMeme || 'buzz'}/${
//           top || '_'
//         }/${bottom}.png`}
//       />
//       <br /> <br /> <br /> <br /> <br /> <br />
//       memes you can choose from: <br />
//       {memeList}
//       {/* data-test-id="meme-image" */}
//     </>
//   );
// }
