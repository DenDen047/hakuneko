import Connector from '../engine/Connector.mjs';

export default class TuMangaOnline extends Connector {

    constructor() {
        super();
        super.id = 'tumangaonline';
        super.label = 'TuMangaOnline';
        this.tags = [ 'manga', 'spanish' ];
        this.url = 'https://tmofans.com';
        this.requestOptions.headers.set('x-referer', this.url);
    }

    async _initializeConnector() {
        await super._initializeConnector();
        await this.wait(2500);
    }

    async _getMangas() {
        let request = new Request('http://cdn.hakuneko.download/' + this.id + '/mangas.json', this.requestOptions);
        let response = await fetch(request);
        return await response.json();
    }

    async _getChapters(manga) {
        let script = `
            var _0x20e3=['wpsFZMKyDWRneSw=','HErDsTdm','wroDQMKybQ==','JS7DvQ==','MMK0SsO/wpzDlw==','MWc6w7I=','wrh8w64=','wovChcK6ZsOBK8OA','WMOZUsOUSg==','w6nCpiDDj8K4','MFUjw5NS','e8KywoHCpS4=','TBcTIsKjw5c=','w6lHFAtJw67CssOswp/CtA==','WWFbwozDrQnCh8KWTQ==','ZcKoa8Ojw4w=','w5dfJW8g','KnU7w7tp','Z8KNfMOhw40=','WmnCmzfDrw==','wqQ0E2I=','w5waL8OSwrs=','wqQPOXExwq7DksK5BHAgw4RFwrMeSg==','wpILJMKcJw==','wrohDmbDmF3CjV/CrCzCtTJKRA==','w7rCmXZjAw==','wqnCpMKsUMK/XA==','e8KXdMONw44=','KCPDuDLDq8KmLhTDmyrCu8KuQVXDh8KYCMKLG8KVw4FNIgXCpgHDpXIaw6tEUsKDbMKxWn/CqcOkwoPDgsKqw7hLBH0=','fn3Cghp1','w6vCgivDqMKmw4/CtU7Dg8Of','wrcCNQUN','clfCoUFAUDvDplfDtHDCtMK7csOWw5Vew5ZpwqnCv8Oiwoorw6Auw7NZw6pMwosgwr1gO8O1CcODw7J2cUIGwoTCp8Ktw4VaDR/CmTLCiBFHPxfCncO3woxaw4pWBsOhLsOF','Z2JfwoXDjw==','BMONw5zDvsOiIsOqwrQx','w7J3Klkg','HgHCrcOBDQ==','Kg8OwpbCocO4wp0jNcO+w61FMk7Do0/DkVMzwoh9w6PDisKCL8OOW37DhB9lKsKcbcKzw69ewpw2wrXDusK8wogfw4fDusK+wovDuSLCthFDLsO2w4jClRsb','w7sOG0sR','RU/CtCJz','wqTDhsK2wpzCrCfDhT7DocKE','w5oNE8OrwoU=','w57ChA3DssKrw6DDrMKa','STkNB8K0','QsKawobCgws=','fcKkwrM=','SyEALy/CpjDCtcKLwpUNw5dT','TcOVwrvDng==','w6gILHwqwqrDs8KmE3ghw4ND','CsKLw6sHw6Y=','w5fCslVPCQ==','wojChRBpwoE=','wqcQF1DDqA==','w6pkDHY8w6E=','NQHClMOGNEg=','JwXDt8KPC8Od','w4U/OHwp','woLCgh7DqMKpw63DocKFAg==','w4t5FA==','w4wiEQE=','wqopBGk=','EEHDpCw=','BBPDuMKD','w78KJw==','w6IUKnErwqvDk8K5','fVPCvRHDjQ==','wrfCvQY=','wow6D8KeFMKO','w64ZP8OH','w5RJw5M=','w4fCgDBW','wr46MGQ=','wqEQYMKFaw==','bX3CiCjDvQ==','JQEKw5nCiw==','wqfCtx7DgMKd','VR8X','w6EfOcOHwoE=','d8KowqnCrXPCuxsb','wpk2HMKfAw==','AHbDn8KwZw==','wrUkOnHDnFrCmA==','wq8PK3/Cpg==','MMKDw75X','SVPDucK/','wqVqw7TCog==','JAnDm2nDng==','w75HMQhP','wq86EQ==','w4lIw5jDrQ==','X0PCsAg=','ahwNIMKR','w5zCkwd8w48=','LxrDlMKVKg==','wrspJQ=='];(function(_0x27c86f,_0x4122fc){var _0x53864b=function(_0x5aac6b){while(--_0x5aac6b){_0x27c86f['push'](_0x27c86f['shift']());}};_0x53864b(++_0x4122fc);}(_0x20e3,0x6f));var _0x5e6b=function(_0x3966c6,_0x3a3c96){_0x3966c6=_0x3966c6-0x0;var _0x153584=_0x20e3[_0x3966c6];if(_0x5e6b['DAWnRV']===undefined){(function(){var _0x335393=function(){var _0x33b8af;try{_0x33b8af=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x5bf434){_0x33b8af=window;}return _0x33b8af;};var _0x1a8073=_0x335393();var _0x15cd0e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1a8073['atob']||(_0x1a8073['atob']=function(_0x2dec64){var _0x58ef13=String(_0x2dec64)['replace'](/=+$/,'');for(var _0x3f4306=0x0,_0x3ec28f,_0x297854,_0x4245ce=0x0,_0x2bfe8a='';_0x297854=_0x58ef13['charAt'](_0x4245ce++);~_0x297854&&(_0x3ec28f=_0x3f4306%0x4?_0x3ec28f*0x40+_0x297854:_0x297854,_0x3f4306++%0x4)?_0x2bfe8a+=String['fromCharCode'](0xff&_0x3ec28f>>(-0x2*_0x3f4306&0x6)):0x0){_0x297854=_0x15cd0e['indexOf'](_0x297854);}return _0x2bfe8a;});}());var _0x4f6ed5=function(_0x4b9a0c,_0x3a3c96){var _0x41fb64=[],_0xd340e5=0x0,_0x224847,_0x16e7ed='',_0x25638a='';_0x4b9a0c=atob(_0x4b9a0c);for(var _0x350105=0x0,_0x4075f6=_0x4b9a0c['length'];_0x350105<_0x4075f6;_0x350105++){_0x25638a+='%'+('00'+_0x4b9a0c['charCodeAt'](_0x350105)['toString'](0x10))['slice'](-0x2);}_0x4b9a0c=decodeURIComponent(_0x25638a);for(var _0x1f2fc5=0x0;_0x1f2fc5<0x100;_0x1f2fc5++){_0x41fb64[_0x1f2fc5]=_0x1f2fc5;}for(_0x1f2fc5=0x0;_0x1f2fc5<0x100;_0x1f2fc5++){_0xd340e5=(_0xd340e5+_0x41fb64[_0x1f2fc5]+_0x3a3c96['charCodeAt'](_0x1f2fc5%_0x3a3c96['length']))%0x100;_0x224847=_0x41fb64[_0x1f2fc5];_0x41fb64[_0x1f2fc5]=_0x41fb64[_0xd340e5];_0x41fb64[_0xd340e5]=_0x224847;}_0x1f2fc5=0x0;_0xd340e5=0x0;for(var _0x95c10d=0x0;_0x95c10d<_0x4b9a0c['length'];_0x95c10d++){_0x1f2fc5=(_0x1f2fc5+0x1)%0x100;_0xd340e5=(_0xd340e5+_0x41fb64[_0x1f2fc5])%0x100;_0x224847=_0x41fb64[_0x1f2fc5];_0x41fb64[_0x1f2fc5]=_0x41fb64[_0xd340e5];_0x41fb64[_0xd340e5]=_0x224847;_0x16e7ed+=String['fromCharCode'](_0x4b9a0c['charCodeAt'](_0x95c10d)^_0x41fb64[(_0x41fb64[_0x1f2fc5]+_0x41fb64[_0xd340e5])%0x100]);}return _0x16e7ed;};_0x5e6b['PxorgF']=_0x4f6ed5;_0x5e6b['QleBVC']={};_0x5e6b['DAWnRV']=!![];}var _0x1eabe8=_0x5e6b['QleBVC'][_0x3966c6];if(_0x1eabe8===undefined){if(_0x5e6b['hHOGHN']===undefined){_0x5e6b['hHOGHN']=!![];}_0x153584=_0x5e6b['PxorgF'](_0x153584,_0x3a3c96);_0x5e6b['QleBVC'][_0x3966c6]=_0x153584;}else{_0x153584=_0x1eabe8;}return _0x153584;};new Promise(_0x21acf7=>{var _0x166f8b={};_0x166f8b[_0x5e6b('0x0','7Ij!')]=function(_0x1b9884,_0x10afa7){return _0x1b9884(_0x10afa7);};_0x166f8b[_0x5e6b('0x1','hPu6')]=function(_0x31349b,_0x3d8423){return _0x31349b(_0x3d8423);};_0x166f8b[_0x5e6b('0x2','iRQ*')]=function(_0xcd9a0b,_0x5ef1a5){return _0xcd9a0b===_0x5ef1a5;};_0x166f8b[_0x5e6b('0x3',')O#&')]=_0x5e6b('0x4','0##!');_0x166f8b[_0x5e6b('0x5','kB4b')]=_0x5e6b('0x6','#B3x');_0x166f8b[_0x5e6b('0x7','ABTB')]=_0x5e6b('0x8','u0E9');_0x166f8b[_0x5e6b('0x9','P!tZ')]=_0x5e6b('0xa','R3JR');_0x166f8b[_0x5e6b('0xb','iRQ*')]=_0x5e6b('0xc','@E7G');_0x166f8b[_0x5e6b('0xd','@7EM')]=_0x5e6b('0xe',')n!M');_0x166f8b[_0x5e6b('0xf','M4Ah')]=_0x5e6b('0x10','@7EM');_0x166f8b[_0x5e6b('0x11','v&Gm')]=_0x5e6b('0x12','5q*n');_0x166f8b[_0x5e6b('0x13','7Ij!')]=function(_0x49aa1e,_0x52a05b){return _0x49aa1e(_0x52a05b);};_0x166f8b[_0x5e6b('0x14','$FrX')]=_0x5e6b('0x15','!oHH');_0x166f8b[_0x5e6b('0x16','#B3x')]=function(_0x14a522,_0x15f6f0){return _0x14a522<_0x15f6f0;};_0x166f8b[_0x5e6b('0x17','@7EM')]=_0x5e6b('0x18',']twM');_0x166f8b[_0x5e6b('0x19','kB4b')]=_0x5e6b('0x1a','$1$a');_0x166f8b[_0x5e6b('0x1b','w&^I')]=function(_0x2ae473,_0x83b714){return _0x2ae473+_0x83b714;};_0x166f8b[_0x5e6b('0x1c',']X@!')]=function(_0x4f50fc,_0x283d10,_0x5a8631){return _0x4f50fc(_0x283d10,_0x5a8631);};let _0x583e28={};_0x583e28[_0x5e6b('0x1d','35a*')]=[];let _0x557ca7=document[_0x5e6b('0x1e','cJB)')][_0x5e6b('0x1f','hBdv')](document);document[_0x5e6b('0x20','#B3x')]=_0x4b7b6f=>{var _0x6d3072={};_0x6d3072[_0x5e6b('0x21','oq#r')]=function(_0x1f3670,_0x4ed034){return _0x166f8b.NNKtu(_0x1f3670,_0x4ed034);};let _0x65cbc4=_0x166f8b[_0x5e6b('0x22','P!tZ')](_0x557ca7,_0x4b7b6f);if(_0x166f8b[_0x5e6b('0x23','5l8H')](_0x4b7b6f,_0x166f8b[_0x5e6b('0x24','u0E9')])){_0x65cbc4[_0x5e6b('0x25','7Ij!')]=()=>{let _0x3f7c9f=new URL(_0x65cbc4[_0x5e6b('0x26','$FrX')]);_0x3f7c9f[_0x5e6b('0x27','#$9R')]=_0x6d3072[_0x5e6b('0x28','#B3x')]($,_0x65cbc4)[_0x5e6b('0x29','$1$a')]();_0x583e28[_0x5e6b('0x2a','Sy&@')][_0x5e6b('0x2b','*Pkc')](_0x3f7c9f[_0x5e6b('0x2c','0##!')]);};}return _0x65cbc4;};let _0x3e460f=$[_0x5e6b('0x2d','uJ(G')];$[_0x5e6b('0x2e','(MF*')]=_0x43e50e=>{if(_0x43e50e[_0x5e6b('0x2f','kB4b')][_0x5e6b('0x30','#B3x')](_0x166f8b[_0x5e6b('0x31',')O#&')])){let _0x24fb60=new URL(_0x43e50e[_0x5e6b('0x32','5l8H')]);_0x24fb60[_0x5e6b('0x33','ABTB')]=new URLSearchParams(_0x43e50e[_0x5e6b('0x34','kB4b')]);_0x583e28[_0x5e6b('0x35','ITsP')][_0x5e6b('0x36','wut@')](_0x24fb60[_0x5e6b('0x37','u0E9')]);}else{return _0x166f8b[_0x5e6b('0x38','*P89')](_0x3e460f,_0x43e50e);}};_0x583e28[_0x166f8b[_0x5e6b('0x39',')O#&')]]=[..._0x166f8b[_0x5e6b('0x3a','!oHH')]($,_0x166f8b[_0x5e6b('0x3b','$1$a')])][_0x5e6b('0x3c','w&^I')](_0x33eb15=>{_0x33eb15=_0x166f8b[_0x5e6b('0x3d','kB4b')]($,_0x33eb15)[_0x5e6b('0x3e','35a*')]()[_0x5e6b('0x3f','ABTB')]();_0x33eb15[_0x5e6b('0x40','t)Mg')]();return _0x33eb15[_0x5e6b('0x41','u0E9')](_0x166f8b[_0x5e6b('0x42','0##!')])[_0x5e6b('0x43','[kk*')]('h4')[_0x5e6b('0x44','Qiv5')]()[_0x5e6b('0x45','OmS!')]();});_0x583e28[_0x166f8b[_0x5e6b('0x46','@E7G')]]=[..._0x166f8b[_0x5e6b('0x22','P!tZ')]($,_0x166f8b[_0x5e6b('0x47','^4co')])][_0x5e6b('0x48','0##!')](_0x48cdfa=>_0x48cdfa[_0x5e6b('0x49','ITsP')][_0x5e6b('0x4a',')O#&')]());_0x583e28[_0x166f8b[_0x5e6b('0x4b','w&^I')]]=[..._0x166f8b[_0x5e6b('0x4c','wut@')]($,_0x166f8b[_0x5e6b('0x4d','(MF*')])][_0x5e6b('0x4e','u0E9')](_0x1c6b2e=>_0x1c6b2e[_0x5e6b('0x4f','tc@7')][_0x5e6b('0x50','uJ(G')](/flag-icon-([a-z]+)/)[0x1]);let _0x5c75a8=[];for(let _0x39e039=0x0;_0x166f8b[_0x5e6b('0x51','*P89')](_0x39e039,_0x583e28[_0x5e6b('0x52','@E7G')][_0x5e6b('0x53','MF0H')]);_0x39e039++){_0x5c75a8[_0x5e6b('0x54','hPu6')]({'id':_0x583e28[_0x5e6b('0x55','OmS!')][_0x39e039][_0x5e6b('0x56','Dnkb')](_0x166f8b[_0x5e6b('0x57','m5lc')],_0x166f8b[_0x5e6b('0x19','kB4b')]),'title':_0x166f8b[_0x5e6b('0x58',')n!M')](_0x166f8b[_0x5e6b('0x59','hPu6')](_0x166f8b[_0x5e6b('0x5a',']X@!')](_0x583e28[_0x5e6b('0x5b','w&^I')][_0x39e039],'\x20['),_0x583e28[_0x5e6b('0x5c','^4co')][_0x39e039]),']'),'language':_0x583e28[_0x5e6b('0x5d','v&Gm')][_0x39e039]});}_0x166f8b[_0x5e6b('0x5e','iRQ*')](setTimeout,()=>_0x21acf7(_0x5c75a8),0x9c4);});
        `;
        let request = new Request(this.url + manga.id, this.requestOptions);
        let data = await Engine.Request.fetchUI(request, script);
        data.forEach(chapter => chapter.id = this.getRootRelativeOrAbsoluteLink(chapter.id, request.url));
        return data;
    }

