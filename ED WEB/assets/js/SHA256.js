var _0x2fbe14 = _0x1683;
(function(_0x5a3f83, _0x5e30c3) {
    var _0x21e345 = _0x1683
      , _0x1b271a = _0x5a3f83();
    while (!![]) {
        try {
            var _0x4bb8f0 = -parseInt(_0x21e345(0x16d)) / 0x1 + parseInt(_0x21e345(0x233)) / 0x2 + -parseInt(_0x21e345(0x1a0)) / 0x3 * (-parseInt(_0x21e345(0x1cd)) / 0x4) + parseInt(_0x21e345(0x13b)) / 0x5 + -parseInt(_0x21e345(0x1fa)) / 0x6 * (parseInt(_0x21e345(0x200)) / 0x7) + -parseInt(_0x21e345(0x1f2)) / 0x8 * (parseInt(_0x21e345(0x133)) / 0x9) + -parseInt(_0x21e345(0x226)) / 0xa * (parseInt(_0x21e345(0x1c6)) / 0xb);
            if (_0x4bb8f0 === _0x5e30c3)
                break;
            else
                _0x1b271a['push'](_0x1b271a['shift']());
        } catch (_0x4cac6c) {
            _0x1b271a['push'](_0x1b271a['shift']());
        }
    }
}(_0x37d5, 0x2272e));
const JS_FILE_SAVER_URL = _0x2fbe14(0x152);
var scriptsLoaded = [];
function loadFiles(_0x22be35) {
    var _0x13cab3 = _0x2fbe14;
    startProgress();
    var _0x13d9e3 = new FileLoader();
    _0x22be35['forEach'](function(_0x254a8b) {
        var _0x3f3afe = _0x1683;
        if (!isScriptLoaded(_0x254a8b))
            _0x13d9e3[_0x3f3afe(0x16a)](_0x254a8b);
    });
    var _0x43a28d = _0x13d9e3[_0x13cab3(0x136)]();
    return _0x43a28d['then'](function() {
        var _0x5e9ee2 = _0x13cab3;
        console['log'](_0x5e9ee2(0x21b)),
        endProgress();
    }),
    _0x13d9e3[_0x13cab3(0x136)]();
}
function FileLoader() {
    var _0x1b1fe5 = _0x2fbe14
      , _0x4ff502 = [];
    this[_0x1b1fe5(0x16a)] = function(_0x4a2c6d) {
        var _0x300b76 = _0x1b1fe5
          , _0x52e0d1 = new Promise(function(_0x592260, _0xaa24f2) {
            var _0x349b36 = _0x1683
              , _0x2e109f = null;
            _0x4a2c6d[_0x349b36(0x160)]('.')[_0x349b36(0x131)]() === 'js' ? _0x2e109f = getScriptElm(_0x4a2c6d) : _0x2e109f = getLinkElm(_0x4a2c6d),
            _0x2e109f[_0x349b36(0x237)]('load', function() {
                var _0x464bd9 = _0x349b36;
                _0x592260(_0x2e109f),
                filename = _0x2e109f[_0x464bd9(0x1d6)]['split']('/')[_0x464bd9(0x131)](),
                scriptsLoaded[_0x464bd9(0x1be)](filename) === -0x1 && scriptsLoaded[_0x464bd9(0x1e0)](filename),
                console[_0x464bd9(0x1bd)](_0x464bd9(0x124) + filename);
            }, ![]),
            _0x2e109f[_0x349b36(0x237)](_0x349b36(0x1fb), function() {
                var _0x3e0a1f = _0x349b36;
                _0xaa24f2(_0x2e109f),
                console[_0x3e0a1f(0x1bd)]('was\x20rej');
            }, ![]);
        }
console.log();
        );
        _0x4ff502[_0x300b76(0x1e0)](_0x52e0d1);
    }
    ,
    this[_0x1b1fe5(0x136)] = function(_0x20f542) {
        var _0x30f7f3 = _0x1b1fe5;
        return Promise[_0x30f7f3(0x225)](_0x4ff502);
    }
    ;
}
function startProgress() {
    var _0x40cc41 = _0x2fbe14;
    document['getElementById'](_0x40cc41(0x219))[_0x40cc41(0x137)][_0x40cc41(0x1a9)] = _0x40cc41(0x1b3);
}
function endProgress() {
    var _0x22513c = _0x2fbe14;
    document['getElementById'](_0x22513c(0x219))[_0x22513c(0x137)][_0x22513c(0x1a9)] = _0x22513c(0x20b);
}
function isScriptLoaded(_0x4617c1) {
    var _0x2ef0fd = _0x2fbe14;
    return scriptsLoaded[_0x2ef0fd(0x1be)](_0x4617c1[_0x2ef0fd(0x160)]('/')[_0x2ef0fd(0x131)]()) > -0x1 ? !![] : ![];
}
function getScriptElm(_0x5b7ff4) {
    var _0x479525 = _0x2fbe14
      , _0x8bb9e7 = document['createElement'](_0x479525(0x173));
    return _0x8bb9e7[_0x479525(0x183)] = _0x479525(0x17f),
    _0x8bb9e7[_0x479525(0x1d6)] = _0x5b7ff4,
    document['getElementsByTagName'](_0x479525(0x1f9))[0x0][_0x479525(0x214)](_0x8bb9e7),
    _0x8bb9e7;
}
function getLinkElm(_0x37853f) {
    var _0x142a2b = _0x2fbe14
      , _0x5ac56a = document[_0x142a2b(0x18a)](_0x142a2b(0x201));
    return _0x5ac56a[_0x142a2b(0x1d2)] = _0x142a2b(0x188),
    _0x5ac56a['type'] = 'text/css',
    _0x5ac56a[_0x142a2b(0x1bb)] = _0x37853f,
    document['getElementsByTagName']('HEAD')[0x0][_0x142a2b(0x214)](_0x5ac56a),
    _0x5ac56a;
}
var globalurl = '/'
  , gViewName = '';
