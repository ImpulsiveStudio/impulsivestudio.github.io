---
layout: "default"
Category: "Study"
subCat: "Note"
title: "[컴퓨터적 사고]파이썬"
description: '6.7주차 소프트웨어적 사유 정리'
---

##### 파이썬

파이썬은 인터프리터 언어의 일종이다.

High-Level언어이고, 인터프리터 언어이다.

객체지향 개념을 포함하고 있다.

##### 인터프리터 언어

컴파일 과정을 거치지 않고 실행되는 컴퓨터 언어

인터프리터 언어를 실행하는 프로그램이 인터프리터

~~~python
and del from not while

이런 것들은 예약거라고 부른다. reserved words

a = input()
으로 쓸 수도 있고,

a = input("Type any number : ")

a.find("c") // c가 있는 곳의 인덱스를 반환
a.count("cc") // cc의 수를 반환
a.strip() //양쪽에 있는 "\n" 잘라주기

if():
    asdf
elif():
    asdf
else():
    asdf
~~~

##### 연산자 우선순위

()로 묶어준 것이 가장 우선순위지만, 묶여있지 않을 경우에는 and 가 or 보다 먼저

##### 예약어 True False

앞에 대문자 필수

##### 반복문

~~~python

for i in range(10):
    sum +=1
print("합=",sum)

i = 0
while i<10:
    sum += i
    i+=1 //파이썬은 ++안돼!

range(0,10) //0,1,2,3,4...9

range(10,1,-2)// 10,8,6...,2  증분이 -2라서 1+1까지 반환

//만약 증분이 양수라면 1-1까지 변함


~~~

##### 리스트 다루기

~~~python
a = [1,2,3,4,5,6,7]

a.count(3) // 1
a.reverse() // a 자체를 순서를 바꿈
a.pop() //맨뒤에 삭제
a.pop(1) .. //1번 인덱스 삭제
a.sort()//순서대로 정리

~~~

##### print 포맷

~~~python

print("A is %3.1f, B is %3d" % (a,b))

//%3.1f -> 실수형 데이터를 총 세자리 스트링으로 반환할 건데 소수점 아래의 문자열 수가 1개다.
//%3d -> 총 3자리 정수다.
//% -> 구분자
//%10.3e -> 총 10자리스트링인데 소수점 3자리까지 나타내 뒤에 지수형태로 표현하라. 대문자E도 됨
//ex) 123.4567 -> " 1.235e+02"
~~~
