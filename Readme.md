<div align="center">
  <img src="https://raw.githubusercontent.com/nainemom/viska/dev/static/logo.png" height="200"/>
  <h1><b> Viska </b></h1>
  <p>An <b>Anonymous</b> Chat Service.</p>
  <br>
</div>

## Details

**Viska** is an anonymous chat service created by nodejs/socket.io (backend) and webpack/vue (client).

## What is This? What's the Difference to Hazy?
Well, **Hazy** is a commenting service that users can have their own space and ask others to answer their questions/polls anonymously. There is no thread for received comments and basicly the receiver can only looks at received data or just put a reply to those. But in other hand, **Viska** is a chat service. The anonymous part is still exists, but the receiver and sender can chat to each other. Unlike **Hazy**, all of the users are anonymous in **Viska** and there is no Database to keep conversations or usernames.

## How Auth System Works?
Basicaly all of the user accounts on system are based on hash. You'll send a string (manual passprase or device id) to server and server will gives you a hash based on that. The mentioned hash will be your username and you can play with system by that. If anyone wants to access to your account, he should generate that hash again that's is not possible easily.

## How Conversations History Works?
As I said before, There is no Database to keep conversations or users data. If user X send a message to user Y:
- If Y is online (available):
    - user Y will get the message.
    - both of sides will save the message to their browser storage.
- If Y is not available:
    - user X will keep the message in its browser storage till user Y connected.

## What's the Difference Between DID and PID Accounts?
**DID** users are temporary/automatic. Each time you open the app, you will get a random id automaticly. So basically you are a ghost. **PID** id's will generate based on you'r entered passprase and you can have same id by entering the passprase again. So **PID** is good for people who wants to have a static address and share it to other social networks for example.

## Is My Activity Trackable?
In a one word, NO. But still you have to be carefull to be anonymous. So:
- don't share your personal information in any of your open chats.
- don't use your **PID** to send a dangerous message if you have shared it before.
- use the **DID** account if you don't sure what is this.

## How Can I Contribute?
First make sure you have installed `nodejs` >=11.0.0 and `npm` >=6.0.0 on your system, then just clone this repo and runs `npm i` command to install dependencies and use these to run **Viska** locally:

```bash
npm run dev:server # starting server locally
npm run dev:client # starting client locally
```

## Donate?
If you like this project and want to help me, You can send me BTC to the following address:
```
1DckVaVPkJQDBfga2Wd8moX9MbqUiurNoL
```