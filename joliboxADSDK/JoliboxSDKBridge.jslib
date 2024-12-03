mergeInto(LibraryManager.library, {
  // 加载SDK
  LoadSDK: function() {
    if (!window.JoliboxSDK) {
      var script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@jolibox/sdk@1/dist/index.iife.js';
      script.async = true;
      script.onload = function() {
        SendMessage('JoliboxSDK', 'OnSDKLoaded');
      };
      document.head.appendChild(script);
    }
  },

  // 初始化SDK
  InitJoliboxSDK: function(testMode, apiBaseURL) {
    const testModeStr = UTF8ToString(testMode);
    const apiBaseURLStr = UTF8ToString(apiBaseURL);
    
    window.joliboxsdk = new window.JoliboxSDK({
      testMode: testModeStr === 'true',
      apiBaseURL: apiBaseURLStr
    });
  },

  InitAds: function(configJsonStr) {
    const config = JSON.parse(UTF8ToString(configJsonStr));
    window.joliboxsdk.ads.init(config);
  },

  ConfigAds: function(configJsonStr) {
    const config = JSON.parse(UTF8ToString(configJsonStr));
    window.joliboxsdk.ads.adConfig(config);
  },

  ShowAdBreak: function(configJsonStr) {
    const config = JSON.parse(UTF8ToString(configJsonStr));
    window.joliboxsdk.ads.adBreak(config);
  },

  ShowAdUnit: function(configJsonStr) {
    const config = JSON.parse(UTF8ToString(configJsonStr));
    window.joliboxsdk.ads.adUnit(config);
  },

  TrackEvent: function(eventName, extraJsonStr) {
    const eventNameStr = UTF8ToString(eventName);
    const extra = extraJsonStr ? JSON.parse(UTF8ToString(extraJsonStr)) : null;
    window.joliboxsdk.anaytics.trackEvent(eventNameStr, extra);
  }
});