# Swipe Gallery

![Demo](./demo.gif)

## 中文介紹

Swipe Gallery 是一個以 React 實作的滑動式圖片瀏覽元件，改編自早期 Swag 網站的輪播功能。

本專案透過研究當時的實作方式與互動邏輯，使用 React Hooks 重新整理架構，並導入類似 react-window 的虛擬渲染（Virtualized Rendering）概念，以降低大量資料渲染時的效能負擔。

## 功能特色

* 滑動式卡片瀏覽體驗
* React Hooks 架構重構
* Virtualized Rendering 虛擬渲染
* 大量資料下的效能優化
* 適合行動裝置的操作體驗

## 專案背景

此專案源自於研究早期 Swag 網站輪播功能的實作方式。

在理解原始設計與互動邏輯後，透過 React Hooks 重新整理程式架構，並嘗試導入虛擬渲染技術，以驗證在大量資料情境下的效能表現。

因此，本專案並非從零開始設計，而是在既有實作概念之上進行重構、優化與延伸開發。

值得一提的是，專案最初完成於 2020 年。當時 React 生態系中尚未普遍採用虛擬列表與虛擬渲染方案，因此曾嘗試自行實作相關機制，以改善大量圖片瀏覽時的效能問題。

## 技術棧

* React
* React Hooks
* JavaScript (ES6+)
* CSS3

## 貢獻

歡迎提出建議、Issue 或 Pull Request。
