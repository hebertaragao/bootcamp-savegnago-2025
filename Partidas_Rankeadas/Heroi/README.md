# 🛡️ Calculadora de Heróis — Projeto DIO

Este projeto foi desenvolvido como parte de um desafio prático da [Digital Innovation One (DIO)](https://www.dio.me/), com foco em reforçar os fundamentos da programação: **variáveis**, **operadores**, **funções**, **laços**, **condições** e **orientação a objetos**.

## 🎮 Objetivo

Simular personagens de um jogo de aventura, onde cada herói possui:
- Nome
- Idade
- Tipo (ex: mago, ninja, monge, guerreiro)

Cada tipo possui uma ação de ataque específica. Além disso, o projeto foi turbinado com:
- Experiência e evolução de nível
- Aumento de pontos de vida conforme evolução
- Mensagens dinâmicas e divertidas para cada ação

## 🚀 Funcionalidades

- Criar heróis com tipos personalizados
- Simular ataques com base no tipo
- Ganhar pontos de experiência a cada ataque
- Evoluir de nível automaticamente ao atingir XP suficiente
- Exibir status do herói em tempo real

## 🧪 Exemplo de uso

```javascript
let heroi = new Heroi("Artemis", 24, "monge");
heroi.atacar();
heroi.status();

