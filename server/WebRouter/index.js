import path from 'path';
import express from 'express';
import UA from 'ua-parser-js';
import * as strings from '../Constants';

const router = express.Router();

// router.get('/admin/*', adminHandler);
router.get('/*', userHandler);

function userHandler(req, res, next) {
  const ua = new UA(req.headers['user-agent']);

  if(ua.getDevice().type === 'mobile') {
    // res.set({'ETag': `Mobile v${strings.WEB_VERSION}`});
    // res.set({'Content-Type': 'text/html; charset=UTF-8'});
    // res.set({'Date': 'Wed, 28 Feb 2018 08:30:29 GMT'});
    var options = {
      root: path.join(__dirname, '../../client/dist/mobile/')
    };
    
    res.sendFile('index.html', options);

  } else {
    // res.set({'ETag': `Web v${strings.WEB_VERSION}`});
    // res.set({'Content-Type': 'text/html; charset=UTF-8'});
    // res.set({'Date': 'Wed, 28 Feb 2018 08:30:29 GMT'});
    var options = {
      root: path.join(__dirname, '../../client/dist/pc/')
    };
    
    res.sendFile('index.html', options);
  }
}

// function adminHandler(req, res, next) {
//   res.sendFile(path.join(__dirname, '../../client/dist/dashboard.html'));
// }

export default router;
