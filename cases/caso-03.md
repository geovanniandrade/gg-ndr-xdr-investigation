# Caso 03 — Suspicious DNS queries

**Nível:** Iniciante · **Dados 100% simulados** · **Fonte:** NDR/XDR fictício

## 🚩 Alerta recebido
- **Origem:** `10.10.40.31`
- **Destino:** `192.0.2.53`
- **Detecção:** Consultas repetidas a sync-patch.example e respostas NXDOMAIN

## 🧾 Evidências disponíveis
- DNS: 14 NXDOMAIN em 1 hora
- EDR: processo de atualização legítimo
- domínio é fictício e consta na documentação de homologação

## 🕵️ Sua investigação
1. O que foi **observado** e o que é apenas hipótese do detector?
2. Que fonte adicional você consultaria primeiro e por quê?
3. Quais evidências apoiam e enfraquecem a hipótese de ataque?
4. Classifique: **benigno**, **suspeito/inconclusivo** ou **confirmado**; justifique.
5. Existe necessidade de escalonamento ou contenção autorizada?

Preencha o [modelo de relatório](../templates/relatorio-incidente.md) antes de ler o gabarito.

<details><summary>🔐 Resolução comentada — abrir só depois da análise</summary>

Provável falso positivo após validar processo e documentação.

**Próximos passos:** confirme horários, proprietários, autorização e integridade da telemetria. Registre o que não pôde ser verificado. Não execute ações disruptivas sem aprovação.
</details>

[← Voltar ao índice](../README.md#-exercícios-de-investigação)
