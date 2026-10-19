
/* GG Security XDR visual workspace — simulated data only */
(()=>{
const xEsc=s=>esc(s??"");
let chosenNode=0,levelFilter="Todos";
const types=["endpoint","process","ip","domain","firewall","identity"];
const icons=["🖥","⚙","◉","🌐","🛡","👤"];
function topologyFor(c){
 const points=[
 {kind:"endpoint",name:"Endpoint origem",value:c.src,x:17,y:48,role:"Ativo de origem"},
 {kind:"process",name:"Evento observado",value:c.cat,x:43,y:28,role:"Detecção correlacionada"},
 {kind:"ip",name:"Destino",value:c.dst,x:77,y:48,role:"Observável de rede"},
 {kind:"firewall",name:"Sensor NDR",value:"Tráfego monitorado",x:43,y:75,role:"Origem dos registros"},
 {kind:"identity",name:"Contexto",value:c.level,x:75,y:83,role:"Nível do exercício"}
 ];
 if(/DNS|C2|Exfiltration/i.test(c.title)){points[2].kind="domain";points[2].name="Domínio / destino"}
 return {points,edges:[[0,1],[1,2],[0,3],[3,2],[2,4]]};
}
function miniChart(){let h=[24,38,28,62,31,48,76,43,56,88,64,44,72,39,61,82,43,68,49,93];return '<div class="xdr-bars">'+h.map((n,i)=>'<div title="Janela '+(i+1)+': '+n+' eventos simulados" style="height:'+n+'%"></div>').join("")+'</div><div class="xdr-legend"><span>● Distribuição ilustrativa de eventos</span><span>20 janelas simuladas</span></div>'}
dashboard=function(){
let shown=CASES.filter(c=>levelFilter==="Todos"||c.level===levelFilter);
return '<div class="xdr-heading"><div><span class="xdr-eyebrow">Security Operations / Control Center</span><h1>Central de operações XDR</h1><p>Monitoramento e correlação educacional de alertas NDR/XDR — ambiente simulado.</p></div><span class="pill">● TRAINING ENVIRONMENT</span></div>'+
'<div class="xdr-overview"><div class="xdr-kpi"><small>Alertas simulados</small><strong>09</strong><i>Casos disponíveis</i></div><div class="xdr-kpi"><small>Alta / crítica</small><strong>'+CASES.filter(x=>x.sev==="Alta"||x.sev==="Crítica").length+'</strong><i>Classificação inicial</i></div><div class="xdr-kpi"><small>Investigações concluídas</small><strong>'+Object.keys(completed).length+'/9</strong><i>Progresso neste navegador</i></div><div class="xdr-kpi"><small>Domínios de análise</small><strong>03</strong><i>Rede • Identidade • Endpoint</i></div></div>'+
'<div class="xdr-analytics"><div class="xdr-panel"><h2>Atividade de detecções — amostra sintética</h2>'+miniChart()+'</div><div class="xdr-panel"><h2>Distribuição por nível</h2>'+["Iniciante","Intermediário","Avançado"].map((l,i)=>'<div class="xdr-mini"><span>'+l+'</span><strong>'+CASES.filter(c=>c.level===l).length+' casos</strong></div>').join("")+'<p class="hint">Os indicadores representam apenas o conteúdo dos exercícios.</p></div></div>'+
'<div class="xdr-board"><div class="row between"><div><h2>Fila de investigações</h2><p class="hint">Selecione um evento para abrir o grafo e os registros associados.</p></div><select id="xdr-filter" class="xdr-filter" aria-label="Filtrar por nível">'+["Todos","Iniciante","Intermediário","Avançado"].map(x=>'<option '+(levelFilter===x?"selected":"")+'>'+x+'</option>').join("")+'</select></div><div class="tablewrap"><table class="table"><thead><tr><th>ID</th><th>Alerta</th><th>Categoria</th><th>Severidade</th><th>Nível</th><th>Status</th><th></th></tr></thead><tbody>'+shown.map(c=>'<tr onclick="go(\\'investigacoes\\','+c.id+')"><td>SIM-'+String(c.id).padStart(3,"0")+'</td><td><b>'+xEsc(c.title)+'</b></td><td>'+xEsc(c.cat)+'</td><td>'+tag(c.sev)+'</td><td>'+xEsc(c.level)+'</td><td>'+(completed[c.id]?"Concluído":"Pendente")+'</td><td><button class="btn">Investigar →</button></td></tr>').join("")+'</tbody></table></div></div><p class="hint section">⚠️ Nenhum evento ou indicador representa um incidente real.</p>'
};
const previousInvestigations=investigations;
investigations=function(){
if(!activeCase)return '<div class="xdr-heading"><div><span class="xdr-eyebrow">Investigation Center</span><h1>Investigações</h1><p>Explore os alertas no grafo de relacionamentos.</p></div></div><div class="casegrid">'+CASES.map(c=>'<div class="card casecard"><div class="row between"><span class="xdr-eyebrow">SIM-'+String(c.id).padStart(3,"0")+' • '+xEsc(c.level)+'</span>'+tag(c.sev)+'</div><h3>'+xEsc(c.title)+'</h3><p>'+xEsc(c.signal)+'</p><button class="btn primary" onclick="go(\\'investigacoes\\','+c.id+')">Abrir investigação →</button></div>').join("")+'</div>';
const c=CASES.find(x=>x.id===activeCase);if(!c)return previousInvestigations();
const {points,edges}=topologyFor(c);
const svg='<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">'+edges.map(([a,b])=>'<line x1="'+points[a].x+'" y1="'+points[a].y+'" x2="'+points[b].x+'" y2="'+points[b].y+'" stroke="#778ba2" stroke-width=".38" opacity=".9"/>').join("")+'</svg>';
return '<div class="xdr-heading"><div><button class="btn" onclick="go(\\'investigacoes\\')">← Voltar</button><span class="xdr-eyebrow" style="display:block;margin-top:14px">Incident / SIM-'+String(c.id).padStart(3,"0")+'</span><h1>'+xEsc(c.title)+'</h1><p>'+xEsc(c.signal)+'</p></div><div class="row">'+tag(c.sev)+'<span class="pill">'+xEsc(c.level)+'</span></div></div>'+
'<div class="xdr-steps"><span>① Identificar</span><span>② Correlacionar</span><span>③ Classificar</span><span>④ Documentar</span></div>'+
'<div class="xdr-workspace"><div class="xdr-graph-box"><div class="xdr-graph-toolbar"><b>◉ Mapa de relacionamentos</b><span class="hint">'+points.length+' observáveis / '+edges.length+' relações</span></div><div class="xdr-graph" id="xdr-graph">'+svg+points.map((n,i)=>'<button type="button" class="xdr-node '+(chosenNode===i?"on":"")+'" data-xnode="'+i+'" style="left:'+n.x+'%;top:'+n.y+'%"><span class="sym">'+icons[types.indexOf(n.kind)]+'</span><b>'+xEsc(n.name)+'</b><small>'+xEsc(n.value)+'</small></button>').join("")+'</div></div>'+
'<aside class="xdr-sidepanel"><h3>Assets & Observables</h3><div class="detail"><span class="hint">ITEM SELECIONADO</span><strong id="xdr-selected-title">'+xEsc(points[chosenNode]?.name||points[0].name)+'</strong><span id="xdr-selected-value">'+xEsc(points[chosenNode]?.value||points[0].value)+'</span><br><span class="hint" id="xdr-selected-role">'+xEsc(points[chosenNode]?.role||points[0].role)+'</span></div><h3>Indicadores</h3><div class="detail"><span class="hint">ORIGEM</span><strong>'+xEsc(c.src)+'</strong></div><div class="detail"><span class="hint">DESTINO</span><strong>'+xEsc(c.dst)+'</strong></div><div class="detail"><span class="hint">CATEGORIA</span><strong>'+xEsc(c.cat)+'</strong></div><h3>Contexto adicional</h3>'+c.clues.map(s=>'<div class="detail">'+xEsc(s)+'</div>').join("")+'</aside></div>'+
'<div class="xdr-events"><div class="row between"><h2>Timeline e registros de segurança</h2><span class="tag">Dados fictícios</span></div><div class="xdr-timeline">'+c.logs.map((x,i)=>'<span style="height:'+(20+((i*33+17)%65))+'%" title="'+xEsc(x)+'"></span>').join("")+'</div>'+c.logs.map(x=>'<div class="xdr-event">'+xEsc(x)+'</div>').join("")+'</div>'+
'<div class="xdr-exercise"><h2>Tomada de decisão</h2><p>'+xEsc(c.q)+'</p>'+c.opts.map((x,i)=>'<label class="answer"><input type="radio" name="ans" value="'+i+'" '+(answered[c.id]===i?"checked":"")+'>'+xEsc(x)+'</label>').join("")+'<label for="justification">Justificativa do analista</label><textarea id="justification" class="field" rows="3" placeholder="Quais evidências sustentam sua hipótese?"></textarea><div class="row"><button id="checkCase" class="btn primary">Verificar resposta</button><button class="btn" onclick="openReport('+c.id+')">Gerar relatório</button></div><div id="caseFeedback"></div></div>';
};
const priorRender=render;
render=function(){chosenNode=0;priorRender();if(page==="dashboard"){const sel=document.getElementById("xdr-filter");if(sel)sel.onchange=()=>{levelFilter=sel.value;render()}}if(page==="investigacoes"&&activeCase){const c=CASES.find(x=>x.id===activeCase);const points=topologyFor(c).points;document.querySelectorAll("[data-xnode]").forEach(n=>n.onclick=()=>{const i=Number(n.dataset.xnode);chosenNode=i;document.querySelectorAll("[data-xnode]").forEach(v=>v.classList.toggle("on",v===n));document.getElementById("xdr-selected-title").textContent=points[i].name;document.getElementById("xdr-selected-value").textContent=points[i].value;document.getElementById("xdr-selected-role").textContent=points[i].role})}}
})();
