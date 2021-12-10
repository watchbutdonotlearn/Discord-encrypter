console.log('Something') 

function saveAll(){
    console.log('saving preferences')
    var token = document.getElementById('token').value
    chrome.storage.local.set({tokenValue: token});
    var key = document.getElementById('enckey').value
    chrome.storage.local.set({enckey: key});
}

/*
function returnvalues(){
    chrome.storage.local.get(['tokenValue', 'enckey'], function(data){
        console.log(data.token)
        console.log(data.enckey)
        document.getElementById('token').value = data.token
        document.getElementById('enckey').value = data.enckey
    })
}
*/

window.onload=function(){
    document.getElementById('saveBtn').addEventListener('click', saveAll);
    //returnvalues();
}
