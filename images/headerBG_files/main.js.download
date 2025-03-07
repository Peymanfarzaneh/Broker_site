/*global $, ICMLocale, Cookies*/
var domain = '.icmarkets.com';

function getSignTokenCommon() {
  var $def = $.Deferred();
  $.get(window['serverURL'] + '~get~sign~token~?nocache=' + Date.now()).done(function (token) {
    $def.resolve(token);
  }).fail(function () {
    $def.resolve(null);
  });
  return $def.promise();
}

function saveCampClick(camp) {
  camp = camp.replace(/\D/g, ''); // strip non-digits
  getSignTokenCommon().then(function(token) {
    var query = '?getAction=camp_click&data=' + camp;
    var uri = window['serverURL'] + query + '&sign=' + token;
    $.ajax({
      dataType: "json",
      url: uri
    });
  });
}

if (window && window.location) {
    domain = window.location.hostname.replace('www.', '.');
    if (domain.indexOf('.') !== 0) {
        domain = '.' + domain;
    }
}
if (domain.includes('local') !== -1) domain = 'icmarkets.com';

if (Cookies.get('camp_click')) {
    saveCampClick(Cookies.get('camp_click'));
    Cookies.set('camp_click', '', {expires: -1, domain: domain});
}

if (window && window.location.pathname) {
    var url = window.location;
    var domainPath = url.hostname;
    var getPathname = url.href.split('/');
    var pathTotal = getPathname[3].length + 1;
    var regulatorArray = ['au', 'eu', 'global', 'intl', 'uk', 'mu', 'ky', 'global_ict', 'mu_ict', 'ke'];
    if (domainPath.includes('icmarketsuk.com')) {
        regulatorArray.forEach(element => {
            if (getPathname[3] === element) {
                url.href = url.origin + url.pathname.slice(pathTotal);
            }
        });
    } else if (domainPath.includes('icmarketstrading.com')) {
        regulatorArray.forEach(element => {
            if (getPathname[3] === element) {
                url.href = url.origin + url.pathname.slice(pathTotal);
            }
        });
    } else if (domainPath.includes('icmglobaltrading.com')) {
        regulatorArray.forEach(element => {
            if (getPathname[3] === element) {
                url.href = url.origin + url.pathname.slice(pathTotal);
            }
        });
    } else if (domainPath.includes('ictrading.com')) {
        regulatorArray.forEach(element => {
            if (getPathname[3] === element) {
                url.href = url.origin + url.pathname.slice(pathTotal);
            }
        });
    } else if (domainPath.includes('ictrading.global')) {
        regulatorArray.forEach(element => {
            if (getPathname[3] === element) {
                url.href = url.origin + url.pathname.slice(pathTotal);
            }
        });
    } else if (domainPath.match(/([a-z])+\.(au)/) || domainPath.match(/([a-z])+\.(eu)/) || domainPath.match(/([a-z])+\.(sc)/) || domainPath.match(/([a-z])+\.(bs)/) || domainPath.match(/(-z[a-z])+\.(com)/) || domainPath.match(/([a-z]-ru)+\.(com)/) || domainPath.match(/([a-z]-it)+\.(com)/) || domainPath.match(/(-vn[a-z])+\.(com)/) || domainPath.match(/([a-z])+\.(mu)/) || domainPath.match(/([a-z]-global)+\.(com)/) || domainPath.match(/([a-z])+\.(ky)/) || domainPath.match(/([a-z])+\.(ke)/)) {
        regulatorArray.forEach(element => {
            if (getPathname[3] === element) {
                url.href = url.origin + url.pathname.slice(pathTotal);
            }
        });
    }
}

function isMobile() {
  try {
    document.createEvent("TouchEvent");
    return true;
  }
  catch (e) {
    return false;
  }
}

if (window['enableLivechat']) {
    $('.fixed-bottom-bar').hide();

    if (ICMLocale === 'cn') {
        $('.icm-messengers-links a').on('click', function (event) {
            if (event.target.href) {
                event.preventDefault();
                window.open(event.target.href, "_blank", "width=500,height=700");
            }
        })
    } else if (isMobile()) {
        $('html').toggleClass('desktop-pc', false);
        $('html').toggleClass('touch-device', true);
    } else {
        $('html').toggleClass('desktop-pc', true);
        $('html').toggleClass('touch-device', false);
    }
} else {
    setTimeout(() => {
        $('.fixed-bottom-bar').show();
    }, 300)
}

