// ===== HABILIDADES =====
const HABILIDADES = {};

// Habilidades do Caminho da Espada (escolhÃ­veis via popup, custo PCE)
const HABS_CAMINHO_ESPADA = [
  { nome: 'ProteÃ§Ã£o Laminar', desc: 'Com uma AÃ§Ã£o BÃ´nus, adiciona o bÃ´nus de classe Ã  CA pelo resto do turno.', acao: 'AÃ§Ã£o BÃ´nus', pce: 1 },
  { nome: 'Quebrar Armadura', desc: 'Se acertar, diminui a CA do alvo em -2 por 30 segundos.', acao: 'AÃ§Ã£o PadrÃ£o', pce: 1, evo: 'Cicatrizes Marcantes (+1 PCE): CA diminuÃ­da em -3 atÃ© 1 minuto.' },
  { nome: 'Desarmar Inimigo', desc: 'Ao causar dano total com sua arma, use sua reaÃ§Ã£o para tentar desarmar o oponente. Salvaguarda de ForÃ§a dele vs Destreza sua.', acao: 'ReaÃ§Ã£o', pce: 1, evo: 'Desarme EstratÃ©gico (+1 PCE): ativa ao causar 80%+ do dado, usando Reflexos ou Combate.' },
  { nome: 'Corte Profundo', desc: 'Anula a resistÃªncia do alvo a dano de corte ou perfurante, se ele a possuir.', acao: 'Passiva', pce: 1 },
  { nome: 'Ponto Fixo', desc: '+3 na prÃ³xima jogada de ataque contra locais especÃ­ficos.', acao: 'AÃ§Ã£o BÃ´nus', pce: 1, evo: 'Ponto Letal (+1 PCE): +5 no acerto e margem de crÃ­tico +1 contra locais especÃ­ficos.' },
  { nome: 'Aparada', desc: 'Com sua reaÃ§Ã£o, faÃ§a um teste de Combate contra o ataque do oponente. Se passar ou igualar, ambos recebem metade do dano.', acao: 'ReaÃ§Ã£o', pce: 1, evo: 'Rebote (+1 PCE): se igualar ou passar, anula seu dano e o oponente recebe metade do que causou.' },
  { nome: 'Corte X', desc: 'Desfere 2 ataques contra o oponente em um corte em X, na mesma aÃ§Ã£o.', acao: 'AÃ§Ã£o PadrÃ£o', pce: 1, evo: 'Corte Z (+1 PCE): 3 ataques | Corte W (+1 PCE): 4 ataques | Corte * (+1 PCE): 5 ataques.' },
];

// Artes da Espada (escolhÃ­veis via popup nos nÃ­veis 7,9,12,15,18)
const ARTES_DA_ESPADA = [
  { nome: 'Bloqueio', desc: 'O bÃ´nus de bloquear aumenta em +2.' },
  { nome: 'Certeiro', desc: '+1 em seus ataques.' },
  { nome: 'Defesa', desc: '+1 em CA.' },
  { nome: 'Foco', desc: 'Acertos crÃ­ticos causam +1 dado de dano extra.' },
  { nome: 'Letal', desc: 'A margem de crÃ­tico aumenta em +1.' },
  { nome: 'Latente', desc: 'Requer PotÃªncia e Corte Profundo. Ataques de corte se tornam perfurantes ou o contrÃ¡rio, Ã  escolha.' },
  { nome: 'LigÃ£o', desc: 'O bÃ´nus de esquiva aumenta em +2.' },
  { nome: 'Preciso', desc: '+2 em testes com sua espada fora de cenas de combate.' },
  { nome: 'PotÃªncia', desc: 'Seus ataques causam +2 de dano.' },
  { nome: 'ResistÃªncia', desc: '+2 em todos os testes de resistÃªncia.' },
];

HABILIDADES.Espadachim = {
  base: [
    { nome: 'Armamento Devoto', nivel: 1, desc: '+1 em testes de ataque e rolagens de dano com qualquer espada de proficiÃªncia.', acao: 'Passiva', evo: 'NÃ­vel 6: bÃ´nus aumenta para +2 em ataque e dano.' },
    { nome: 'Postura de Combate', nivel: 1, desc: 'Escolha uma postura atÃ© o inÃ­cio do prÃ³ximo turno: Ofensiva (+2 dano), Defensiva (+2 CA) ou FluÃ­da (+3m deslocamento).', acao: 'AÃ§Ã£o BÃ´nus' },
    { nome: 'Leitura de Movimento', nivel: 2, desc: 'Sempre que uma criatura errar vocÃª, recebe +1 cumulativo no prÃ³ximo ataque contra ela. MÃ¡ximo igual ao bÃ´nus de Sabedoria.', acao: 'Passiva' },
    { nome: 'Corte Acelerado', nivel: 3, desc: 'Gaste uma aÃ§Ã£o padrÃ£o e 2 PE para avanÃ§ar 9m em linha reta e atingir um alvo. Os dois primeiros ataques corpo a corpo contra ele recebem +2 no teste de ataque.', acao: 'AÃ§Ã£o PadrÃ£o' },
    { nome: 'Olho da LÃ¢mina', nivel: 4, desc: 'Escolha um alvo. AtÃ© o inÃ­cio do seu prÃ³ximo turno: ignora meia cobertura e bÃ´nus de escudo contra ele, e recebe +2 em ataques contra ele.', acao: 'AÃ§Ã£o BÃ´nus' },
    { nome: 'Caminho da Espada', nivel: 6, desc: 'Nos nÃ­veis 6, 10, 12, 14, 17 e 20 vocÃª pode escolher uma habilidade de espada. Habilidades iniciais custam 1 PCE, evoluÃ§Ãµes +1 PCE cada.', acao: 'Passiva', _especial: 'caminho_espada' },
    { nome: 'DomÃ­nio da LÃ¢mina', nivel: 6, desc: 'Ao acertar um ataque, gaste o PE correspondente para: desnortear o alvo (-2 em acerto atÃ© o prÃ³ximo turno); aplicar a manobra Empurrar usando Destreza; ou Recuar 1,5m sem provocar ataques de oportunidade.', acao: 'Passiva' },
    { nome: 'Arte da Espada', nivel: 7, desc: 'Escolha uma Arte da Espada. Novas artes nos nÃ­veis 9, 12, 15 e 18.', acao: 'Passiva', _especial: 'arte_espada' },
    { nome: 'Ritmo do Duelo', nivel: 8, desc: 'Ao acertar um alvo pela segunda vez consecutiva sem errar, recebe um marcador (mÃ¡x 3). Ao atingir 3 marcadores, recupera 1 PCE.', acao: 'Passiva' },
    { nome: 'Aparada (Passiva)', nivel: 11, desc: 'Quando for atacado, gaste sua reaÃ§Ã£o para fazer um corte no objeto, projÃ©til ou inimigo a 3m de vocÃª. Se o dano causado for igual ou maior ao do atacante, anula o dano.', acao: 'ReaÃ§Ã£o' },
    { nome: 'Zona de Controle', nivel: 13, desc: 'Inimigos em 3m provocam ataque de oportunidade ao se mover e nÃ£o recebem bÃ´nus por flanquear vocÃª. Uma vez por rodada pode realizar um ataque de oportunidade sem gastar reaÃ§Ã£o, gastando o PE necessÃ¡rio.', acao: 'Passiva' },
    { nome: 'Mil Cortes', nivel: 17, desc: 'Em raio de 4,5m, escolha atÃ© 5 inimigos para atacar simultaneamente, retornando ao centro apÃ³s. Role um dado de acerto para cada alvo. Ao acertar 3 ou mais, recupera 1 PCE.', acao: 'AÃ§Ã£o PadrÃ£o' },
    { nome: 'Mestre da Espada', nivel: 20, desc: 'Seus ataques ignoram resistÃªncias nÃ£o mÃ¡gicas. Com espada: margem de crÃ­tico +2, recupera 1 PE ao acertar um crÃ­tico e 1 PCE ao incapacitar um inimigo.', acao: 'Passiva' },
  ],
  caminhos: {}
};

