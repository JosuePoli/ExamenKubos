function isLoggedIn() {
    if (document.getElementById('pt-userpage')) {
        return true;
    }
    else {
        return false;
    }
}

if (window.hasOwnProperty('ga')) {
    ga('send', {
        hitType: 'event',
        eventCategory: 'Ads',
        eventAction: 'eob',
        eventLabel: 'Loading eob'
    });
}

function showAds() {
    return !(window.location.search.includes('@') || window.location.search.includes('%40'));
}

function CollapsibleTables() { }


//gum
(function () {
    if (!isLoggedIn()) {
        //var theUrl = window.location.href.split('.').pop()
        //if (theUrl == 'png' || theUrl == 'jpg') {
            (function (w, t, d, s) { d = w.document; w.ggv2id = t; s = d.createElement('script'); s.async = true; s.src = 'https://js.gumgum.com/services.js'; d.getElementsByTagName('head')[0].appendChild(s); }(top, 'b8ff0a49'));
        //}
    }
})();


//native ios app banner
var iosappsmart = document.createElement('meta');
iosappsmart.name = "apple-itunes-app";
iosappsmart.content = "app-id=1242159382, app-argument=" + window.location.href;
document.head.appendChild(iosappsmart);


//kixer ad slots
var __kx_ad_slots = __kx_ad_slots || [];
var __kx_desktop = __kx_desktop || [];


//FIRST IMPRESSION
window.apd_options = { 'websiteId': 6398, 'runFromFrame': false };
(function () {
    var w = window.apd_options.runFromFrame ? window.top : window;
    if (window.apd_options.runFromFrame && w != window.parent) w = window.parent;
    if (w.location.hash.indexOf('apdAdmin') != -1) { if (typeof (Storage) !== 'undefined') { w.localStorage.apdAdmin = 1; } }
    var adminMode = ((typeof (Storage) == 'undefined') || (w.localStorage.apdAdmin == 1));
    w.apd_options = window.apd_options;
    var apd = w.document.createElement('script'); apd.type = 'text/javascript'; apd.async = true;
    apd.src = '//' + (adminMode ? 'cdn' : 'ecdn') + '.firstimpression.io/' + (adminMode ? 'fi.js?id=' + window.apd_options.websiteId : 'fi_client.js');
    var s = w.document.getElementsByTagName('head')[0]; s.appendChild(apd);
})();
//END FIRST IMPRESSION


if (location.search.split('disableMobileView=')[1] != 1) {
    //console.log('this is mobile');
    function mobilifyLeftColumn() {
        console.log('mobiliFy');

        var mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobile-hamburger';
        mobileMenu.style.display = 'none';

        var colOne = document.getElementById('column-one');
        colOne.style.paddingTop = '0px';
        colOne.appendChild(mobileMenu);

        //var caTalk = document.getElementById('ca-talk');
        //caTalk.style.marginRight = '1em';

        //document.getElementById('p-cactions').style.left = '2.5em';

        var pLogo = document.getElementById("p-logo");
        pLogo.parentNode.removeChild(pLogo);

        var pCactions = document.getElementById("p-cactions");
        pCactions.parentNode.removeChild(pCactions);

        var localNotice = document.getElementById("localNotice");
        localNotice.parentNode.removeChild(localNotice);

        var pSearch = document.getElementById('p-search');
        var searchHeader = pSearch.getElementsByTagName('h3')[0];
        pSearch.removeChild(searchHeader);
        var searchIcon = document.createElement('img');
        searchIcon.setAttribute('src', 'https://ahost.bulbagarden.net/Content/searchicon.png');
        searchIcon.setAttribute('id', 'searchicon');
        pSearch.insertBefore(searchIcon, pSearch.firstChild);
        pSearch.className = 'p-search-mobile';
        var searchBody = document.getElementById('searchBody');
        searchBody.className = '';
        //searchBody.style.fontSize = '590%';
        var goButton = searchBody.querySelector('input[name="go"]');
        goButton.parentNode.removeChild(goButton);
        var searchButton = searchBody.querySelector('input[name="fulltext"]');
        searchButton.parentNode.removeChild(searchButton);
        var searchInput = document.getElementById('searchInput');
        searchInput.style.border = 'none';
        searchInput.style.fontSize = '250%';
        searchInput.style.outline = 'none';
        searchInput.style.paddingTop = '18px';
        searchInput.setAttribute('placeholder', 'Search Bulbapedia');

        var pNavigation = document.getElementById('p-navigation');
        if (pNavigation == null) {
            pNavigation = document.getElementById('p-Navigation');
        }
        if (pNavigation != null) {
            document.getElementById('mobile-hamburger').appendChild(pNavigation);
            pNavigation.getElementsByClassName('pBody')[0].className = 'left-menu-mobile';
        }

        var pBulbagarden = document.getElementById('p-Bulbagarden');
        if (pBulbagarden != null) {
            document.getElementById('mobile-hamburger').appendChild(pBulbagarden);
            pBulbagarden.getElementsByClassName('pBody')[0].className = 'left-menu-mobile';
        }

        var pTb = document.getElementById('p-tb');
        if (pTb != null) {
            document.getElementById('mobile-hamburger').appendChild(pTb);
            pTb.getElementsByClassName('pBody')[0].className = 'left-menu-mobile';
        }

        var pLang = document.getElementById('p-lang');
        if (pLang != null) {
            document.getElementById('mobile-hamburger').appendChild(pLang);
            pLang.getElementsByClassName('pBody')[0].className = 'left-menu-mobile';
        }

        function someParentHasId(element, id) {
            if (element.id == id) return true;
            return element.parentNode && someParentHasId(element.parentNode, id);
        }

        document.addEventListener("click", function (e) {
            if (!someParentHasId(e.target, 'mobile-hamburger') && e.target.id != 'mobile-menu-button') {
                document.getElementById('mobile-hamburger').style.display = 'none';
            }
        });

        var mobileMenuButton = document.createElement('div');
        mobileMenuButton.id = 'mobile-menu-button';
        mobileMenuButton.onclick = function () {
            if (mobileMenu.style.display == 'none') {
                mobileMenu.style.display = 'block';
            } else if (mobileMenu.style.display == 'block') {
                mobileMenu.style.display = 'none';
            }
        }
        mobileMenu.onblur = function () {
            mobileMenu.style.display = 'none';
        }
        colOne.appendChild(mobileMenuButton);
    }
}

