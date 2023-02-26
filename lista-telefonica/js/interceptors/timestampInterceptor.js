angular.module("listaTelefonica").factory("timestampInterceptor", function () {
  return {
    request: function (config) {
      const url = config.url;
      if (url.indexOf("view") > -1) return config;

      config.url = url + "?timestamp=" + new Date().getTime();
      console.log(config.url);
      return config;
    },
  };
});