HABILIDADES.Bardo = {
  base: [
    { nome: 'Apoiar', nivel: 1, desc: 'Concede vantagem no prÃ³ximo teste de um alvo que possa lhe ver ou escutar.', acao: 'AÃ§Ã£o BÃ´nus' },
    { nome: 'CanÃ§Ã£o de Cura', nivel: 1, desc: 'Cura 1d6 + Carisma de PV a aliados em 4,5m ao redor. SÃ³ fecha ferimentos superficiais.', acao: 'AÃ§Ã£o PadrÃ£o', evo: 'NÃ­vel 6: Ã¡rea expande para 6m e cura 2d6 + Carisma.' },
    { nome: 'CanÃ§Ã£o Barbica', nivel: 2, desc: 'Motiva um alvo que possa escutar, concedendo +1d4 do mesmo tipo de dano por 1 minuto.', acao: 'AÃ§Ã£o BÃ´nus', evo: 'NÃ­vel 3: +1d6 | NÃ­vel 6: +1d8 | NÃ­vel 9: +1d10 | NÃ­vel 11: +1d12' },
    { nome: 'ConfusÃ£o Inimiga', nivel: 3, desc: 'Entoa sons desafinados. O alvo faz teste de ConstituiÃ§Ã£o contra sua CD; se falhar, recebe desvantagem em ataques atÃ© o prÃ³ximo turno.', acao: 'AÃ§Ã£o PadrÃ£o' },
    { nome: 'Impulso', nivel: 5, desc: 'Empurra alvos em 3m ao redor a 7,5m de distÃ¢ncia. Teste de ConstituiÃ§Ã£o contra CD; se falhar, causa +1d8 trovejante. Se acertar algo sÃ³lido, +1d4 de impacto.', acao: 'AÃ§Ã£o PadrÃ£o' },
    { nome: 'Inspirar ConfianÃ§a', nivel: 7, desc: 'Uma vez por rodada, mesmo fora do turno, permite que um aliado que possa te ouvir role novamente uma jogada de ataque. Deve ficar com o segundo resultado.', acao: 'Passiva' },
    { nome: 'Ala de Segredos', nivel: 9, desc: 'Escolha uma habilidade inicial de outro caminho de Bardo, ou uma habilidade nÃ­vel 1â€“4 de outra classe (exceto Aspectomante, Obscuro, Sonariante, Necromante e Feiticeiro).', acao: 'AÃ§Ã£o PadrÃ£o', evo: 'NÃ­vel 13: pode pegar a segunda habilidade do caminho escolhido ou sua evoluÃ§Ã£o.' },
    { nome: 'ImpulsÃ£o Sonora', nivel: 12, desc: 'Causa 3 impulsÃµes sonoras, movendo vocÃª e um aliado junto. Cada impulsÃ£o locomove 5m. VocÃª ataca com vantagem; o aliado sem vantagem. Livre de ataque de oportunidade.', acao: 'AÃ§Ã£o de Movimento' },
  ],
  caminhos: {
    'Bravura': {
      proficiencias: 'Vontade, Espadas Longas, Arcos Longos e Curtos',
      habs: [
        { nome: 'Ataque Extra', nivel: 6, desc: 'Ao acertar um ataque, pode atacar +1 vez com a mesma aÃ§Ã£o.', acao: 'Passiva', evo: 'NÃ­vel 9: +2 ataques | NÃ­vel 13: +3 ataques' },
        { nome: 'Contra Peso', nivel: 9, desc: 'MÃºsica que deixa o clima mais leve. Aliados que escutam tÃªm vantagem contra Amedrontado, Apavorado ou Encantado por 1 minuto.', acao: 'AÃ§Ã£o PadrÃ£o' },
        { nome: 'Sinfonia de Guerra', nivel: 13, desc: 'Ao entoar uma magia de Bardo, gaste 5 PE e aÃ§Ã£o bÃ´nus para realizar um ataque com sua arma.', acao: 'Passiva' },
        { nome: 'Vontade de Ferro', nivel: 17, desc: 'Por 1min30s a cada golpe acertado: aliados ganham +1 CA. A cada 3 golpes seus, alvos recebem +4 de dano adicional (mÃ¡x. 3 acÃºmulos).', acao: 'Passiva' },
        { nome: 'DeterminaÃ§Ã£o Pranteada', nivel: 20, desc: 'Aliados que escutam ganham +8 de dano trovejante por 2 minutos. Aliados em estado de morrendo voltam com 1 PV; ao fim da mÃºsica, retornam ao estado de morrendo.', acao: 'AÃ§Ã£o Completa' },
      ]
    },
    'Pavor': {
      proficiencias: 'IntimidaÃ§Ã£o',
      habs: [
        { nome: 'Fiddle', nivel: 6, desc: 'Ao acertar com arma, gaste PE para causar 1d8 psÃ­quico. Teste de Vontade: falha = +1d4 psÃ­quico + Amedrontado; passa = sÃ³ dano adicional.', acao: 'Passiva' },
        { nome: 'Terror Contagiante', nivel: 9, desc: 'Ao causar Amedrontado, alvos adjacentes em 1,5m tambÃ©m fazem teste de resistÃªncia ou ficam amedrontados pelo mesmo tempo.', acao: 'Passiva' },
        { nome: 'Olhar Perturbador', nivel: 13, desc: 'Alvo a atÃ© 15m faz salvaguarda de Carisma: falha = Apavorado por 1 min + 3d6 psÃ­quico + desvantagem em testes de Carisma; passa = sÃ³ dano.', acao: 'AÃ§Ã£o PadrÃ£o' },
        { nome: 'Medo InabalÃ¡vel', nivel: 17, desc: '1x por descanso longo. Alvo que entenda e escute faz salvaguarda de Sabedoria: falha = obedece comandos por 1 min. A cada falha no reteste, +1 na CD.', acao: 'Passiva' },
        { nome: 'PrepÃºcio da Morte', nivel: 20, desc: 'Aura mortal em 12m. Salvaguarda de Carisma: falha = Paralisado por 30s; passa = 3d10 psÃ­quico. Paralisado que receber ataque fica Apavorado.', acao: 'AÃ§Ã£o PadrÃ£o' },
      ]
    },
    'Vigor': {
      proficiencias: 'PersuasÃ£o, Magias de Cura (regra de Mago)',
      habs: [
        { nome: 'Toque Acolhedor', nivel: 6, desc: 'Cura 1d8 + PersuasÃ£o a um aliado em 12m. Recupera feridas leves.', acao: 'AÃ§Ã£o PadrÃ£o', evo: 'NÃ­vel 9: 2d8 | NÃ­vel 13: 3d8 | NÃ­vel 17: 4d8' },
        { nome: 'Ajuda TemporÃ¡ria', nivel: 9, desc: 'Concede 12 PV e 10 PE temporÃ¡rios a aliados que escutam (nÃ£o acumulativo).', acao: 'AÃ§Ã£o BÃ´nus', evo: 'NÃ­vel 13: 16 PV / 14 PE | NÃ­vel 17: 28 PV / 26 PE' },
        { nome: 'MÃºsica de Ferro', nivel: 13, desc: 'Atribui ResistÃªncia = PersuasÃ£o + 2 a dano psÃ­quico a alvos em 15m.', acao: 'AÃ§Ã£o PadrÃ£o' },
        { nome: 'Orquestra SinfÃ´nica', nivel: 17, desc: 'Cura 7d12 + PersuasÃ£o de PV e 5d8 de PE a todos em 22m. Fecha ferimentos graves.', acao: 'Turno Completo' },
      ]
    },
    'PerdiÃ§Ã£o': {
      proficiencias: 'IntimidaÃ§Ã£o',
      habs: [
        { nome: 'Onda Potente', nivel: 6, desc: 'Empurra alvos em 4,5m ao redor a 18m de distÃ¢ncia, causando 2d8 trovejante.', acao: 'AÃ§Ã£o PadrÃ£o' },
        { nome: 'Nota Aguda', nivel: 9, desc: 'Acorde agudo em Ã¡rea de 9m. Salvaguarda de Vigor: falha = 3d8 + IntimidaÃ§Ã£o trovejante; passa = metade.', acao: 'AÃ§Ã£o PadrÃ£o' },
        { nome: 'RessonÃ¢ncia DespedaÃ§ante', nivel: 13, desc: 'VibraÃ§Ã£o em ponto a 18m, raio 4,5m. Salvaguarda de Vigor: falha = 6d6 + IntimidaÃ§Ã£o psÃ­quico + caÃ­do; passa = sÃ³ dano. Objetos frÃ¡geis recebem dobro.', acao: 'AÃ§Ã£o PadrÃ£o' },
        { nome: 'Tremor Infundado', nivel: 17, desc: 'Onda sonora em 9m ao redor ou cone de 12m. Surge ruÃ­do do chÃ£o atÃ© 9m acima: 8d6 + IntimidaÃ§Ã£o psÃ­quico. Salvaguarda de Destreza: falha = dano total + jogado 9m acima; passa = metade + levantado 3m.', acao: 'AÃ§Ã£o PadrÃ£o' },
        { nome: 'DÃ³ ExtermÃ­nio', nivel: 20, desc: 'Onda sonora em 22m: 8d10 + IntimidaÃ§Ã£o trovejante. Teste de ConstituiÃ§Ã£o: falha = dano total + Atordoado 1 min; passa = metade + Surdo 1 min.', acao: 'Turno Completo' },
      ]
    },
    'Soneto': {
      proficiencias: 'AtuaÃ§Ã£o, pode usar o mundo ao redor como instrumento',
      habs: [
        { nome: 'Rima Certeira', nivel: 6, desc: 'Quando aliado que escuta falhar em ataque, gaste reaÃ§Ã£o + 2 PE para ele rolar novamente. Deve aceitar o segundo resultado.', acao: 'Passiva' },
        { nome: 'Via Sonora', nivel: 9, desc: 'Gaste aÃ§Ã£o de movimento para emitir onda sonora em 12m e se locomover junto a ela. Vantagem em ataques no mesmo turno.', acao: 'AÃ§Ã£o de Movimento' },
        { nome: 'Sinfonia Cadenciada', nivel: 13, desc: 'Ao conjurar magia de Bardo com aÃ§Ã£o, gaste 5 PE + aÃ§Ã£o bÃ´nus para conceder segundo turno a aliado que escuta. Turno extra nÃ£o pode conjurar magias.', acao: 'Passiva' },
        { nome: 'RefrÃ£o Persistente', nivel: 17, desc: '1x por descanso longo: habilidade que afeta mÃºltiplos aliados dura o dobro, ou se for instantÃ¢nea, repete no inÃ­cio do prÃ³ximo turno sem custo.', acao: 'Passiva' },
        { nome: 'CanÃ§Ã£o Dominante', nivel: 20, desc: 'Alvos em 22m fazem teste de Vontade: falha = entram em danÃ§a rÃ­tmica por 2 min, sÃ³ podendo imitar suas aÃ§Ãµes; ao fim entram em cansaÃ§o. Passa = perdem o turno.', acao: 'AÃ§Ã£o Completa' },
      ]
    },
  }
};

