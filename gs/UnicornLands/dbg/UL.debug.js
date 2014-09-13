//! UL.debug.js
//

(function($) {

Type.registerNamespace('UL');

////////////////////////////////////////////////////////////////////////////////
// UL.AppViewMode

UL.AppViewMode = function() { };
UL.AppViewMode.prototype = {
    sections: 0, 
    unicorns: 1, 
    about: 2
}
UL.AppViewMode.registerEnum('UL.AppViewMode', false);


////////////////////////////////////////////////////////////////////////////////
// UL.App

UL.App = function UL_App() {
    UL.App.initializeBase(this);
}
UL.App.prototype = {
    e_sections: null,
    e_about: null,
    e_unicorns: null,
    c_navbar: null,
    _viewMode$2: 0,
    
    get_viewMode: function UL_App$get_viewMode() {
        return this._viewMode$2;
    },
    set_viewMode: function UL_App$set_viewMode(value) {
        this._viewMode$2 = value;
        this.update();
        return value;
    },
    
    onInit: function UL_App$onInit() {
        UL.App.callBaseMethod(this, 'onInit');
        window.addEventListener('hashchange', ss.Delegate.create(this, this._handleHashChange$2));
        this._processHash$2();
    },
    
    _handleHashChange$2: function UL_App$_handleHashChange$2(e) {
        this._processHash$2();
    },
    
    _processHash$2: function UL_App$_processHash$2() {
        var hashCanon = window.location.hash.toLowerCase();
        hashCanon = hashCanon.substring(1, hashCanon.length);
        switch (hashCanon) {
            case '/about':
                this.set_viewMode(2);
                break;
            case '/unicorns':
                this.set_viewMode(1);
                break;
            case '/sections':
                this.set_viewMode(0);
                break;
        }
    },
    
    onUpdate: function UL_App$onUpdate() {
        this.c_navbar.select(this._viewMode$2);
        if (this.e_sections != null) {
            if (!this._viewMode$2) {
                this.e_sections.style.display = 'block';
            }
            else {
                this.e_sections.style.display = 'none';
            }
        }
        if (this.e_unicorns != null) {
            if (this._viewMode$2 === 1) {
                this.e_unicorns.style.display = 'block';
            }
            else {
                this.e_unicorns.style.display = 'none';
            }
        }
        if (this.e_about != null) {
            if (this._viewMode$2 === 2) {
                this.e_about.style.display = 'block';
            }
            else {
                this.e_about.style.display = 'none';
            }
        }
    }
}


UL.App.registerClass('UL.App', BL.UI.Control);
})(jQuery);

//! This script was generated using Script# v0.7.4.0
