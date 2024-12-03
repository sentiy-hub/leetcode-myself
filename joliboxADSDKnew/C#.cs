public interface IAdsInitParams
{
    string GameId { get; set; }
}

public interface IAdConfigParams
{
    string PreloadAdBreaks { get; set; } // "on" or "auto"
    string Sound { get; set; } // "on" or "off"
    Action OnReady { get; set; }
}

public interface IPlacementInfo
{
    string BreakType { get; set; }
    string BreakName { get; set; }
    string BreakFormat { get; set; } // "interstitial" or "reward"
    string BreakStatus { get; set; } // "notReady", "timeout", "error", etc.
}

public interface IPrerollParams
{
    string Type { get; } // Always "preroll"
    Action<IPlacementInfo> AdBreakDone { get; set; }
}

public interface IInterstitialsParams
{
    string Type { get; set; } // "start", "pause", "next", "browse"
    string Name { get; set; }
    Action BeforeAd { get; set; }
    Action AfterAd { get; set; }
    Action<IPlacementInfo> AdBreakDone { get; set; }
}

public interface IRewardParams
{
    string Type { get; } // Always "reward"
    string Name { get; set; }
    Action BeforeAd { get; set; }
    Action AfterAd { get; set; }
    Action<IPlacementInfo> AdBreakDone { get; set; }
    Action<Action> BeforeReward { get; set; }
    Action AdDismissed { get; set; }
    Action AdViewed { get; set; }
}

public interface IAdUnitParams
{
    string Element { get; set; } // Equivalent to HTMLElement or string selector
    string Slot { get; set; }
    string AdFormat { get; set; } // Can be "auto", "rectangle", "vertical", "horizontal"
    string FullWidthResponsive { get; set; } // "true" or "false"
    string Style { get; set; }
}

public interface IJoliboxAds
{
    void Init(IAdsInitParams config = null);
    void AdConfig(IAdConfigParams parameters);
    void AdBreak(IPrerollParams parameters);
    void AdBreak(IInterstitialsParams parameters);
    void AdBreak(IRewardParams parameters);
    Task AdUnit(IAdUnitParams parameters);
}