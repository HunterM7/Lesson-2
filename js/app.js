const select = document.querySelector('#select');

select.addEventListener('change', () => {
	const mySelect = select.selectedIndex;
	const options = select.options;

	console.log(`Choosen option is ${options[mySelect].text}`);
});

const range = document.querySelector('#range');
const output = document.querySelector('#output')

range.addEventListener('input', () => {
	output.innerHTML = range.value;
})