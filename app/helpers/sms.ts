// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
const tencentcloud = require("tencentcloud-sdk-nodejs");

const DomainClient = tencentcloud.domain.v20180808.Client;

const clientConfig = {
  credential: {
    secretId: "AKIDrXx71e06vTkmX1D8nBI8i26tRiiRt50e",
    secretKey: "OWNwEG1WjgNnwoQmrfCSR9akbBUXJo20",
  },
  region: "",
  profile: {
    httpProfile: {
      endpoint: "domain.tencentcloudapi.com",
    },
  },
};

const client = new DomainClient(clientConfig);
const params = {
    code:18977256053,
    type:1
};
client.SendPhoneEmailCode(params).then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.error("error", err);
  }
);