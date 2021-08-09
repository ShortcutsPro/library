const query = new URL (window.location.href);

if (query) {
  const auuid = query.searchParams.get('auuid');
  if (auuid) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      console.log(this.responseText);
      const json = JSON.stringify(JSON.parse(this.responseText), null, 2);
      document.querySelector('body').innerHTML = "<pre>"+json+"</pre>";
      };
    xhr.open('get','latest/'+auuid+'.json');
    xhr.send();
};};