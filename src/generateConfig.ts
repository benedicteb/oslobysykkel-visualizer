const fs = require("fs");

const config = {
  gbfsHost: "https://gbfs.urbansharing.com",
  gbfsService: "oslobysykkel.no",
  clientId: "beb/oslobysykkel-visualizer",
  googleApiKey: process.env.GOOGLE_API_KEY,
};

fs.writeFileSync("./src/config.json", JSON.stringify(config));
