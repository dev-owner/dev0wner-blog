---
title: "2023 부담있는 스터디 - Apache Arrow 코드 파헤치기 #2"
description: "갑자기 궁금해서 공부해본 apache arrow 이야기 두번째 - Arrow Flight RPC"
date: 2023-02-05
update: 2023-02-05
tags:
- Apache Arrow Flight
series: "Apache Arrow 찍먹하기"
---

## 서문
&nbsp;&nbsp; 이전 포스트에서 Apache Arrow에 대해 간략한 내용과 특징들을 살펴보았습니다. 이번에는 내부 구현을 보면서 조금 더 살펴보려고 합니다. 여러 언어 구현체가 있지만, 가장 익숙한 Python으로 보겠습니다.

## Arrow Flight RPC

&nbsp;&nbsp; Apache Arrow에서 가져가는 성능상의 이점 중 마지막으로 `Remove Network Overhead` 항목이 있습니다.
