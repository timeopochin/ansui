function split(text, width) {
	let lines = [];
	if (text.includes('\n')) {
		let unsplitLines = text.split('\n');
		for (let line of unsplitLines) {
			lines = lines.concat(split(line, width));
		}
	} else {
		let words = text.split(' ');
		let line = [];
		for (let word of words) {
			if (word.length > width) {
				let lengthLeft = width - line.join(' ').length;
				line.push(word.substr(0, lengthLeft - 1));
				lines.push(line);
				let i;
				for (i = lengthLeft - 1; i < word.length - width; i += width) {
					lines.push([word.substr(i, width)]);
				}
				line = [word.substr(i)];
			} else if (line.concat(word).join(' ').length > width) {
				lines.push(line);
				line = [word];
			} else {
				line.push(word);
			}
		}
		lines.push(line);
	}
	return lines;
}

module.exports = split;
