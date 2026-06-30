# 百家樂觀測局 SEO / AEO / GEO 專案進度

更新日期：2026-06-25

## 今日上架前最後狀態

### 今天已補完

- `/baccarat-roadmap/` 已補上 5 張路單教學圖，並支援點擊放大。
- `/baccarat-rules/` 已補上 4 張規則教學圖，並支援點擊放大。
- `/baccarat-odds/` 已補上 4 張機率教學圖，並支援點擊放大。
- `/guides/` 已重做成正式教學總覽頁，拆成：
  - 新手線
  - 進階線
  - 真人品牌線
- 全站已接上新版品牌素材：
  - favicon / apple touch icon 已改成新版方形站徽
  - 首頁 `og:image` 已換成正式版首頁分享圖
  - `/guides/` `og:image` 已換成正式版攻略總覽分享圖
  - header / footer 站名字章已改成新版方形品牌 icon
- 首頁與 `/live-baccarat/` 已補上通往 `/guides/` 的導流。
- 站內三篇核心教學頁已加上進階延伸閱讀：
  - `/baccarat-rules/`
  - `/baccarat-roadmap/`
  - `/baccarat-odds/`
- 已移除公開頁仍會讓人看出半成品的 placeholder 文案：
  - 首頁浮動示範導流卡
  - `live-baccarat` 頁的 `NEWCODE / UTM / 新代理碼` 提示
  - `guides` 頁的 `UTM 佔位已預留`

### 巡檢結果

- 全站內部連結檢查：`0` 個壞連結
- 目前最主要的上架前必改項不是內容，而是正式環境設定

### 上架前必改清單

1. 正式網域已切換為 `https://dgcasnio.com/`
- 已完成位置：
  - `canonical`
  - `og:url`
  - `schema mainEntityOfPage`
  - `BreadcrumbList`
  - `robots.txt`
  - `sitemap.xml`

2. 補上正式 GA4 測量 ID
- 已預留安裝檔：
  - `/assets/site-config.js`
  - `/assets/analytics.js`
- 目前只差把 `gaMeasurementId` 填成正式 `G-XXXXXXXXXX`

3. 確認是否需要真正的外部轉換連結
- 目前公開頁已先改成以站內導流為主，避免把 placeholder 代理碼直接上線。
- 如果之後要接真實活動頁或合作連結，建議重新確認：
  - 真正網址
  - UTM
  - `rel="nofollow sponsored noopener"`

4. 最後再逐頁看一次手機首屏
- 已做過重點頁巡檢，但正式上架前仍建議再人工看一次：
  - `/`
  - `/guides/`
  - `/live-baccarat/`
  - `/baccarat-rules/`
  - `/baccarat-roadmap/`
  - `/baccarat-odds/`

## 專案路徑

- 專案根目錄：`/Users/user/Desktop/YS89-專案整理/baccarat-observatory`
- 本地預覽：`http://127.0.0.1:4173/`

## 這一輪已完成的重點

### 1. 站內定位補強

- 首頁與 `/live-baccarat/` 已調整為「真人百家樂主題頁 + 教學主題群入口」結構。
- 補上使用者意圖模組，讓頁面不只是介紹，而是對應：
  - 新手意圖
  - 品牌比較意圖
  - 策略研究意圖
  - 轉換意圖

### 2. UI / UX / RWD 修正

- 修正 `/live-baccarat/` 淺底白字導致不可讀問題。
- 補上可放圖片的主要版位，包括：
  - 品牌比較圖
  - 桌面與下注區圖
  - 路單截圖
  - 手機操作截圖
- 針對手機版已避免浮動廣告遮擋主要內容。

### 3. SEO / AEO / GEO 內容擴寫

本輪優先處理原本內容過薄的頁面，將其改成「主查詢 + 子查詢 + FAQ + 內鏈漏斗」寫法：

- `/baccarat-tips/`
- `/baccarat-betting-systems/`
- `/baccarat-card-counting/`
- `/lucky-six/`
- `/baccarat-myths/`

每篇都已補強：

- 一句話直答（AEO 友善）
- 主查詢直接回答
- 4 個以上子問題拆解
- 表格化比較
- FAQ 擴寫
- 內鏈到規則 / 機率 / 路單 / 迷思 / 技巧
- 作者盒與頁面定位補充

## 內容厚度檢查

以下為本輪重寫後的純文字字元量概況（去除 HTML 與 script 後）：

