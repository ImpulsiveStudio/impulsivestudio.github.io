---
layout: "default"
Category: "Study"
subCat: "Note"
title: "[컴퓨터적 사고]알고리즘 짜기 이론-3"
description: '15주차 소프트웨어적 사유 정리'
---

##### 재귀적 알고리즘


재귀적 알고리즘의 컴퓨터적 사고

![recursive](/assets/Photo/recursive.PNG)

피보나치 수열에서의 컴퓨터적 사고

fib(n) = fib(n-1) + fib(n-2) (n>=2)

![pib](/assets/Photo/pib.PNG)


하노이의 탑

![hanoi](/assets/Photo/hanoi.PNG)

깊이 우선 탐색도 마찬가지지

깊이우선 탐색을 하는 도중 자식노드에 대해 또 깊이우선 탐색을 하는 거니까.


##### 최단거리 탐색 알고리즘

다익스트라의 알고리즘

가장 가까운 거리에 아크를 이은 후에 그 노드로 인해 가능해진 짧아진 거리들을 표시

![daikstra1](/assets/Photo/daik1.PNG)

![daikstra1](/assets/Photo/daik2.PNG)

![daikstra](/assets/Photo/daik.PNG)


##### 두 장군의 문제

두 장군이 동시에 적을 공격해야 하는데,

유일한 통신수단은 전령뿐

공격을 확신하기 위한 수단은?

1.많은 수의 전령을 동시에 보내서 손실을 최소화한다.

2.많은 수의 전령을 순차적으로 보낸다.

3.전령이 왔다 갔다 하는데 일정시간동안 전령이 도착하지 않으면 다시 전령을 보내는 방법

![twoGen](/assets/Photo/twoGen.PNG)


##### 교착상태(deadlock)

휘발유를 가진 사람과 열쇠를 가진 사람

회전교차로에서 돌고 있는 상황과 들어가려고 하는 상황

해결방법: 공간을 비워둔다.

##### 식사하는 철학자들

원형 식탁에서 5명의 철학자가 둘러앉아 있다.

이 철학자들은 생각하거나 식사를 하거나 둘 중 하나만 해야한다.

각 철학자 앞에는 스파게티가 있고, 철학자 사이에는 포크가 한개씩 있다.

철학자는 자신의 양편에 포크가 있을 때만 두개의 포크를 사용하여 스파게티를 먹을 수 있다.

한 포크는 한 순간에 한명의 펄학자만 사용할 수 있다.

철학자는 식사가 끝나면 다른 철학자가 사용할 수 있도록 두개의 포크를 내려놓는다.

철학자는 오른쪽 또는 왼쪽 포크를 순서없이 잡을 수 있다.

스파게티는 무한히 공급되고, 철학자도 무한히 먹을 수 있다.

![diningPh](/assets/Photo/diningPh.PNG)

##### 외판원 문제

외판원이 모든 집을 최소의 시간으로 돌고 오는 경로를 찾는 문제

이렇게 정답이 예,아니오가 아닌 문제를

비결정적문제라고 하지

반대는 결정적문제

![teleSeller](/assets/Photo/teleSeller.PNG)

방법1. 무작정 알고리즘: 가능한 모든 경우를 생각한다.

방법2. 탐욕적 알고리즘