document['addEventListener']('DOMContentLoaded', loadCommonFunctions);
function loadCommonFunctions() {
    setViewName(),
    setFavorite(),
    setRecently(),
    setupBNavigation(),
    checkIfUserIsLoggedIn();
}
function setViewName() {
    var _0x244bfc = _0x2fbe14;
    gViewName = document[_0x244bfc(0x17d)]('viewName')['value'],
    console['log'](_0x244bfc(0x1bf) + gViewName);
}
function setupBNavigation() {
    var _0x5c044b = _0x2fbe14;
    const _0x35455b = Array[_0x5c044b(0x1d9)][_0x5c044b(0x180)][_0x5c044b(0x22a)](document['querySelectorAll']('.navbar-burger'), 0x0);
    _0x35455b['length'] > 0x0 && _0x35455b[_0x5c044b(0x165)](_0x2b39c9=>{
        var _0x1be7e5 = _0x5c044b;
        _0x2b39c9[_0x1be7e5(0x237)]('click', ()=>{
            var _0x25e298 = _0x1be7e5;
            const _0x1eea4f = _0x2b39c9[_0x25e298(0x1c9)]['target']
              , _0x7407b2 = document[_0x25e298(0x17d)](_0x1eea4f);
            _0x2b39c9[_0x25e298(0x158)]['toggle'](_0x25e298(0x203)),
            _0x7407b2['classList']['toggle'](_0x25e298(0x203));
        }
        );
    }
    );
}
function checkIfUserIsLoggedIn() {
    var _0x4a3993 = _0x2fbe14
      , _0x4bd2c0 = getCookie(_0x4a3993(0x1ff))
      , _0x483cbf = getCookie(_0x4a3993(0x15c));
    _0x4bd2c0 != '' && _0x483cbf != '' && (document['getElementById'](_0x4a3993(0x1a6))[_0x4a3993(0x1e6)] = _0x4bd2c0[_0x4a3993(0x14c)](0x0, 0x5) + '..',
    document['getElementById'](_0x4a3993(0x199))[_0x4a3993(0x137)][_0x4a3993(0x1a9)] = 'none',
    document[_0x4a3993(0x17d)](_0x4a3993(0x134))[_0x4a3993(0x137)]['display'] = 'block',
    setupUserLoginDropDown());
}
function setupUserLoginDropDown() {
    var _0x2588e5 = _0x2fbe14
      , _0x455a28 = document[_0x2588e5(0x18d)](_0x2588e5(0x187));
    _0x455a28[_0x2588e5(0x237)](_0x2588e5(0x179), function(_0x1428f4) {
        var _0x287298 = _0x2588e5;
        _0x1428f4['stopPropagation'](),
        _0x455a28[_0x287298(0x158)]['toggle']('is-active');
    });
}
function getCookie(_0x389a21) {
    var _0x2217c3 = _0x2fbe14
      , _0x2e3b28 = _0x389a21 + '='
      , _0x460206 = document[_0x2217c3(0x13f)][_0x2217c3(0x160)](';');
    for (var _0x46f278 = 0x0; _0x46f278 < _0x460206[_0x2217c3(0x148)]; _0x46f278++) {
        var _0x401177 = _0x460206[_0x46f278];
        while (_0x401177[_0x2217c3(0x1cb)](0x0) == '\x20')
            _0x401177 = _0x401177['substring'](0x1);
        if (_0x401177[_0x2217c3(0x1be)](_0x2e3b28) == 0x0)
            return _0x2e3b28 = _0x401177[_0x2217c3(0x14c)](_0x2e3b28[_0x2217c3(0x148)], _0x401177[_0x2217c3(0x148)]),
            _0x2e3b28[_0x2217c3(0x235)](/\+/g, '\x20');
    }
    return '';
}
function _0x1683(_0x128796, _0x594cc1) {
    var _0x37d54b = _0x37d5();
    return _0x1683 = function(_0x1683a1, _0x24dc4c) {
        _0x1683a1 = _0x1683a1 - 0x116;
        var _0xcb7cc6 = _0x37d54b[_0x1683a1];
        return _0xcb7cc6;
    }
    ,
    _0x1683(_0x128796, _0x594cc1);
}
window['onclick'] = function(_0x28dee1) {
    var _0xb22cdc = _0x2fbe14;
    !_0x28dee1['target'][_0xb22cdc(0x153)](_0xb22cdc(0x190)) && document[_0xb22cdc(0x18d)](_0xb22cdc(0x187))[_0xb22cdc(0x158)][_0xb22cdc(0x204)]('is-active');
}
;
function openErrorModal(_0x54c5af) {
    var _0x4707a8 = _0x2fbe14;
    document[_0x4707a8(0x17d)](_0x4707a8(0x139))[_0x4707a8(0x1e6)] = _0x54c5af,
    document[_0x4707a8(0x17d)](_0x4707a8(0x1b4))[_0x4707a8(0x158)]['toggle'](_0x4707a8(0x203));
}
function closeAllModal() {
    var _0x5192f5 = _0x2fbe14
      , _0xa8fe31 = document[_0x5192f5(0x168)](_0x5192f5(0x12a));
    for (var _0xdd330e = 0x0; _0xdd330e < _0xa8fe31[_0x5192f5(0x148)]; _0xdd330e++) {
        _0xa8fe31[_0xdd330e][_0x5192f5(0x158)][_0x5192f5(0x204)](_0x5192f5(0x203));
    }
}
document[_0x2fbe14(0x237)](_0x2fbe14(0x23c), keyDownEvent);
function keyDownEvent(_0x1a88cb) {
    var _0x469629 = _0x2fbe14;
    _0x1a88cb[_0x469629(0x1da)] === _0x469629(0x19f) && (closeAllModal(),
    closeFullScreen(fullscreenEditor));
}
function makeFav() {
    var _0x2c6d38 = _0x2fbe14
      , _0x43e054 = localStorage[_0x2c6d38(0x22c)](_0x2c6d38(0x238));
    _0x43e054 == null || _0x43e054 === undefined ? _0x43e054 = [] : _0x43e054 = JSON['parse'](_0x43e054),
    document[_0x2c6d38(0x17d)](_0x2c6d38(0x1b1))[_0x2c6d38(0x202)] === _0x2c6d38(0x1c4) ? (document[_0x2c6d38(0x17d)]('favIcon')[_0x2c6d38(0x20e)]('http://www.w3.org/1999/xlink', _0x2c6d38(0x15e), '#heart-no-fill'),
    document[_0x2c6d38(0x17d)](_0x2c6d38(0x1b1))[_0x2c6d38(0x202)] = 'Add\x20to\x20Fav',
    removeFav(_0x43e054)) : (document['getElementById']('favIcon')[_0x2c6d38(0x20e)](_0x2c6d38(0x1ce), _0x2c6d38(0x15e), _0x2c6d38(0x157)),
    document[_0x2c6d38(0x17d)](_0x2c6d38(0x1b1))['innerText'] = _0x2c6d38(0x1c4),
    addFav(_0x43e054));
}
function setRecently() {
    var _0x54cc8c = _0x2fbe14;
    if (gViewName !== _0x54cc8c(0x1a5) && gViewName !== _0x54cc8c(0x1f1))
        return ![];
    let _0xbc7d12 = JSON['parse'](localStorage['getItem'](_0x54cc8c(0x11e)));
    _0xbc7d12 != null && _0xbc7d12[_0x54cc8c(0x148)] != 0x0 && document[_0x54cc8c(0x17d)](_0x54cc8c(0x1e2))[_0x54cc8c(0x158)]['remove'](_0x54cc8c(0x177));
    let _0x42601a = []
      , _0x154696 = 0x1;
    for (let _0x1f2940 = 0x1; _0x1f2940 <= 0x5 && _0x154696 > 0x0; _0x1f2940++) {
        _0x154696 = _0xbc7d12['length'] - _0x1f2940;
        let _0x2572f3 = _0xbc7d12[_0x154696]['title']
          , _0x1dc938 = _0xbc7d12[_0x154696][_0x54cc8c(0x1ea)];
        (_0x2572f3 == null || _0x2572f3[_0x54cc8c(0x151)]()['length'] == 0x0) && (_0x2572f3 = _0x1dc938[_0x54cc8c(0x184)]());
        let _0x5a9a01 = '';
        if (_0x2572f3[_0x54cc8c(0x148)] < 0x14)
            _0x5a9a01 = 'is-large';
        else {
            if (_0x2572f3[_0x54cc8c(0x148)] < 0x18)
                _0x5a9a01 = _0x54cc8c(0x161);
            else
                _0x2572f3[_0x54cc8c(0x148)] < 0x1e ? _0x5a9a01 = '' : _0x5a9a01 = _0x54cc8c(0x231);
        }
        _0x42601a[_0x54cc8c(0x1e0)](_0x54cc8c(0x127) + _0x5a9a01 + _0x54cc8c(0x211) + _0x1dc938 + '>' + _0x2572f3 + _0x54cc8c(0x12f));
    }
    document[_0x54cc8c(0x17d)](_0x54cc8c(0x1a4)) != null && (document[_0x54cc8c(0x17d)](_0x54cc8c(0x1a4))[_0x54cc8c(0x23d)] = document[_0x54cc8c(0x17d)]('recentlyHomePage')[_0x54cc8c(0x23d)] + _0x42601a[_0x54cc8c(0x234)](''));
}
function setFavorite() {
    var _0x2b087e = _0x2fbe14
      , _0x15ccae = localStorage[_0x2b087e(0x22c)](_0x2b087e(0x238));
    if (_0x15ccae == null || _0x15ccae === undefined || _0x15ccae[_0x2b087e(0x148)] === 0x0) {
        _0x15ccae = [];
        return;
    } else
        _0x15ccae = JSON[_0x2b087e(0x20a)](_0x15ccae);
    for (var _0x1fb073 = _0x15ccae[_0x2b087e(0x148)] - 0x1; _0x1fb073 >= 0x0; _0x1fb073--) {
        if (gViewName === _0x15ccae[_0x1fb073][_0x2b087e(0x1ea)]) {
            document[_0x2b087e(0x17d)](_0x2b087e(0x130))[_0x2b087e(0x20e)](_0x2b087e(0x1ce), _0x2b087e(0x15e), _0x2b087e(0x157)),
            document[_0x2b087e(0x17d)](_0x2b087e(0x1b1))[_0x2b087e(0x202)] = _0x2b087e(0x1c4);
            break;
        }
    }
    reDrawFavMenu(_0x15ccae);
}
function addFav(_0x555518) {
    var _0x9efb32 = _0x2fbe14;
    document['getElementById'](_0x9efb32(0x170))[_0x9efb32(0x137)][_0x9efb32(0x186)] = _0x9efb32(0x19a),
    document[_0x9efb32(0x17d)](_0x9efb32(0x170))[_0x9efb32(0x137)]['color'] = '#FFFFFF',
    setTimeout(function() {
        var _0x2bf5d7 = _0x9efb32;
        document[_0x2bf5d7(0x17d)](_0x2bf5d7(0x170))[_0x2bf5d7(0x137)][_0x2bf5d7(0x186)] = '',
        document[_0x2bf5d7(0x17d)](_0x2bf5d7(0x170))[_0x2bf5d7(0x137)][_0x2bf5d7(0x1de)] = '';
    }, 0x1f4);
    var _0x1c9898 = {
        'title': document[_0x9efb32(0x17d)](_0x9efb32(0x19e))['textContent'][_0x9efb32(0x151)](),
        'view': gViewName
    };
    _0x555518[_0x9efb32(0x1e0)](_0x1c9898),
    localStorage[_0x9efb32(0x121)]('favoriteList', JSON['stringify'](_0x555518)),
    reDrawFavMenu(_0x555518);
}
function removeFav(_0x5ebb3c) {
    var _0x379456 = _0x2fbe14;
    for (var _0x313528 = _0x5ebb3c[_0x379456(0x148)] - 0x1; _0x313528 >= 0x0; _0x313528--) {
        if (gViewName === _0x5ebb3c[_0x313528][_0x379456(0x1ea)]) {
            _0x5ebb3c[_0x379456(0x196)](_0x313528, 0x1),
            localStorage[_0x379456(0x121)](_0x379456(0x238), JSON['stringify'](_0x5ebb3c));
            break;
        }
    }
    reDrawFavMenu(_0x5ebb3c);
}
function reDrawFavMenu(_0x7f3846) {
    var _0xac6c58 = _0x2fbe14
      , _0x235380 = '';
    if (_0x7f3846[_0xac6c58(0x148)] === 0x0) {
        document[_0xac6c58(0x17d)](_0xac6c58(0x1a7))[_0xac6c58(0x23d)] = '<p>None</p>';
        return;
    }
    for (var _0x12929f = _0x7f3846[_0xac6c58(0x148)] - 0x1; _0x12929f >= 0x0; _0x12929f--) {
        _0x235380 = _0x235380 + _0xac6c58(0x20f) + _0x7f3846[_0x12929f][_0xac6c58(0x1ea)] + '\x22>' + _0x7f3846[_0x12929f]['title'] + '</a>';
    }
    document[_0xac6c58(0x17d)](_0xac6c58(0x1a7))[_0xac6c58(0x23d)] = _0x235380;
}
var cbCom = _0x2fbe14(0x21c)
  , cbURLService = cbCom + _0x2fbe14(0x171)
  , fullscreenEditor = ''
  , spamMessage = _0x2fbe14(0x1c8);
