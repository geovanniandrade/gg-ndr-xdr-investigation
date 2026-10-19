# Caso 04 — Possible C2 beaconing

**Nível:** Intermediário · **Dados 100% simulados** · **Fonte:** NDR/XDR fictício

## 🚩 Alerta recebido
- **Origem:** `10.10.50.18`
- **Destino:** `203.0.113.77`
- **Detecção:** Conexões HTTPS a cada 60±2 segundos por 45 minutos; 150 bytes enviados em média

## 🧾 Evidências disponíveis
- Proxy: domínio cdn-update.example não autorizado
- EDR: processo powershell.exe iniciado por macro
- hash ainda sem verificação
- dispositivo isolado conforme procedimento

## 🕵️ Sua investigação
1. O que foi **observado** e o que é apenas hipótese do detector?
2. Que fonte adicional você consultaria primeiro e por quê?
3. Quais evidências apoiam e enfraquecem a hipótese de ataque?
4. Classifique: **benigno**, **suspeito/inconclusivo** ou **confirmado**; justifique.
5. Existe necessidade de escalonamento ou contenção autorizada?

Preencha o [modelo de relatório](../templates/relatorio-incidente.md) antes de ler o gabarito.

<details><summary>🔐 Resolução comentada — abrir só depois da análise</summary>

Alta suspeita de beaconing; escalar e preservar evidências, sem chamar de C2 confirmado sem corroboração.

**Próximos passos:** confirme horários, proprietários, autorização e integridade da telemetria. Registre o que não pôde ser verificado. Não execute ações disruptivas sem aprovação.
</details>

[← Voltar ao índice](../README.md#-exercícios-de-investigação)