| 頁面 | 重寫後字元量 |
| --- | ---: |
| `/baccarat-tips/` | 4699 |
| `/baccarat-betting-systems/` | 4348 |
| `/baccarat-card-counting/` | 3926 |
| `/lucky-six/` | 4014 |
| `/baccarat-myths/` | 4065 |
| `/baccarat-rules/` | 2907 |
| `/baccarat-roadmap/` | 2288 |
| `/baccarat-odds/` | 2182 |
| `/live-baccarat/` | 5987 |
| `/` | 6271 |

說明：

- 中文頁面不適合只看英文式 word count，所以這裡改用純文字字元量當作內容厚度輔助判斷。
- 目前首頁與真人主頁厚度足夠。
- 原本偏薄的五篇策略 / 迷思 / 變體頁，已完成第一輪補強。

## 目前站內 SEO / AEO / GEO 狀態

### 已完成

- `title`
- `meta description`
- `canonical`
- `og:title` / `og:description`
- 單一 H1
- `Article`
- `BreadcrumbList`
- `FAQPage`
- 一句話直答區塊
- 主題型內鏈
- `llms.txt`
- `robots.txt`
- `sitemap.xml`

### 已改善但仍可持續補強

- 搜尋意圖覆蓋深度
- FAQ 題型數量
- 可被 AI 抽答的小標結構
- 品牌比較與桌型比較的圖片證據
- 真人百家樂主頁的實圖與實際品牌介面補圖

## 這一輪的寫作原則

### SEO

- 不只放關鍵字，而是對應主查詢與延伸查詢。
- 每篇盡量處理「定義、差異、適合誰、風險、常見誤解、下一步」。

### AEO

- 每頁都用一句話直答先回答問題。
- FAQ 直接使用自然語言問句。
- 小標盡量改成使用者真的會搜的問法。

### GEO

- 強化實體與關係：
  - 百家樂
  - 真人百家樂
  - 莊閒和
  - 路單
  - 1326
  - Lucky 6 / Super 6
  - DG / SA / DB / WM / AG
- 讓頁面之間的關聯更明確，方便知識型引用與 AI 摘要理解站內主題地圖。

## 仍然重要，但不屬於頁面內容本身的排名因素

以下因素會直接影響是否能衝到非常前面，但不可能只靠本地改檔就保證：

- 正式網域品質
- Search Console 提交與收錄
- 站外連結 / 品牌提及
- 使用者點擊率與停留
- 圖片品質與實際證據
- 發佈後持續更新頻率

## 下一步建議

### 優先

1. 幫 `/live-baccarat/` 塞入真實品牌大廳圖、桌型圖、手機截圖。
2. 幫 `/baccarat-roadmap/` 補真實路單圖與標註說明。
3. 幫 `/baccarat-odds/` 補更完整的比較表與「為什麼莊通常較優」圖解。

### 第二輪

1. 幫每篇加上更新日期與內容版本註記。
2. 建立更多真人百家樂品牌子頁或品牌比較子頁。
3. 補強首頁與 `/guides/` 的內容索引深度。

## 圖片交接清單

### 首頁：`/index.html`

檔案路徑：

- `/Users/user/Desktop/YS89-專案整理/baccarat-observatory/index.html`

這一頁目前已先補上的圖片與用途如下：

1. 品牌比較主圖
- 目前檔案：`/Users/user/Desktop/YS89-專案整理/baccarat-observatory/assets/img/home/home-brand-comparison-chart.webp`
- 目前放置區塊：「常見真人品牌定位比較」卡片群下方
- 用途：讓使用者直接看到 DG / SA / DB / WM / AG 的比較維度與品牌定位
- 建議後續優化方向：
  - 可再做一版更貼近站內酒紅金主色的比較圖
  - 若有品牌 logo 更新，可直接替換這張圖，不必改版位

2. 首屏 hero 圖
- 目前仍建議補做
- 建議位置：首頁首屏右側 hero-art 區塊，可改成實際主視覺圖與資訊疊層混合版
- 用途：加強真人百家樂辨識感，減少目前純 UI 圖形感
- 建議尺寸：`1600 x 1000`
- 建議檔名：`home-hero-live-baccarat.webp`

3. 教學主題群導覽圖
- 目前仍建議補做
- 建議位置：首頁「新手閱讀順序」或主題群入口區塊附近
- 用途：把規則、路單、機率、迷思、技巧等主題做成一張導覽型視覺
- 建議尺寸：`1600 x 900`
- 建議檔名：`home-guide-cluster-map.webp`

4. 手機體驗示意圖
- 目前仍建議補做
- 建議位置：首頁「首頁該有的 4 個體驗模組」或 FAQ 上方
- 用途：補強手機操作這條使用者意圖，不只在真人主題頁出現
- 建議尺寸：直式 `1170 x 2532`
- 建議檔名：`home-mobile-experience.webp`

