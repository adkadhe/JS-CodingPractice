var interpret = function (command) {
  for (const [val] of command) {
    console.log({val});
  }
};

interpret("G()(al)")