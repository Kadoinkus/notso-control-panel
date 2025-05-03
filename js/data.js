const clients = () => JSON.parse(localStorage.getItem('clients') || '[]');
const setClients = c => localStorage.setItem('clients', JSON.stringify(c));
const meta = c => JSON.parse(localStorage.getItem('metadata_' + c) || '[]');
const chat = s => JSON.parse(localStorage.getItem('chat_' + s) || '[]');