# 🧭 Investigação e correlação

## Fontes sugeridas
| Fonte | Pergunta que ajuda a responder |
|---|---|
| NDR / NetFlow | Quem conversou com quem, quando, por quanto tempo e quanto transferiu? |
| Firewall | Houve permissão ou bloqueio? Qual regra e NAT? |
| DNS / Proxy | Qual domínio/URL foi consultado e qual resposta? |
| EDR / XDR | Qual processo, usuário, árvore de execução e ações ocorreram? |
| AD / IdP | Qual identidade, autenticação ou privilégio foi usado? |
| CMDB / Change | O ativo e a atividade são conhecidos/autorizados? |

## Método
1. Formule uma hipótese (ex.: varredura, erro operacional ou atividade autorizada).
2. Determine que dado pode confirmar **ou refutar** a hipótese.
3. Correlacione janelas temporais e normalize fusos.
4. Registre evidência, fonte, hora e confiabilidade sem alterar originais.
5. Documente alternativas e lacunas.
6. Classifique com justificativa verificável e próximos passos.

## Cuidados técnicos
- Ausência de log pode ser problema de coleta, e não ausência de atividade.
- Volume de bytes não prova exfiltração; avalie destino, autorização e tipo de dado.
- Periodicidade pode indicar beaconing **ou** atualização/monitoramento legítimo.
- Um evento de grupo privilegiado precisa de autor, alvo, grupo e aprovação.