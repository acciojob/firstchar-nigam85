function firstChar(text) {
  // your code here
	text = text.trim();
	if(text.length==0) return "";
	return text.charAt(0) ;

    // Return the first character of the trimmed string
    return str[0];
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