function testMobileStuff() {
    if (location.search.split('forceMobileView=')[1] == 1) {
        return true;
    }
}

function hideById(id) {
    var node = document.getElementById(id);
    if (node != null) {
        node.style.display = 'none';
    }
}

function removeById(id) {
    var node = document.getElementById(id);
    if (node != null) {
        node.parentNode.removeChild(node);
    }    
}

function loadKixer() {
    var up = document.getElementById('upper-article');
    if (up != null) {
        var kxa = document.createElement('div');
        kxa.id = '__kx_ad_5490';
        up.appendChild(kxa);

        (function () {
            var slot = 5490;
            var h = false;
            __kx_ad_slots.push(slot);
            if (typeof __kx_ad_start == 'function') {
                __kx_ad_start();
            } else {
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = '//cdn.kixer.com/ad/load.js';
                s.onload = s.onreadystatechange = function () {
                    if (!h && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                        h = true;
                        s.onload = s.onreadystatechange = null;
                        __kx_ad_start();
                    }
                };
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
            }
        })();
    }
}

function loadDragonius() {
    var closedAnchorCookie = getCookie('clsanchor');
    if (closedAnchorCookie != 'true') {
        var bottomBanner = document.createElement('div');
        bottomBanner.id = 'moba';
        globalWrapper = document.getElementById('globalWrapper');
        globalWrapper.parentNode.insertBefore(bottomBanner, globalWrapper.nextSibling);
        var img = document.createElement('img');
        img.src = 'https://ahost.bulbagarden.net/content/dragonius_320x50_s7.jpg';
        img.style.width = '100%'
        moba.style.width = '100%'
        moba.style.zIndex = '99999'
        moba.style.position = 'fixed';
        moba.style.bottom = '0px';
        var alink = document.createElement('a');

        if (isAndroid()) {
            alink.href = 'https://y2p-6.tlnk.io/serve?action=click&publisher_id=357365&site_id=136231&my_campaign=ww_bulbapediaandroid_cpm';
        }
        else {
            alink.href = 'https://tth-t.tlnk.io/serve?action=click&publisher_id=357365&site_id=136349&my_campaign=ww_bulbapediaios_cpm';
        }
        alink.appendChild(img);
        moba.appendChild(alink);

        var closeBtn = document.createElement('div');
        closeBtn.className = 'close-btn';
        closeBtn.innerText = 'x';
        closeBtn.style.position = 'absolute';
        closeBtn.style.textAlign = 'center';
        closeBtn.style.right = '0px';
        closeBtn.style.top = '-20px';
        closeBtn.style.borderRadius = '40px';
        closeBtn.style.border = '1px solid #333';
        closeBtn.style.lineHeight = '100%';
        closeBtn.style.color = '#333';
        closeBtn.style.background = '#fff';
        closeBtn.style.fontSize = '40px';
        closeBtn.style.width = '50px';
        closeBtn.style.height = '50px';
        closeBtn.onclick = function () {
            document.getElementById('moba').outerHTML = '';
            setCookie('clsanchor', 'true', 1);
        };
        moba.appendChild(closeBtn);
    }
}