document[_0x2fbe14(0x237)](_0x2fbe14(0x224), setDefaultData),
(function() {
    var _0x45ffaa = _0x2fbe14
      , _0x291164 = /(\r?\n|\r)/g
      , _0x2e19bb = /(\r?\n|\r|\s+)/g;
    window[_0x45ffaa(0x217)] = {
        'count': function(_0xa1c5c8, _0x4440b8) {
            var _0x5eb10a = _0x45ffaa;
            _0x4440b8 = _0x4440b8 || {},
            _0x4440b8[_0x5eb10a(0x11d)] = _0x4440b8[_0x5eb10a(0x11d)] || 0x1,
            _0x4440b8[_0x5eb10a(0x159)] = _0x4440b8[_0x5eb10a(0x159)] || ![];
            var _0x1385ae = _0xa1c5c8[_0x5eb10a(0x148)]
              , _0x50a372 = _0x1385ae - _0xa1c5c8[_0x5eb10a(0x235)](/[\u0100-\uFFFF]/g, '')[_0x5eb10a(0x148)]
              , _0x1b716c = _0x1385ae - _0xa1c5c8['replace'](_0x291164, '')[_0x5eb10a(0x148)];
            return _0x4440b8[_0x5eb10a(0x159)] ? (_0xa1c5c8 = _0xa1c5c8[_0x5eb10a(0x235)](_0x2e19bb, ''),
            _0xa1c5c8[_0x5eb10a(0x148)] + _0x50a372) : _0x1385ae + _0x50a372 + Math[_0x5eb10a(0x14e)](0x0, _0x4440b8['lineBreaks'] * (_0x1b716c - 0x1));
        },
        'format': function(_0x59c4c9, _0x5d792a) {
            var _0x299244 = _0x45ffaa
              , _0x165729 = 0x0;
            while (_0x59c4c9 > 0x400) {
                _0x59c4c9 /= 0x400,
                _0x165729++;
            }
            return _0x59c4c9 = Math[_0x299244(0x22e)](_0x59c4c9 * 0x64) / 0x64,
            _0x165729 = ['', 'K', 'M', 'G', 'T'][_0x165729],
            (_0x5d792a ? _0x59c4c9 : _0x299244(0x1e5) + _0x59c4c9 + _0x299244(0x222)) + '\x20' + _0x165729 + 'B';
        }
    };
}());
function saveRecentlyUsed() {
    var _0x2daa18 = _0x2fbe14;
    if (localStorage) {
        var _0x59175e = localStorage[_0x2daa18(0x22c)](_0x2daa18(0x11e));
        _0x59175e == null || _0x59175e === undefined ? _0x59175e = [] : _0x59175e = JSON['parse'](_0x59175e);
        createRecentUsedLink(_0x59175e),
        _0x59175e = _0x59175e['filter'](function(_0x2f11aa) {
            var _0x50609c = _0x2daa18;
            return _0x2f11aa[_0x50609c(0x1ea)] != gViewName;
        });
        _0x59175e != null && _0x59175e !== undefined && _0x59175e[_0x2daa18(0x148)] >= 0xa && _0x59175e[_0x2daa18(0x135)]();
        var _0x129e6b = {
            'title': document[_0x2daa18(0x17d)](_0x2daa18(0x19e))['textContent'][_0x2daa18(0x151)](),
            'view': gViewName,
            'date': new Date()
        };
        console['log']('\x20saveRecentlyUsed\x20view:\x20' + gViewName + _0x2daa18(0x128) + document[_0x2daa18(0x17d)](_0x2daa18(0x19e))[_0x2daa18(0x1e6)][_0x2daa18(0x151)]()),
        _0x59175e[_0x2daa18(0x1e0)](_0x129e6b),
        localStorage[_0x2daa18(0x121)](_0x2daa18(0x11e), JSON[_0x2daa18(0x228)](_0x59175e));
    }
}
function createRecentUsedLink(_0x4d08e0) {
    var _0x5ee9c6 = _0x2fbe14
      , _0x3bc113 = [];
    for (var _0x2d8241 = _0x4d08e0[_0x5ee9c6(0x148)] - 0x1; _0x2d8241 >= 0x0; _0x2d8241--) {
        var _0x56c25e = _0x4d08e0[_0x2d8241]['title']
          , _0x5e0649 = _0x4d08e0[_0x2d8241][_0x5ee9c6(0x1ea)];
        (_0x56c25e == null || _0x56c25e[_0x5ee9c6(0x151)]()['length'] == 0x0) && (_0x56c25e = _0x5e0649[_0x5ee9c6(0x184)]()),
        _0x3bc113[_0x5ee9c6(0x1e0)](_0x5ee9c6(0x1f8) + _0x5e0649 + '>' + _0x56c25e + _0x5ee9c6(0x156));
    }
    document[_0x5ee9c6(0x17d)](_0x5ee9c6(0x141)) != null && (document['getElementById'](_0x5ee9c6(0x141))['innerHTML'] = _0x3bc113['join'](''));
}
function loadNewView() {
    var _0x3431d3 = _0x2fbe14;
    console.log("Data Value: "+ _0x3431d3);
    console.log("Window Location name is : "+gViewName);
    window['location'][_0x3431d3(0x1bb)] = window[_0x3431d3(0x1f0)][_0x3431d3(0x169)] + '/' + gViewName;
}
function setURLParameters() {
    urlParam = function(_0x123b4b) {
        var _0x49ad38 = _0x1683
          , _0x194ce1 = new RegExp(_0x49ad38(0x192) + _0x123b4b + _0x49ad38(0x209))[_0x49ad38(0x15d)](window[_0x49ad38(0x1f0)]['href']);
        if (_0x194ce1 == null)
            return null;
        return decodeURI(_0x194ce1[0x1]) || 0x0;
    }
    ;
}
function setDefaultData() {
    saveRecentlyUsed(),
    setURLParameters(),
    setIsAutoCheckBox();
    if (loadRestoreDataLogin())
        return;
    else {
        if (loadDataFromExternalURL())
            return;
        else {
            if (loadDataFromEnteralInput())
                return;
            else {
                if (loadDataFromSavedData())
                    return;
            }
        }
    }
}
function setIsAutoCheckBox() {
    var _0x4ef70a = _0x2fbe14;
    let _0xa4d836 = window[_0x4ef70a(0x142)][_0x4ef70a(0x22c)](_0x4ef70a(0x167) + gViewName);
    _0xa4d836 != null && (_0xa4d836 = JSON['parse'](_0xa4d836),
    document[_0x4ef70a(0x17d)](_0x4ef70a(0x22f))['checked'] = _0xa4d836),
    document[_0x4ef70a(0x17d)]('isAuto') && document[_0x4ef70a(0x17d)](_0x4ef70a(0x22f))[_0x4ef70a(0x237)](_0x4ef70a(0x178), _0x3fef73=>{
        var _0x1eb24d = _0x4ef70a;
        window[_0x1eb24d(0x142)][_0x1eb24d(0x121)](_0x1eb24d(0x167) + gViewName, _0x3fef73[_0x1eb24d(0x194)][_0x1eb24d(0x119)]);
    }
    );
}
function setFromLocalStorage() {
    var _0x37223b = _0x2fbe14;
    if (localStorage) {
        var _0xe05558 = localStorage['getItem'](gViewName);
        _0xe05558 != null && _0xe05558['trim']()[_0x37223b(0x148)] != 0x0 && (typeof setToEditor == 'function' && setToEditor(_0xe05558));
    }
}
function loadRestoreDataLogin() {
    var _0x23ac0a = _0x2fbe14
      , _0x5850f5 = null;
    if (urlParam(_0x23ac0a(0x16e)) != null)
        return _0x5850f5 = urlParam(_0x23ac0a(0x16e)),
        _0x5850f5 != null && _0x5850f5[_0x23ac0a(0x148)] != 0x0 && _0x5850f5 === _0x23ac0a(0x14b) && setFromLocalStorage(),
        !![];
    return ![];
}
function loadDataFromExternalURL() {
    var _0x276c05 = _0x2fbe14
      , _0x186047 = null;
    if (urlParam(_0x276c05(0x1c0)) != null)
        return _0x186047 = urlParam(_0x276c05(0x1c0)),
        _0x186047 != null && _0x186047['length'] != 0x0 && (title = _0x276c05(0x1f7) + _0x186047,
        document[_0x276c05(0x17d)]('subtitle') && (document['getElementById']('subtitle')[_0x276c05(0x1e6)] = title),
        loadExternalUrl(_0x186047, gViewName)),
        !![];
    return ![];
}
function loadDataFromEnteralInput() {
    var _0x1ec294 = _0x2fbe14
      , _0x5acf2d = null;
    if (urlParam('input') != null)
        return _0x5acf2d = urlParam('input'),
        _0x5acf2d != null && _0x5acf2d['length'] != 0x0 && (title = _0x1ec294(0x1d0),
        document[_0x1ec294(0x17d)](_0x1ec294(0x197)) && (document[_0x1ec294(0x17d)](_0x1ec294(0x197))[_0x1ec294(0x1e6)] = title),
        setToEditor(_0x5acf2d)),
        !![];
    return ![];
}
function loadExternalUrl(_0x10f904, _0x4dc1b7) {
    var _0x1921ac = _0x2fbe14;
    parameters = _0x1921ac(0x12e) + _0x10f904,
    AJAXCB({
        'data': parameters,
        'serverURL': cbURLService,
        'success': function(_0x1669f0) {
            var _0x4ebf92 = _0x1921ac;
            try {
                _0x1669f0[_0x4ebf92(0x1df)][_0x4ebf92(0x148)] === 0x0 || _0x1669f0[_0x4ebf92(0x1df)] === '404:\x20Not\x20Found' ? openErrorModal(_0x4ebf92(0x132) + _0x10f904) : (setToEditor(_0x1669f0[_0x4ebf92(0x1df)]),
                updateTitleForURL(_0x4ebf92(0x1f7) + _0x10f904));
            } catch (_0x1bfb8a) {
                openErrorModal(_0x4ebf92(0x19b) + _0x4dc1b7 + _0x4ebf92(0x23b) + _0x4dc1b7 + '\x20URL.');
            }
        },
        'error': function(_0x3625e7) {
            var _0x1e5d99 = _0x1921ac;
            openErrorModal(_0x1e5d99(0x1f6) + _0x3625e7[_0x1e5d99(0x146)]);
        }
    });
}
function loadDataFromSavedData(_0x69c6d8) {
    var _0x179f0e = _0x2fbe14;
    if (document[_0x179f0e(0x17d)](_0x179f0e(0x1ca)) === null || document['getElementById'](_0x179f0e(0x1ca)) === undefined)
        return;
    var _0x69c6d8 = document['getElementById'](_0x179f0e(0x1ca))[_0x179f0e(0x215)]
      , _0x5abaa3 = document[_0x179f0e(0x17d)](_0x179f0e(0x213))[_0x179f0e(0x215)];
    parameters = 'urlid=' + _0x69c6d8,
    AJAXCB({
        'data': parameters,
        'serverURL': globalurl + _0x179f0e(0x232),
        'success': function(_0x4e321c) {
            var _0x1e4925 = _0x179f0e;
            try {
                gViewName == _0x1e4925(0x1b6) ? setDataFromDBForAllEditor(_0x4e321c[_0x1e4925(0x1df)]) : setToEditor(_0x4e321c['responseText']),
                updateTitleForURL(_0x5abaa3);
            } catch (_0x3b30fa) {
                openErrorModal(_0x1e4925(0x19b) + view + '\x20Data\x20Or\x20Invalid\x20' + view + _0x1e4925(0x11c));
            }
        },
        'error': function(_0x106392) {
            var _0x6dc9a7 = _0x179f0e;
            openErrorModal(_0x6dc9a7(0x1c1));
        }
    });
}
function updateTitleForURL(_0x391264) {
    var _0x1cbd6c = _0x2fbe14;
    document[_0x1cbd6c(0x17d)]('permalink')[_0x1cbd6c(0x137)][_0x1cbd6c(0x1a9)] = '',
    document[_0x1cbd6c(0x17d)](_0x1cbd6c(0x197))[_0x1cbd6c(0x1e6)] = _0x391264;
}
function manageDPS() {
    var _0x2456d0 = _0x2fbe14;
    document[_0x2456d0(0x17d)](_0x2456d0(0x1ab))[_0x2456d0(0x158)]['toggle'](_0x2456d0(0x203));
}
function openSaveModal() {
    var _0x3d4d5f = _0x2fbe14;
    data = getValueFromInputEditor();
    if (data === null || data === undefined || data['trim']()['length'] === 0x0) {
        openErrorModal('There\x20is\x20no\x20data\x20to\x20save.');
        return;
    }
    document[_0x3d4d5f(0x17d)](_0x3d4d5f(0x1cc)) === null ? AJAXCB({
        'serverURL': _0x3d4d5f(0x1f5),
        'success': function(_0x5ea2ac) {
            var _0x392dcd = _0x3d4d5f;
            document[_0x392dcd(0x20c)][_0x392dcd(0x1b5)](_0x392dcd(0x14d), _0x5ea2ac[_0x392dcd(0x1df)]),
            document[_0x392dcd(0x17d)](_0x392dcd(0x1cc))[_0x392dcd(0x158)][_0x392dcd(0x155)]('is-active'),
            cleanSaveForm();
        }
    }) : (document[_0x3d4d5f(0x17d)](_0x3d4d5f(0x1cc))[_0x3d4d5f(0x158)][_0x3d4d5f(0x155)](_0x3d4d5f(0x203)),
    cleanSaveForm());
}
function cleanSaveForm() {
    var _0x512338 = _0x2fbe14;
    document[_0x512338(0x17d)](_0x512338(0x185))[_0x512338(0x215)] = '',
    document['getElementById'](_0x512338(0x1e9))['value'] = '',
    document[_0x512338(0x17d)](_0x512338(0x205))[_0x512338(0x215)] = '',
    document['getElementById'](_0x512338(0x12d))[_0x512338(0x215)] = '1440';
}
function isSpamCheckTitle(_0x63cef1) {
    var _0xa8a6ff = _0x2fbe14;
    let _0x4441c1 = [_0xa8a6ff(0x19c), _0xa8a6ff(0x21d), 'cheats', 'free\x20coins', 'unlimited\x20gems', _0xa8a6ff(0x1fd), _0xa8a6ff(0x1bb), _0xa8a6ff(0x1e1), _0xa8a6ff(0x14f), 'torrent', _0xa8a6ff(0x13a), _0xa8a6ff(0x18e), _0xa8a6ff(0x229), _0xa8a6ff(0x191), _0xa8a6ff(0x116), _0xa8a6ff(0x1e3), _0xa8a6ff(0x236), _0xa8a6ff(0x1dc), _0xa8a6ff(0x1e3), _0xa8a6ff(0x216), _0xa8a6ff(0x195), _0xa8a6ff(0x212), 'ass', 'nigger', _0xa8a6ff(0x1d8), _0xa8a6ff(0x1e8), _0xa8a6ff(0x1a8), _0xa8a6ff(0x1b8), _0xa8a6ff(0x13c)];
    for (var _0x32c222 = 0x0; _0x32c222 < _0x4441c1['length']; _0x32c222++) {
        if (_0x63cef1[_0xa8a6ff(0x174)]()[_0xa8a6ff(0x154)](_0x4441c1[_0x32c222]))
            return !![];
    }
    return ![];
}
function isSpamCheckData(_0x1dd6d2) {
    var _0x2312f1 = _0x2fbe14;
    let _0x4fce4b = ['CLICK\x20HERE\x20TO\x20HACK', _0x2312f1(0x13a), 'coin-generator', '247sports.com', _0x2312f1(0x19d), 'free\x20cash\x20app', _0x2312f1(0x1dc)];
    for (var _0x37463d = 0x0; _0x37463d < _0x4fce4b[_0x2312f1(0x148)]; _0x37463d++) {
        if (_0x1dd6d2[_0x2312f1(0x174)]()[_0x2312f1(0x154)](_0x4fce4b[_0x37463d]))
            return !![];
    }
    if (gViewName == _0x2312f1(0x22d)) {
        if (!isValidHTMLString(_0x1dd6d2))
            return !![];
    }
    return ![];
}
function save() {
    var _0x212e9c = _0x2fbe14;
    data = getValueFromInputEditor();
    (data === undefined || data[_0x212e9c(0x151)]()[_0x212e9c(0x148)] === 0x0) && (closeAllModal(),
    openErrorModal(_0x212e9c(0x18b)));
    var _0x47c8e3 = document[_0x212e9c(0x17d)]('saveTitle')[_0x212e9c(0x215)]
      , _0x14c706 = document[_0x212e9c(0x17d)](_0x212e9c(0x12d))['value'];
    if (_0x47c8e3['trim']()[_0x212e9c(0x148)] < 0x6)
        return document[_0x212e9c(0x17d)](_0x212e9c(0x1db))[_0x212e9c(0x158)][_0x212e9c(0x204)](_0x212e9c(0x177)),
        document[_0x212e9c(0x17d)](_0x212e9c(0x185))['classList']['add'](_0x212e9c(0x1ee)),
        ![];
    else
        document['getElementById'](_0x212e9c(0x1db))['classList'][_0x212e9c(0x16a)](_0x212e9c(0x177)),
        document[_0x212e9c(0x17d)](_0x212e9c(0x185))[_0x212e9c(0x158)][_0x212e9c(0x204)](_0x212e9c(0x1ee));
    var _0x16963b = document[_0x212e9c(0x17d)](_0x212e9c(0x1e9))[_0x212e9c(0x215)]
      , _0x3846be = document[_0x212e9c(0x17d)](_0x212e9c(0x205))[_0x212e9c(0x215)];
    if (isSpamCheckTitle(_0x47c8e3) || isSpamCheckTitle(_0x16963b)) {
        closeAllModal(),
        openErrorModal(spamMessage);
        return;
    }
    if (isSpamCheckData(data)) {
        closeAllModal(),
        openErrorModal(spamMessage);
        return;
    }
    var _0x26ad4c = gViewName;
    _0x26ad4c == 'xmlvalidate' && (_0x26ad4c = 'xmlvalidator');
    gViewName == 'alleditor' && (data = data + '|' + document[_0x212e9c(0x17d)](_0x212e9c(0x218))['value']);
    var _0x28dac3 = _0x212e9c(0x21a) + encodeURIComponent(data) + _0x212e9c(0x220) + _0x26ad4c + _0x212e9c(0x22b) + encodeURIComponent(_0x47c8e3) + '&desc=' + encodeURIComponent(_0x16963b) + _0x212e9c(0x147) + encodeURIComponent(_0x3846be) + '&expiryvalue=' + encodeURIComponent(_0x14c706);
    return AJAXCB({
        'data': _0x28dac3,
        'serverURL': _0x212e9c(0x1fc),
        'success': function(_0xcee8) {
            var _0x277dfc = _0x212e9c;
            if (_0xcee8[_0x277dfc(0x1df)] === 'spam') {
                openErrorModal(spamMessage);
                return;
            }
            var _0x21e96c = _0x277dfc(0x116) + location[_0x277dfc(0x1ae)] + '/' + _0x26ad4c + '/' + _0xcee8['responseText'];
            _0x21e96c = _0x21e96c[_0x277dfc(0x235)]('\x20', ''),
            document[_0x277dfc(0x17d)]('permalink')[_0x277dfc(0x137)]['display'] = '',
            document[_0x277dfc(0x17d)](_0x277dfc(0x197))[_0x277dfc(0x1e6)] = _0x47c8e3,
            document[_0x277dfc(0x17d)](_0x277dfc(0x120))[_0x277dfc(0x23a)](_0x277dfc(0x1bb), _0x21e96c),
            document[_0x277dfc(0x17d)](_0x277dfc(0x120))['textContent'] = _0x21e96c;
        },
        'error': function(_0x4da9ab) {
            var _0x5d77c5 = _0x212e9c;
            openErrorModal(_0x5d77c5(0x1c1));
        }
    }),
    ![];
}
function AJAXCB(_0x3a12d6) {
    var _0x941d75 = _0x2fbe14;
    xhr = new XMLHttpRequest(),
    xhr['open'](_0x941d75(0x16b), _0x3a12d6[_0x941d75(0x1f3)]),
    xhr[_0x941d75(0x206)](_0x941d75(0x1ba), _0x941d75(0x11b));
    var _0x3e793f = document[_0x941d75(0x17d)]('ajaxProgressBar');
    _0x3e793f['style'][_0x941d75(0x1a9)] = 'block',
    xhr[_0x941d75(0x1b0)] = function() {
        var _0x49fa2a = _0x941d75;
        if (xhr[_0x49fa2a(0x1d5)] === 0xc8)
            _0x3e793f[_0x49fa2a(0x137)]['display'] = _0x49fa2a(0x20b),
            _0x3a12d6[_0x49fa2a(0x122)](xhr);
        else
            xhr[_0x49fa2a(0x1d5)] !== 0xc8 && (_0x3e793f[_0x49fa2a(0x137)][_0x49fa2a(0x1a9)] = 'none',
            openErrorModal(_0x49fa2a(0x164) + xhr[_0x49fa2a(0x1df)]),
            _0x3a12d6[_0x49fa2a(0x1fb)] !== undefined && _0x3a12d6[_0x49fa2a(0x1fb)](xhr));
    }
    ,
    xhr[_0x941d75(0x1af)] = function() {
        var _0x784342 = _0x941d75;
        _0x3e793f[_0x784342(0x137)][_0x784342(0x1a9)] = 'none',
        openErrorModal(_0x784342(0x164) + xhr[_0x784342(0x1df)]),
        _0x3a12d6['error'] !== undefined && _0x3a12d6[_0x784342(0x1fb)]();
    }
    ,
    xhr[_0x941d75(0x143)](_0x3a12d6[_0x941d75(0x17a)]),
    closeAllModal();
}
function openURLModal() {
    var _0x51c976 = _0x2fbe14;
    document[_0x51c976(0x17d)](_0x51c976(0x1d7)) === null ? AJAXCB({
        'serverURL': '/common-modals',
        'success': function(_0x47cb55) {
            var _0x30339c = _0x51c976;
            document[_0x30339c(0x20c)]['insertAdjacentHTML'](_0x30339c(0x14d), _0x47cb55[_0x30339c(0x1df)]),
            openURLModalAfterLoad();
        }
    }) : openURLModalAfterLoad();
}
function openURLModalAfterLoad() {
    var _0x2fff36 = _0x2fbe14;
    document[_0x2fff36(0x17d)](_0x2fff36(0x1d7))[_0x2fff36(0x158)][_0x2fff36(0x155)]('is-active'),
    document['getElementById'](_0x2fff36(0x1eb))['value'] = '',
    document[_0x2fff36(0x17d)](_0x2fff36(0x1eb))[_0x2fff36(0x15f)]();
}
function loadURLFromUI() {
    var _0x5dc84a = _0x2fbe14
      , _0x172337 = document[_0x5dc84a(0x17d)]('urlText')['value']
      , _0xe7c9a1 = _0x5dc84a(0x12e) + encodeURIComponent(_0x172337);
    AJAXCB({
        'data': _0xe7c9a1,
        'serverURL': cbURLService,
        'success': function(_0x2f15b1) {
            var _0x8f406f = _0x5dc84a;
            _0x2f15b1[_0x8f406f(0x1df)][_0x8f406f(0x148)] === 0x0 || _0x2f15b1['responseText'] === _0x8f406f(0x17c) ? openErrorModal(_0x8f406f(0x132) + _0x172337) : (setToEditor(_0x2f15b1[_0x8f406f(0x1df)]),
            closeAllModal());
        }
    });
}
function closeURLModal() {
    var _0x34a18c = _0x2fbe14;
    document[_0x34a18c(0x17d)](_0x34a18c(0x1d7))[_0x34a18c(0x158)][_0x34a18c(0x204)]('is-active');
}
function createFile(_0x10721f, _0x3ed15f) {
    var _0x34ab79 = _0x2fbe14
      , _0xbf9188 = '';
    _0x3ed15f == undefined ? (typeof editorResult != _0x34ab79(0x172) && (_0xbf9188 = editorResult[_0x34ab79(0x145)]()),
    _0xbf9188[_0x34ab79(0x151)]()['length'] == 0x0 && typeof outputACEEditor != _0x34ab79(0x172) && outputACEEditor != null && (_0xbf9188 = outputACEEditor[_0x34ab79(0x145)]()),
    _0xbf9188[_0x34ab79(0x151)]()[_0x34ab79(0x148)] == 0x0 && typeof inputACEEditor != _0x34ab79(0x172) && (_0xbf9188 = inputACEEditor[_0x34ab79(0x145)]()),
    _0xbf9188['trim']()[_0x34ab79(0x148)] == 0x0 && typeof editorAce != 'undefined' && (_0xbf9188 = editorAce['getValue']()),
    _0xbf9188[_0x34ab79(0x151)]()[_0x34ab79(0x148)] == 0x0 && typeof outputTextArea != _0x34ab79(0x172) && (_0xbf9188 = outputTextArea[_0x34ab79(0x215)]),
    _0xbf9188[_0x34ab79(0x151)]()['length'] == 0x0 && typeof outputJSONEditor != 'undefined' && (_0xbf9188 = outputJSONEditor[_0x34ab79(0x210)]())) : (_0xbf9188 = $('#' + _0x3ed15f)[_0x34ab79(0x221)](),
    _0x10721f == 'html' && (_0xbf9188 = vkbeautify[_0x34ab79(0x1b7)](_0xbf9188)));
    _0x10721f == _0x34ab79(0x230) && (_0x10721f = converted);
    if (_0xbf9188[_0x34ab79(0x151)]()['length'] != 0x0) {
        var _0x58b934 = new Blob(['' + _0xbf9188 + ''],{
            'type': _0x34ab79(0x13d)
        });
        fileDownloadCB(_0x58b934, gViewName + '.' + _0x10721f);
    } else
        openErrorModal(_0x34ab79(0x20d));
}
function fileDownloadCB(_0x53b76c, _0x265f49) {
    var _0x3ed5b3 = _0x2fbe14;
    typeof saveAs !== _0x3ed5b3(0x227) ? loadFiles([JS_FILE_SAVER_URL])['then'](function() {
        saveAs(_0x53b76c, _0x265f49);
    }) : saveAs(_0x53b76c, _0x265f49);
}
function copyToClipboard(_0x4e96df) {
    var _0x1228b9 = _0x2fbe14;
    const _0x282df3 = document[_0x1228b9(0x18a)]('textarea');
    _0x282df3[_0x1228b9(0x215)] = _0x4e96df,
    document['body'][_0x1228b9(0x214)](_0x282df3),
    _0x282df3[_0x1228b9(0x1c5)](),
    document[_0x1228b9(0x16f)](_0x1228b9(0x1c2)),
    document['body'][_0x1228b9(0x1dd)](_0x282df3),
    displayCenterMessage(_0x1228b9(0x1a3), _0x1228b9(0x122));
}
function displayCenterMessage(_0x185477, _0x230d4d) {
    var _0x285727 = _0x2fbe14;
    document['getElementById']('topMessage')[_0x285727(0x1e6)] = _0x185477,
    _0x230d4d === _0x285727(0x122) ? (document[_0x285727(0x17d)]('topMessage')['classList']['add']('is-info'),
    document[_0x285727(0x17d)](_0x285727(0x1f4))['classList']['remove']('is-danger')) : (document['getElementById'](_0x285727(0x1f4))[_0x285727(0x158)]['add'](_0x285727(0x1ee)),
    document[_0x285727(0x17d)]('topMessage')[_0x285727(0x158)][_0x285727(0x204)](_0x285727(0x144))),
    document[_0x285727(0x17d)]('topMessage')[_0x285727(0x12b)][_0x285727(0x137)][_0x285727(0x1a9)] = '',
    setTimeout(function() {
        var _0x47fb70 = _0x285727;
        document[_0x47fb70(0x17d)]('topMessage')[_0x47fb70(0x12b)][_0x47fb70(0x137)][_0x47fb70(0x1a9)] = 'none';
    }, 0x7d0);
}
function handleFiles(_0x1a69ff) {
    _0x1a69ff = [..._0x1a69ff],
    _0x1a69ff['forEach'](previewFile);
}
function previewFile(_0x286069) {
    var _0xe7b8db = _0x2fbe14;
    let _0x5adeb6 = new FileReader();
    _0x5adeb6[_0xe7b8db(0x166)](_0x286069),
    _0x5adeb6[_0xe7b8db(0x1aa)] = function() {
        var _0x4cddc5 = _0xe7b8db;
        setToEditor(_0x5adeb6[_0x4cddc5(0x189)]);
    }
    ;
}
function sampleURL() {
    var _0x487455 = _0x2fbe14;
    document[_0x487455(0x17d)](_0x487455(0x1eb))['value'] = document['getElementById'](_0x487455(0x1a1))[_0x487455(0x215)];
}
function savetoLocalStorage(_0x45234b) {
    var _0x36dda4 = _0x2fbe14;
    if (_0x45234b === undefined || _0x45234b[_0x36dda4(0x151)]()[_0x36dda4(0x148)] === 0x0)
        return;
    localStorage && (!gViewName[_0x36dda4(0x174)]()[_0x36dda4(0x1ed)]('excel') && localStorage[_0x36dda4(0x121)](gViewName, _0x45234b));
}
function defaultAction() {
    var _0x377f3e = _0x2fbe14;
    document['getElementById'](_0x377f3e(0x1ef))['click']();
    return;
}
function beforeLogin() {
    var _0x815f49 = _0x2fbe14
      , _0x2f3552 = getValueFromInputEditor();
    savetoLocalStorage(_0x2f3552),
    localStorage[_0x815f49(0x121)](_0x815f49(0x175), lastActionElementName);
}
function saveChanges() {
    savetoLocalStorage(getValueFromInputEditor());
}
function setToEditor(_0x2dc10d) {
    var _0x308a21 = _0x2fbe14;
    (_0x2dc10d == null || _0x2dc10d[_0x308a21(0x148)] == 0x0 || _0x2dc10d == _0x308a21(0x172)) && (_0x2dc10d = ''),
    setValueToInputEditor(_0x2dc10d);
}
var isLazyAceModeSet = ![];
function setupEditorlang(_0x154a11, _0x13b5cd) {
    var _0xa00496 = _0x2fbe14;
    if (isLazyAceModeSet)
        return;
    _0x154a11 != null && _0x154a11 != undefined && (inputACEEditor[_0xa00496(0x140)]()['setMode'](_0xa00496(0x1fe) + _0x154a11),
    inputACEEditor[_0xa00496(0x140)]()[_0xa00496(0x1b2)](!![])),
    _0x13b5cd != null && _0x13b5cd != undefined && outputACEEditor[_0xa00496(0x140)]()[_0xa00496(0x18f)]('ace/mode/' + _0x13b5cd),
    isLazyAceModeSet = !![];
}
function setValueToInputEditor(_0x469ec9) {
    var _0x4d0d1b = _0x2fbe14;
    if (typeof inputACEEditor !== _0x4d0d1b(0x172) && inputACEEditor !== null)
        inputACEEditor[_0x4d0d1b(0x1d4)](_0x469ec9, 0x1);
    else {
        if (typeof inputTextArea !== _0x4d0d1b(0x172))
            inputTextArea[_0x4d0d1b(0x215)] = _0x469ec9,
            defaultAction(),
            typeof updateFooterState !== _0x4d0d1b(0x172) && updateFooterState();
        else
            inputJSONEditor != null && typeof inputJSONEditor !== 'undefined' && (inputJSONEditor['setText'](_0x469ec9),
            defaultAction());
    }
}
function getValueFromInputEditor() {
    var _0x170b39 = _0x2fbe14;
    if (typeof inputACEEditor !== 'undefined' && inputACEEditor[_0x170b39(0x145)]() != undefined && inputACEEditor['getValue']()[_0x170b39(0x148)] != 0x0)
        return inputACEEditor['getValue']();
    else {
        if (typeof inputTextArea !== _0x170b39(0x172) && inputTextArea[_0x170b39(0x215)][_0x170b39(0x148)] != 0x0)
            return inputTextArea[_0x170b39(0x215)];
    }
    if (typeof inputJSONEditor !== 'undefined' && inputJSONEditor[_0x170b39(0x210)]() != undefined && inputJSONEditor[_0x170b39(0x210)]()['length'] != 0x0)
        return inputJSONEditor[_0x170b39(0x210)]();
    return null;
}
function addFullScreen(_0x465c52) {
    var _0x4c13e5 = _0x2fbe14;
    if (_0x465c52 == _0x4c13e5(0x125))
        document[_0x4c13e5(0x17d)]('inputDiv')[_0x4c13e5(0x11a)] = _0x4c13e5(0x16c),
        document[_0x4c13e5(0x17d)]('inputACEEditor')[_0x4c13e5(0x158)][_0x4c13e5(0x16a)]('fsoverlayeditor'),
        document['getElementById'](_0x4c13e5(0x138))[_0x4c13e5(0x158)][_0x4c13e5(0x16a)](_0x4c13e5(0x150)),
        document[_0x4c13e5(0x17d)]('inputFullScreen')['style']['display'] = _0x4c13e5(0x20b),
        document[_0x4c13e5(0x17d)](_0x4c13e5(0x207))['style']['display'] = '',
        fullscreenEditor = _0x4c13e5(0x125),
        inputACEEditor['resize']();
    else
        _0x465c52 == _0x4c13e5(0x1c7) && (document[_0x4c13e5(0x17d)](_0x4c13e5(0x208))['className'] = 'fsoverlay',
        document[_0x4c13e5(0x17d)](_0x4c13e5(0x193))[_0x4c13e5(0x158)][_0x4c13e5(0x16a)](_0x4c13e5(0x1d1)),
        document[_0x4c13e5(0x17d)]('outputACEStatusBar')[_0x4c13e5(0x158)][_0x4c13e5(0x16a)](_0x4c13e5(0x150)),
        document[_0x4c13e5(0x17d)](_0x4c13e5(0x182))[_0x4c13e5(0x137)][_0x4c13e5(0x1a9)] = _0x4c13e5(0x20b),
        document[_0x4c13e5(0x17d)]('outputCloseScreen')[_0x4c13e5(0x137)][_0x4c13e5(0x1a9)] = '',
        fullscreenEditor = 'input',
        outputACEEditor[_0x4c13e5(0x1e4)](),
        fullscreenEditor = _0x4c13e5(0x1c7));
    isFullScreen = !![],
    document['body'][_0x4c13e5(0x137)][_0x4c13e5(0x1ac)] = _0x4c13e5(0x176),
    document['body'][_0x4c13e5(0x137)]['position'] = 'fixed';
}
function closeFullScreen(_0x6f553d) {
    var _0x241756 = _0x2fbe14;
    if (_0x6f553d == _0x241756(0x125))
        document[_0x241756(0x17d)](_0x241756(0x162))['className'] = _0x241756(0x18c),
        document[_0x241756(0x17d)](_0x241756(0x13e))[_0x241756(0x158)][_0x241756(0x204)](_0x241756(0x1d1)),
        document[_0x241756(0x17d)](_0x241756(0x138))[_0x241756(0x158)][_0x241756(0x204)](_0x241756(0x150)),
        document[_0x241756(0x17d)](_0x241756(0x21e))[_0x241756(0x137)][_0x241756(0x1a9)] = '',
        document['getElementById'](_0x241756(0x207))[_0x241756(0x137)][_0x241756(0x1a9)] = _0x241756(0x20b),
        inputACEEditor[_0x241756(0x1e4)]();
    else
        _0x6f553d == 'output' && (document[_0x241756(0x17d)](_0x241756(0x208))['className'] = 'aceEditorBorder',
        document[_0x241756(0x17d)](_0x241756(0x193))[_0x241756(0x158)][_0x241756(0x204)]('fsoverlayeditor'),
        document[_0x241756(0x17d)](_0x241756(0x1ec))[_0x241756(0x158)]['remove']('fixedFooter'),
        document[_0x241756(0x17d)]('outputFullScreen')['style'][_0x241756(0x1a9)] = '',
        document[_0x241756(0x17d)](_0x241756(0x15a))['style'][_0x241756(0x1a9)] = 'none',
        outputACEEditor[_0x241756(0x1e4)]());
    document[_0x241756(0x20c)][_0x241756(0x137)][_0x241756(0x1ac)] = '',
    document[_0x241756(0x20c)][_0x241756(0x137)][_0x241756(0x181)] = '',
    isFullScreen = ![];
}
var inputTextArea = document[_0x2fbe14(0x17d)](_0x2fbe14(0x17b))
  , outputTextArea = document[_0x2fbe14(0x17d)](_0x2fbe14(0x14a));
