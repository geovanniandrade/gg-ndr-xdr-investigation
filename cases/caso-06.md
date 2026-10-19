# Caso 06 — Possible lateral movement

**Nível:** Intermediário · **Dados 100% simulados** · **Fonte:** NDR/XDR fictício

## 🚩 Alerta recebido
- **Origem:** `10.10.30.42`
- **Destino:** `10.10.10.25`
- **Detecção:** SMB e RDP para 6 hosts em 8 minutos, fora do padrão do dispositivo

## 🧾 Evidências disponíveis
- Windows: logons 4624 tipo 3/10
- EDR: ferramenta administrativa remota
- ticket de manutenção não localizado
- 1 login de conta privilegiada em host sensível

## 🕵️ Sua investigação
1. O que foi **observado** e o que é apenas hipótese do detector?
2. Que fonte adicional você consultaria primeiro e por quê?
3. Quais evidências apoiam e enfraquecem a hipótese de ataque?
4. Classifique: **benigno**, **suspeito/inconclusivo** ou **confirmado**; justifique.
5. Existe necessidade de escalonamento ou contenção autorizada?

Preencha o [modelo de relatório](../templates/relatorio-incidente.md) antes de ler o gabarito.

<details><summary>🔐 Resolução comentada — abrir só depois da análise</summary>

Suspeito: verificar identidade e autorização, correlacionar eventos e acionar responsável.

**Próximos passos:** confirme horários, proprietários, autorização e integridade da telemetria. Registre o que não pôde ser verificado. Não execute ações disruptivas sem aprovação.
</details>

[← Voltar ao índice](../README.md#-exercícios-de-investigação)