HABILIDADES.Obscuro = {
  base: [
    { nome: 'Capturar', nivel: 1, desc: 'Aprisiona a sombra de um inimigo caÃ­do (ND â‰¤ seu NÃ­vel + BÃ´nus de Classe). Teste de Conjurar vs Vontade da criatura. Se ganhar, ela vira sua serva. PV da fera: [Afinidade x10 + Sabedoria x5 + Rank x10 + Vigor da criatura].', acao: 'AÃ§Ã£o PadrÃ£o', evo: 'NÃ­vel 11: pode capturar inimigos vivos com 10% ou menos de PV. Disputa muda para Sabedoria vs InteligÃªncia.' },
    { nome: 'Sumonar', nivel: 1, desc: 'Invoca uma fera capturada em espaÃ§o desocupado a atÃ© 4,5m. Custa 1 PE + ND da criatura. Teste de Conjurar (CD 8 + ND). Pode ancorÃ¡-la a um aliado com um comando.', acao: 'AÃ§Ã£o PadrÃ£o', evo: 'NÃ­vel 11: gastando +2 PE e AÃ§Ã£o de Movimento, invoca uma segunda fera no mesmo turno.' },
    { nome: 'Olhos das Sombras', nivel: 2, desc: 'Enxerga em escuridÃ£o nÃ£o-mÃ¡gica e mÃ¡gica como se fosse penumbra, atÃ© 18m.', acao: 'Passiva' },
    { nome: 'Arma de Sombras', nivel: 3, desc: 'Forja uma cÃ³pia de escuridÃ£o de qualquer arma jÃ¡ empunhada. Mesmo dano base, mas usa bÃ´nus de Sabedoria. Possui 10 PV + ConstÃ¢ncia de Conjurar. Uma vez por turno, no primeiro acerto, gaste 2 PE para aplicar Enfraquecido atÃ© o prÃ³ximo turno.', acao: 'AÃ§Ã£o BÃ´nus', evo: 'NÃ­vel 14: funde a arma com uma fera (ela dorme). Ganha +2 em ataques e dano, +2 CA fÃ­sica e Corte IntangÃ­vel â€” ignora resistÃªncias necrÃ³ticas e bÃ´nus de Armadura/Escudo.' },
    { nome: 'Entendimento Oculto', nivel: 5, desc: 'Escolha 1 truque da lista de truques de Obscuro. Repete a cada 4 nÃ­veis atÃ© o nÃ­vel 20.', acao: 'Passiva' },
    { nome: 'Sombreamento', nivel: 7, desc: 'Cria um clone (CA 10, 1 PV, deslocamento 9m, imune a condiÃ§Ãµes). Com AÃ§Ã£o BÃ´nus ou ReaÃ§Ã£o, troca de lugar com a arma ou com o clone (clone some). Limite de 1 em campo.', acao: 'AÃ§Ã£o BÃ´nus', evo: 'NÃ­vel 15: atÃ© 4 clones simultÃ¢neos. Ativa LegiÃ£o Vazia: inimigos que atacam vocÃª rolam 1d4/1d5; se nÃ£o acertarem o nÃºmero correto, acertam um clone que absorve e explode causando 3d6 necrÃ³tico.' },
    { nome: 'SantuÃ¡rio Sombrio', nivel: 9, desc: 'Cria redoma de 15m de diÃ¢metro por atÃ© 5 minutos (requer Foco). SÃ³ vocÃª enxerga dentro. Suas sombras ficam invisÃ­veis com Vantagem. Inimigos ficam Desprevenidos (-2 CA), cegos e com Desvantagem. Dano sofrido exige Salvaguarda de Vontade CD 15 ou o tempo cai 30s.', acao: 'AÃ§Ã£o PadrÃ£o' },
    { nome: 'Caminho pelas Sombras', nivel: 12, desc: 'Torna-se intangÃ­vel para viajar atÃ© 30m entre sombras visÃ­veis. Ao reduzir inimigo a 0 PV, pode usar ReaÃ§Ã£o para mergulhar nas sombras, ficando intangÃ­vel e invisÃ­vel atÃ© o inÃ­cio do prÃ³ximo turno.', acao: 'AÃ§Ã£o PadrÃ£o / ReaÃ§Ã£o' },
  ],
  caminhos: {
    'Moldador das Sombras': {
      proficiencias: 'Nenhuma adicional',
      habs: [
        { nome: 'Fragmentos Sombrios', nivel: 6, desc: 'Cada acerto com Arma de Sombras aloja 1 fragmento (gaste 1 PE para mais, limite 3 por alvo). Ao detonar: 1d6 necrÃ³tico por fragmento (2d6 no escuro) e corta deslocamento em -3m atÃ© o prÃ³ximo turno.', acao: 'Livre / AÃ§Ã£o BÃ´nus' },
        { nome: 'AlÃ©m do Vazio', nivel: 9, desc: 'Consome atÃ© 2 feras ativas. Por fera absorvida: +1 ataque extra, PV temporÃ¡rios iguais ao dano necrÃ³tico causado, +1 CA e imunidade a restriÃ§Ãµes de deslocamento. Dura 3 turnos. 1x por Descanso Longo.', acao: 'AÃ§Ã£o BÃ´nus', evo: 'NÃ­vel 17: dura 6 turnos, consome atÃ© 4 feras, imune a Paralisado/Agarrado/Amedrontado. Com 2+ feras: +1 AÃ§Ã£o PadrÃ£o adicional.' },
        { nome: 'Mestre da LÃ¢mina Sombria', nivel: 13, desc: 'Ao acertar com Arma de Sombras, gaste 2 PE para que a lÃ¢mina atinja outro inimigo prÃ³ximo com o mesmo dano. Se ambos estiverem no escuro, recupera 1d6 + Sabedoria de PE.', acao: 'Livre (1x por turno)' },
        { nome: 'ObliterarÃ§Ã£o Sombria', nivel: 17, desc: 'Detona atÃ© 3 sombras condensadas em raio de 10,5m ou linha de 13,5m. Causa 2d20 por sombra. Salvaguarda de Destreza: passa = metade. Alvos ficam Enfraquecidos por 2 turnos. Feras usadas dormem por 4 turnos.', acao: 'AÃ§Ã£o Completa' },
        { nome: 'Rei das Sombras', nivel: 20, desc: 'No escuro/penumbra: +2 CA e ResistÃªncia a dano necrÃ³tico e psÃ­quico. 1x por turno, duplica um ataque da Arma de Sombras. 1x por Descanso Longo, ativa AlÃ©m do Vazio no poder mÃ¡ximo sem absorver sombras e sem risco de perder o controle.', acao: 'Passiva' },
      ]
    },
    'Senhor das Feras Sombrias': {
      proficiencias: 'Nenhuma adicional',
      habs: [
        { nome: 'Marca do Comandante', nivel: 6, desc: 'Ao acertar um inimigo com Arma de Sombras, o prÃ³ximo ataque de qualquer Fera Sombria contra esse alvo ganha Vantagem e +1d6 necrÃ³tico extra.', acao: 'Livre (1x por turno)' },
        { nome: 'DevocÃ£o do Abismo', nivel: 9, desc: 'Quando uma fera sua for destruÃ­da, gaste 3 PE: ela sobrevive com 1 PV, o dano excedente vai para vocÃª como PsÃ­quico, e ela realiza um Contra-Ataque imediato causando o dobro do dano.', acao: 'ReaÃ§Ã£o' },
        { nome: 'Matilha ImplacÃ¡vel', nivel: 13, desc: 'Feras ganham bÃ´nus em acerto e dano igual ao seu bÃ´nus de Sabedoria. Se vocÃª e uma fera flanquearem o mesmo alvo, ele sofre -2 CA contra a fera e ela ignora resistÃªncias a dano fÃ­sico.', acao: 'Passiva' },
        { nome: 'Quimera Sombria', nivel: 17, desc: 'Funde 2 feras invocadas numa monstruosidade Ãºnica. Soma os PVs, adquire habilidades de ambas e possui 2 AÃ§Ãµes PadrÃµes por turno. NÃ­vel de Afinidade = mÃ©dia das duas. 1x por Descanso Longo.', acao: 'AÃ§Ã£o Completa' },
        { nome: 'Despertar do Monarca', nivel: 20, desc: 'Invoca atÃ© 4 Feras Sombrias instantaneamente sem custo de PE ou limite. Por 3 turnos as feras entram em frenesi: nÃ£o falham em testes de Afinidade, sÃ£o imunes a controle mental e todos os ataques acertados curam vocÃª em metade do dano causado. 1x por Descanso Longo.', acao: 'AÃ§Ã£o Completa' },
      ]
    },
  }
};

