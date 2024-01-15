
// const { EventEmitter } = require('events')
// const em = new EventEmitter()

// em.on('lunch', ()=>{
//   console.log("jajaj")
// })

// em.emit('lunch')
// em.emit('lunch')
// em.emit('lunch')
// em.emit('lunch')
// em.emit('lunch')
// em.emit('lunch')



// const { readFile } = require('fs').promises

// async function hello(){
//   const file = await readFile('./package.json', 'utf-8')
//   console.log(file)
// }

// const express = require('express');
// const { readFile } = require('fs')


// const app = express()

// app.get('/', (request, response) => {

//   readFile('./home.html', 'utf-8', (err, html)=>{

//     if (err) {
//       response.status(500).send("Where'd you think you're going?")
//     }

//     response.send(html)
//   })

// })

// app.listen(process.env.PORT || 3000, ()=> console.log('Avaibale on http://localhost:3000'))

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mern_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a simple Mongoose schema and model
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Item = mongoose.model('Item', itemSchema);

// Express route to get items from the database
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// https://github.com/DavidNzube101/ReaGistery.git
// src/App.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     // Fetch items from the backend when the component mounts
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/items');
//         setItems(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <h1>MERN Stack Demo</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item._id}>
//             <strong>{item.name}</strong>: {item.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


// Bluvid@Madubuike MINGW64 /c/ReaGistery (master)
// $ npx create-react-app reagistery
// npm ERR! code ENOENT
// npm ERR! syscall lstat
// npm ERR! path C:\Users\Bluvid\AppData\Roaming\npm
// npm ERR! errno -4058
// npm ERR! enoent ENOENT: no such file or directory, lstat 'C:\Users\Bluvid\AppData\Roaming\npm'
// npm ERR! enoent This is related to npm not being able to find a file.
// npm ERR! enoent

// npm ERR! A complete log of this run can be found in: C:\Users\Bluvid\AppData\Local\npm-cache\_logs\2024-01-15T19_41_13_865Z-debug-0.log