function firstWord(s) {
  // Trim any leading whitespace from the string
  s = s.trim();

  // Find the index of the first space
  const spaceIndex = s.indexOf(' ');

  // If a space is found, return the substring before the space
  if (spaceIndex !== -1) {
    return s.substring(0, spaceIndex);
  }

  // If no space is found, return the entire string (it's a single word)
  return s;
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));

