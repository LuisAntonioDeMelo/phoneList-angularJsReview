angular.module("listaTelefonica").config(function ($httpProvider) {
  $httpProvider.interceptors.push("timestampInterceptor");
  $httpProvider.interceptors.push("error404Interceptor");
  $httpProvider.interceptors.push("loadingInterceptor");
});
