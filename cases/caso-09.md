# Caso 09 — Privileged group modification

**Nível:** Avançado · **Dados 100% simulados** · **Fonte:** NDR/XDR fictício

## 🚩 Alerta recebido
- **Origem:** `10.10.10.11`
- **Destino:** `10.10.10.12`
- **Detecção:** Membro novo em grupo administrativo; evento Windows 4728

## 🧾 Evidências disponíveis
- AD: operador admin.temp adicionou conta suporte01 ao grupo privilegiado
- janela de mudança inexistente
- acesso posterior ao DC

## 🕵️ Sua investigação
1. O que foi **observado** e o que é apenas hipótese do detector?
2. Que fonte adicional você consultaria primeiro e por quê?
3. Quais evidências apoiam e enfraquecem a hipótese de ataque?
4. Classifique: **benigno**, **suspeito/inconclusivo** ou **confirmado**; justifique.
5. Existe necessidade de escalonamento ou contenção autorizada?

Preencha o [modelo de relatório](../templates/relatorio-incidente.md) antes de ler o gabarito.

<details><summary>🔐 Resolução comentada — abrir só depois da análise</summary>

Mudança de privilégio não autorizada até comprovação; escalar e avaliar revogação conforme autorização.

**Próximos passos:** confirme horários, proprietários, autorização e integridade da telemetria. Registre o que não pôde ser verificado. Não execute ações disruptivas sem aprovação.
</details>

[← Voltar ao índice](../README.md#-exercícios-de-investigação)
