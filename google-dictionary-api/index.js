var request = require("request");

var options = {
    method: 'GET',
    gzip: true,
  url: 'https://content-dictionaryextension-pa.googleapis.com/v1/dictionaryExtensionData',
  qs: 
   { term: 'game',
     language: 'en',
     corpus: 'en-US',
     country: 'US',
     key: 'AIzaSyA6EEtrDCfBkHV8uU2lgGY-N383ZgAOo7Y' },
  headers: 
   { 'postman-token': 'c7e27ae4-d0d0-9ddc-1535-bb0d689197e5',
     'cache-control': 'no-cache',
     'accept-language': 'en-US,en;q=0.9,fa;q=0.8',
     'accept-encoding': 'gzip, deflate, br',
     referer: 'https://content-dictionaryextension-pa.googleapis.com/static/proxy.html?usegapi=1&jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.fa.olAVjIgzvhs.O%2Fam%3DAQ%2Fd%3D1%2Frs%3DAGLTcCMVGvXOFpI1Lsjy6-N3V3nCaWRirA%2Fm%3D__features__',
     'sec-fetch-dest': 'empty',
     'sec-fetch-mode': 'cors',
     'sec-fetch-site': 'same-origin',
     'x-client-data': 'CKK1yQEIkLbJAQiltskBCMS2yQEIqZ3KAQie+csBCOaEzAEItoXMAQjLicwBCNKPzAE=',
     accept: '*/*',
     'sec-ch-ua-platform': '\\"Windows\\"',
     'x-referer': 'chrome-extension://mgijmajocgfcbeboacabfgobmjgjcoja',
     'x-javascript-user-agent': 'google-api-javascript-client/1.1.0',
     'x-requested-with': 'XMLHttpRequest',
     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
     'sec-ch-ua-mobile': '?0',
     'x-clientdetails': 'appVersion=5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F96.0.4664.93%20Safari%2F537.36&platform=Win32&userAgent=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F96.0.4664.93%20Safari%2F537.36',
     'x-origin': 'chrome-extension://mgijmajocgfcbeboacabfgobmjgjcoja',
     'x-goog-encode-response-if-executable': 'base64',
     'sec-ch-ua': '\\" Not A;Brand\\";v=\\"99\\", \\"Chromium\\";v=\\"96\\", \\"Google Chrome\\";v=\\"96\\"',
     connection: 'keep-alive',
     host: 'content-dictionaryextension-pa.googleapis.com' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

    //show the response string as output
    console.log(body);
});

//gs:term => word
//https://www.gstatic.com/onebox/dictionary/etymology/en/desktop/fa7bc654870b87c0cd91a3e2e01e895f66fcd0773d24c9b4b9da925f2bf84544.png