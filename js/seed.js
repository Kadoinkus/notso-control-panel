if(!localStorage.getItem('seed6')){
localStorage.setItem('clients',JSON.stringify([{"name": "Jumbo", "api": "https://api.jumbo.com", "status": "Active"}, {"name": "HiTapes", "api": "https://api.hitapes.com", "status": "Error"}, {"name": "EnergyMax", "api": "https://api.energymax.com", "status": "Active"}]));
localStorage.setItem('users',JSON.stringify([{"email": "admin", "password": "1234", "role": "Admin"}, {"email": "anna@notso.ai", "password": "pass", "role": "Staff"}, {"email": "john@notso.ai", "password": "pass", "role": "Clearance"}]));
localStorage.setItem('metadata_Jumbo',JSON.stringify([{"id": "001", "timestamp": "2025-05-02", "time": "12:00", "ip": "212.47.23.1", "sentiment": "Positive"}, {"id": "002", "timestamp": "2025-05-03", "time": "09:30", "ip": "212.47.23.2", "sentiment": "Neutral"}]));
localStorage.setItem('chat_001',JSON.stringify([{"sender": "user", "text": "Hoi, ik heb hulp nodig met mijn rooster."}, {"sender": "bot", "text": "Natuurlijk! Wat kan ik voor je doen?"}, {"sender": "user", "text": "Kan ik mijn shift wisselen?"}, {"sender": "bot", "text": "Ja, dat kan via de rooster-app."}]));
localStorage.setItem('seed6','1');}
