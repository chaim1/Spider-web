# Spider-web
* Download this rpository `git clone https://github.com/chaim1/Spider-web.git`
* Naviget to client `cd client/spiderApp`
* Run `npm install`
* Naviget to server `cd server`
* Run `npm install`
## MongoDb
* Create mongoDb new project [mongodb](https://www.mongodb.com)
* In your project on Security tab press MongoDB Users and then press ADD NEW USER and save the password
* In your project on Security tab press IP Whitelist and then press ADD IP ADDRESS and insert ip (your IP) 
* In your project on Overview tab press connect and then press Connect Your Aplication and then copy the limk from Conection String Only 
![conect](https://user-images.githubusercontent.com/39926105/54633181-5430c200-4a88-11e9-8efe-66a3be540f2b.jpg)
* Open `server/db/mongoose.js` and replace the limk in mongoose.connect function with your limk
* and replace the `<password>` with your password 
