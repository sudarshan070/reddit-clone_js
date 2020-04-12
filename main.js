fetch(`https://api.reddit.com/r/javascript`)
  .then((res) => res.json())
  .then((res) => console.log(res));