### 第一優先：`/live-baccarat/`

檔案路徑：

- `/Users/user/Desktop/YS89-專案整理/baccarat-observatory/live-baccarat/index.html`

這一頁要先補的圖片與位置如下：

1. 品牌大廳比較圖
- 建議放在「常見真人品牌怎麼看」區塊前後
- 用途：讓使用者直接看到 DG / SA / DB / WM / AG 的介面風格、桌數感、資訊密度差異
- 建議尺寸：`1600 x 900`
- 建議檔名：`live-baccarat-brand-lobby-compare.webp`

2. 單一桌面特寫圖
- 建議放在品牌比較區塊下方或品牌比較卡片之後
- 用途：展示真人荷官、下注區、路單區、倒數位置，讓新手理解桌面組成
- 建議尺寸：`1400 x 900`
- 建議檔名：`live-baccarat-table-closeup.webp`

3. 路單視角圖
- 建議放在「真人百家樂新手先看這 3 件事」區塊附近
- 用途：補強「路單是主題入口之一」這個敘事，讓使用者理解真人桌常見畫面
- 建議尺寸：`1400 x 900`
- 建議檔名：`live-baccarat-roadmap-view.webp`

4. 手機操作截圖
- 建議放在手機體驗相關區塊與圖片版位規劃區
- 用途：證明手機版不是只寫「可玩」，而是真的有大廳、下注、切桌、路單體驗
- 建議尺寸：直式 `1170 x 2532` 或近似 `9:19.5`
- 建議檔名：
  - `live-baccarat-mobile-lobby.webp`
  - `live-baccarat-mobile-bet-ui.webp`
  - `live-baccarat-mobile-roadmap.webp`

5. 真人氛圍主視覺圖
- 建議放在頁面上半部，作為主情境圖或 hero 視覺
- 用途：建立「真人百家樂」辨識感與臨場感
- 建議尺寸：`1600 x 900`
- 建議檔名：`live-baccarat-hero-dealer-table.webp`

### 第二優先：其他文章頁要放的圖片

1. `/baccarat-roadmap/`
- 大路示意圖
- 大眼仔示意圖
- 小路示意圖
- 曱甴路示意圖
- 路單對照標註圖

2. `/baccarat-rules/`
- 百家樂下注區圖
- 莊閒和區塊標註圖
- 點數計算示意圖
- 第三張牌補牌流程圖

3. `/baccarat-odds/`
- 莊 / 閒 / 和機率比較圖
- 抽水與期望值差異圖
- 下注選項風險視覺化圖

4. `/lucky-six/`
- Lucky 6 / Super 6 桌面標註圖
- 側注區位置圖
- 平台差異比較圖

5. `/baccarat-betting-systems/`
- 1326 流程圖
- 平注 / 樓梯打法比較圖
- 資金曲線示意圖

6. `/baccarat-card-counting/`
- 百家樂 vs 21 點比較圖

7. `/baccarat-myths/`
- 迷思 vs 事實對照圖

8. `/baccarat-tips/`
- 選桌重點圖
- 手機操作重點圖
- 風險控制 checklist 圖

### 目前最務實的出圖順序

1. `/live-baccarat/`
2. `/index.html`
3. `/baccarat-roadmap/`
4. `/baccarat-rules/`
5. `/baccarat-odds/`
6. `/lucky-six/`
7. `/baccarat-betting-systems/`

## 本輪實際改動頁面

- `/Users/user/Desktop/YS89-專案整理/baccarat-observatory/live-baccarat/index.html`
- `/Users/user/Desktop/YS89-專案整理/baccarat-observatory/assets/style.css`
- `/Users/user/Desktop/YS89-專案整理/baccarat-observatory/baccarat-tips/index.html`
- `/Users/user/Desktop/YS89-專案整理/baccarat-observatory/baccarat-betting-systems/index.html`
- `/Users/user/Desktop/YS89-專案整理/baccarat-observatory/baccarat-card-counting/index.html`
- `/Users/user/Desktop/YS89-專案整理/baccarat-observatory/lucky-six/index.html`
- `/Users/user/Desktop/YS89-專案整理/baccarat-observatory/baccarat-myths/index.html`

## 備註

- 已盡量往資深 SEO / AEO / GEO 的內容結構靠攏。
- 可以把站做到更有機會競爭，但無法誠實保證「一定排名第一」。
- 後續若要繼續衝排名，最值得做的是：
  - 補真實圖片證據
  - 擴品牌比較頁
  - 發佈後持續更新與送索引
