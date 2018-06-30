This is simple node application using the no-ip library to update a hostname.
The primary benefit of this program is that it can be run with PM2 and thus can
be started at bootup.

## Installation instructions

* `npm install`

* Install PM2: `sudo npm install -g pm2`

* Setup PM2 to run at boot: `pm2 startup`. Follow the instructions it provides.

* Edit the `config.example.js` file with your no-ip account settings. Rename
the file to `config.js.`

* Run with `node index.js` and make sure there are no errors.

* Run with PM2: `pm2 start index.js`

* Run after reboot: `pm2 save`
