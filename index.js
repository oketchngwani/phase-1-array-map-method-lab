const tutorials = [
  "what does the this keyword mean?",
  "what is the constructor oo pattern?",
  "implementing blockchain web api",
  "the test driven development workflow",
  "what is nan and how can we check for it",
  "what is the difference between stoppropagation and preventdefault?",
  "immutable state and pure functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is jsonp?"
];

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  });
}