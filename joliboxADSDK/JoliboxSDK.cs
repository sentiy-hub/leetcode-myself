using UnityEngine;
using System.Runtime.InteropServices;

public class JoliboxSDK : MonoBehaviour
{
  [DllImport("__Internal")]
  private static extern void LoadSDK();

  [DllImport("__Internal")]
  private static extern void InitJoliboxSDK(string testMode, string apiBaseURL);

  [DllImport("__Internal")]
  private static extern void InitAds(string configJson);

  [DllImport("__Internal")]
  private static extern void ConfigAds(string configJson);

  [DllImport("__Internal")]
  private static extern void ShowAdBreak(string configJson);

  [DllImport("__Internal")]
  private static extern void ShowAdUnit(string configJson);

  [DllImport("__Internal")]
  private static extern void TrackEvent(string eventName, string extraJson);

  void Start()
  {
#if UNITY_WEBGL && !UNITY_EDITOR
            LoadSDK();
#endif
  }

  // SDK加载完成回调
  void OnSDKLoaded()
  {
    Debug.Log("Jolibox SDK loaded");
  }

  public void Initialize(bool testMode = false, string apiBaseURL = null)
  {
#if UNITY_WEBGL && !UNITY_EDITOR
            InitJoliboxSDK(testMode.ToString().ToLower(), apiBaseURL);
#endif
  }

  // [其他方法]
  public void InitializeAds(object config)
  {
#if UNITY_WEBGL && !UNITY_EDITOR
            InitAds(JsonUtility.ToJson(config));
#endif
  }

  public void SetAdConfig(object config)
  {
#if UNITY_WEBGL && !UNITY_EDITOR
            ConfigAds(JsonUtility.ToJson(config));
#endif
  }

  public void ShowAd(object config)
  {
#if UNITY_WEBGL && !UNITY_EDITOR
            ShowAdBreak(JsonUtility.ToJson(config));
#endif
  }

  public void ShowAdUnit(object config)
  {
#if UNITY_WEBGL && !UNITY_EDITOR
            ShowAdUnit(JsonUtility.ToJson(config));
#endif
  }

  public void TrackEvent(string eventName, object extra = null)
  {
#if UNITY_WEBGL && !UNITY_EDITOR
            TrackEvent(eventName, extra != null ? JsonUtility.ToJson(extra) : null);
#endif
  }
}