HABILIDADES.Guerreiro = {
  base: [
    { nome: 'Controle', nivel: 1, desc: 'VocÃª respira fundo e foca na precisÃ£o do golpe. Concede +2 no prÃ³ximo ataque com arma neste turno e +2 nas reaÃ§Ãµes de Bloquear por 1 minuto. (Custo: 3 PE)', acao: 'AÃ§Ã£o BÃ´nus', evo: 'NÃ­vel 9: bÃ´nus em Bloquear sobe para +4 | NÃ­vel 11: +6' },
    { nome: 'Entrada Explosiva', nivel: 1, desc: 'Desloca-se atÃ© 4,5m em direÃ§Ã£o a um inimigo sem provocar ataques de oportunidade. Se acertar um ataque corpo a corpo neste turno, ganha PV TemporÃ¡rios igual ao Modificador de ConstituiÃ§Ã£o atÃ© o fim do combate. (Custo: 2 PE)', acao: 'AÃ§Ã£o BÃ´nus' },
    { nome: 'Ataque Preciso', nivel: 2, desc: 'Ao acertar um ataque, pode gastar PE para causar +1d6 de dano adicional neste golpe. NÃ£o cumulativo com Pancada Potente.', acao: 'Nenhuma (ativada ao acertar)', evo: 'NÃ­vel 3: +1d8 | NÃ­vel 6: +1d10 | NÃ­vel 9: +2d6 | NÃ­vel 11: +4d4' },
    { nome: 'Pancada Potente', nivel: 3, desc: 'Ao acertar um ataque corpo a corpo, pode gastar PE para adicionar +5 de dano fixo. NÃ£o cumulativo com Ataque Preciso.', acao: 'Nenhuma (ativada ao acertar)', evo: 'NÃ­vel 7: +8 | NÃ­vel 11: +9' },
    { nome: 'Ataque Extra', nivel: 5, desc: 'Gastando PE, ao acertar um ataque pode atacar +1 vez com a mesma aÃ§Ã£o.', acao: 'Passiva', evo: 'NÃ­vel 9: +2 ataques | NÃ­vel 15: +3 ataques' },
    { nome: 'BÃ´nus Coerente', nivel: 7, desc: '1x por Descanso Curto: realiza 1 AÃ§Ã£o BÃ´nus adicional em qualquer momento do seu turno, ultrapassando o limite normal do sistema.', acao: 'Passiva', evo: 'NÃ­vel 13: 3 usos por Descanso Longo (mÃ¡x. 1 uso por turno).' },
    { nome: 'Contra-partida', nivel: 9, desc: 'Gastando PE de uma habilidade de nÃ­vel 9, 1x por Descanso Longo: realiza uma AÃ§Ã£o PadrÃ£o adicional no seu turno atual. NÃ£o reinicia deslocamento nem concede AÃ§Ãµes BÃ´nus ou ReaÃ§Ãµes extras.', acao: 'Nenhuma (ativada no seu turno)' },
    { nome: 'Instinto Nato', nivel: 12, desc: 'Ao sofrer dano de um ataque: reduz o dano em NÃ­vel + ForÃ§a e pode mover-se atÃ© 1,5m sem provocar ataques de oportunidade apÃ³s esse ataque.', acao: 'ReaÃ§Ã£o' },
  ],
  caminhos: {
    'CapitÃ£o': {
      proficiencias: 'Nenhuma adicional',
      habs: [
        { nome: 'Talento Nato', nivel: 6, desc: 'Escolha um Talento adicional da categoria de Guerreiro. Um capitÃ£o deve estar sempre preparado.', acao: 'Passiva' },
        { nome: 'AvanÃ§o PrimÃ¡rio', nivel: 9, desc: 'Em iniciativa vocÃª ganha +5.', acao: 'Passiva', evo: 'NÃ­vel 12: +8 | NÃ­vel 16: pode escolher sua posiÃ§Ã£o na ordem do turno na primeira rodada.' },
        { nome: 'Revigorar', nivel: 13, desc: 'Cura 2d6 + ConstituiÃ§Ã£o de PV. UsÃ¡vel 1x por batalha.', acao: 'AÃ§Ã£o BÃ´nus', evo: 'NÃ­vel 15: 2d8 + ConstituiÃ§Ã£o | NÃ­vel 17: 2d10 + ConstituiÃ§Ã£o' },
        { nome: 'Barricada de Ferro', nivel: 17, desc: 'Se impÃµe na frente de batalha chamando a atenÃ§Ã£o dos inimigos. Aliados com turno antes do seu ganham +2 CA. Encerra se vocÃª ficar desacordado ou fora de cena.', acao: 'Passiva' },
        { nome: 'Grito de Guerra', nivel: 20, desc: 'Aliados que escutam recebem Vantagem em todas as rolagens de ataque e +5 no dano por 1 minuto (4 turnos). NÃ£o acumulativo.', acao: 'AÃ§Ã£o PadrÃ£o' },
      ]
    },
    'Desordem': {
      proficiencias: 'Nenhuma adicional',
      habs: [
        { nome: 'Movimento Inesperado', nivel: 6, desc: 'Uma vez por turno, apÃ³s realizar uma aÃ§Ã£o de ataque, move atÃ© 1,5m sem gastar deslocamento e sem provocar ataques de oportunidade. Criaturas nÃ£o recebem bÃ´nus por flanquear vocÃª.', acao: 'Passiva' },
        { nome: 'Agente CaÃ³tico', nivel: 9, desc: 'Ao acertar um ataque, gastando PE, escolha um efeito: empurrar o alvo 1,5m; trocar de posiÃ§Ã£o com o alvo; reduzir o deslocamento do alvo pela metade atÃ© o prÃ³ximo turno; ou receber +1,5m de deslocamento atÃ© o fim do turno.', acao: 'Passiva' },
        { nome: 'Ritmo Quebrado', nivel: 13, desc: 'Uma vez por turno, quando uma criatura errar um ataque contra vocÃª, escolha: mover-se 1,5m; empurrar o atacante 1,5m (tamanho mÃ©dio ou menor); receber +2 no prÃ³ximo ataque contra ele; ou impedir que ele realize Ataques de Oportunidade atÃ© o prÃ³ximo turno. Pode ainda declarar contra-atacar ou bloquear apÃ³s o resultado do dado.', acao: 'Passiva' },
        { nome: 'Colapso da FormaÃ§Ã£o', nivel: 17, desc: 'Por 3 turnos: aliados em atÃ© 6m nÃ£o podem ser flanqueados nem receber ataques de oportunidade; inimigos em atÃ© 6m nÃ£o recebem bÃ´nus nÃ£o-mÃ¡gicos de aliados; a cada ataque acertado, pode mover o alvo 1,5m.', acao: 'AÃ§Ã£o Completa' },
        { nome: 'Efeito Borboleta', nivel: 20, desc: 'Por 1 minuto: aliados em atÃ© 9m movem 1,5m sem provocar ataques de oportunidade quando um inimigo os errar; uma criatura perde a ReaÃ§Ã£o por um turno caso erre vocÃª; um aliado em atÃ© 9m pode fazer um ataque de oportunidade imediato quando vocÃª acertar um ataque.', acao: 'AÃ§Ã£o Completa' },
      ]
    },
    'Impacto': {
      proficiencias: 'Nenhuma adicional',
      habs: [
        { nome: 'Comungando de Guerrilha', nivel: 6, desc: 'Escolha um estilo de luta. Caso jÃ¡ possua um, pode evoluÃ­-lo em 2 nÃ­veis.', acao: 'Passiva' },
        { nome: 'Estrondo', nivel: 9, desc: 'Proeza muscular: arremessa o alvo 4,5m causando 3d6 + ForÃ§a de dano. Se ele colidir com uma superfÃ­cie sÃ³lida, cria um tremor em Ã¡rea de 3m â€” +2d6 para quem estiver a 1,5m e +1d6 para quem estiver a 3m, alÃ©m de aplicar Desprevenido por um turno a quem estiver na Ã¡rea.', acao: 'AÃ§Ã£o PadrÃ£o' },
        { nome: 'Ataque Focado', nivel: 13, desc: 'Ao acertar dois ataques consecutivos no mesmo oponente, entra em "Foco Letal": o terceiro ataque em diante contra esse alvo recebe +2 no acerto e +1d6 de dano extra. Encerra ao errar, atacar alvo diferente ou se distanciar voluntariamente.', acao: 'Nenhuma (ativada no seu turno)' },
        { nome: 'FinalizaÃ§Ã£o Esmagadora', nivel: 17, desc: 'Uma vez por turno, apÃ³s dois ou mais ataques consecutivos acertados no mesmo alvo (com Foco Letal ativo), pode gastar PE para que o prÃ³ximo golpe cause +3d8 de dano adicional de impacto e arremesse o alvo 3m, aplicando a condiÃ§Ã£o Derrubado.', acao: 'Nenhuma (ativada no seu turno)' },
        { nome: 'Epicentro', nivel: 20, desc: 'Por 3 turnos: fica imune Ã s condiÃ§Ãµes Derrubado, Empurrado e Agarrado. Todo ataque corpo a corpo acertado ignora resistÃªncias a dano fÃ­sico do alvo e reduz o deslocamento dele pela metade no prÃ³ximo turno.', acao: 'AÃ§Ã£o PadrÃ£o' },
      ]
    },
  }
};

