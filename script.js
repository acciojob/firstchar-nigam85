function firstChar(text) {
  // your code here
	 str = str.trim();

    // Check if the trimmed string is empty or consists only of spaces
    if (str === "") {
        return "";
    }

    // Return the first character of the trimmed string
    return str[0];
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
