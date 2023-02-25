angular.module("ui", []);

angular.module("ui").run(function ($templateCache) {
  $templateCache.put(
    "view/ui-accordion.html",
    `
    <div class="accordion">
    <div class="accordion-item">
        <div class-="accordion-header" ng-click="open()">{{title}}</div>
        <div class="accordion-body" ng-show="isOpened" ng-transclude></div>
    </div>
    </div>
  `
  );
});

angular.module("ui").directive("uiAccordions", function () {
  return {
    controller: function ($scope, $element, $attrs) {
      // this.helloWorld = function () {
      //   console.log("helloWorld");
      // };

      var accordions = [];
      this.registerAccordion = function (accordion) {
        accordions.push(accordion);
      };

      this.closeAll = function () {
        accordions.forEach(function (accordion) {
          accordion.isOpened = false;
        });
      };
    },
  };
});

angular.module("ui").directive("uiAccordion", function () {
  return {
    templateUrl: "view/ui-accordion.html",
    scope: {
      title: "@",
    },
    transclude: true,
    require: "^uiAccordions",
    link: function (scope, element, attrs, ctrl) {
      ctrl.registerAccordion(scope);
      // ctrl.helloWorld();
      scope.open = function () {
        ctrl.closeAll();
        scope.isOpened = !scope.isOpened;
      };
    },
  };
});
