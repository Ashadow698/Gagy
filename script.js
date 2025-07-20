function generateAdjective() {
    const adjectives = [
        'awesome', 'terrible', 'okay', 'slow', 'gay', 'lazy', 'quick', 'happy', 
        'sad', 'energetic', 'intelligent', 'funny', 'boring', 'friendly', 'grumpy',
        'amazing', 'awkward', 'shy', 'bold', 'confident', 'lovable', 'outgoing', 
        'smart', 'adventurous', 'clumsy', 'serious', 'playful'
    ];
    
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Gagy is ${randomAdjective}`;
}
