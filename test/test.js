//Autocannon requries duration by providing high load
//Autocannon is a package that creates high load to the server
const autocannon = require("autocannon");

const urls = ["http://localhost:3000", "http://localhost:3000/stress-test"];
const duration = 30;

urls.forEach((url) => {
  const instance = autocannon(
    {
      url,
      duration,
    },
    (err, result) => {
      if (err) {
        console.log("Error:", err);
      } else {
        console.log(`URL:${url}`);
        console.log("Number of reuests:", result.requests.total);
        console.log("Duration(seconds):", result.duration);
      }
    }
  );

  autocannon.track(instance, { renderProgressBar: false, renderResultsTable: false });
});
