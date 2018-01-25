var femaleNames = ['Dorothy', 'Eve', 'Jane', 'Isabelle', 'Roxanne'],
	maleNames = ['James', 'Maxymillian', 'Bruno', 'Nathaniel', 'Marcel'];
var names = femaleNames.concat(maleNames);
console.log(names);

var newName = 'Dorothy';

var indexOfNewName = names.indexOf(newName);
console.log(indexOfNewName);

if (indexOfNewName >= 0) {
	console.log("You can't add the name. It already exists.");
} else {		
	names.splice(0, 0, newName);
	console.log(names);
}