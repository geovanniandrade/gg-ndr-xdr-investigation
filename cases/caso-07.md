# Caso 07 — Possible data exfiltration

**Nível:** Avançado · **Dados 100% simulados** · **Fonte:** NDR/XDR fictício

## 🚩 Alerta recebido
- **Origem:** `10.10.60.12`
- **Destino:** `203.0.113.88`
- **Detecção:** 12 GB para serviço externo desconhecido em 30 min; pico fora do horário

## 🧾 Evidências disponíveis
- DLP: regra de dados sensíveis acionada
- proxy: upload multipart
- endpoint: processo navegador
- usuário nega atividade
- destino não homologado

## 🕵️ Sua investigação
1. O que foi **observado** e o que é apenas hipótese do detector?
2. Que fonte adicional você consultaria primeiro e por quê?
3. Quais evidências apoiam e enfraquecem a hipótese de ataque?
4. Classifique: **benigno**, **suspeito/inconclusivo** ou **confirmado**; justifique.
5. Existe necessidade de escalonamento ou contenção autorizada?

Preencha o [modelo de relatório](../templates/relatorio-incidente.md) antes de ler o gabarito.

<details><summary>🔐 Resolução comentada — abrir só depois da análise</summary>

Possível exfiltração de dados; escalar incidente e aplicar contenção autorizada.

**Próximos passos:** confirme horários, proprietários, autorização e integridade da telemetria. Registre o que não pôde ser verificado. Não execute ações disruptivas sem aprovação.
</details>

[← Voltar ao índice](../README.md#-exercícios-de-investigação)
