const noteTitle = document.getElementById('noteTitle');
const textareaNote = document.getElementById('textareaNote');
const btnSaveNote = document.getElementById('btnSaveNote');
const savedNotes = document.querySelector('.savedNotes');
const deleteNote = document.querySelectorAll('.close');
console.log(deleteNote);
let callout = document.querySelector('.callout');
// let error = document.querySelector('.error');
let notesCount = 0;

window.onload = function(){
	callout.style.display = calloutDisplay(notesCount);
};
window.onclick = function(){
	callout.style.display = calloutDisplay(notesCount);
};
textareaNote.addEventListener('keydown', e => {
});

btnSaveNote.addEventListener('click', e => {
	let titleElem = document.getElementById('noteTitle');
	let textAreaNote = document.getElementById('textareaNote');
	if (titleElem.value.trim().length || textareaNote.value.trim().length){
		// !!! create a function out of this: createNewNote func
		let title = `<h3>${titleElem.value}</h3>`
		const newSavedNote = document.createElement('div');
		const closeNote = document.createElement('span');
		closeNote.innerHTML = '&times;';
		closeNote.classList.add('close');
		closeNote.setAttribute('tabindex','0');
		newSavedNote.setAttribute('class','savedNote');
		// newSavedNote.setAttribute('class', 'someClass');
		// newSavedNote = document.getElementById('blockofStuff').innerHTML;
		// document.getElementById('targetElement').appendChild(newSavedNote);
		newSavedNote.innerHTML = closeNote.outerHTML + title + `<p>${textareaNote.value}</p>`;
		savedNotes.appendChild(newSavedNote);
		titleElem.value = "";
		textAreaNote.value = "";
		notesCount++;
	}


	// error.style.display = calloutDisplay(titleElem.value.trim().length || textAreaNote.value.trim().length);
	// e.preventDefault();
});
// delete note
document.addEventListener('click', e => {
	if (hasClass(e.target,'close')) {
		removeParentNode(e.target);
	}
});



// function clearValue(elem) {
// 	elem.value = "";
// }

//
function calloutDisplay(elemCount) {
	if (elemCount) return 'none';
	return 'block';
}
function hasClass(elem, className) {
	return elem.classList.contains(className);
}
function removeParentNode(child) {
	let grandparent = child.parentNode.parentNode;
	let parent = child.parentNode;
grandparent.removeChild(parent);
}
