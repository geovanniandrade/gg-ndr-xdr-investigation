# Caso 08 — Ransomware-like behavior

**Nível:** Avançado · **Dados 100% simulados** · **Fonte:** NDR/XDR fictício

## 🚩 Alerta recebido
- **Origem:** `10.10.70.19`
- **Destino:** `10.10.70.5`
- **Detecção:** Muitas alterações de arquivos em 3 minutos e tráfego SMB intenso

## 🧾 Evidências disponíveis
- EDR: 2400 renomeações e extensão incomum
- backup: últimos backups íntegros
- logs: script administrativo não identificado
- host sem isolamento automático

## 🕵️ Sua investigação
1. O que foi **observado** e o que é apenas hipótese do detector?
2. Que fonte adicional você consultaria primeiro e por quê?
3. Quais evidências apoiam e enfraquecem a hipótese de ataque?
4. Classifique: **benigno**, **suspeito/inconclusivo** ou **confirmado**; justifique.
5. Existe necessidade de escalonamento ou contenção autorizada?

Preencha o [modelo de relatório](../templates/relatorio-incidente.md) antes de ler o gabarito.

<details><summary>🔐 Resolução comentada — abrir só depois da análise</summary>

Incidente de alta prioridade; proteger sistemas, preservar registros e seguir playbook de ransomware.

**Próximos passos:** confirme horários, proprietários, autorização e integridade da telemetria. Registre o que não pôde ser verificado. Não execute ações disruptivas sem aprovação.
</details>

[← Voltar ao índice](../README.md#-exercícios-de-investigação)
