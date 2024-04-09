const suggestions = ['All', 'Chess', 'Gaming', 'Football', 'Computer programming', 'Avatar: The Last Airbender', 'Animated films', 'Comdey', 'Avatar'];

let allSuggestionsTab = '';
suggestions.forEach((element) => {
  if (element == 'All') {
    allSuggestionsTab += `<button class="suggestion-button current-suggestion" title="t">${element}</button>`
  } else {
    allSuggestionsTab += `<button class="suggestion-button" title="t">${element}</button>`
  }
});

document.querySelector('.suggestion-tab').innerHTML = allSuggestionsTab;