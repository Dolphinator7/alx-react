import $ from 'jquery';
import debounce from 'lodash/debounce';

const button = $('<button>').text('Click here to get started');
const countParagraph = $('<p>').attr('id', 'count');
const copyrightParagraph = $('<p>').text('Copyright - Holberton School');

$('body').append(
  $('<p>').text('Holberton Dashboard'),
  $('<p>').text('Dashboard data for the students'),
  button,
  countParagraph,
  copyrightParagraph
);

let count = 0;
const updateCounter = debounce(() => {
  count++;
  countParagraph.text(`${count} clicks on the button`);
}, 300);

button.on('click', updateCounter);

