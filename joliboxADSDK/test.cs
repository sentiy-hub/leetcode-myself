// 使用步骤:

// 1.创建空对象,添加GameManager脚本
// 2.SDK会自动加载并初始化
// 3.根据需要调用相应方法展示广告或追踪事件
// 4.可以根据实际需求修改AdsConfig和EventData类的结构

using UnityEngine;

// 广告配置类
[System.Serializable]
public class AdsConfig
{
  public string appId;
  public string placementId;
  public string adType = "interstitial"; // rewarded, banner等
}

// 事件追踪数据类
[System.Serializable]
public class EventData
{
  public string userId;
  public int score;
  public string level;
}

public class GameManager : MonoBehaviour
{
  private JoliboxSDK sdk;

  void Start()
  {
    // 获取或添加JoliboxSDK组件
    sdk = FindObjectOfType<JoliboxSDK>();
    if (sdk == null)
    {
      sdk = gameObject.AddComponent<JoliboxSDK>();
    }

    // SDK会自动加载,在OnSDKLoaded回调后初始化
  }

  // 当玩家点击开始游戏按钮
  public void OnGameStart()
  {
    // 初始化SDK
    sdk.Initialize(
        testMode: true,  // 测试模式
        apiBaseURL: "https://test-api.jolibox.com" // 可选
    );

    // 初始化广告
    var adsConfig = new AdsConfig
    {
      appId = "your_app_id",
      placementId = "your_placement_id",
      adType = "interstitial"
    };
    sdk.InitializeAds(adsConfig);
  }

  // 当关卡结束时展示广告
  public void OnLevelComplete(int level)
  {
    var adConfig = new AdsConfig
    {
      placementId = "level_complete_ad",
      adType = "rewarded"
    };
    sdk.ShowAd(adConfig);

    // 追踪完成事件
    var eventData = new EventData
    {
      userId = "player123",
      score = 1000,
      level = $"level_{level}"
    };
    sdk.TrackEvent("level_complete", eventData);
  }

  // 展示奖励广告
  public void ShowRewardedAd()
  {
    var adConfig = new AdsConfig
    {
      placementId = "reward_ad",
      adType = "rewarded"
    };
    sdk.ShowAdUnit(adConfig);
  }

  // 游戏内购买时追踪事件
  public void TrackPurchase(string itemId, float price)
  {
    var purchaseData = new EventData
    {
      userId = "player123",
      score = (int)(price * 100), // 转换为分
      level = itemId
    };
    sdk.TrackEvent("purchase", purchaseData);
  }
}