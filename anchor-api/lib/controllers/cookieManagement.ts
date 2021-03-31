import express from 'express';

export function getCookies(req: express.Request, res: express.Response) {
    if (!req.cookies.displayDemo) {
        // Set a cookie
        const date = new Date();
        date.setMonth(date.getMonth() + 1); // expires in a month
        res.cookie('displayDemo', 'true', {
            // maxAge: 60 * 60 * 1000, // 1 hour
            expires: date,
            httpOnly: true,
            sameSite: true,
        });
        /*
        Same Site - prevents the cookie from being sent in cross-site requests
        HTTP Only - cookies are only accessible from a server
        */
        res.send(false);
        return console.log('NO cookie');
    }

    // Too see cookie on ther server side
    //console.log('demo cookie value: ' + req.cookies.displayDemo)

    // console.log('clearing demo');
    // clearDemoCookie(req, res);

    //console.log('COOKIE IS ALREADY SET, NO NEED TO DISPLAY DEMO');
    res.send(req.cookies.displayDemo);


  }
// for testing purposes, call this function to clear demo cookie
  function clearDemoCookie(req: express.Request, res: express.Response) {
    res.clearCookie('displayDemo');
    res.send('cookie "displayDemo" cleared');
 }
