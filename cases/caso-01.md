# Caso 01 — Port scanning detected

**Nível:** Iniciante · **Dados 100% simulados** · **Fonte:** NDR/XDR fictício

## 🚩 Alerta recebido
- **Origem:** `198.51.100.24`
- **Destino:** `10.10.20.15`
- **Detecção:** 38 SYN a 15 portas em 90s; 0 sessões TCP completas; sensor perimetral

## 🧾 Evidências disponíveis
- Firewall: 38 tentativas negadas
- CMDB: destino é servidor de teste
- agenda: pentest externo autorizado no mesmo período

## 🕵️ Sua investigação
1. O que foi **observado** e o que é apenas hipótese do detector?
2. Que fonte adicional você consultaria primeiro e por quê?
3. Quais evidências apoiam e enfraquecem a hipótese de ataque?
4. Classifique: **benigno**, **suspeito/inconclusivo** ou **confirmado**; justifique.
5. Existe necessidade de escalonamento ou contenção autorizada?

Preencha o [modelo de relatório](../templates/relatorio-incidente.md) antes de ler o gabarito.

<details><summary>🔐 Resolução comentada — abrir só depois da análise</summary>

Atividade de varredura confirmada, mas autorizada; benigno após validação da autorização.

**Próximos passos:** confirme horários, proprietários, autorização e integridade da telemetria. Registre o que não pôde ser verificado. Não execute ações disruptivas sem aprovação.
</details>

[← Voltar ao índice](../README.md#-exercícios-de-investigação)