// ===== TRUQUES =====
const TRUQUES = {
  Obscuro: [
    {
      nome: 'Sussurro pela Parede',
      desc: 'Toque uma parede ou superfÃ­cie escura e grave uma mensagem de atÃ© 10 palavras, audÃ­vel apenas para quem encostar ali, uma Ãºnica vez.',
      evo: 'NÃ­vel 7: Vincule a mensagem a uma criatura especÃ­fica. Apenas ela ouvirÃ¡, com um eco sombrio na sua voz.',
      evoNivel: 7
    },
    {
      nome: 'Passo Falso',
      desc: 'Ataque com a Arma de Sombras. Se acertar, causa dano normal e solta fumaÃ§a densa no ponto de impacto, impedindo o alvo de realizar Ataques de Oportunidade contra vocÃª atÃ© o fim do seu turno.',
      evo: 'NÃ­vel 12: A fumaÃ§a distrai o inimigo. O prÃ³ximo aliado que atacar esse alvo antes do seu prÃ³ximo turno ganha +2 na rolagem de acerto.',
      evoNivel: 12
    },
    {
      nome: 'Palavra Oculta',
      desc: 'Comunique-se com suas sombras via aÃ§Ãµes livres. Elas podem ver sua visÃ£o e escutar ao redor enquanto nÃ£o estiverem em campo.',
      evo: 'NÃ­vel 12: Cria laÃ§o sensorial maior. Fora de campo, uma sombra pode ajudar em um teste (Reflexos, HistÃ³ria, Natureza, SobrevivÃªncia ou PercepÃ§Ã£o) contribuindo com seu atributo. Cada sombra usÃ¡vel 1x por descanso longo.',
      evoNivel: 12
    },
    {
      nome: 'Passagem',
      desc: 'Abra uma porta de atÃ© 50cm de diÃ¢metro em sua sombra para guardar objetos, armas e itens. Capacidade: 2 + Sabedoria mÂ³.',
      evo: 'NÃ­vel 7: Caixa com 3 + Sabedoria mÂ³, porta de 1m. | NÃ­vel 12: Caixa com 4 + Sabedoria mÂ³, porta de 1,5m.',
      evoNivel: 7
    },
    {
      nome: 'ConexÃ£o Direta',
      desc: 'Ao tocar a sombra de um alvo (direta ou indiretamente), estabelece uma conexÃ£o mental. Conversas sÃ³ sÃ£o escutadas pelos conectados.',
      evo: 'NÃ­vel 12: ConexÃµes ilimitadas. Ao usar em inimigo (tocando a sombra ou via Arma de Sombras), aplica Marca da RuÃ­na: +1d6 necrÃ³tico em todo dano seu ou das feras contra ele, e vocÃª sabe sua localizaÃ§Ã£o exata mesmo invisÃ­vel ou com cobertura total.',
      evoNivel: 12
    },
    {
      nome: 'Soldados',
      desc: '1x por descanso longo: cria atÃ© 3 criaturas de sombra (15cm, 1 PV, +1 em todos atributos, carrega 5kg cada). Duram 10 min ou atÃ© sair da Ã¡rea das suas sombras.',
      evo: 'NÃ­vel 12: AtÃ© 5 criaturas. VocÃª vÃª a visÃ£o delas, fala e escuta por elas. +18m de Ã¡rea de deslocamento delas.',
      evoNivel: 12
    },
    {
      nome: 'Penumbra',
      desc: '1x por descanso longo: molda sombra ao redor do corpo por 5 min (roupas, mÃ¡scaras, penteados â€” moldes pretos pequenos). Gaste 2 PE para +1 min cumulativo. +3 em EnganÃ§Ã£o e AtuaÃ§Ã£o.',
      evo: 'NÃ­vel 12: Designs complexos em cinza e preto. +5 em EnganÃ§Ã£o e AtuaÃ§Ã£o. Cobertura total: +8 em Furtividade no escuro.',
      evoNivel: 12
    },
    {
      nome: 'ExtensÃ£o',
      desc: 'AÃ§Ã£o BÃ´nus: estende braÃ§os e pernas com sombra em +1,5m por 1 min. Pode erguer itens (peso igual ao seu limite, mesma Destreza). Gaste 2 PE para +30s cumulativos.',
      evo: 'NÃ­vel 12: Ataques corp a corpo saem de fendas dimensionais coladas no inimigo. Alcance +4,5m. Inimigos sofrem -2 nas reaÃ§Ãµes de Esquiva e Bloqueio contra vocÃª. DuraÃ§Ã£o: 2 min.',
      evoNivel: 12
    },
  ]
};

