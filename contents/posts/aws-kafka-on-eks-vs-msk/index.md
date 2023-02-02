---
title: "Kafka on EKS vs MSK"
description: "EKS 위에서 운영하는 카프카와 MSK의 간단 비교"
date: 2022-11-20
update: 2022-11-20
tags:
- EKS
- Kafka
- MSK
---

## Kafka on EKS, MSK

Kafka는 이벤트 기반 아키텍처나 MSA 등등 현대 아키텍처 메세지 브로커로 빼놓을 수 없는 요소입니다.

EKS 또한 대부분의 애플리케이션을 컨테이너로 배포하는 와중에 거의 필수적으로 사용하는 쿠버네티스를 보다 더 편리하게 사용할 때 많이 사용하는 요소입니다.

그러면 Kafka를 EKS에 올려서 사용하는 케이스에 대해 어떤 방법이 있는지, 장단점이 무엇인지 알아봅시다.

## 어떤 방법들이 있을까?

EKS(K8S)에 카프카를 배포하는 방식에는 여러가지가 있을 것 같습니다.

1. [Manage Kafka on Kubernetes: Strimzi](https://github.com/strimzi/strimzi-kafka-operator)
2. [Banzai Cloud](https://github.com/banzaicloud/koperator)
3. [Confluent](https://docs.confluent.io/operator/current/co-deploy-cfk.html)
4. [Bitnami Kafka Helm chart](https://artifacthub.io/packages/helm/bitnami/kafka)

위 방식들 말고도 여러 방법들이 있을 수 있습니다 :)

## EKS on Kafka에서 생각해 볼 수 있는 점

아무래도 직접 클러스터를 관리하다 보니 그 과정에서 배우는건 많을 것 같습니다. 그리고 모든것이 Admin의 통제 하에 관리되니 자유도나 디버깅 환경 또한 관리형 서비스보다는 편할 듯 싶습니다.

그러나 그 이외 부분에서는 제 지식의 한계인지 더 좋은점은 생각하지 못했습니다. 대부분의 케이스에서 heavy lifting한 작업을 대신해주는 관리형 서비스가 낫다는 생각을 떨칠수가 없네요..

구축하는 레퍼런스는 아래와 같은 사이트들이 있습니다.

- https://medium.com/@JinnaBalu/kafka-cluster-on-amezon-eks-cluster-5850d67ae723
- https://portworx.com/run-ha-kafka-amazon-elastic-container-service-kubernetes/


## Amazon Managed Streaming for Apache Kafka(MSK)

AWS에서는 Kafka를 managed service로 제공하는 MSK가 있습니다.

위에서 잠깐 얘기했지만, 사실 대부분의 상황에서 MSK를 쓰는게 나을 것 같다는 생각입니다. 직접 설치 운영은 업데이트나 관리 측면에서 어려움을 겪을 확률이 크기 때문이고, Heavy lifting을 피할 수 있으면 피하는게 낫지 않을까라는 생각입니다.

그리고 관리 측면을 제외하더라도, EKS와 달리 MSK는 **inter-az 데이터 전송 비용이 무료**이기 때문에 이러한 부분또한 고려해보면 좋습니다.


## 결론

아무래도 요즘 대부분의 케이스에서 직접 클러스터를 구축해서 사용하는 것 보다는 관리형 서비스를 사용하는게 여러가지 측면에서 효율성이 좋은 것 같습니다. 단, 회사의 규모가 너무 커서 On-premise에 직접 클러스터를 구축해서 관리해야 하는 상황이나 회사의 상황에 맞춰 특정 기능을 커스터마이징 해야 하는 상황 같은 경우 직접 해야 할 수도 있다고 생각합니다.

