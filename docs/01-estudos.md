# 📚 Fundamentos: NDR e XDR

## NDR (Network Detection and Response)
Monitora telemetria da rede para detectar comportamentos anômalos: NetFlow/IPFIX, DNS, TLS, logs de proxy, firewall e sensores, conforme a ferramenta. Fornece visibilidade de comunicação entre ativos, mas pode ter limitações com criptografia, cobertura de sensores e identificação de processos.

## XDR (Extended Detection and Response)
Correlaciona sinais de múltiplos controles (endpoint, identidade, email, rede e nuvem, conforme a solução). Pode ajudar a construir cadeia de eventos e apoiar ações de resposta. Nem toda solução XDR possui as mesmas integrações.

## Conceitos essenciais
- **IOC:** indicador observável, como IP, domínio, URL ou hash; exige contexto.
- **TTP:** tática, técnica ou procedimento do adversário, mais próximo de comportamento.
- **Baseline:** referência de comportamento habitual; desvio não implica ataque.
- **Falso positivo:** alarme que não corresponde à atividade maliciosa inicialmente sugerida.
- **Telemetria:** observações que sustentam hipóteses, com origem e horário registrados.
- **MITRE ATT&CK:** base de conhecimento para mapear comportamento; não substitui evidência.

## O que revisar antes de investigar?
TCP/UDP e estados de conexão; DNS e NXDOMAIN; HTTP e TLS; autenticação Windows (4624, 4625, 4728), proxy, EDR, CMDB e tickets de mudança. Aplique os conhecimentos nos [casos](../README.md#-exercícios-de-investigação).