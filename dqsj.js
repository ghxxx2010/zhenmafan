/*
大千世界解锁VIP

Surge4：
http-response ^https:\/\/api\.mvmtv\.com\/index\.php.*(c=user.*a=info|c=login.*a=getConfigure|a=addr.*vid=.*) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/photonmang/quantumultX/master/dqsj.js

QX：
^https:\/\/api\.mvmtv\.com\/index\.php.*(c=user.*a=info|c=login.*a=getConfigure|a=addr.*vid=.*) url script-response-body https://raw.githubusercontent.com/photonmang/quantumultX/master/dqsj.js

Surge & QX MITM = api.mvmtv.com
*/

let obj = JSON.parse($response.body);
let url = $request.url;
const play = 'vid=';
const vip = 'c=user';
const vip2 ='c=login';

if (url.indexOf(vip) != -1) {
       obj.data["is_expire"] = 3;
       } else if (url.indexOf(vip2) != -1) {
       obj.data["is_expire"] = 3; 
       } else if (url.indexOf(play) != -1) {
         let playurl = obj.data.play[0].mp4
                 obj.data.play[0].sd = playurl;
                 obj.data.play[0].hd = playurl;
} 

$done({body: JSON.stringify(obj)});