const TALENTOS_GERAIS = [
  { nome: 'Alerta', desc: 'Vantagem em testes de Iniciativa e nÃ£o provoca ataques de oportunidade.' },
  { nome: 'Casca Grossa', desc: 'Ao escolher, ganha PV igual a 2 Ã— seu nÃ­vel. AlÃ©m disso, reduÃ§Ã£o a todo tipo de dano igual ao seu bÃ´nus de Vigor.' },
  { nome: 'Combatente Letal', desc: 'Escolha um tipo de arma (corpo a corpo, Ã  distÃ¢ncia ou de fogo). Recebe +2 em testes de ataque e rolagens de dano com o tipo escolhido.' },
  { nome: 'Confronto em Duelo', desc: 'ApÃ³s atingir o mesmo alvo duas vezes com ataques corpo a corpo, recebe +2 em testes de ataque contra esse alvo atÃ© trocar de alvo ou ele morrer.', evo: 'AlÃ©m do efeito bÃ¡sico, recebe +3 em rolagens de dano contra o alvo especÃ­fico.', evoNivel: 10 },
  { nome: 'Corredor Resiliente', desc: '+3m em seu deslocamento e +1 em CA contra ataques de oportunidade.', evo: 'BÃ´nus aumenta para +6m de deslocamento e +2 em CA contra ataques de oportunidade.', evoNivel: 10 },
  { nome: 'Desempenho Ligeiro', desc: 'VocÃª recebe uma aÃ§Ã£o de movimento adicional por turno.' },
  { nome: 'Empunhadura Dupla', desc: 'Se tiver duas armas corpo a corpo de uma mÃ£o, e pelo menos uma for leve, pode atacar com ambas gastando a mesma aÃ§Ã£o.' },
  { nome: 'Empunhadura Pesada', desc: 'Ao acertar com arma corpo a corpo pesada, pode gastar 2 PE para derrubar o alvo (condiÃ§Ã£o CaÃ­do).' },
  { nome: 'EnergÃ©tico', desc: 'Ao escolher, ganha PE igual a 2 Ã— seu nÃ­vel. A cada nÃ­vel seguinte, recebe +2 PE adicionais no total.' },
  { nome: 'Fugitivo Esperto', desc: 'Ao sofrer ataque que reduza sua vida a menos da metade, gaste sua ReaÃ§Ã£o para mover atÃ© 4,5m sem provocar ataques de oportunidade e fazer teste de Furtividade instantÃ¢neo para se esconder.' },
  { nome: 'Nova Tentativa', desc: 'Sempre que tirar 1 em um teste, pode gastar 2 PE para refazer o teste. Deve aceitar o novo resultado.' },
  { nome: 'ReaÃ§Ã£o Adicional', desc: 'VocÃª recebe uma reaÃ§Ã£o especial por turno.' },
  { nome: 'Versatilidade', desc: 'Escolha um atributo entre Carisma, InteligÃªncia ou Sabedoria. Sempre que fizer um teste com esse atributo como base, pode gastar 2 PE para receber +1d4 no resultado.' },
];

