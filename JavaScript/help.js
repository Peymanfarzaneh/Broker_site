document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block'; 
    });
});
document.getElementById('submitSuggestion').addEventListener('click', function() {
    const suggestionBox = document.getElementById('suggestionBox');
    const suggestion = suggestionBox.value.trim();
    
    if (suggestion) {
        alert('Your suggestion has been successfully submitted!');
        suggestionBox.value = ''; 
    } else {
        alert('Please enter your suggestion.');
    }
});
