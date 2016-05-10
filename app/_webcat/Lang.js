(function () {
  'use strict';

  angular
    .module('Webcat.Lang', [])
    .service('Lang', Service);

  function Service($window) {
    var self = this,
        language = $window.navigator.language || $window.navigator.userLanguage;

    self.set = set;
    self.current = 'en';
    self.validLangs = ['en'];
    if (language.indexOf('en') > -1) {
      self.current = 'en';
    } else {
      self.current = 'en';
    }

    function set(lang) {
      var langExists = false;
      angular.forEach(self.validLangs, function (value) {
        if (lang === value) {
          langExists = true;
        }
      });
      if (langExists) {
        self.current = lang;
      } else {
        console.log('Couldn\'t set current language. Language doesn\'t exist');
      }
    }
  }
}());