// ===== TALENTOS =====
const TALENTOS = {
  Espadachim: [
    { nome: 'Contra Perfeito', desc: 'Quando realizar um contra-ataque em combate, vocÃª recebe +2 no teste de ataque e rolagem de dano.' },
    { nome: 'Defesa Compacta', desc: 'Enquanto empunhar apenas uma arma, sem escudo ou arma adicional, recebe +2 em CA.' },
    { nome: 'Derrubar Compostura', desc: 'Ao acertar um ataque crÃ­tico com espada, reduz a CA do alvo em -1 por 1 turno. AcumulÃ¡vel atÃ© -3.' },
    { nome: 'Erro Previsto', desc: '1x por turno, ao errar um ataque corpo a corpo com espada, ganha +1 no prÃ³ximo ataque contra o mesmo alvo. AcumulÃ¡vel atÃ© +3, encerra ao acertar.' },
    { nome: 'Estilo Toripuru', desc: 'Pode empunhar 3 espadas simultaneamente sem desvantagens. Ao acertar com uma delas, gaste 5 PE para realizar um ataque adicional com a terceira espada.' },
    { nome: 'Foco em Combate', desc: 'Se vocÃª acertar um inimigo e nÃ£o for acertado atÃ© o inÃ­cio do seu prÃ³ximo turno, ganha +2 na rolagem de dano do prÃ³ximo ataque.' },
    { nome: 'Postura InabalÃ¡vel', desc: 'Se nÃ£o usar sua aÃ§Ã£o de movimento no turno, ganha +2 em CA no prÃ³ximo turno.' },
    { nome: 'Promessa Secreta', desc: 'Gaste 2 PE para refazer um teste de resistÃªncia de ForÃ§a, Destreza ou Vigor. NÃ£o pode ser usado em salvaguardas contra a Morte.' },
    { nome: 'Golpe Decisivo', desc: 'Ao reduzir o PV de um inimigo a 0 ou nocauteÃ¡-lo, recupera 1 PCE.' },
  ],
  Guerreiro: [
    { nome: 'AvanÃ§o Descomunal', desc: 'Se vocÃª correr pelo menos 6m em linha reta atÃ© seu inimigo antes de um ataque corpo a corpo, causa +2d6 no primeiro ataque contra ele.' },
    { nome: 'FÃºria Adormecida', desc: 'Quando ficar com menos da metade dos PV, ganha +2 em testes de ataque e rolagens de dano corpo a corpo. Vantagem contra efeitos de medo nesse estado.' },
    { nome: 'Resistir Ã  Dor', desc: 'Ao entrar em estado de Morrendo, pode fazer teste de ConstituiÃ§Ã£o (CD 20 + 5 por teste no mesmo combate). Se passar, encerra Morrendo e volta com 1d10 PV.' },
    { nome: 'Armamento Pesado', desc: 'Escolha um tipo de arma corpo a corpo. Recebe +3 em rolagens de dano com armas desse tipo.', evo: 'Seus ataques com o tipo escolhido ignoram 2 pontos de resistÃªncia do alvo. O bÃ´nus de dano aumenta para +4.', evoNivel: 10 },
    { nome: 'PotÃªncia Muscular', desc: 'VocÃª consegue empunhar armas de duas mÃ£os com apenas uma mÃ£o, sem sofrer penalidades.' },
    { nome: 'ImparÃ¡vel', desc: 'Uma vez por descanso longo, na primeira vez que entra em Morrendo, sai da condiÃ§Ã£o e volta com PV igual a 2 Ã— sua ConstituiÃ§Ã£o.', evo: 'AlÃ©m do efeito bÃ¡sico, recebe vantagem em testes de ConstituiÃ§Ã£o feitos apÃ³s levantar por 2 rodadas (nÃ£o se aplica a salvaguardas contra a morte).', evoNivel: 10 },
    { nome: 'Defesa Concentrada', desc: 'Ao empunhar escudo, recebe +2 em CA e +1 em bloqueios.', evo: 'Os bÃ´nus aumentam para +3 em CA e +2 em bloqueios.', evoNivel: 10 },
    { nome: 'Bloqueio de Ferro', desc: 'Quando realiza um bloqueio bem-sucedido, recupera 2 PE (limitado pelo total de PE).' },
  ],
  Bardo: [
    { nome: 'Solo Musical', desc: 'Se nÃ£o usar aÃ§Ã£o de movimento no turno, ganha +2 em CD no prÃ³ximo turno (acumula atÃ© +4).', evo: 'O limite acumulativo aumenta para +8. Ao atingir +8, os bÃ´nus sÃ£o resetados no turno seguinte.', evoNivel: 10 },
    { nome: 'Tema de Batalha', desc: 'CanÃ§Ã£o BÃ¡rbica concede +2 em testes de ataque ao alvo pela duraÃ§Ã£o.', evo: 'O bÃ´nus aumenta para +3 em testes de ataque.', evoNivel: 10 },
    { nome: 'Remix de Cura', desc: 'CanÃ§Ã£o de Cura recebe +1d6 PV para os alvos na Ã¡rea.', evo: 'O dado adicional muda para +1d8 PV.', evoNivel: 10 },
    { nome: 'Caixa de Som', desc: 'Habilidades que afetam Ã¡rea recebem +3m de Ã¡rea de efeito.', evo: 'O bÃ´nus aumenta para +4,5m de Ã¡rea de efeito.', evoNivel: 10 },
    { nome: 'Coral Potente', desc: 'Escolha duas constÃ¢ncias com proficiÃªncia. VocÃª e aliados a atÃ© 4,5m recebem +2 em testes feitos Ã  base dessas constÃ¢ncias.' },
    { nome: 'Versatilidade', desc: 'Aprenda um talento de outra classe (exceto Aspectomante, Sonoriante, Obscuro, FeitiÃ§eiro e Mago).' },
    { nome: 'Interrompendo Roteiro', desc: 'Habilidades que utilizam aÃ§Ã£o bÃ´nus agora podem ser utilizadas fora do seu turno.' },
  ],
  Obscuro: [
    { nome: 'LÃ¢minas Vivas', desc: 'Arma de Sombras pode ser criada junto com um ataque como parte da mesma aÃ§Ã£o. O primeiro ataque da primeira rodada de combate ganha Vantagem.' },
    { nome: 'Sombras Ligadas', desc: 'Quando vocÃª ou uma sombra/fera sofre dano, pode gastar 1 reaÃ§Ã£o para dividir o dano igualmente entre atÃ© 2 outras sombras/feras em campo (nÃ£o reduz o total, mas evita morte instantÃ¢nea).' },
    { nome: 'AfeiÃ§Ã£o Comum', desc: 'Ao receber ganho de vida permanente para suas feras, elas ganham +1d4 de PV mÃ¡ximo adicional.', evo: 'As feras ganham +1d6 de PV (nÃ­vel 10) e +1d10 de PV (nÃ­vel 15).', evoNivel: 10 },
    { nome: 'Impulso do Predador', desc: 'ApÃ³s um Acerto CrÃ­tico ou reduzir inimigo a 0 PV no seu turno, pode usar AÃ§Ã£o BÃ´nus para realizar um ataque corpo a corpo adicional contra qualquer alvo ao alcance.' },
    { nome: 'Golpe Oculto', desc: 'Sempre que atingir um alvo que nÃ£o notou sua presenÃ§a, recupera passivamente 1d4 de PE.' },
    { nome: 'Corte do Vazio', desc: 'Margem de ameaÃ§a para Acerto CrÃ­tico com Arma de Sombras aumenta em +1 (crita no 19-20). Em Acertos CrÃ­ticos, rola +1 dado de dano extra da arma.' },
    { nome: 'SacrifÃ­cio TÃ¡tico', desc: 'Com AÃ§Ã£o BÃ´nus, destrÃ³i voluntariamente uma fera invocada: recupera 3 PE e limpa instantaneamente uma condiÃ§Ã£o negativa (Envenenado, Sangrando ou Atordoado).' },
    { nome: 'LÃ¢mina InominÃ¡vel', desc: 'Ao atingir inimigo com Arma de Sombras, se ele tentar se afastar no prÃ³ximo turno, deslocamento Ã© reduzido Ã  metade e sofre 2d6 de dano necrÃ³tico automÃ¡tico.' },
    { nome: 'Troca FantasmagÃ³rica', desc: 'Ao usar Sombreamento, inimigos a atÃ© 3m do ponto de origem fazem Salvaguarda de Vigor ou ficam Cegos atÃ© o fim do prÃ³ximo turno deles.' },
  ],
};


