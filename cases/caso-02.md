# Caso 02 — Repeated authentication failures

**Nível:** Iniciante · **Dados 100% simulados** · **Fonte:** NDR/XDR fictício

## 🚩 Alerta recebido
- **Origem:** `10.10.30.21`
- **Destino:** `10.10.10.12`
- **Detecção:** 19 falhas de autenticação de serviço em 4 minutos; 1 sucesso posterior

## 🧾 Evidências disponíveis
- AD: conta svc-backup
- alterações de senha há 10 minutos
- equipe confirma credencial desatualizada em agente
- origem inventariada

## 🕵️ Sua investigação
1. O que foi **observado** e o que é apenas hipótese do detector?
2. Que fonte adicional você consultaria primeiro e por quê?
3. Quais evidências apoiam e enfraquecem a hipótese de ataque?
4. Classifique: **benigno**, **suspeito/inconclusivo** ou **confirmado**; justifique.
5. Existe necessidade de escalonamento ou contenção autorizada?

Preencha o [modelo de relatório](../templates/relatorio-incidente.md) antes de ler o gabarito.

<details><summary>🔐 Resolução comentada — abrir só depois da análise</summary>

Falhas operacionais após rotação de credencial; não caracterizar força bruta sem contexto.

**Próximos passos:** confirme horários, proprietários, autorização e integridade da telemetria. Registre o que não pôde ser verificado. Não execute ações disruptivas sem aprovação.
</details>

[← Voltar ao índice](../README.md#-exercícios-de-investigação)
