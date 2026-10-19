# 🛡️ GG | NDR & XDR Investigation

**Guia de investigação de alertas NDR/XDR, com estudos, playbooks e exercícios práticos.**

![Blue Team](https://img.shields.io/badge/Blue%20Team-Investigation-0EA5E9) ![NDR](https://img.shields.io/badge/NDR-Network%20Detection-14B8A6) ![XDR](https://img.shields.io/badge/XDR-Correlation-8B5CF6) ![Educational](https://img.shields.io/badge/Cenarios-100%25%20Simulados-F59E0B)

> Projeto **educacional**, não é laboratório de infraestrutura e não depende de Vigilant ou de um fabricante específico. Nunca utilize dados, IPs ou capturas corporativas sem autorização. Os endereços dos exemplos usam faixas reservadas à documentação (RFC 5737).

## 🚀 Comece aqui

1. [📚 Estudos: NDR x XDR](docs/01-estudos.md)
2. [🔎 Triagem inicial](docs/02-triagem.md)
3. [🧭 Investigação e correlação](docs/03-investigacao.md)
4. [🚨 Resposta e documentação](docs/04-resposta.md)
5. [📝 Prova de conhecimento](docs/05-prova.md)
6. [📋 Modelo de relatório](templates/relatorio-incidente.md)

## 🔬 Exercícios de investigação

| # | Nível | Alerta | Abrir |
|---|---|---|---|
| 01 | Iniciante | Port scanning detected | [Investigar](cases/caso-01.md) |
| 02 | Iniciante | Repeated authentication failures | [Investigar](cases/caso-02.md) |
| 03 | Iniciante | Suspicious DNS queries | [Investigar](cases/caso-03.md) |
| 04 | Intermediário | Possible C2 beaconing | [Investigar](cases/caso-04.md) |
| 05 | Intermediário | Unusual outbound transfer | [Investigar](cases/caso-05.md) |
| 06 | Intermediário | Possible lateral movement | [Investigar](cases/caso-06.md) |
| 07 | Avançado | Possible data exfiltration | [Investigar](cases/caso-07.md) |
| 08 | Avançado | Ransomware-like behavior | [Investigar](cases/caso-08.md) |
| 09 | Avançado | Privileged group modification | [Investigar](cases/caso-09.md) |

Cada caso apresenta **telemetria fictícia**, perguntas de investigação, orientações para documentar evidências e uma resolução recolhida em bloco expansível. Leia os registros e responda antes de abrir o gabarito.

## 🔍 Roteiro rápido do analista

**Identificar → Contextualizar → Correlacionar → Classificar → Responder → Documentar.**

- O que a detecção afirma e o que efetivamente foi observado?
- Origem, destino, usuário, processo, porta/protocolo, horário e ativo são conhecidos?
- Há conexão estabelecida, tentativa bloqueada, operação autorizada ou mudança aprovada?
- Logs do NDR, firewall, DNS, proxy, AD e EDR concordam?
- Que evidência sustenta a classificação? Qual informação ainda falta?
- Existe necessidade de escalonamento ou contenção conforme playbook autorizado?

## ⚖️ Classificações

**Benigno / falso positivo:** atividade esperada e validada. **Suspeito / inconclusivo:** há indícios, mas falta evidência. **Incidente confirmado:** evidências corroboram violação ou ação maliciosa. A *severidade do alerta* não determina sozinha a conclusão.

## 🔐 Avisos

Conteúdo para defesa e treinamento. Não envie credenciais, dados pessoais, logs internos ou identificadores reais ao GitHub. Análises de IP e domínios requerem contexto e checagem da origem; reputação negativa isolada não comprova ataque. A resposta deve observar as autorizações e políticas da organização.
