// ===== ARMAS =====
const ARMAS = [
  // Adagas
  { nome: 'Adaga',                tipo: 'Adaga â€” CaC',    dano: '1d4 + For Â· Corte',      desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/1d Â· Leve Â· 1 MÃ£o' },
  { nome: 'Adaga Tortuosa',       tipo: 'Adaga â€” CaC',    dano: '1d4 + For Â· Perfurante',  desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/2d Â· Leve Â· 1 MÃ£o' },
  { nome: 'Adaga de Duas Pontas', tipo: 'Adaga â€” CaC',    dano: '1d4 + For Â· Perfurante',  desc: 'Alcance 1,5m Â· CrÃ­tico 20/1d Â· Leve Â· 1 MÃ£o | Passiva: aÃ§Ã£o bÃ´nus para segundo ataque (Reflexo ou Combate).' },
  { nome: 'Adaga Sardenta',       tipo: 'Adaga â€” CaC',    dano: '1d4/1d6 + For Â· Perfurante', desc: 'Alcance 1,5m Â· CrÃ­tico 20/1d Â· Leve Â· 1 MÃ£o | Passiva: ao acertar, ForÃ§a CD12 para retirar causando +1d6 perfurante.' },
  { nome: 'Adaga BalÃ­stica',      tipo: 'Adaga â€” CaC',    dano: '1d4 + For Â· Corte',       desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/1d Â· Leve Â· 1 MÃ£o | Passiva: ao acertar, aÃ§Ã£o bÃ´nus para disparar muniÃ§Ã£o de pistola (alcance 9m, +1d6 BalÃ­stico).' },
  // Manoplas
  { nome: 'Manopla de Ferro',     tipo: 'Manopla â€” CaC',  dano: '1d4 + For Â· Impacto',     desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/2d Â· Leve Â· 1 MÃ£o' },
  { nome: 'Manopla Espinhenta',   tipo: 'Manopla â€” CaC',  dano: '1d6 + For Â· Perfurante',  desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/2d Â· Leve Â· 1 MÃ£o' },
  { nome: 'Artilharia Manual',    tipo: 'Manopla â€” CaC',  dano: '1d6 + For Â· Impacto',     desc: 'Alcance 1,5m Â· CrÃ­tico 20/1d Â· Pesada Â· 1 MÃ£o | Passiva: explosÃ£o em linha de 3m causando 4d8 Fogo (turno completo + 100g pÃ³lvora para recarregar).' },
  { nome: 'Quebra Queixo',        tipo: 'Manopla â€” CaC',  dano: '1d4 + For Â· Impacto',     desc: 'Alcance 1,5m Â· CrÃ­tico 20/2d Â· Leve Â· 1 MÃ£o' },
  // Espadas
  { nome: 'Espada Curta',         tipo: 'Espada â€” CaC',   dano: '1d6 + For Â· Corte',       desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/1d Â· Leve Â· 1 MÃ£o' },
  { nome: 'Espada Longa',         tipo: 'Espada â€” CaC',   dano: '1d8/1d10 + For Â· Corte',  desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/1d Â· Leve Â· VersÃ¡til' },
  { nome: 'Espada Grande',        tipo: 'Espada â€” CaC',   dano: '2d6 + For Â· Corte',       desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/1d Â· Pesada Â· 2 MÃ£os' },
  { nome: 'Florete',              tipo: 'Espada â€” CaC',   dano: '1d6 + Des Â· Perfurante',  desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/2d Â· Leve Â· 1 MÃ£o' },
  { nome: 'Cimitarra',            tipo: 'Espada â€” CaC',   dano: '1d6 + For Â· Corte',       desc: 'Alcance 1,5m Â· CrÃ­tico 18-20/1d Â· Leve Â· 1 MÃ£o' },
  { nome: 'Alfange',              tipo: 'Espada â€” CaC',   dano: '2d4 + For Â· Corte',       desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/1d Â· Leve Â· 1 MÃ£o' },
  { nome: 'Wakizashi',            tipo: 'Espada â€” CaC',   dano: '1d8 + Des Â· Corte',       desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/2d Â· Leve Â· 1 MÃ£o' },
  { nome: 'Katana',               tipo: 'Espada â€” CaC',   dano: '1d10 + Des Â· Corte',      desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/1d Â· Leve Â· 1 MÃ£o' },
  // Discos
  { nome: 'Disco Laminado',       tipo: 'Disco â€” CaC/Ld', dano: '1d6 + Des Â· Corte',       desc: 'Alcance 1,5m Â· CrÃ­tico 20/1d Â· Leve Â· 1 MÃ£o | Passiva: pode ser lanÃ§ado em linha ou curva, volta para o lanÃ§ador (ReaÃ§Ã£o ou AÃ§Ã£o BÃ´nus CD15 Reflexos para pegar).' },
  // Foices
  { nome: 'Foice Curta',          tipo: 'Foice â€” CaC',    dano: '1d4 + For Â· Corte',       desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/1d Â· Leve Â· 1 MÃ£o' },
  { nome: 'Dupla Crescente',      tipo: 'Foice â€” CaC',    dano: '1d6 + Des Â· Corte',       desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/1d Â· Leve Â· 2 MÃ£os | Passiva: ao acertar, segundo ataque com Reflexos (aÃ§Ã£o bÃ´nus). Pode separar as lÃ¢minas.' },
  { nome: 'Foice',                tipo: 'Foice â€” CaC',    dano: '1d10 + For Â· Corte',      desc: 'Alcance 3m Â· CrÃ­tico 19-20/1d Â· Pesada Â· 2 MÃ£os' },
  { nome: 'Meia Lua',             tipo: 'Foice â€” CaC',    dano: '1d12 + For Â· Corte',      desc: 'Alcance 3m Â· CrÃ­tico 19-20/2d Â· Pesada Â· 2 MÃ£os' },
  // Arcos
  { nome: 'Arco Curto',           tipo: 'Arco â€” Ld',      dano: '1d6 + For Â· Perfurante',  desc: 'Alcance 9m Â· CrÃ­tico 19-20/1d Â· Leve Â· 2 MÃ£os' },
  { nome: 'Arco Longo',           tipo: 'Arco â€” Ld',      dano: '1d6 + For Â· Perfurante',  desc: 'Alcance 12m Â· CrÃ­tico 19-20/2d Â· Leve Â· 2 MÃ£os' },
  { nome: 'Arco de 4 Pontas',     tipo: 'Arco â€” Ld',      dano: '1d10 + For Â· Perfurante', desc: 'Alcance 15m Â· CrÃ­tico 19-20/2d Â· Pesada Â· 2 MÃ£os' },
  { nome: 'Arco Composto',        tipo: 'Arco â€” Ld',      dano: '1d10 + For Â· Perfurante', desc: 'Alcance 12m Â· CrÃ­tico 19-20/1d Â· Leve Â· 2 MÃ£os' },
  { nome: 'Arco Complexo',        tipo: 'Arco â€” Ld',      dano: '1d12 + For Â· Perfurante', desc: 'Alcance 18m Â· CrÃ­tico 19-20/2d Â· Pesada Â· 2 MÃ£os' },
  // LanÃ§as
  { nome: 'LanÃ§a',                tipo: 'LanÃ§a â€” CaC',    dano: '1d6 + For Â· Perfurante',  desc: 'Alcance 3m Â· CrÃ­tico 18-20/2d Â· Leve Â· 2 MÃ£os' },
  { nome: 'Alabarda',             tipo: 'LanÃ§a â€” CaC',    dano: '1d10 + For Â· Perfurante', desc: 'Alcance 3m Â· CrÃ­tico 19-20/2d Â· Pesada Â· 2 MÃ£os' },
  // BastÃµes
  { nome: 'BastÃ£o',               tipo: 'BastÃ£o â€” CaC',   dano: '1d6 + For Â· Impacto',     desc: 'Alcance 1,5m Â· CrÃ­tico 20/1d Â· Leve Â· 2 MÃ£os' },
  { nome: 'BastÃ£o Acolchoado',    tipo: 'BastÃ£o â€” CaC',   dano: '2 + For Â· Impacto',       desc: 'Alcance 1,5m Â· CrÃ­tico 20/1d Â· Leve Â· 2 MÃ£os' },
  { nome: 'BastÃ£o de Guerra',     tipo: 'BastÃ£o â€” CaC',   dano: '1d8 + For Â· Impacto',     desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/1d Â· Pesado Â· 2 MÃ£os | Passiva: ao acertar, segundo ataque com -2 de penalidade.' },
  { nome: 'Nunchaku',             tipo: 'BastÃ£o â€” CaC',   dano: '1d6 + For Â· Impacto',     desc: 'Alcance 1,5m Â· CrÃ­tico 18-20/1d Â· Leve Â· 2 MÃ£os | Passiva: +1 na prÃ³xima jogada de ataque ao acertar (reseta ao errar ou fim do turno).' },
  // MaÃ§as
  { nome: 'MaÃ§a',                 tipo: 'MaÃ§a â€” CaC',     dano: '1d8 + For Â· Impacto',     desc: 'Alcance 1,5m Â· CrÃ­tico 18-20/1d Â· Leve Â· 1 MÃ£o' },
  { nome: 'MaÃ§a Estrela',         tipo: 'MaÃ§a â€” CaC',     dano: '2d4 + For Â· Perfurante',  desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/2d Â· Leve Â· 1 MÃ£o' },
  { nome: 'Mangual',              tipo: 'MaÃ§a â€” CaC',     dano: '1d8 + For Â· Impacto',     desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/2d Â· Leve Â· 1 MÃ£o' },
  { nome: 'Mangual Pesado',       tipo: 'MaÃ§a â€” CaC',     dano: '1d12 + For Â· Perfurante', desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/2d Â· Pesado Â· 2 MÃ£os' },
  { nome: 'Clava',                tipo: 'MaÃ§a â€” CaC',     dano: '1d6 + For Â· Perfurante',  desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/1d Â· Leve Â· 1 MÃ£o' },
  // Machados
  { nome: 'Machadinha',           tipo: 'Machado â€” CaC',  dano: '1d6 + For Â· Corte',       desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/2d Â· Leve Â· 1 MÃ£o' },
  { nome: 'Machado Grande',       tipo: 'Machado â€” CaC',  dano: '1d12 + For Â· Corte',      desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/2d Â· Pesado Â· 2 MÃ£os' },
  { nome: 'Machado de Guerra',    tipo: 'Machado â€” CaC',  dano: '1d12 + For Â· Corte',      desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/3d Â· Pesado Â· 2 MÃ£os' },
  // Martelos
  { nome: 'Martelo de Guerra',    tipo: 'Martelo â€” CaC',  dano: '1d8 + For Â· Impacto',     desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/2d Â· Leve Â· 1 MÃ£o' },
  { nome: 'Martelo',              tipo: 'Martelo â€” CaC',  dano: '1d6 + For Â· Impacto',     desc: 'Alcance 1,5m Â· CrÃ­tico 18-20/2d Â· Leve Â· 1 MÃ£o' },
  { nome: 'Marreta',              tipo: 'Martelo â€” CaC',  dano: '3d4 + For Â· Impacto',     desc: 'Alcance 1,5m Â· CrÃ­tico 20/2d Â· Pesada Â· 2 MÃ£os' },
  { nome: 'Marreta Impulsiva',    tipo: 'Martelo â€” CaC',  dano: '1d10 + For Â· Impacto',    desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/2d Â· Pesada Â· 2 MÃ£os | Passiva: 1x a cada 3 turnos, aÃ§Ã£o livre para +1d8 Impacto.' },
  // AcategÃ³ricas
  { nome: 'Barbatanas Ferroadas', tipo: 'Acateg. â€” CaC',  dano: '1d6 + Des Â· Corte',       desc: 'Alcance 1,5m Â· CrÃ­tico 20/1d Â· Leve Â· 1 MÃ£o | Passiva: ao acertar desarmado, segundo ataque com Destreza na mesma aÃ§Ã£o.' },
  { nome: 'Bota Laminada',        tipo: 'Acateg. â€” CaC',  dano: '1d4 + Des Â· Corte',       desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/1d Â· Leve Â· 1 PÃ©' },
  { nome: 'Picareta',             tipo: 'Acateg. â€” CaC',  dano: '1d4 + For Â· Perfurante',  desc: 'Alcance 1,5m Â· CrÃ­tico 18-20/1d Â· Leve Â· 2 MÃ£os' },
  { nome: 'Tridente',             tipo: 'Acateg. â€” CaC',  dano: '1d8 + For Â· Perfurante',  desc: 'Alcance 1,5m Â· CrÃ­tico 19-20/2d Â· Pesada Â· 2 MÃ£os' },
];

// ===== ARMADURAS =====
const ARMADURAS = [
  { nome: 'Armadura de Couro',       tipo: 'Armadura â€” Leve',   dano: 'CA +2', desc: 'Leve e silenciosa. Oferece proteÃ§Ã£o bÃ¡sica sem comprometer a mobilidade.' },
  { nome: 'Cota de Malha',           tipo: 'Armadura â€” MÃ©dia',  dano: 'CA +4', desc: 'AnÃ©is de metal entrelaÃ§ados. Boa proteÃ§Ã£o contra cortes com peso moderado.' },
  { nome: 'Armadura de Placas',      tipo: 'Armadura â€” Pesada', dano: 'CA +8', desc: 'ProteÃ§Ã£o mÃ¡xima em campo de batalha. Pesada, mas quase impenetrÃ¡vel a ataques fÃ­sicos.' },
  { nome: 'GibÃ£o Acolchoado',        tipo: 'Armadura â€” Leve',   dano: 'CA +1', desc: 'Camadas de tecido grosso. ProteÃ§Ã£o mÃ­nima, mas silenciosa e confortÃ¡vel.' },
  { nome: 'Peitoral de Bronze',      tipo: 'Armadura â€” MÃ©dia',  dano: 'CA +3', desc: 'Placa frontal de bronze moldado. ProteÃ§Ã£o sÃ³lida com boa mobilidade nos flancos.' },
  { nome: 'Armadura de Escamas',     tipo: 'Armadura â€” MÃ©dia',  dano: 'CA +4', desc: 'Escamas metÃ¡licas sobrepostas. FlexÃ­vel como couro, resistente como metal.' },
  { nome: 'Manto das Sombras',       tipo: 'Armadura â€” Leve',   dano: 'CA +2', desc: 'Tecido encantado que absorve luz. Favorito de infiltradores e obscuros.' },
  { nome: 'Armadura RÃºnica',         tipo: 'Armadura â€” MÃ©dia',  dano: 'CA +5', desc: 'Gravada com runas de proteÃ§Ã£o. Concede resistÃªncia a um tipo de dano mÃ¡gico.' },
  { nome: 'Escudo de Torre',         tipo: 'Escudo â€” Pesado',   dano: 'CA +3', desc: 'Escudo de corpo inteiro. Pode ser usado para cobrir aliados adjacentes.' },
  { nome: 'Armadura Espectral',      tipo: 'Armadura â€” Leve',   dano: 'CA +3', desc: 'Forjada com essÃªncia do vazio. Semitransparente e leve como nÃ©voa.' },
  { nome: 'Armadura de Couro Batido',tipo: 'Armadura â€” Leve',   dano: 'CA +3', desc: 'Couro endurecido por tÃ©cnica artesanal de batimento. Mais resistente que o couro comum, sem perder a leveza.' },
];

// ===== ACESSÃ“RIOS =====
const ACESSORIOS = [
  { nome: 'Corredores ao Vento',      tipo: 'AcessÃ³rio â€” Botas',     raridade: 'Incomum', recarga: 'Descanso mÃ©dio+', carga: 2, acao: 'ReaÃ§Ã£o', desc: 'Botas de couro escuro com detalhes prateados. Permitem um segundo salto no ar impulsionado por vento invisÃ­vel. Ãštil para evitar quedas, atravessar vÃ£os ou alterar trajetÃ³ria.' },
  { nome: 'Passos Fantasma',          tipo: 'AcessÃ³rio â€” Sapatilhas', raridade: 'Incomum', recarga: 'Descanso mÃ©dio+', carga: 2, acao: 'BÃ´nus',   desc: 'Sapatilhas etÃ©reas de tecido acinzentado. Concedem +5 em furtividade, eliminam sons ao se deslocar e permitem ignorar terreno difÃ­cil.' },
  { nome: 'LaÃ§o da Verdade',          tipo: 'AcessÃ³rio â€” LaÃ§o',      raridade: 'Incomum', recarga: 'Descanso mÃ©dio+', carga: 2, acao: 'AÃ§Ã£o',    desc: 'LaÃ§o dourado leve como seda e firme como aÃ§o. LanÃ§ado sobre criatura a atÃ© 6m: se agarrada, fica compelida a dizer apenas verdades atÃ© o fim do prÃ³ximo turno.' },
  { nome: 'Lente do Caminho',         tipo: 'AcessÃ³rio â€” MonÃ³culo',   raridade: 'Incomum', recarga: 'Descanso mÃ©dio+', carga: 2, acao: 'BÃ´nus',   desc: 'MonÃ³culo de cobre com lente azulada. Por 1 minuto revela trilhas ocultas, rastros mÃ¡gicos e portas secretas a atÃ© 9m, mesmo magicamente ocultas.' },
  { nome: 'Ã“culos da Verdade',        tipo: 'AcessÃ³rio â€” Ã“culos',     raridade: 'Incomum', recarga: 'Descanso mÃ©dio+', carga: 2, acao: 'BÃ´nus',   desc: 'Ã“culos de lentes translÃºcidas. Por 1 minuto permitem ver atravÃ©s de ilusÃµes, disfarces e perceber criaturas invisÃ­veis no campo de visÃ£o.' },
  { nome: 'Coroa de GÃªneros',         tipo: 'AcessÃ³rio â€” Coroa',      raridade: 'Comum',   recarga: '', carga: null, acao: '', desc: 'Troca o gÃªnero do usuÃ¡rio quando desejar. Ativo por 1 hora, nÃ£o pode se destransformar. Concede +4 em EnganaÃ§Ã£o, AtuaÃ§Ã£o e LÃ¡bia enquanto ativo.' },
  { nome: 'Tiara do Conhecimento',    tipo: 'AcessÃ³rio â€” Tiara',      raridade: 'Incomum', recarga: 'Descanso mÃ©dio+', carga: 2, acao: 'BÃ´nus',   desc: 'Tiara prateada com cristal violeta. Por 1 minuto concede vantagem em Conhecimento, ReligiÃ£o, HistÃ³ria e Arcano, e permite ler idiomas escritos desconhecidos.' },
  { nome: 'Capa InvisÃ­vel',           tipo: 'AcessÃ³rio â€” Capa',       raridade: 'Incomum', recarga: 'Descanso mÃ©dio+', carga: 2, acao: 'BÃ´nus',   desc: 'Capa cinza que ondula como nÃ©voa. Torna o usuÃ¡rio invisÃ­vel atÃ© realizar aÃ§Ã£o hostil. InvisÃ­vel: sem ataques de oportunidade e ignora sensores visuais comuns.' },
  { nome: 'Luvas de Escalada',        tipo: 'AcessÃ³rio â€” Luvas',      raridade: 'Incomum', recarga: 'Descanso mÃ©dio+', carga: 2, acao: 'BÃ´nus',   desc: 'Luvas de couro com runas nas palmas. Por 1 minuto permitem escalar qualquer superfÃ­cie, mesmo lisa ou vertical, sem testes e sem usar os pÃ©s.' },
  { nome: 'Anel de Coelho',           tipo: 'AcessÃ³rio â€” Anel',       raridade: 'Incomum', recarga: 'Descanso mÃ©dio+', carga: 2, acao: 'ReaÃ§Ã£o',  desc: 'Anel de prata com entalhe de coelho. Dobra distÃ¢ncia de salto ou permite mover atÃ© 3m como reaÃ§Ã£o ao ser alvo de ataque ou armadilha.' },
  { nome: 'Anel de Ave',              tipo: 'AcessÃ³rio â€” Anel',       raridade: 'Incomum', recarga: 'Descanso mÃ©dio+', carga: 2, acao: 'BÃ´nus',   desc: 'Anel de ouro com pena gravada. Ao ativar, transforma o usuÃ¡rio em um pÃ¡ssaro de rank 0 que jÃ¡ conheÃ§a ou tenha visto.' },
  { nome: 'Colar de Aura Tortuosa',   tipo: 'AcessÃ³rio â€” Colar',      raridade: 'Incomum', recarga: 'Descanso longo',  carga: 1, acao: 'BÃ´nus',   desc: 'Pingente em espiral prateada. Aura distorcida: inimigos fazem teste de Vontade CD 15 (falha = Apavorado; sucesso = Amedrontado). +5 em IntimidaÃ§Ã£o.' },
  { nome: 'Anel de Esqueleto',        tipo: 'AcessÃ³rio â€” Anel',       raridade: 'Incomum', recarga: 'Descanso mÃ©dio+', carga: 2, acao: 'BÃ´nus',   desc: 'Anel de ferro com crÃ¢nio esculpido. Invoca mÃ£o esquelÃ©tica translÃºcida por 1 minuto: pega objetos a atÃ© 3m e concede vantagem em um teste de IntimidaÃ§Ã£o ou PersuasÃ£o.' },
  { nome: 'Anel de Invocar Familiar', tipo: 'AcessÃ³rio â€” Anel',       raridade: 'Incomum', recarga: 'Descanso longo+', carga: 3, acao: 'AÃ§Ã£o',    desc: 'Anel de bronze com sÃ­mbolos de animais. Invoca familiar animal por 10 minutos. Auxilia em tarefas simples, envia mensagens e fornece bÃ´nus em vigilÃ¢ncia.' },
  { nome: 'Olho do AlÃ©m',             tipo: 'AcessÃ³rio â€” Amuleto',    raridade: 'Incomum', recarga: 'Descanso mÃ©dio+', carga: 2, acao: 'BÃ´nus',   desc: 'Amuleto com olho em pedra negra. Por 1 minuto permite enxergar espÃ­ritos e criaturas incÃ³rporas a atÃ© 9m, percebendo suas intenÃ§Ãµes bÃ¡sicas.' },
  { nome: 'VisÃ£o Extra-Planar',       tipo: 'AcessÃ³rio â€” Amuleto',    raridade: 'Raro',    recarga: 'Descanso longo+', carga: 3, acao: 'BÃ´nus',   desc: 'Amuleto de cristal translÃºcido. Por 1 minuto revela criaturas, objetos e portais em planos paralelos a atÃ© 12m. Facilita distinguir ilusÃµes.' },
  { nome: 'Ã“culos da Segunda Vida',   tipo: 'AcessÃ³rio â€” Ã“culos',     raridade: 'Raro',    recarga: 'Descanso longo+', carga: 1, acao: 'ReaÃ§Ã£o',  desc: 'Ã“culos dourados que brilham Ã  beira da morte. Ao cair a 0 PV, restaura automaticamente 1d10 + Modificador de Vontade em PV.' },
  { nome: 'Dados Coincidentes',       tipo: 'AcessÃ³rio â€” Dados',      raridade: 'Incomum', recarga: 'Descanso mÃ©dio+', carga: 2, acao: 'BÃ´nus',   desc: 'Par de dados de marfim envelhecido com sÃ­mbolos arcanos em vez de nÃºmeros.' },
  { nome: 'BÃºssola Eterna',           tipo: 'AcessÃ³rio â€” BÃºssola',    raridade: 'Incomum', recarga: 'Descanso mÃ©dio+', carga: 2, acao: 'BÃ´nus',   desc: 'BÃºssola de bronze antigo. Aponta para o local que o usuÃ¡rio mais deseja encontrar no momento, desde que no mesmo plano e a poucos quilÃ´metros.' },
];

