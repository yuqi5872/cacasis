window.SITE_CONFIG = window.SITE_CONFIG || {
  gaMeasurementId: "G-DQL6GJR46R",
  siteDomain: "dgcasnio.com",
  /* 🔴 2026-08-13 從 dvjhkv 改成 rs82gq。
     dvjhkv 是 fu003（電子觀測所 tsaishen888）的碼——2026-08-12 代理碼重新分類時
     dgcasnio.com 已經從 fu003 移到 fu006 獨立一組，但站上這個值沒跟著改，
     所以百家樂站帶進來的註冊/首存一直被記到老虎機站頭上。
     實測確認 rs82gq 目前沒有任何站在用（proxy_map 舊備註寫 ys89.me=rs82gq 是過期資訊，
     ys89.me 現在連一個 ys89.bet 連結都沒有），拿過來不會跟誰混。 */
  promoProxyCode: "rs82gq",
  /* 🔴 2026-08-13 從 368 體驗金改成首充 100%。
     官方首充規則第 1 條：「若有領取體驗金，請先完成體驗金流水以及出款成功後，
     才可參與首存活動」——368 要跑 368×30＝NT$11,040 流水且滾到 ≥1,000 才出得了款，
     多數人中途輸光就永久喪失首充資格。而這一站是代理廣告投放目標，
     及格線看的是儲值金額，先送 368 等於自己把及格線鎖死。
     ⚠️ 圖片與連結必須同時改：banner 上印什麼，連結就要去哪一頁。 */
  promoLandingUrl: "https://ys89.bet/activity/entry?url=/activity/detail/firstDeposit/NTD",
  promoDesktopImage: "/assets/img/promo/ys-yeshe-deposit-desktop-v1.webp",
  promoMobileImage: "/assets/img/promo/ys-yeshe-deposit-mobile-v1.webp",
  promoAlt: "YS夜色首儲加碼：儲值1000送1000，回饋100%，新會員首次儲值專屬",
  utmSource: "dgcasnio.com",
  utmCampaign: "first_deposit",
  internalCampaign: "site_navigation"
};