if (window.location.href.indexOf('social-trading-tools/social-trading-mobile-app') > -1) {
    $('.single-footer .disclaimer .disclaimer-content .d-block').remove();
    $('.single-footer .disclaimer .disclaimer-content .d-none').removeClass('d-none');
}

$('.page-header__menu-container .menu-switch').on('click', function() {
  $(this).parents('.page-header__menu-container').toggleClass('expanded');
});

$('.sidebar-cta-card-container.random-background').each(function() {
  $(this).addClass('rnd-back-' + (Math.floor(Math.random() * (3 - 1 + 1)) + 1));
});

// eslint-disable-next-line no-unused-vars
function openLiveChat(forced) {
    // open chat dialog if current page is help-centre (widget only there)
    if ($('#zowieFloatingButton').length > 0) {
        $('#zowieFloatingButton').trigger('click');
    } else if ($('#zowieFloatingButtonMobile').length > 0) {
        $('#zowieFloatingButtonMobile').trigger('click');
    }
    // redirect to help-centre page where chat dialog will present
    else window.location = window['helpCentreLink'];
}

$('.spreads-block__expand-button').on('click', function () {
    var $button = $(this);
    var $panel = $(this).parent().find('.panel-collapse');
    var isCollapsed = $button.is('.collapsed');
    $button.toggleClass('collapsed', !isCollapsed);
    $panel.toggleClass('in', isCollapsed);
});

$('.spreads-block').on('click', '.skin-toggle', function () {
    var $button = $(this);
    var $panel = $(this).closest('.panel-collapse');
    var $table = $panel.find('.single-design-table');
    var switchSkinTo = ($button.is('.skin-light') ? 'light-skin' : 'dark-skin');
    $table.toggleClass('light-skin', false).toggleClass('dark-skin', false).toggleClass(switchSkinTo, true);
});

$('.spreads-block input.spreads-search-box').on('input', function () {
    var $input = $(this);
    var value = $input.val();
    var $panel = $(this).closest('.panel-collapse');
    $panel.find(".symbol-group-toggle").toggleClass('symbol-group-active', false);
    var $table = $panel.find('.single-design-table');
    var $row = $table.find('.table-row');
    $row.show();
    if (value && value.length) {
        $row.each(function () {
            var $currentRow = $(this);
            var $nameCell = $currentRow.find('.table-cell.c1');
            var name = $nameCell.text();
            if (name && name.toUpperCase().indexOf(value.toUpperCase()) === -1) {
                $currentRow.hide();
            }
        });
    }
});

$('.spreads-block').on('click', '.symbol-group-toggle', function () {
    $(".symbol-group-toggle").toggleClass('symbol-group-active', false);
    var $selectedGroupTab = $(this);
    $selectedGroupTab.toggleClass('symbol-group-active', true);
    var selectedGroup = $selectedGroupTab.text();
    var $panel = $(this).closest('.panel-collapse');
    var $table = $panel.find('.single-design-table');
    var $row = $table.find('.table-row');
    $row.show();
    if (selectedGroup) {
        $row.each(function () {
            var $currentRow = $(this);
            var $symbolGroupCell = $currentRow.find('.table-cell.c-symbol-group');
            var symbolGroup = $symbolGroupCell.text();
            if (symbolGroup !== selectedGroup) {
                $currentRow.hide();
            }
        });
    }
});

$('.scroll-to-form').on('click', function () {
    $('body,html').animate({scrollTop: $('#direction-for-green-btn-click').offset().top - 100}, 400);
});

// eslint-disable-next-line wrap-iife
(function tracking () {
    const key = 'visitor-tracking';
    if (localStorage) {
        // NOTE: Uncomment if tracking after registration is not necessary:
        // const client = localStorage.getItem('already-client');
        // if (!client) {
            const now = localStorage.getItem(key);
            let data = now ? JSON.parse(now) : [];
            let country_from = document.querySelector('html').getAttribute('data-country');
            if (!country_from) {
                country_from = 'n/a';
            }
            const come_from = document.referrer;
            const come_to = location.href;
            const date = new Date().toLocaleString();
            let value = '';
            if (come_from) {
                value = `[${country_from}] from [${come_from}] to [${come_to}] at [${date}]`;
            } else {
                value = `[${country_from}] manually to [${come_to}] at [${date}]`;
            }
            data.push(value);
            localStorage.setItem(key, JSON.stringify(data));
        // }
    }
})()
