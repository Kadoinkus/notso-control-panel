
function users(){return JSON.parse(localStorage.getItem('users')||'[]');}
function setUsers(u){localStorage.setItem('users',JSON.stringify(u));}
function login(e){
  e.preventDefault();
  const em = document.getElementById('email').value.trim();
  const pw = document.getElementById('pw').value.trim();
  const u = users().find(x=>x.email===em && x.password===pw);
  const errEl = document.getElementById('err');
  if(u){
     sessionStorage.setItem('auth','1');
     sessionStorage.setItem('me',JSON.stringify(u));
     window.location.href='dashboard.html';
  }else{
     errEl.textContent = 'Incorrect credentials';
  }
}
function guard(){
  if(sessionStorage.getItem('auth')!=='1'){window.location.href='index.html';}
}
function logout(){sessionStorage.clear();window.location.href='index.html';}
