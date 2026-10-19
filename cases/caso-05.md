# Caso 05 — Unusual outbound transfer

**Nível:** Intermediário · **Dados 100% simulados** · **Fonte:** NDR/XDR fictício

## 🚩 Alerta recebido
- **Origem:** `10.10.20.70`
- **Destino:** `198.51.100.90`
- **Detecção:** 4,2 GB enviados às 02:15; baseline de 30 dias de 100 MB/noite

## 🧾 Evidências disponíveis
- Inventário: servidor de backup
- destino corresponde ao storage corporativo
- mudança aprovada CHG-2026-081
- TLS normal

## 🕵️ Sua investigação
1. O que foi **observado** e o que é apenas hipótese do detector?
2. Que fonte adicional você consultaria primeiro e por quê?
3. Quais evidências apoiam e enfraquecem a hipótese de ataque?
4. Classifique: **benigno**, **suspeito/inconclusivo** ou **confirmado**; justifique.
5. Existe necessidade de escalonamento ou contenção autorizada?

Preencha o [modelo de relatório](../templates/relatorio-incidente.md) antes de ler o gabarito.

<details><summary>🔐 Resolução comentada — abrir só depois da análise</summary>

Transferência esperada; classificar como benigno após confirmação da mudança.

**Próximos passos:** confirme horários, proprietários, autorização e integridade da telemetria. Registre o que não pôde ser verificado. Não execute ações disruptivas sem aprovação.
</details>

[← Voltar ao índice](../README.md#-exercícios-de-investigação)
