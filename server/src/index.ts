require('dotenv').config();
import express from 'express';

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`\nfacebook-clone-server running on port ${PORT} 🚀🚀🚀`);
});
