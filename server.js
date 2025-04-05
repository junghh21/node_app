const express = require("express");
const bodyParser = require("body-parser");
const { JSONRPCServer } = require("json-rpc-2.0");

const server = new JSONRPCServer();

// Add methods to the server
server.addMethod("echo", ({ text }) => text);
server.addMethod("add", ({ a, b }) => a + b);

const app = express();
app.use(bodyParser.json());

app.post("/json-rpc", (req, res) => {
  const jsonRPCRequest = req.body;

  server.receive(jsonRPCRequest).then((jsonRPCResponse) => {
    if (jsonRPCResponse) {
      res.json(jsonRPCResponse);
    } else {
      res.sendStatus(204); // No content for notifications
    }
  });
});

app.listen(3000, () => console.log("JSON-RPC server is running on port 3000"));
