import express from 'express';

export function getCookies(req: express.Request, res: express.Response) {
    console.log(req.cookies);
    if (!req.cookies.displayDemo) { // haven't visited site or cookie has expired
        console.log('First time visiting or cookie has expired.... creating a cookie for future use');

        const date = new Date();
        date.setMonth(date.getMonth() + 1); //month
        //date.setMinutes(date.getMinutes() + 1); // right now it expires after a minute
        const options = {
          expires: date,
          httpOnly: false,
          sameSite: false,
        }
        return res
          .cookie("displayDemo", "true", options)
          .status(204) // No content success response
          .send(false);
    }else{
      console.log('COOKIE IS ALREADY SET, NO NEED TO DISPLAY DEMO');
      res.status(200)
    }

  }
