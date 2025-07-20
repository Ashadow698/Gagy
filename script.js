function generateAdjective() {
    const adjectives = ['awesome', 'terrible', 'okay'];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];

    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Gagy is ${randomAdjective}`;
}