if (isMobileOrTablet() || testMobileStuff()) {

    loadKixer();

    //document.getElementsByTagName('body')[0].style.background = 'white';


    if (!isFrontPage()) {
        var connatixScript = document.createElement('script');
        connatixScript.type = 'text/javascript';
        connatixScript.async = true;
        connatixScript.setAttribute('data-connatix-token', 'b4bf453a-3cbb-4cfd-a5cc-60101ca75d21');
        connatixScript.setAttribute('comscoreid', '24936062');
        connatixScript.src = '//cdn.connatix.com/min/connatix.renderer.infeed.min.js';


        var ma1 = document.createElement('div');
        ma1.id = 'div-gpt-ad-1498167603841-7';
        var ma2 = document.createElement('div');
        ma2.id = 'mid-article-ad';
        //ma2.href = 'https://goo.gl/UD3TyN';
        //var switchrel = document.createElement('img');
        //switchrel.src = '//ahost.bulbagarden.net/content/switchrele.png';
        //ma2.appendChild(switchrel);      
        //ma2.id = 'div-gpt-ad-1498167603841-6';
        //var ma3 = document.createElement('div');
        //ma3.id = 'div-gpt-ad-1498174481342-5';
        var hah = document.getElementById('headeradinhouse');
        if (hah != null) {
            hah.style.height = '405px';
            hah.children[0].appendChild(ma1);
            hah.children[0].appendChild(ma2);
            //hah.children[0].appendChild(ma3);
        }
        else {
            hah = document.createElement('div');
            hah.id = 'headeradinhouse';
            hah.style.height = '405px';
            var rlsmob = document.createElement('div');
            rlsmob.className = 'rlsmobile';
            hah.appendChild(rlsmob);
            var eElement = document.getElementById('mw-content-text');

            eElement.insertBefore(hah, eElement.children[2]);
            hah.children[0].appendChild(ma1);
            hah.children[0].appendChild(ma2);
            //hah.children[0].appendChild(ma3);

        }
        hah.children[0].appendChild(connatixScript);
        
        var zergd = document.createElement('a');
        zergd.id = 'zergnet-widget-38639';
        zergd.href = 'https://goo.gl/UD3TyN';
        var rlogo = document.createElement('img');
        rlogo.src = '//ahost.bulbagarden.net/content/switchrele.png';
        zergd.appendChild(rlogo);

        //var heading = document.getElementById('firstHeading');
        //heading.parentNode.insertBefore(connatixScript, heading.nextSibling);
        //heading.parentNode.insertBefore(zergd, heading.nextSibling);
        var bfl = document.getElementById('bottomframelower');
        //var cnxcontainer = document.createElement('div');
        //cnxcontainer.id = 'mid-article-ad';
        //bfl.appendChild(cnxcontainer);
        //bfl.appendChild(connatixScript);
        bfl.appendChild(zergd);

        //heading.appendChild(connatixScript);
        //heading.appendChild(zergd);
        (function () {
            var zergnet = document.createElement('script');
            zergnet.type = 'text/javascript'; zergnet.async = true;
            zergnet.src = (document.location.protocol == "https:" ? "https:" : "http:") + '//www.zergnet.com/zerg.js?id=38639';
            var znscr = document.getElementsByTagName('script')[0];
            znscr.parentNode.insertBefore(zergnet, znscr);
        })();
        var bfdc = document.getElementById('bfdc');
        if (bfdc != null) {
            bfdc.appendChild(connatixScript);
        }
    }

    var content = document.getElementById('content');
    content.style.margin = '6.0em 0 0 0em';
    if (document.readyState == "complete") {
        mobilifyLeftColumn();
        //loadDragonius();
    }
    else {
        document.addEventListener("DOMContentLoaded", function () { mobilifyLeftColumn(); }, false);
        //loadDragonius();
    }

    (function () {
        if (isMobileOrTablet()) {

            //ADSPRUCE
            //var closedAdspruceCookie = getCookie('clsadspruce');
            //if (closedAdspruceCookie != 'true')
            //{
            //    var spruce = document.createElement('script');
            //    spruce.type = "text/javascript";
            //    spruce.src = '//sdk.adspruce.com/1/adspruce.js?pid=3574&sid=3';
            //    document.head.appendChild(spruce);
            //    setCookie('clsadspruce', 'true', 1);
            //}

            //var bulbaComm = document.createElement('iframe');
            //bulbaComm.width = '1';
            //bulbaComm.height = '1';
            //bulbaComm.frameBorder = '0';
            //bulbaComm.scrolling = 'no';
            //bulbaComm.src = 'https://ahost.bulbagarden.net/zones/bulbacomm';
            //document.body.appendChild(bulbaComm);

            //window.addEventListener('message', function (e) {
            //    if (e.origin !== "https://ahost.bulbagarden.net")
            //        return;

            //    //console.log(e.data.countrycode);
            //    if (e.data.countrycode == 'US') {
            //        function pwad() {
            //            var innerImg = document.createElement('img');
            //            innerImg.src = "https://ads.intergi.com/adserv|3.0|5205.1|4590430|0|3055|ADTECH;loc=300;key=key1+key2+key3+key4;alias=";
            //            innerImg.border = "0";
            //            innerImg.width = "320";
            //            innerImg.height = "50";
            //            var innerA = document.createElement('a');
            //            innerA.href = "https://ads.intergi.com/adlink|3.0|5205.1|4590430|0|3055|ADTECH;loc=300;key=key1+key2+key3+key4;alias=";
            //            innerA.target = "_blank";
            //            innerA.appendChild(innerImg);
            //            var nosc = document.createElement('noscript');
            //            nosc.appendChild(innerA);
            //            var pdiv = document.createElement('div');
            //            pdiv.id = "4590430";
            //            pdiv.style = "position: fixed; left: 0px; right: 0px; bottom: 0px; margin: auto; width: 0px; height: 0px; z-index: 99999;";
            //            pdiv.appendChild(nosc);
            //            document.body.appendChild(pdiv);

            //            ADTECH.config.page = { protocol: 'https', server: 'ads.intergi.com', network: '5205.1', pageid: 0, params: { loc: '100' } };
            //            ADTECH.config.placements[4590430] = {
            //                sizeid: 3055,
            //                params: { alias: '', target: '_blank' },
            //                complete: function () {
            //                    var ad = document.getElementById("4590430");
            //                    if (ad) {
            //                        if (window.frameElement) {
            //                            window.frameElement.style = "height: 0px; width: 0px; display: none;";
            //                            window.frameElement.parentElement.insertBefore(ad, window.frameElement);
            //                        }
            //                        ad.style.width = "320px";
            //                        ad.style.height = "50px";
            //                        var cb = document.createElement("img");
            //                        cb.style.position = "absolute";
            //                        cb.style.top = "-16px";
            //                        cb.style.right = "0px";
            //                        cb.style.cursor = "pointer";
            //                        cb.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQAQMAAADOJhRkAAAABlBMVEX///8AAABVwtN+AAAAX0lEQVQY02P4jwH+MBAj9o9BBlPs/x1Msf0xCDG+OjkZ+cPN/+4h1P1Lqzlz5v/Mmf/eIonV1ZypAYl9RhE7J2PfiC52vgddL8w8JDv+8/EB7Z3ZjOIWfG7G4jcc4QIAnZwQHApJo4UAAAAASUVORK5CYII=";
            //                        cb.onclick = function () {
            //                            this.parentElement.parentElement.removeChild(this.parentElement)
            //                        };
            //                        ad.appendChild(cb);
            //                    }
            //                }
            //            };
            //            ADTECH.loadAd(4590430);
            //        }

            //        //var script = document.createElement('script');
            //        //document.head.appendChild(script);
            //        //script.onload = pwad;
            //        //script.src = '//aka-cdn-ns.adtechus.com/dt/common/DAC.js';
            //        //script.type = 'text/javascript';        

            //        var jpUs = document.createElement('script');
            //        jpUs.type = 'text/javascript';
            //        jpUs.src = 'https://us.ads.justpremium.com/adserve/js.php?zone=30746';
            //        document.body.appendChild(jpUs);

            //    }
            //    else {
            //        if (e.data.countrycode == 'UK') {
            //            var jpUk = document.createElement('script');
            //            jpUk.type = 'text/javascript';
            //            jpUk.src = 'https://uk.ads.justpremium.com/adserve/js.php?zone=30748';
            //            document.body.appendChild(jpUk);
            //        }

            //        var closedAnchorCookie = getCookie('clsanchor');
            //        if (closedAnchorCookie != 'true') {

            //            var randomAd = Math.random();
            //            if (randomAd > 0.9) {
            //                var q1m = document.createElement('script');
            //                q1m.type = "text/javascript";
            //                q1m.src = '//Q1MediaHydraPlatform.com/ads/video/controller.php?qid=57d6d4bcdbcb6cda37200d1d&qz=1';
            //                document.head.appendChild(q1m);                            
            //            } else {
            //                var spruce = document.createElement('script');
            //                spruce.type = "text/javascript";
            //                spruce.src = '//sdk.adspruce.com/1/adspruce.js?pid=3574&sid=3';
            //                document.head.appendChild(spruce);
            //            }
            //            setCookie('clsanchor', 'true', 1);
            //        }
            //    }
            //}, false);
                
               

            //var closedAnchorCookie = getCookie('clsanchor');
            //if (closedAnchorCookie != 'true') {
            //    if (isAndroid()) {
            //        var bottomBanner = document.createElement('div');
            //        bottomBanner.id = 'moba';
            //        globalWrapper = document.getElementById('globalWrapper');
            //        globalWrapper.parentNode.insertBefore(bottomBanner, globalWrapper.nextSibling);
            //        var img = document.createElement('img');
            //        img.src = 'https://ahost.bulbagarden.net/content/ad_for_app_bulbapedia.png';
            //        img.style.width = '100%'
            //        moba.style.width = '100%'
            //        moba.style.zIndex = '99999'
            //        moba.style.position = 'fixed';
            //        moba.style.bottom = '0px';
            //        var alink = document.createElement('a');
            //        alink.href = 'https://goo.gl/Ibcv2O';
            //        alink.appendChild(img);
            //        moba.appendChild(alink);

            //        var closeBtn = document.createElement('div');
            //        closeBtn.className = 'close-btn';
            //        closeBtn.innerText = 'x';
            //        closeBtn.style.position = 'absolute';
            //        closeBtn.style.textAlign = 'center';
            //        closeBtn.style.right = '0px';
            //        closeBtn.style.top = '-20px';
            //        closeBtn.style.borderRadius = '40px';
            //        closeBtn.style.border = '1px solid #333';
            //        closeBtn.style.lineHeight = '100%';
            //        closeBtn.style.color = '#333';
            //        closeBtn.style.background = '#fff';
            //        closeBtn.style.fontSize = '40px';
            //        closeBtn.style.width = '50px';
            //        closeBtn.style.height = '50px';
            //        closeBtn.onclick = function () {
            //            document.getElementById('moba').outerHTML = '';
            //            setCookie('clsanchor', 'true', 1);
            //        };
            //        moba.appendChild(closeBtn);
            //    }
            //    else {
            //        setCookie('clsanchor', 'true', 1);
            //        var bottomBannerKx = document.createElement('div');
            //        bottomBannerKx.id = '__kx_ad_6180';
            //        globalWrapper = document.getElementById('globalWrapper');
            //        globalWrapper.parentNode.insertBefore(bottomBannerKx, globalWrapper.nextSibling);
            //        (function () {
            //            var slot = 6180;
            //            var h = false;
            //            var doc = document;
            //            __kx_ad_slots.push(slot);
            //            if (typeof __kx_ad_start == 'function') {
            //                __kx_ad_start();
            //            } else {
            //                if (top == self) {
            //                    var s = doc.createElement('script');
            //                    s.type = 'text/javascript';
            //                    s.async = true;
            //                    s.src = '//cdn.kixer.com/ad/load.js';
            //                    s.onload = s.onreadystatechange = function () {
            //                        if (!h && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
            //                            h = true;
            //                            s.onload = s.onreadystatechange = null;
            //                            __kx_ad_start();
            //                        }
            //                    };
            //                    var x = doc.getElementsByTagName('script')[0];
            //                    x.parentNode.insertBefore(s, x);
            //                } else {
            //                    var tag = doc.getElementById('__kx_tag_' + slot);
            //                    var win = window.parent;
            //                    doc = win.document;
            //                    var top_div = doc.createElement("div");
            //                    top_div.id = '__kx_ad_' + slot;
            //                    doc.body.appendChild(top_div);
            //                    var top_tag = doc.createElement("script");
            //                    top_tag.id = '__kx_top_tag_' + slot;
            //                    top_tag.innerHTML = tag.innerHTML;
            //                    doc.body.appendChild(top_tag);
            //                }
            //            }
            //        })();

            //    }
            //}
        } 
    })();
} //NOT MOBILE
else {
    if (!isLoggedIn()) {
        console.log('footer is loading');
        //if(!isFrontPage()) {
        //    var cb = document.getElementById('contentbox');
        //    cb.setAttribute('style', 'margin-right:0 !important');
        //    var rcb = document.getElementById('rightcolbox');
        //    rcb.parentNode.removeChild(rcb);
        //}


        var bulbaComm = document.createElement('iframe');
        bulbaComm.width = '1';
        bulbaComm.height = '1';
        bulbaComm.frameBorder = '0';
        bulbaComm.scrolling = 'no';
        if (window.location.host.startsWith('bulbanews')) {
            bulbaComm.src = 'https://ahost.bulbagarden.net/zones/bulbacommbn';
        } else {
            bulbaComm.src = 'https://ahost.bulbagarden.net/zones/bulbacomm';
        }
        document.body.appendChild(bulbaComm);
        window.addEventListener('message', function (e) {
            if (e.origin !== "https://ahost.bulbagarden.net")
                return;
            //console.log(e.data.countrycode);
            if (e.data.countrycode == 'US') {
                var jpUs = document.createElement('script');
                jpUs.type = 'text/javascript';
                jpUs.src = 'https://us.ads.justpremium.com/adserve/js.php?zone=30746';
                //document.body.appendChild(jpUs);

            }
            else if (e.data.countrycode == 'UK' || e.data.countrycode == 'GB') {
                var jpUk = document.createElement('script');
                jpUk.type = 'text/javascript';
                jpUk.src = 'https://uk.ads.justpremium.com/adserve/js.php?zone=30748';
                document.body.appendChild(jpUk);
            }
        }, false);

        function foo(data) {
            console.log('received callback');
            console.log(data);
            console.log('uppa ' + window.adset);
            if (!isFrontPage()) {
                var up = document.getElementById('upper-article');
                if (up != null) {
                    if (window.adset == 'normal') {
                        if (window.location.host.startsWith('bulbanews')) {
                            up.innerHTML = data.footerbn;
                        } else {
                            up.innerHTML = data.footer;
                        }
                    } else {
                        up.innerHTML = data.footeralt;
                    }
                    
                }
            }
            else {
                removeById('bfdc');
                //document.getElementById('bottomframe').style.height = '0';
            }
            var globalWrapper = document.getElementById('globalWrapper');

            if (!isFrontPage()) {
                var headerContainer = document.getElementById('bottomframe');
                if (window.adset == 'normal') {
                    headerContainer.innerHTML = data.header;
                    //headerContainer.innerHTML = '<style>body{background: #f9f9f9 url(https://ahost.bulbagarden.net/content/icono/ico-skin-top.png) 0 0 no-repeat !important; background-size: contain !important; background-color: #005c90 !important;}.h-submit-link:after{background-color: #195573;}.container-outer{background: none;}.footer-container-outer{background-image: url(https://s2.n4g.com/content/1/gen/ico-skin-bottom.gif); background-repeat: no-repeat; background-position: bottom; min-height: 400px; background-size: 100%;}.page-outer{position: relative; background-color: #005c90; background-image: url(https://s2.n4g.com/content/1/gen/ico-skin-top.png); background-size: 100%; background-repeat: no-repeat; background-position: top center;}.f-scroll-bottom{background: rgba(16, 65, 85, 0.68);}.ico-skin-brand{position: fixed; left: 40px; top: 330px; width: 280px;}.ico-skin-logo{display: block;}.ico-skin-logo img{width: 100%;}.ico-skin-robin{display: block; padding-top: 20px;}.ico-skin-robin img{width: 100%;}.ico-skin-stores{position: relative; position: fixed; left: 40px; top: 690px; width: 280px; text-align: center; padding-top: 40px;}.ico-skin-stores-headline{font-weight: bold; color: #ffd02e; display: block; text-align: center; font-size: 22px; position: absolute; top: 0; width: 100%; text-transform: uppercase; text-shadow: 3px 2px 5px #104155;}.ico-skin-stores > a{display: inline-block; background: rgba(0, 0, 0, 0.16); border: 2px solid #005b90; width: 26%; padding: 10px; box-sizing: border-box;}.ico-skin-stores > a:hover{background: rgba(0, 0, 0, 0.25); border: 2px solid #ffd02e;}.ico-skin-psn{}.ico-skin-steam{}.ico-skin-gog{}a.ico-skin-play{width: 82%; margin-top: 6px; color: rgba(255, 255, 255, 0.75); font-size: 12px; font-weight: bold;}a.ico-skin-play2{margin-top: 6px; color: rgba(255, 255, 255, 0.95); font-size: 18px; font-weight: bold; padding: 20px 0; margin-top: 0px; display: block; text-shadow: 3px 2px 5px #104155;}.ico-skin-play2:hover{background: rgba(255, 255, 255, 0.15);}.ico-skin-psn img, .ico-skin-steam img, .ico-skin-gog img{width: 100%;}.ico-skin-quotes{position: fixed; right: 40px; top: 330px; width: 280px; color: #fff;}.ico-skin-quotes a{color: #fff;}.ico-skin-quote{padding: 10px 0; color: #fff; display: block;}.ico-skin-quote:hover{background: rgba(255, 255, 255, 0.15);}.ico-skin-quote-text{display: block; font-style: italic; font-size: 24px; font-weight: bold; font-family: monospace; text-shadow: 3px 2px 5px #104155; padding-bottom: 5px;}.ico-skin-quote-score{font-weight: bold; color: #ffd02e; font-size: 24px; text-shadow: 3px 2px 5px #104155;}.ico-skin-quote-source{text-decoration: underline; opacity: 0.8; font-size: 14px; padding-left: 6px; text-shadow: 3px 2px 5px #104155;}@media (max-width:1640px){.ico-skin-quotes{display: none;}.ico-skin-brand{display: none;}.ico-skin-stores{display: none;}}@media (max-width:1700px){.ico-skin-quotes{right: 20px; width: 140px;}.ico-skin-brand{left: 20px; width: 140px;}.ico-skin-stores{left: 20px; top: 515px; width: 140px;}.ico-skin-quote-text{font-size: 14px;}.ico-skin-stores > a{width: 46%; margin-bottom: 10px;}a.ico-skin-play{width: 100%; font-size: 12px; font-weight: bold; padding: 10px 0px;}a.ico-skin-play2{font-size: 14px;}}@media (min-width:1900px){body{background-size: 1900px; background-color: #104155;}.page-outer{max-width: 1900px; margin: 0 auto;}}</style><style>.ico-bounce{animation: bounce_1695 9.6s ease infinite; transform-origin: 50% 50%;}@keyframes bounce_1695{0%{transform: translateY(0)}2.08333%{transform: translateY(0)}4.16667%{transform: translateY(0)}8.33333%{transform: translateY(-15px)}10.41667%{transform: translateY(0)}12.5%{transform: translateY(-15px)}16.66667%{transform: translateY(0)}100%{transform: translateY(0)}}.ico-skin-player{padding: 10px; padding-top: 40px; background: #104155; position: relative;}.ico-skin-stores2 > a{display: block; width: 33.333%; float: left;}.ico-skin-store-link{text-align: center;}.ico-skin-store-link:hover{background: rgba(0, 0, 0 ,0.25);}.ico-skin-store-link img{max-width: 100px; width: 100%;}.ico-skin-stores-headline2{width: 150px; font-weight: bold; color: #ffd02e; display: block; text-align: left; font-size: 22px; position: absolute; top: 10px; left: 10px; text-transform: uppercase; text-shadow: 3px 2px 5px #104155;}.ico-skin-play3{position: absolute; top: 0; right: 0; color: rgba(255, 255, 255, 0.95); font-size: 18px; font-weight: bold; padding: 10px;}.ico-skin-play3:hover{background-color: rgba(255, 255, 255, 0.2);}@media (max-width:800px){.ico-skin-play3{font-size: 12px;}}</style><div class="ico-skin-brand"> <a href="https://goo.gl/7yB6wJ" target="_blank" rel="nofollow" class="ico-skin-logo"><img src="https://s2.n4g.com/content/1/gen/ico-skin-logo.png"/></a> <a href="https://goo.gl/7yB6wJ" target="_blank" rel="nofollow" class="ico-skin-robin"><img src="https://s2.n4g.com/content/1/gen/ico-skin-robin.png"/></a></div><div class="ico-skin-stores"> <span class="ico-skin-stores-headline ico-bounce">Out Now!</span> <a href="https://goo.gl/F94b2D" target="_blank" rel="nofollow" class="ico-skin-psn"><img src="https://s2.n4g.com/content/1/gen/ico-skin-psn.png"/></a> <a href="https://goo.gl/edhoSm" target="_blank" rel="nofollow" class="ico-skin-steam"><img src="https://s2.n4g.com/content/1/gen/ico-skin-steam.png"/></a> <a href="https://goo.gl/2KY5wa" target="_blank" rel="nofollow" class="ico-skin-gog"><img src="https://s2.n4g.com/content/1/gen/ico-skin-gog.png"/></a> <a href="https://goo.gl/7yB6wJ" target="_blank" rel="nofollow" class="ico-skin-play">PlayIconoclasts.com</a></div><div class="ico-skin-quotes"> <a href="https://goo.gl/7yB6wJ" target="_blank" rel="nofollow" class="ico-skin-logo"><img src="https://s2.n4g.com/content/1/gen/ico-skin-logo.png"/></a> <a href="https://goo.gl/wvwkTV" target="_blank" rel="nofollow" class="ico-skin-quote"> <span class="ico-skin-quote-text">"It’s a joy to simply spend time in a world so expertly crafted"</span> <span class="ico-skin-quote-score">9.5/10</span> <span class="ico-skin-quote-source">destructoid.com</span> </a> <a href="https://goo.gl/bUWmaL" target="_blank" rel="nofollow" class="ico-skin-quote"> <span class="ico-skin-quote-text">"It was definitely worth the wait!"</span> <span class="ico-skin-quote-score">9.5/10</span> <span class="ico-skin-quote-source">gamespace.com</span> </a><a href="https://goo.gl/RqP1Pr" target="_blank" rel="nofollow" class="ico-skin-quote"><span class="ico-skin-quote-text">"The game will shock and surprise you!"</span><span class="ico-skin-quote-score">9/10</span><span class="ico-skin-quote-source">gamespot.com</span></a> <a href="https://goo.gl/7yB6wJ" target="_blank" rel="nofollow" class="ico-skin-play2">PlayIconoclasts.com</a></div>';
                    //headerContainer.innerHTML = '<style>body{background: #f9f9f9 url(https://ahost.bulbagarden.net/content/icono/ico-skin-top.png) 0 0 no-repeat !important; background-size: contain !important; background-color: #005c90 !important;}.h-submit-link:after{background-color: #195573;}.container-outer{background: none;}.footer-container-outer{background-image: url(https://s2.n4g.com/content/1/gen/ico-skin-bottom.gif); background-repeat: no-repeat; background-position: bottom; min-height: 400px; background-size: 100%;}.page-outer{position: relative; background-color: #005c90; background-image: url(https://s2.n4g.com/content/1/gen/ico-skin-top.png); background-size: 100%; background-repeat: no-repeat; background-position: top center;}.f-scroll-bottom{background: rgba(16, 65, 85, 0.68);}.ico-skin-brand{position: fixed; left: 40px; top: 330px; width: 280px;}.ico-skin-logo{display: block;}.ico-skin-logo img{width: 100%;}.ico-skin-robin{display: block; padding-top: 20px;}.ico-skin-robin img{width: 100%;}.ico-skin-stores{position: relative; position: fixed; left: 40px; top: 690px; width: 280px; text-align: center; padding-top: 40px;}.ico-skin-stores-headline{font-weight: bold; color: #ffd02e; display: block; text-align: center; font-size: 22px; position: absolute; top: 0; width: 100%; text-transform: uppercase; text-shadow: 3px 2px 5px #104155;}.ico-skin-stores > a{display: inline-block; background: rgba(0, 0, 0, 0.16); border: 2px solid #005b90; width: 100%; padding: 10px; box-sizing: border-box;}.ico-skin-stores > a:hover{background: rgba(0, 0, 0, 0.25); border: 2px solid #ffd02e;}.ico-skin-psn{}.ico-skin-steam{}.ico-skin-gog{}a.ico-skin-play{width: 82%; margin-top: 6px; color: rgba(255, 255, 255, 0.75); font-size: 12px; font-weight: bold;}a.ico-skin-play2{margin-top: 6px; color: rgba(255, 255, 255, 0.95); font-size: 18px; font-weight: bold; padding: 20px 0; margin-top: 0px; display: block; text-shadow: 3px 2px 5px #104155;}.ico-skin-play2:hover{background: rgba(255, 255, 255, 0.15);}.ico-skin-psn img, .ico-skin-steam img, .ico-skin-gog img{width: 100%;}.ico-skin-quotes{position: fixed; right: 40px; top: 330px; width: 280px; color: #fff;}.ico-skin-quotes a{color: #fff;}.ico-skin-quote{padding: 10px 0; color: #fff; display: block;}.ico-skin-quote:hover{background: rgba(255, 255, 255, 0.15);}.ico-skin-quote-text{display: block; font-style: italic; font-size: 24px; font-weight: bold; font-family: monospace; text-shadow: 3px 2px 5px #104155; padding-bottom: 5px;}.ico-skin-quote-score{font-weight: bold; color: #ffd02e; font-size: 24px; text-shadow: 3px 2px 5px #104155;}.ico-skin-quote-source{text-decoration: underline; opacity: 0.8; font-size: 14px; padding-left: 6px; text-shadow: 3px 2px 5px #104155;}@media (max-width:1640px){.ico-skin-quotes{display: none;}.ico-skin-brand{display: none;}.ico-skin-stores{display: none;}}@media (max-width:1700px){.ico-skin-quotes{right: 20px; width: 140px;}.ico-skin-brand{left: 20px; width: 140px;}.ico-skin-stores{left: 20px; top: 515px; width: 140px;}.ico-skin-quote-text{font-size: 14px;}.ico-skin-stores > a{width: 46%; margin-bottom: 10px;}a.ico-skin-play{width: 100%; font-size: 12px; font-weight: bold; padding: 10px 0px;}a.ico-skin-play2{font-size: 14px;}}@media (min-width:1900px){body{background-size: 1900px; background-color: #104155;}.page-outer{max-width: 1900px; margin: 0 auto;}}</style><style>.ico-bounce{animation: bounce_1695 9.6s ease infinite; transform-origin: 50% 50%;}@keyframes bounce_1695{0%{transform: translateY(0)}2.08333%{transform: translateY(0)}4.16667%{transform: translateY(0)}8.33333%{transform: translateY(-15px)}10.41667%{transform: translateY(0)}12.5%{transform: translateY(-15px)}16.66667%{transform: translateY(0)}100%{transform: translateY(0)}}.ico-skin-player{padding: 10px; padding-top: 40px; background: #104155; position: relative;}.ico-skin-stores2 > a{display: block; width: 33.333%; float: left;}.ico-skin-store-link{text-align: center;}.ico-skin-store-link:hover{background: rgba(0, 0, 0 ,0.25);}.ico-skin-store-link img{max-width: 100px; width: 100%;}.ico-skin-stores-headline2{width: 150px; font-weight: bold; color: #ffd02e; display: block; text-align: left; font-size: 22px; position: absolute; top: 10px; left: 10px; text-transform: uppercase; text-shadow: 3px 2px 5px #104155;}.ico-skin-play3{position: absolute; top: 0; right: 0; color: rgba(255, 255, 255, 0.95); font-size: 18px; font-weight: bold; padding: 10px;}.ico-skin-play3:hover{background-color: rgba(255, 255, 255, 0.2);}@media (max-width:800px){.ico-skin-play3{font-size: 12px;}}</style><div class="ico-skin-brand"> <a href="https://goo.gl/7yB6wJ" target="_blank" rel="nofollow" class="ico-skin-logo"><img src="https://s2.n4g.com/content/1/gen/ico-skin-logo.png"/></a> <a href="https://goo.gl/7yB6wJ" target="_blank" rel="nofollow" class="ico-skin-robin"><img src="https://s2.n4g.com/content/1/gen/ico-skin-robin.png"/></a></div><div class="ico-skin-stores"> <span class="ico-skin-stores-headline ico-bounce">Out Now!</span> <a href="https://goo.gl/Cet2JY" target="_blank" rel="nofollow" class="ico-skin-psn"><img src="https://ahost.bulbagarden.net/content/icono/ico-skin-switch.jpg" /></a> <a href="https://goo.gl/7yB6wJ" target="_blank" rel="nofollow" class="ico-skin-play">PlayIconoclasts.com</a></div><div class="ico-skin-quotes"> <a href="https://goo.gl/7yB6wJ" target="_blank" rel="nofollow" class="ico-skin-logo"><img src="https://s2.n4g.com/content/1/gen/ico-skin-logo.png"/></a> <a href="https://goo.gl/wvwkTV" target="_blank" rel="nofollow" class="ico-skin-quote"> <span class="ico-skin-quote-text">"It’s a joy to simply spend time in a world so expertly crafted"</span> <span class="ico-skin-quote-score">9.5/10</span> <span class="ico-skin-quote-source">destructoid.com</span> </a> <a href="http://www.nintendolife.com/reviews/switch-eshop/iconoclasts" target="_blank" rel="nofollow" class="ico-skin-quote"> <span class="ico-skin-quote-text">"...best 16-bit spritework we’ve seen and a killer lineup of awesome boss encounters..."</span> <span class="ico-skin-quote-score">9/10</span> <span class="ico-skin-quote-source">nintendolife.com</span> </a><a href="https://goo.gl/RqP1Pr" target="_blank" rel="nofollow" class="ico-skin-quote"><span class="ico-skin-quote-text">"The game will shock and surprise you!"</span><span class="ico-skin-quote-score">9/10</span><span class="ico-skin-quote-source">gamespot.com</span></a> <a href="https://goo.gl/7yB6wJ" target="_blank" rel="nofollow" class="ico-skin-play2">PlayIconoclasts.com</a></div>';
                    if (window.location.href == 'https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_Trading_Card_Game') {
                        var cards = document.getElementById('tradecards');
                        var cardslink = document.createElement('a');
                        cardslink.href = 'https://pokemoncardvalue.com/';
                        cardslink.textContent = 'Pokémon card value lookup & online price guide';
                        cards.appendChild(cardslink);
                    }
                } else {
                    headerContainer.innerHTML = data.headeralt;
                }

                var contentBox = document.getElementById('contentbox');
                var contentSize = contentBox.offsetHeight;
                if (contentSize <= 2000) {
                    var adElement = document.createElement('div');
                    adElement.id = 'upper-article';
                    if (window.adset == 'normal') {
                        if (window.location.host.startsWith('bulbanews')) {
                            //adElement.innerHTML = data.footerbn;
                            adElement.innerHTML = data.footer;
                        } else {
                            adElement.innerHTML = data.footer;
                        }
                        
                    } else {
                        adElement.innerHTML = data.footeralt;
                    }                    
                    headerContainer.insertBefore(adElement, headerContainer.firstChild);
                }
                
                if (window.innerWidth < 1370) {
                    var lapb = document.getElementById('laptop-box');
                    lapb.innerHTML = data.lapbox;
                }

            }
            else { //FRONT PAGE
                var fpAd = document.getElementById('bottomframe');
                fpAd.innerHTML = data.fpad;
            }

            //console.log('tople ' + window.adset);
            var lbContainer = document.createElement('div');
            lbContainer.style = 'display:flex;'
            if (window.adset == 'normal') {
                lbContainer.id = "div-gpt-ad-1498167603841-8";
            } else {
                lbContainer.id = "div-gpt-ad-1513172233408-0";
                googletag.cmd.push(function () { googletag.display('div-gpt-ad-1513172233408-0'); });
            }

            var lbContainer2 = document.createElement('div');
            lbContainer2.style = 'display:flex;'
            if (window.adset == 'normal') {
                lbContainer2.id = "div-gpt-ad-1498167603841-9";
            } else {

            }
            globalWrapper.appendChild(lbContainer2);
            

            globalWrapper.insertBefore(lbContainer, globalWrapper.firstChild);


            if (isMobileOrTablet()) {

            }
            else {
                var navbarContainer = document.createElement('div');
                navbarContainer.id = 'navbarc';
                navbarContainer.innerHTML = data.navbar;
                globalWrapper.insertBefore(navbarContainer, globalWrapper.firstChild);
                if (window.location.host.split('.')[0] == 'bulbanews') {
                    removeById("bulbabulb");
                    document.getElementById('imagelogolink').style = 'margin-top:-10px;';
                    document.getElementById('imagelogolink').src = 'https://ahost.bulbagarden.net/content/bulbanews.png';
                }
                else if (window.location.host.split('.')[0] == 'archives') {
                    document.getElementById('bulbabulb').children[0].src = 'https://archives.bulbagarden.net/media/upload/thumb/9/97/Bulbagarden_Archives_bulb.png/60px-Bulbagarden_Archives_bulb.png';
                    document.getElementById('imagelogolink').src = 'https://ahost.bulbagarden.net/content/archives_logo.png';
                }
                if (document.body.offsetWidth < 1117) {
                    //font - size: 8
                    //header - box a
                    //margin - left:5px
                    //margin: 9px

                }
            }

            var connatixScript = document.createElement('script');
            connatixScript.type = 'text/javascript';
            connatixScript.async = true;
            connatixScript.setAttribute('data-connatix-token', '895aee44-376e-4f43-ae58-d40323ed1b8f');
            connatixScript.setAttribute('comscoreid', '24936062');
            connatixScript.src = '//cdn.connatix.com/min/connatix.renderer.infeed.min.js';

            var connatixScriptLowRes = document.createElement('script');
            connatixScriptLowRes.type = 'text/javascript';
            connatixScriptLowRes.async = true;
            connatixScriptLowRes.setAttribute('data-connatix-token', '2fdbf57b-87fa-4c37-88e9-3a359bc1c156');
            connatixScriptLowRes.setAttribute('comscoreid', '24936062');
            connatixScriptLowRes.src = '//cdn.connatix.com/min/connatix.renderer.infeed.min.js';

            var playwireScript = document.createElement('script');
            playwireScript.type = 'text/javascript';
            playwireScript.setAttribute('data-config', '//config.playwire.com/1016210/playlists/v2/4423/zeus.json');
            playwireScript.src = '//cdn.playwire.com/bolt/js/zeus/embed.js';


            var playwireScriptNew = document.createElement('script');
            playwireScriptNew.type = 'text/javascript';
            playwireScriptNew.setAttribute('data-config', '//config.playwire.com/1022643/playlists/v2/4626/zeus.json');
            playwireScriptNew.src = '//cdn.playwire.com/bolt/js/zeus/embed.js';

            var bfdc = document.getElementById('bfdc');
            if (bfdc != null) {
                //if (window.location.hostname.split('.')[0] == 'bulbanews')
                //{
                //    bfdc.appendChild(playwireScriptNew);
                //}
                //else {
                    //if (!isFrontPage()) {
                        //var seenEGCookie = getCookie('seeneg');
                        //if (seenEGCookie != 'true') {
                        //    bfdc.id = 'egvideopl';
                        //    setCookie('seeneg', 'true', 1);
                        //}
                        //else {
                        //    bfdc.appendChild(connatixScript);
                        //    bfdc.style.marginTop = '-40px';
                        //}

                        if (window.innerWidth > 1822) {
                            bfdc.appendChild(connatixScript);
                            bfdc.style.marginTop = '-40px';
                        }
                        else {
                            bfdc.appendChild(connatixScriptLowRes);
                            bfdc.style.marginTop = '-40px';
                        }
                    //}
                    //else {
                    //    bfdc.appendChild(playwireScriptNew);
                    //}                                        
                //}
                
            }

            var pcact = document.getElementById('p-cactions');
            if (pcact == null) {
                pcact = document.getElementById('p-Cactions');
            }
            if (pcact != null) {
                pcact.style.position = 'relative';
                pcact.style.top = '0';
                var coco = document.getElementById('content');
                coco.insertBefore(pcact, coco.firstChild);
            }

            var co = document.getElementById("column-one");
            co.style.display = 'none';
            co.style.paddingTop = '0px';
            co.className = 'side-menu';
            var burger = document.getElementById('burger');
            //.addEventListener('click', function () { co.style.display = 'block'; });

            burger.onclick = function () {
                console.log('clicked burger');
                if (co.style.display == 'none') {
                    console.log('display burger');
                    co.style.display = 'block';
                } else if (co.style.display == 'block') {
                    console.log('hide burger');
                    co.style.display = 'none';
                }
            }

            var portlet = document.querySelectorAll(".portlet");

            [].forEach.call(portlet, function (el) {
                el.classList.remove("portlet");
            });

            var regaccount = document.getElementById('p-personal');
            var acclinks = regaccount.querySelectorAll('a');
            acclinks[0].style = 'padding-right:10px';
            removeById("p-personal");
            regaccount.id = '';
            dummydivdeletelater = document.createElement('div');
            dummydivdeletelater.id = 'p-personal';
            anotherdummy = document.createElement('ul');
            anotherdummy.style.display = 'none';
            dummydivdeletelater.appendChild(anotherdummy);
            document.body.appendChild(dummydivdeletelater);
            regaccount.innerHTML = '';
            regaccount.className = 'reg-ac';
            regaccount.appendChild(acclinks[0]);
            regaccount.appendChild(acclinks[1]);
            document.getElementById('login-c').appendChild(regaccount);

            document.getElementById('search-box').appendChild(document.getElementById('searchBody'));
            document.getElementById('searchBody').className = '';
            document.getElementById('searchInput').className = 'bulba-search';
            hideById('searchGoButton');
            hideById('mw-searchButton');
            var searchIcn = document.createElement('img');
            searchIcn.src = 'https://ahost.bulbagarden.net/Content/searchicon.png';
            searchIcn.className = 'bimage-search';
            //document.getElementById('searchform').appendChild(searchIcn);
            
            //removeById("p-logo");
            //removeById("p-cactions");
            removeById("p-search");
            //removeById("p-Bulbagarden");

            //removeById("headerad");

            var pNavigation = document.getElementById('p-navigation');
            if (pNavigation == null) {
                pNavigation = document.getElementById('p-Navigation');
            }
            pNavigation.querySelector('.pBody').className = '';
            document.getElementById('p-tb').querySelector('.pBody').className = '';
            var pLang = document.getElementById('p-lang');
            if (pLang != null) {
                pLang.getElementsByClassName('pBody')[0].className = '';
            }

            //removeById(document.querySelector('[data-ad-name="widesky_1"]').id);

            window.addEventListener('click', function (e) {
                console.log('clicking');
                if (document.getElementById('column-one').contains(e.target)) {
                    //co.style.display = 'block';
                    console.log('inside');
                } else {
                    //co.style.display = 'none';
                    if (e.target.id != 'burger') {
                        console.log('outside');
                    }
                }
            });

        }

        var script = document.createElement('script');
        script.src = '//ahost.bulbagarden.net/zones/jsonpui?callback=foo'

        document.getElementsByTagName('head')[0].appendChild(script);
    }

}

function showRightRail() {
    return window.innerWidth > 1439;
}

function isFrontPage() {
    return window.location.pathname == "/wiki/Main_Page" || window.location.pathname == "/wiki/Front_page";
}