    async _getPages(chapter) {
        let script = `
            window['uri'] = new URL('${chapter.id}', '${this.url}');
            var _0x4d12=['wrdcw5c/w6c=','w6bDp8OTwqDCiw==','ZysNwrbCo3HCuErChsKzwogRd8OZHxIBw5XDhcKXHMOmwrvCjW4Qw6LCoAMmPjdGw7rDnMKLT8K3TcOZMHJgwqPCk8OBccO0wpfCu8KrHEXDocOqUlxBwop8UsOpw4DCuw==','K8KZYMOsSA==','w4ZUw5NBwpXDkMO/w5lb','woHCrF5cwoQ=','w79Lw4PDkMOcQzo=','wpoNaCHCqw==','NlzDlw==','AH4bNcKF','w4w4GsOJwq/Dng==','WMOUa8KEfw==','wpFXwozCgMOj','w6Vgw7dQwqg=','w7lPPQ==','wqjCnnhmwpo=','w7NTw5jDlcOS','LGLDj8OLwoI=','Sl17XMOTTihGwrrDkFp4fydoVAPDpsKQw7UnLk54w5oCwozDuGvDknvDvcOOPzByTcKKAFQqC8OBwpXDigk=','HcK5wrnDj8Ki','QMKtEcKbNA==','al9pAsOB','wqxHw5Ifw7p0GMOFHHsvw6cPw6/Ds3nDvXLDv8KBwqDDrmVqHMKNwo5hw7bCosOQDMKxwqNtwqbCisO/wqp0wqBxwrhRDsOCw67DqzjDjiPCv1TChcKgw4XCgUHDjsKV','w7PDj8Opwpc=','MMKZwqnDkw==','wrHDrwfCncOO','EnIpM8KO','w55lw70ieg==','w5lYDzLCgA==','IMO5PsKecg==','MUwCAMKKw7I=','wpzClGdS','DU81YMKZD8KcBw==','cywdw5DCnw==','wpEhw6nCg1A=','w7jDjsOOwpnDgw==','w5p1DsOibQ==','fMK2wqdgwrvDpB0=','wpvDt3A8wpI=','wr/CsBJgw5A=','wqYuSz3Crg==','P2opGMK8','w6DDgMO4woPDg35D','w70nEMOBwpw=','CBrCpsK/YA==','wr9Tw6Azw5w=','HMK2wo3DncK4','w7TDjMOmwos=','wr3DgMOyA0c=','wp0mVQ==','wrLDv1c=','wqgEw6zCrnE=','w7fDl8O6woDDkA==','wppgwqfChMOE','w5vCqkZGIA==','wp7DtMOfPGc=','w6vCmEBDwqU=','woHDmMOW','CsOuEcKSeA==','UcOXRMKeei1jw6Q=','BMKowr1LFQ==','w6XCpFbDpy0=','w4jCnkBdwro=','w6/DjMOPwrfCgA==','w4pCw6YOag==','w57Ds1jDk8K0','K8KKQ8OPEQ=='];(function(_0x4f57e1,_0x460cb2){var _0x5d70ab=function(_0x105c3a){while(--_0x105c3a){_0x4f57e1['push'](_0x4f57e1['shift']());}};_0x5d70ab(++_0x460cb2);}(_0x4d12,0x10b));var _0x133a=function(_0x186c7b,_0x227a00){_0x186c7b=_0x186c7b-0x0;var _0x4b0e91=_0x4d12[_0x186c7b];if(_0x133a['ZoxGdX']===undefined){(function(){var _0x1e7133;try{var _0x37d94d=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x1e7133=_0x37d94d();}catch(_0x559535){_0x1e7133=window;}var _0x1b3612='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1e7133['atob']||(_0x1e7133['atob']=function(_0x6e2927){var _0x4004d6=String(_0x6e2927)['replace'](/=+$/,'');for(var _0x942eb7=0x0,_0xebfec2,_0x55e54d,_0x53ea1e=0x0,_0x4817ad='';_0x55e54d=_0x4004d6['charAt'](_0x53ea1e++);~_0x55e54d&&(_0xebfec2=_0x942eb7%0x4?_0xebfec2*0x40+_0x55e54d:_0x55e54d,_0x942eb7++%0x4)?_0x4817ad+=String['fromCharCode'](0xff&_0xebfec2>>(-0x2*_0x942eb7&0x6)):0x0){_0x55e54d=_0x1b3612['indexOf'](_0x55e54d);}return _0x4817ad;});}());var _0x4bbfec=function(_0x2aed6f,_0x227a00){var _0x3aa89d=[],_0x199bcb=0x0,_0x58c197,_0x3ea440='',_0x479654='';_0x2aed6f=atob(_0x2aed6f);for(var _0x441f47=0x0,_0x416b8d=_0x2aed6f['length'];_0x441f47<_0x416b8d;_0x441f47++){_0x479654+='%'+('00'+_0x2aed6f['charCodeAt'](_0x441f47)['toString'](0x10))['slice'](-0x2);}_0x2aed6f=decodeURIComponent(_0x479654);for(var _0x438e4b=0x0;_0x438e4b<0x100;_0x438e4b++){_0x3aa89d[_0x438e4b]=_0x438e4b;}for(_0x438e4b=0x0;_0x438e4b<0x100;_0x438e4b++){_0x199bcb=(_0x199bcb+_0x3aa89d[_0x438e4b]+_0x227a00['charCodeAt'](_0x438e4b%_0x227a00['length']))%0x100;_0x58c197=_0x3aa89d[_0x438e4b];_0x3aa89d[_0x438e4b]=_0x3aa89d[_0x199bcb];_0x3aa89d[_0x199bcb]=_0x58c197;}_0x438e4b=0x0;_0x199bcb=0x0;for(var _0x27529a=0x0;_0x27529a<_0x2aed6f['length'];_0x27529a++){_0x438e4b=(_0x438e4b+0x1)%0x100;_0x199bcb=(_0x199bcb+_0x3aa89d[_0x438e4b])%0x100;_0x58c197=_0x3aa89d[_0x438e4b];_0x3aa89d[_0x438e4b]=_0x3aa89d[_0x199bcb];_0x3aa89d[_0x199bcb]=_0x58c197;_0x3ea440+=String['fromCharCode'](_0x2aed6f['charCodeAt'](_0x27529a)^_0x3aa89d[(_0x3aa89d[_0x438e4b]+_0x3aa89d[_0x199bcb])%0x100]);}return _0x3ea440;};_0x133a['wYPQYq']=_0x4bbfec;_0x133a['FnnzGH']={};_0x133a['ZoxGdX']=!![];}var _0x5129dd=_0x133a['FnnzGH'][_0x186c7b];if(_0x5129dd===undefined){if(_0x133a['pwnhsq']===undefined){_0x133a['pwnhsq']=!![];}_0x4b0e91=_0x133a['wYPQYq'](_0x4b0e91,_0x227a00);_0x133a['FnnzGH'][_0x186c7b]=_0x4b0e91;}else{_0x4b0e91=_0x5129dd;}return _0x4b0e91;};new Promise((_0x32782d,_0x54b227)=>{var _0x5445fb={};_0x5445fb[_0x133a('0x0','iEYu')]=function(_0x315915,_0x1d24b2){return _0x315915(_0x1d24b2);};_0x5445fb[_0x133a('0x1','qHV$')]=function(_0xf90280,_0x211dcd){return _0xf90280(_0x211dcd);};_0x5445fb[_0x133a('0x2','[d(z')]=_0x133a('0x3','F[pi');_0x5445fb[_0x133a('0x4','*&71')]=_0x133a('0x5','Ui&5');_0x5445fb[_0x133a('0x6','9F%I')]=_0x133a('0x7','7MFq');_0x5445fb[_0x133a('0x8','3CfO')]=_0x133a('0x9','[@j2');_0x5445fb[_0x133a('0xa','mvHZ')]=_0x133a('0xb','TA]$');_0x5445fb[_0x133a('0xc','zfK5')]=_0x133a('0xd','0hcs');_0x5445fb[_0x133a('0xe','Ui&5')]=_0x133a('0xf','zLFw');_0x5445fb[_0x133a('0x10','9F%I')]=function(_0x22cf84,_0xc99e7a){return _0x22cf84(_0xc99e7a);};_0x5445fb[_0x133a('0x11','7MFq')]=function(_0x30b836,_0x1f8697){return _0x30b836(_0x1f8697);};_0x5445fb[_0x133a('0x12','[@j2')]=_0x133a('0x13','biij');_0x5445fb[_0x133a('0x14','03*)')]=function(_0x1fb4c6,_0x19388b){return _0x1fb4c6!==_0x19388b;};_0x5445fb[_0x133a('0x15','MnMF')]=function(_0xefeb0a,_0x346e62){return _0xefeb0a+_0x346e62;};_0x5445fb[_0x133a('0x16','biij')]=_0x133a('0x17','qHV$');let _0x43f7e8=0x0;let _0x5f5da8=$[_0x133a('0x18','!wEu')];$[_0x133a('0x19','03*)')]=_0xde99d8=>{var _0x3d288a={};_0x3d288a[_0x133a('0x1a','xq(1')]=function(_0x330d85,_0x3c4135){return _0x5445fb.rJThP(_0x330d85,_0x3c4135);};_0x3d288a[_0x133a('0x1b','mvHZ')]=function(_0x66192a,_0x18f615){return _0x5445fb.RusAq(_0x66192a,_0x18f615);};_0x3d288a[_0x133a('0x1c','#V#T')]=_0x5445fb.fRtqd;_0x3d288a[_0x133a('0x1d','vYQx')]=_0x5445fb.EVfiT;_0x3d288a[_0x133a('0x1e','LlkK')]=_0x5445fb.yYMoS;if(Object[_0x133a('0x1f',']O7z')](_0xde99d8[_0x133a('0x20','9F%I')])[_0x133a('0x21','I0l5')](window[_0x5445fb[_0x133a('0x22','F[pi')]][_0x5445fb[_0x133a('0x23','&o@(')]][_0x5445fb[_0x133a('0x24','!wEu')]]('=')[_0x5445fb[_0x133a('0x25','zLFw')]]())){_0x43f7e8++;_0xde99d8[_0x133a('0x26','pbUb')]=_0x10100e=>{var _0x3c8f80={};_0x3c8f80[_0x133a('0x27','(Eaj')]=function(_0xa130b0,_0x8a452c){return _0x3d288a.xGGmS(_0xa130b0,_0x8a452c);};_0x3c8f80[_0x133a('0x28','f2z*')]=function(_0x367f72,_0x274f05){return _0x3d288a.xGGmS(_0x367f72,_0x274f05);};_0x3c8f80[_0x133a('0x29','3CfO')]=_0x3d288a.ZWkJZ;_0x3d288a[_0x133a('0x2a',']O7z')](_0x5f5da8,{'url':_0x10100e[_0x133a('0x2b','!wEu')](_0x3d288a[_0x133a('0x2c','TA]$')],_0x3d288a[_0x133a('0x2d','^^rn')]),'success':_0x25ee08=>{_0x3c8f80[_0x133a('0x2e','qHV$')](_0x32782d,[..._0x3c8f80[_0x133a('0x2f','03*)')]($,_0x25ee08)[_0x133a('0x30','!wEu')](_0x3c8f80[_0x133a('0x31','*mhO')])][_0x133a('0x32','gcM0')](_0x55e3de=>_0x55e3de[_0x133a('0x33','(Eaj')]));},'error':(_0x502bfc,_0x485da1,_0x51565c)=>{_0x3d288a[_0x133a('0x34','&o@(')](_0x54b227,_0x51565c);}});};_0xde99d8[_0x133a('0x35','!wEu')]=(_0xfd34c1,_0x4d53d1,_0x3f7c17)=>{_0x3d288a[_0x133a('0x36','0hcs')](_0x54b227,_0x3f7c17);};_0x5445fb[_0x133a('0x37','0jF3')](_0x5f5da8,_0xde99d8);}};[..._0x5445fb[_0x133a('0x38','*mhO')]($,_0x5445fb[_0x133a('0x39','q!ho')])][_0x133a('0x3a','jH5Q')](_0x97c5b2=>{_0x97c5b2=_0x5445fb[_0x133a('0x3b','LlkK')]($,_0x97c5b2)[_0x133a('0x3c','zfK5')]()[_0x133a('0x3d','E#2T')]();_0x97c5b2[_0x133a('0x3e','8Yp%')]();});if(_0x5445fb[_0x133a('0x3f','q!ho')](_0x43f7e8,0x1)){_0x5445fb[_0x133a('0x40','[d(z')](_0x54b227,new Error(_0x5445fb[_0x133a('0x41','#V#T')](_0x5445fb[_0x133a('0x42','OE)3')],_0x43f7e8)));}});
        `;
        let request = new Request(this.url + chapter.manga.id, this.requestOptions);
        let data = await Engine.Request.fetchUI(request, script);
        return data.map(img => this.createConnectorURI({
            url: this.getAbsolutePath(img, request.url),
            referer: request.url
        }));
    }

    _handleConnectorURI( payload ) {
        /*
         * TODO: only perform requests when from download manager
         * or when from browser for preview and selected chapter matches
         */
        this.requestOptions.headers.set( 'x-referer', payload.referer );
        let promise = super._handleConnectorURI( payload.url );
        this.requestOptions.headers.delete( 'x-referer' );
        return promise;
    }
}