document[_0x2fbe14(0x237)](_0x2fbe14(0x224), setupEditorAndLoadData);
function setupEditorAndLoadData() {
    inputTextArea !== null && setupInputTextArea();
}
function setupInputTextArea() {
    var _0x300a20 = _0x2fbe14;
    inputTextArea['addEventListener'](_0x300a20(0x125), onInputTextAreaChanged),
    inputTextArea[_0x300a20(0x237)](_0x300a20(0x178), onInputTextAreaChanged),
    document[_0x300a20(0x17d)](_0x300a20(0x163))[_0x300a20(0x237)](_0x300a20(0x179), function() {
        var _0x5adc34 = _0x300a20;
        copyToClipboard(inputTextArea[_0x5adc34(0x215)]),
        inputTextArea[_0x5adc34(0x1c5)]();
    });
}
function onInputTextAreaChanged() {
    var _0x5692d0 = _0x2fbe14;
    document['getElementById'](_0x5692d0(0x22f))[_0x5692d0(0x119)] && document['getElementById'](_0x5692d0(0x1ef))['click'](),
    savetoLocalStorage(inputTextArea[_0x5692d0(0x215)]);
}
function updateFooterState() {
    var _0x267226 = _0x2fbe14
      , _0x34dc8e = _0x267226(0x198) + StringSize[_0x267226(0x11f)](StringSize[_0x267226(0x1cf)](inputTextArea[_0x267226(0x215)]));
    _0x34dc8e = _0x34dc8e + ',\x20' + inputTextArea[_0x267226(0x215)][_0x267226(0x148)] + '\x20Characters',
    document['getElementById'](_0x267226(0x1e7))[_0x267226(0x23d)] = _0x34dc8e;
    if (outputTextArea === null)
        return;
    var _0x31e6ed = 'Size\x20:\x20' + StringSize['format'](StringSize[_0x267226(0x1cf)](outputTextArea[_0x267226(0x215)]));
    ;_0x31e6ed = _0x31e6ed + ',\x20' + outputTextArea['value'][_0x267226(0x148)] + _0x267226(0x223),
    document[_0x267226(0x17d)]('outputFooterStatus')[_0x267226(0x23d)] = _0x31e6ed;
}
function resetFooterStatus() {
    var _0x370288 = _0x2fbe14;
    document[_0x370288(0x17d)]('inputFooterStatus')['innerHTML'] = _0x370288(0x1bc),
    document[_0x370288(0x17d)](_0x370288(0x1b9))['innerHTML'] = _0x370288(0x1bc);
}
function cleanInputTextArea() {
    var _0x2de71d = _0x2fbe14;
    inputTextArea[_0x2de71d(0x215)] = '',
    inputTextArea[_0x2de71d(0x15f)](),
    outputTextArea[_0x2de71d(0x215)] = '',
    resetFooterStatus();
}
function copyOutputTextArea() {
    var _0x4cdb92 = _0x2fbe14;
    copyToClipboard(outputTextArea[_0x4cdb92(0x215)]),
    outputTextArea['select']();
}
function addErrorToOutputTextArea() {
    outputTextArea['classList']['add']('is-danger');
}
function removeErrorToOutputTextArea() {
    var _0x2a33ad = _0x2fbe14;
    outputTextArea[_0x2a33ad(0x158)][_0x2a33ad(0x204)](_0x2a33ad(0x1ee));
}
function getPlainTextToGenerateHash() {
    var _0x21d5ac = _0x2fbe14
      , _0x212c02 = _0x21d5ac(0x1c3);
    switch (Math[_0x21d5ac(0x1d3)](Math[_0x21d5ac(0x123)]() * Math[_0x21d5ac(0x1d3)](0x6))) {
    case 0x0:
        _0x212c02 = 'Geico';
        break;
    case 0x1:
        _0x212c02 = _0x21d5ac(0x1a2);
        break;
    case 0x2:
        _0x212c02 = _0x21d5ac(0x12c);
        break;
    case 0x3:
        _0x212c02 = _0x21d5ac(0x118);
    case 0x4:
        _0x212c02 = _0x21d5ac(0x15b);
    case 0x5:
        _0x212c02 = _0x21d5ac(0x126);
    case 0x6:
        _0x212c02 = _0x21d5ac(0x239);
        break;
    }
    setValueToInputEditor(_0x212c02);
}
function uppercase() {
    var _0x226ac5 = _0x2fbe14;
    outputTextArea[_0x226ac5(0x215)] = outputTextArea[_0x226ac5(0x215)][_0x226ac5(0x184)]();
}
function lowercase() {
    var _0x445cc3 = _0x2fbe14;
    outputTextArea['value'] = outputTextArea['value'][_0x445cc3(0x174)]();
}
function loadCryptoJS(_0x26846b) {
    var _0x478bb1 = _0x2fbe14
      , _0x141021 = _0x478bb1(0x1ad);
    loadFiles([_0x141021])[_0x478bb1(0x149)](function() {
        _0x26846b();
    });
}
function generateMD5Hash() {
    var _0x144d0a = _0x2fbe14;
    if (inputTextArea[_0x144d0a(0x215)][_0x144d0a(0x151)]()[_0x144d0a(0x148)] == 0x0)
        return outputTextArea[_0x144d0a(0x215)] = '',
        ![];
    if (typeof CryptoJS == _0x144d0a(0x172)) {
        loadCryptoJS(generateMD5Hash);
        return;
    } else
        outputTextArea[_0x144d0a(0x215)] = CryptoJS[_0x144d0a(0x21f)](inputTextArea[_0x144d0a(0x215)]),
        updateFooterState();
}
function _0x37d5() {
    var _0x2abc5d = ['block', 'errorModal', 'insertAdjacentHTML', 'alleditor', 'xml', 'cock', 'outputFooterStatus', 'Content-Type', 'href', 'Size\x20:\x200\x20B,\x200\x20Characters', 'log', 'indexOf', 'in\x20setview\x20gViewName:->', 'url', 'Error\x20in\x20data\x20saving', 'copy', 'Geico', 'Added', 'select', '11ArdBSE', 'output', 'Spam\x20Alert!\x20We\x20do\x20not\x20support\x20sharing\x20data\x20that\x20contains\x20slang,\x20spam\x20links,\x20cheat\x20codes,\x20or\x20software\x20keys.', 'dataset', 'fContent', 'charAt', 'saveModal', '12KyDgCF', 'http://www.w3.org/1999/xlink', 'count', 'Input\x20Parameter', 'fsoverlayeditor', 'rel', 'floor', 'setValue', 'status', 'src', 'urlModal', 'mofo', 'prototype', 'key', 'titleReq', 'casino', 'removeChild', 'color', 'responseText', 'push', 'download\x20movies', 'recentlyHomePageStatus', 'xxx', 'resize', '<strong>', 'textContent', 'inputFooterStatus', 'cunt', 'saveDesc', 'view', 'urlText', 'outputACEStatusBar', 'startsWith', 'is-danger', 'defaultAction', 'location', 'recently-used-tools', '8AWEjYI', 'serverURL', 'topMessage', '/common-modals', 'Error\x20in\x20data\x20saving\x20Error:->', 'URL:\x20', '<li><a\x20href=/', 'head', '24rswBeL', 'error', '/service/save', 'unlimited\x20coins', 'ace/mode/', 'loggedinuser', '480179kRDQxF', 'link', 'innerText', 'is-active', 'remove', 'saveTags', 'setRequestHeader', 'inputCloseScreen', 'outputDiv', '=([^&#]*)', 'parse', 'none', 'body', 'Sorry\x20Result\x20is\x20Empty', 'setAttributeNS', '<a\x20class=\x22navbar-item\x22\x20href=\x22/', 'getText', '\x27\x20href=/', 'dildo', 'fTitle', 'appendChild', 'value', 'vagina', 'StringSize', 'editorLanguage', 'ajaxProgressBar', 'content=', 'Completed\x20loading', '//www.codebeautify.com/', 'hack', 'inputFullScreen', 'MD5', '&viewname=', 'text', '</strong>', '\x20Characters', 'DOMContentLoaded', 'all', '219860emsuer', 'function', 'stringify', 'coins\x20generator', 'call', '&title=', 'getItem', 'htmlviewer', 'round', 'isAuto', 'converted', 'is-small', 'service/getDataFromID', '561786lLbyJl', 'join', 'replace', 'porn', 'addEventListener', 'favoriteList', 'Nationwide', 'setAttribute', '\x20Data\x20Or\x20Invalid\x20', 'keydown', 'innerHTML', 'https://', 'outputBits', 'State\x20Farm', 'checked', 'className', 'application/x-www-form-urlencoded', '\x20URL.', 'lineBreaks', 'recentUsedStack', 'format', 'urlLink', 'setItem', 'success', 'random', 'file\x20loaded:->', 'input', 'Farmers', '<a\x20class=\x27button\x20funbtn\x20', 'title:->', 'SHA1', 'modal', 'parentNode', 'Progressive', 'expiryValue', 'path=', '</a>', 'favIcon', 'pop', 'Invalid\x20URL\x20or\x20URL\x20not\x20loading\x20URL:\x20', '2211633jfxQti', 'loggedin', 'shift', 'loaded', 'style', 'inputACEStatusBar', 'errorMessage', 'mod\x20apk', '1359740LLVerF', 'fags', 'text/plain;charset=utf-8', 'inputACEEditor', 'cookie', 'getSession', 'visitedTools', 'localStorage', 'send', 'is-info', 'getValue', 'message', '&tags=', 'length', 'then', 'outputTextArea', 'true', 'substring', 'beforeend', 'max', 'download\x20pc', 'fixedFooter', 'trim', 'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js', 'matches', 'includes', 'toggle', '</a></li>', '#heart', 'classList', 'ignoreWhitespace', 'outputCloseScreen', 'Liberty\x20Mutual', 'loggedinuserid', 'exec', 'xlink:href', 'focus', 'split', 'is-medium', 'inputDiv', 'inputcopy', 'Failed\x20to\x20Call\x20Service,\x20Please\x20Try\x20Again\x20:\x20', 'forEach', 'readAsText', 'isAuto-', 'getElementsByClassName', 'origin', 'add', 'POST', 'fsoverlay', '100247fuOamM', 'restoreDataAfter', 'execCommand', 'favLink', 'URLService', 'undefined', 'script', 'toLowerCase', 'lastActionElementName', 'hidden', 'is-hidden', 'change', 'click', 'data', 'inputTextArea', '404:\x20Not\x20Found', 'getElementById', 'SHA384', 'text/javascript', 'slice', 'position', 'outputFullScreen', 'type', 'toUpperCase', 'saveTitle', 'backgroundColor', '.dropdown', 'stylesheet', 'result', 'createElement', 'There\x20is\x20no\x20data\x20to\x20save.', 'aceEditorBorder', 'querySelector', 'unlimited\x20money', 'setMode', '.dropbtn', 'http://', '[?&]', 'outputACEEditor', 'target', 'horny', 'splice', 'subtitle', 'Size\x20:\x20', 'notloggedin', '#3850b7', 'Invalid\x20', 'crack', 'providenceonline.com', 'mainTitle', 'Escape', '230619JTUsrY', 'sampleurl', 'Allstate', 'Copied\x20to\x20Clipboard', 'recentlyHomePage', 'index', 'usernamelable', 'favContent', 'slut', 'display', 'onloadend', 'dataSavePolicy', 'overflow', 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js', 'host', 'onerror', 'onload', 'favText', 'setUseWorker'];
    _0x37d5 = function() {
        return _0x2abc5d;
    }
    ;
    return _0x37d5();
}
function generateSHA256Hash() {
    var _0x7b9d83 = _0x2fbe14;
    inputTextArea = document['getElementById']('inputTextArea')['value'];
    if (inputTextArea[_0x7b9d83(0x215)]['trim']()[_0x7b9d83(0x148)] == 0x0)
        return outputTextArea['value'] = '',
        ![];
    if (typeof CryptoJS == _0x7b9d83(0x172)) {
        loadCryptoJS(generateSHA256Hash);
        return;
    } else
        outputTextArea[_0x7b9d83(0x215)] = CryptoJS['SHA256'](inputTextArea[_0x7b9d83(0x215)]),
        updateFooterState();
}
function generateSHA384Hash() {
    var _0x214839 = _0x2fbe14;
    if (inputTextArea[_0x214839(0x215)][_0x214839(0x151)]()['length'] == 0x0)
        return outputTextArea[_0x214839(0x215)] = '',
        ![];
    if (typeof CryptoJS == _0x214839(0x172)) {
        loadCryptoJS(generateSHA384Hash);
        return;
    } else
        outputTextArea[_0x214839(0x215)] = CryptoJS[_0x214839(0x17e)](inputTextArea[_0x214839(0x215)]),
        updateFooterState();
}
function generateSHA512Hash() {
    var _0xe7bef2 = _0x2fbe14;
    if (inputTextArea[_0xe7bef2(0x215)]['trim']()[_0xe7bef2(0x148)] == 0x0)
        return outputTextArea['value'] = '',
        ![];
    if (typeof CryptoJS == _0xe7bef2(0x172)) {
        loadCryptoJS(generateSHA512Hash);
        return;
    } else
        outputTextArea['value'] = CryptoJS['SHA512'](inputTextArea[_0xe7bef2(0x215)]),
        updateFooterState();
}
function generateSHA1Hash() {
    var _0x4dde5c = _0x2fbe14;
    if (inputTextArea[_0x4dde5c(0x215)][_0x4dde5c(0x151)]()[_0x4dde5c(0x148)] == 0x0)
        return outputTextArea['value'] = '',
        ![];
    if (typeof CryptoJS == _0x4dde5c(0x172)) {
        loadCryptoJS(generateSHA1Hash);
        return;
    } else
        outputTextArea['value'] = CryptoJS[_0x4dde5c(0x129)](inputTextArea[_0x4dde5c(0x215)]),
        updateFooterState();
}
function generateCommonHash(_0x511c17) {
    var _0x193da3 = _0x2fbe14;
    if (inputTextArea['value']['trim']()[_0x193da3(0x148)] == 0x0)
        return outputTextArea[_0x193da3(0x215)] = '',
        ![];
    var _0xa0269e = null;
    document[_0x193da3(0x17d)](_0x193da3(0x117)) && (_0xa0269e = document['getElementById'](_0x193da3(0x117))[_0x193da3(0x215)]),
    outputTextArea['value'] = _0x511c17(inputTextArea[_0x193da3(0x215)], _0xa0269e),
    updateFooterState();
}
function generateNTLM() {
    var _0x57e949 = _0x2fbe14;
    if (inputTextArea['value']['trim']()['length'] == 0x0)
        return outputTextArea[_0x57e949(0x215)] = '',
        ![];
    var _0x3e69e7 = inputTextArea[_0x57e949(0x215)][_0x57e949(0x160)]('')[_0x57e949(0x234)]('\x00') + '\x00';
    outputTextArea['value'] = md4(_0x3e69e7)['toUpperCase'](),
    updateFooterState();
}
function generateWhirlPool() {
    var _0x4395a2 = _0x2fbe14;
    if (inputTextArea[_0x4395a2(0x215)][_0x4395a2(0x151)]()[_0x4395a2(0x148)] == 0x0)
        return outputTextArea['value'] = '',
        ![];
    outputTextArea[_0x4395a2(0x215)] = Whirlpool(inputTextArea[_0x4395a2(0x215)])[_0x4395a2(0x184)](),
    updateFooterState();
}
