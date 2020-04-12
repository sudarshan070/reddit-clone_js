fetch(`https://api.reddit.com/r/java`)
  .then((res) => res.json())
  .then((res) => console.log(res));
