// Função para copiar o texto do atributo title de um elemento pelo id

function copiarTextoDoTitle(id) {

var elemento = document.getElementById(id);

var texto = elemento.getAttribute("title");

var tempInput = document.createElement("textarea");
tempInput.value = texto;
document.body.appendChild(tempInput);

tempInput.select();
document.execCommand("copy");

document.body.removeChild(tempInput);

}

// Define o estado inicial ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    var container = document.querySelector('.container2');
    var icon = document.getElementById('icon');
    
    // Começa minimizado
    container.classList.add('minimized'); // Adiciona a classe 'minimized' ao carregar
    icon.alt = 'Maximizar'; // Ajusta o texto alternativo para o ícone
});

// Alterna entre minimizado e maximizado ao clicar no botão
document.getElementById('toggleContainer').addEventListener('click', function() {
    var container = document.querySelector('.container2');
    var icon = document.getElementById('icon');

    if (container.classList.contains('minimized')) {
        // Maximiza se estiver minimizado
        container.classList.remove('minimized');
        icon.src = 'src/icone_rubinot.png'; // URL do ícone de minimizar
        icon.alt = 'Minimizar';
    } else {
        // Minimiza se estiver maximizado
        container.classList.add('minimized');
        icon.src = 'src/icone_rubinot.png'; // URL do ícone de maximizar
        icon.alt = 'Maximizar';
    }
});

document.addEventListener('DOMContentLoaded', function () {

// CANAIS INGAME

// Advertising
var advButton = document.getElementById('advertising');
advButton.addEventListener('click', function() {
    copiarTextoDoTitle('advertising');
});

// Help
var helpButton = document.getElementById('help');
helpButton.addEventListener('click', function() {
    copiarTextoDoTitle('help');
});

// Regras Gerais
var rulesButton = document.getElementById('regras_gerais');
rulesButton.addEventListener('click', function() {
    copiarTextoDoTitle('regras_gerais');
});

// Lags e Kicks
var lags_kicksButton = document.getElementById('lags_kicks');
lags_kicksButton.addEventListener('click', function() {
    copiarTextoDoTitle('lags_kicks');
});

// Vendas RL
var sell_rlButton = document.getElementById('vendas_rl');
sell_rlButton.addEventListener('click', function() {
    copiarTextoDoTitle('vendas_rl');
});

// CONFIGURAÇÕES GERAIS DE CLIENT

// Privado em nova janela
var privadoButton = document.getElementById('privado_nova_janela');
privadoButton.addEventListener('click', function() {
    copiarTextoDoTitle('privado_nova_janela');
});

// Char não muda outfit
var outfitButton = document.getElementById('char_nao_muda_outfit');
outfitButton.addEventListener('click', function() {
    copiarTextoDoTitle('char_nao_muda_outfit');
});

// Char não pega Loot
var lootButton = document.getElementById('char_nao_pega_loot');
lootButton.addEventListener('click', function() {
    copiarTextoDoTitle('char_nao_pega_loot');
});

// Configurar Follow
var followButton = document.getElementById('config_follow');
followButton.addEventListener('click', function() {
    copiarTextoDoTitle('config_follow');
});

// Emote Spell
var emoteSpellButton = document.getElementById('emote_spell');
emoteSpellButton.addEventListener('click', function() {
    copiarTextoDoTitle('emote_spell');
});

// Novos botões
var botoesButton = document.getElementById('novos_botoes');
botoesButton.addEventListener('click', function() {
    copiarTextoDoTitle('novos_botoes');
});

// CONFIGURAÇÕES RTC

    // Abrir Mini Map
var miniMapButton = document.getElementById('abrir_mini_map');
miniMapButton.addEventListener('click', function() {
    copiarTextoDoTitle('abrir_mini_map');
});

// Opacidade Magias
var opacidadeMagiasButton = document.getElementById('opacidade_magias');
opacidadeMagiasButton.addEventListener('click', function() {
    copiarTextoDoTitle('opacidade_magias');
});

// FPS alto
var fpsButton = document.getElementById('fps_alto');
fpsButton.addEventListener('click', function() {
    copiarTextoDoTitle('fps_alto');
});

// Configurar Spirit Potion (RP)
var spiritPotionButton = document.getElementById('config_spirit_potion');
spiritPotionButton.addEventListener('click', function() {
    copiarTextoDoTitle('config_spirit_potion');
});

// Expandir Mini Map
var expandirMiniMapButton = document.getElementById('expandir_mini_map');
expandirMiniMapButton.addEventListener('click', function() {
    copiarTextoDoTitle('expandir_mini_map');
});

// Exportar Hotkeys
var exportarHotkeysButton = document.getElementById('exportar_hotkeys');
exportarHotkeysButton.addEventListener('click', function() {
    copiarTextoDoTitle('exportar_hotkeys');
});

// Importar as hotkeys
var importarHotkeysButton = document.getElementById('importar_hotkeys');
importarHotkeysButton.addEventListener('click', function() {
    copiarTextoDoTitle('importar_hotkeys');
});

// O que é o RTC
var oQueERtcButton = document.getElementById('o_que_e_rtc');
oQueERtcButton.addEventListener('click', function() {
    copiarTextoDoTitle('o_que_e_rtc');
});

// RTC Obrigatório
var rtcObrigatorioButton = document.getElementById('rtc_obrigatorio');
rtcObrigatorioButton.addEventListener('click', function() {
    copiarTextoDoTitle('rtc_obrigatorio');
});

// Onde fica o helper?
var ondeFicaHelperButton = document.getElementById('onde_fica_helper');
ondeFicaHelperButton.addEventListener('click', function() {
    copiarTextoDoTitle('onde_fica_helper');
});

// Pause no Helper
var pauseNoHelperButton = document.getElementById('pause_no_helper');
pauseNoHelperButton.addEventListener('click', function() {
    copiarTextoDoTitle('pause_no_helper');
});

// Recuperar Hotkeys
var recuperarHotkeysButton = document.getElementById('recuperar_hotkeys');
recuperarHotkeysButton.addEventListener('click', function() {
    copiarTextoDoTitle('recuperar_hotkeys');
});

// RTC para MAC / Linux
var rtcMacLinuxButton = document.getElementById('rtc_mac_linux');
rtcMacLinuxButton.addEventListener('click', function() {
    copiarTextoDoTitle('rtc_mac_linux');
});

// RTC Win 7
var rtcWin7Button = document.getElementById('rtc_win7');
rtcWin7Button.addEventListener('click', function() {
    copiarTextoDoTitle('rtc_win7');
});

// SIO / UH
var sioUhButton = document.getElementById('sio_uh');
sioUhButton.addEventListener('click', function() {
    copiarTextoDoTitle('sio_uh');
});

// Smart Walk
var smartWalkButton = document.getElementById('smart_walk');
smartWalkButton.addEventListener('click', function() {
    copiarTextoDoTitle('smart_walk');
});

// ORIENTAÇÕES GERAIS

// Abrir Ticket
var abrirTicketButton = document.getElementById('abrir_ticket');
abrirTicketButton.addEventListener('click', function() {
    copiarTextoDoTitle('abrir_ticket');
});

// Acúmulo de Crítico
var acumuloCriticoButton = document.getElementById('acumulo_critico');
acumuloCriticoButton.addEventListener('click', function() {
    copiarTextoDoTitle('acumulo_critico');
});

// Alugar Dummy
var alugarDummyButton = document.getElementById('alugar_dummy');
alugarDummyButton.addEventListener('click', function() {
    copiarTextoDoTitle('alugar_dummy');
});

// Aumentar a RAW
var aumentarRawButton = document.getElementById('aumentar_raw');
aumentarRawButton.addEventListener('click', function() {
    copiarTextoDoTitle('aumentar_raw');
});

// Autenticação 2FA
var autenticacao2faButton = document.getElementById('autenticacao_2fa');
autenticacao2faButton.addEventListener('click', function() {
    copiarTextoDoTitle('autenticacao_2fa');
});

// Bazaar - Cancelar compra / venda
var bazaarCancelarButton = document.getElementById('bazaar_cancelar');
bazaarCancelarButton.addEventListener('click', function() {
    copiarTextoDoTitle('bazaar_cancelar');
});

// Bazaar - Char com Warning
var bazaarWarningButton = document.getElementById('bazaar_warning');
bazaarWarningButton.addEventListener('click', function() {
    copiarTextoDoTitle('bazaar_warning');
});

// Bazaar - Taxa de 50 RC
var bazaarTaxaButton = document.getElementById('bazaar_taxa');
bazaarTaxaButton.addEventListener('click', function() {
    copiarTextoDoTitle('bazaar_taxa');
});

// Bazaar - Valor mínimo de bid
var bazaarValorMinimoButton = document.getElementById('bazaar_valor_minimo');
bazaarValorMinimoButton.addEventListener('click', function() {
    copiarTextoDoTitle('bazaar_valor_minimo');
});

// Bestiary Betterment
var bestiaryBettermentButton = document.getElementById('bestiary_betterment');
bestiaryBettermentButton.addEventListener('click', function() {
    copiarTextoDoTitle('bestiary_betterment');
});

// Birthday Cake
var birthdayCakeButton = document.getElementById('birthday_cake');
birthdayCakeButton.addEventListener('click', function() {
    copiarTextoDoTitle('birthday_cake');
});

// Blesses
var blessesButton = document.getElementById('blesses');
blessesButton.addEventListener('click', function() {
    copiarTextoDoTitle('blesses');
});

// Bônus com loyalty
var bonusLoyaltyButton = document.getElementById('bonus_loyalty');
bonusLoyaltyButton.addEventListener('click', function() {
    copiarTextoDoTitle('bonus_loyalty');
});

// Boosted Exercise
var boostedExerciseButton = document.getElementById('boosted_exercise');
boostedExerciseButton.addEventListener('click', function() {
    copiarTextoDoTitle('boosted_exercise');
});

// BOT AFK
var botAfkButton = document.getElementById('bot_afk');
botAfkButton.addEventListener('click', function() {
    copiarTextoDoTitle('bot_afk');
});

// Castelo - Abertura
var casteloAberturaButton = document.getElementById('castelo_abertura');
casteloAberturaButton.addEventListener('click', function() {
    copiarTextoDoTitle('castelo_abertura');
});

// Castelo - Mortes
var casteloMortesButton = document.getElementById('castelo_mortes');
casteloMortesButton.addEventListener('click', function() {
    copiarTextoDoTitle('castelo_mortes');
});

// Castelo - Refill
var casteloRefillButton = document.getElementById('castelo_refill');
casteloRefillButton.addEventListener('click', function() {
    copiarTextoDoTitle('castelo_refill');
});

// Castelo - Sem player
var casteloSemPlayerButton = document.getElementById('castelo_sem_player');
casteloSemPlayerButton.addEventListener('click', function() {
    copiarTextoDoTitle('castelo_sem_player');
});

// Castelo - Taxas
var casteloTaxasButton = document.getElementById('castelo_taxas');
casteloTaxasButton.addEventListener('click', function() {
    copiarTextoDoTitle('castelo_taxas');
});

// Castle Coin
var castleCoinButton = document.getElementById('castle_coin');
castleCoinButton.addEventListener('click', function() {
    copiarTextoDoTitle('castle_coin');
});

// Char Transfer
var charTransferButton = document.getElementById('char_transfer');
charTransferButton.addEventListener('click', function() {
    copiarTextoDoTitle('char_transfer');
});

// Charm Expansion
var charmExpansionButton = document.getElementById('charm_expansion');
charmExpansionButton.addEventListener('click', function() {
    copiarTextoDoTitle('charm_expansion');
});

// Comando Rubinot
var comandoRubinotButton = document.getElementById('comando_rubinot');
comandoRubinotButton.addEventListener('click', function() {
    copiarTextoDoTitle('comando_rubinot');
});

// Cooldown de Bosses
var cooldownBossesButton = document.getElementById('cooldown_bosses');
cooldownBossesButton.addEventListener('click', function() {
    copiarTextoDoTitle('cooldown_bosses');
});

// Cooldowns Warzones
var cooldownsWarzonesButton = document.getElementById('cooldowns_warzones');
cooldownsWarzonesButton.addEventListener('click', function() {
    copiarTextoDoTitle('cooldowns_warzones');
});

// Crustacea Gigantica
var crustaceaGiganticaButton = document.getElementById('crustacea_gigantica');
crustaceaGiganticaButton.addEventListener('click', function() {
    copiarTextoDoTitle('crustacea_gigantica');
});

// Dar Sugestões
var darSugestoesButton = document.getElementById('dar_sugestoes');
darSugestoesButton.addEventListener('click', function() {
    copiarTextoDoTitle('dar_sugestoes');
});

// Delete de char / Reutilizar nick
var deleteCharButton = document.getElementById('delete_char');
deleteCharButton.addEventListener('click', function() {
    copiarTextoDoTitle('delete_char');
});

// Eternal Stone of Ascension
var eternalStoneButton = document.getElementById('eternal_stone');
eternalStoneButton.addEventListener('click', function() {
    copiarTextoDoTitle('eternal_stone');
});

// Exaltation Overload
var exaltationOverloadButton = document.getElementById('exaltation_overload');
exaltationOverloadButton.addEventListener('click', function() {
    copiarTextoDoTitle('exaltation_overload');
});

// Eventos
var eventosButton = document.getElementById('eventos');
eventosButton.addEventListener('click', function() {
    copiarTextoDoTitle('eventos');
});

// Exercise Present
var exercisePresentButton = document.getElementById('exercise_present');
exercisePresentButton.addEventListener('click', function() {
    copiarTextoDoTitle('exercise_present');
});

// Flask of Rust Remover
var flaskRustRemoverButton = document.getElementById('flask_rust_remover');
flaskRustRemoverButton.addEventListener('click', function() {
    copiarTextoDoTitle('flask_rust_remover');
});

// Foods Infinitos
var foodsInfinitosButton = document.getElementById('foods_infinitos');
foodsInfinitosButton.addEventListener('click', function() {
    copiarTextoDoTitle('foods_infinitos');
});

// Frag Remover (Red skull)
var fragRemoverButton = document.getElementById('frag_remover');
fragRemoverButton.addEventListener('click', function() {
    copiarTextoDoTitle('frag_remover');
});

// Fragmento de Gemas
var fragmentoGemasButton = document.getElementById('fragmento_gemas');
fragmentoGemasButton.addEventListener('click', function() {
    copiarTextoDoTitle('fragmento_gemas');
});

// Full Loyalty
var fullLoyaltyButton = document.getElementById('full_loyalty');
fullLoyaltyButton.addEventListener('click', function() {
    copiarTextoDoTitle('full_loyalty');
});

// Ganhando o leilão
var ganhandoLeilaoButton = document.getElementById('ganhando_leilao');
ganhandoLeilaoButton.addEventListener('click', function() {
    copiarTextoDoTitle('ganhando_leilao');
});

// Gem Atelier
var gemAtelierButton = document.getElementById('gem_atelier');
gemAtelierButton.addEventListener('click', function() {
    copiarTextoDoTitle('gem_atelier');
});

// Gemas Fragmentadas
var gemasFragmentadasButton = document.getElementById('gemas_fragmentadas');
gemasFragmentadasButton.addEventListener('click', function() {
    copiarTextoDoTitle('gemas_fragmentadas');
});

// Gift Of Life CD
var giftOfLifeCDButton = document.getElementById('gift_of_life_cd');
giftOfLifeCDButton.addEventListener('click', function() {
    copiarTextoDoTitle('gift_of_life_cd');
});

// Gold Token
var goldTokenButton = document.getElementById('gold_token');
goldTokenButton.addEventListener('click', function() {
    copiarTextoDoTitle('gold_token');
});

// Guildhouse - Como comprar
var guildhouseComoComprarButton = document.getElementById('guildhouse_como_comprar');
guildhouseComoComprarButton.addEventListener('click', function() {
    copiarTextoDoTitle('guildhouse_como_comprar');
});

// Guildhouse - Como transferir
var guildhouseComoTransferirButton = document.getElementById('guildhouse_como_transferir');
guildhouseComoTransferirButton.addEventListener('click', function() {
    copiarTextoDoTitle('guildhouse_como_transferir');
});

// Hazard
var hazardButton = document.getElementById('hazard');
hazardButton.addEventListener('click', function() {
    copiarTextoDoTitle('hazard');
});

// Hazard - aumentar ou diminuir
var hazardAumentarDiminuirButton = document.getElementById('hazard_aumentar_diminuir');
hazardAumentarDiminuirButton.addEventListener('click', function() {
    copiarTextoDoTitle('hazard_aumentar_diminuir');
});

// Hireling
var hirelingButton = document.getElementById('hireling');
hirelingButton.addEventListener('click', function() {
    copiarTextoDoTitle('hireling');
});

// Horário no jogo
var horarioNoJogoButton = document.getElementById('horario_no_jogo');
horarioNoJogoButton.addEventListener('click', function() {
    copiarTextoDoTitle('horario_no_jogo');
});

// House - Aberta ao público
var houseAbertaAoPublicoButton = document.getElementById('house_aberta_ao_publico');
houseAbertaAoPublicoButton.addEventListener('click', function() {
    copiarTextoDoTitle('house_aberta_ao_publico');
});

// House - Chests (Decoração house)
var houseChestsDecoracaoButton = document.getElementById('house_chests_decoracao');
houseChestsDecoracaoButton.addEventListener('click', function() {
    copiarTextoDoTitle('house_chests_decoracao');
});

// House - Comandos
var houseComandosButton = document.getElementById('house_comandos');
houseComandosButton.addEventListener('click', function() {
    copiarTextoDoTitle('house_comandos');
});

// House - Como comprar
var houseComoComprarButton = document.getElementById('house_como_comprar');
houseComoComprarButton.addEventListener('click', function() {
    copiarTextoDoTitle('house_como_comprar');
});

// House - Como sair
var houseComoSairButton = document.getElementById('house_como_sair');
houseComoSairButton.addEventListener('click', function() {
    copiarTextoDoTitle('house_como_sair');
});

// House - Como transferir
var houseComoTransferirButton = document.getElementById('house_como_transferir');
houseComoTransferirButton.addEventListener('click', function() {
    copiarTextoDoTitle('house_como_transferir');
});

// House - Dummy
var houseDummyButton = document.getElementById('house_dummy');
houseDummyButton.addEventListener('click', function() {
    copiarTextoDoTitle('house_dummy');
});

// House - Itens locker
var houseItensLockerButton = document.getElementById('house_itens_locker');
houseItensLockerButton.addEventListener('click', function() {
    copiarTextoDoTitle('house_itens_locker');
});

// House - Perdendo a house
var housePerdendoButton = document.getElementById('house_perdendo');
housePerdendoButton.addEventListener('click', function() {
    copiarTextoDoTitle('house_perdendo');
});

// House - Permissões da porta
var housePermissoesPortaButton = document.getElementById('house_permissoes_porta');
housePermissoesPortaButton.addEventListener('click', function() {
    copiarTextoDoTitle('house_permissoes_porta');
});

// House - Sparkles
var houseSparklesButton = document.getElementById('house_sparkles');
houseSparklesButton.addEventListener('click', function() {
    copiarTextoDoTitle('house_sparkles');
});

// House - Tempo Leilão
var houseTempoLeilaoButton = document.getElementById('house_tempo_leilao');
houseTempoLeilaoButton.addEventListener('click', function() {
    copiarTextoDoTitle('house_tempo_leilao');
});

// House - Warp
var houseWarpButton = document.getElementById('house_warp');
houseWarpButton.addEventListener('click', function() {
    copiarTextoDoTitle('house_warp');
});

// Houses - Tempo Transferência
var housesTempoTransferenciaButton = document.getElementById('houses_tempo_transferencia');
housesTempoTransferenciaButton.addEventListener('click', function() {
    copiarTextoDoTitle('houses_tempo_transferencia');
});

// Hunting Points
var huntingPointsButton = document.getElementById('hunting_points');
huntingPointsButton.addEventListener('click', function() {
    copiarTextoDoTitle('hunting_points');
});

// Imbuements
var imbuementsButton = document.getElementById('imbuements');
imbuementsButton.addEventListener('click', function() {
    copiarTextoDoTitle('imbuements');
});

// Importar Bugando
var importarBugandoButton = document.getElementById('importar_bugando');
importarBugandoButton.addEventListener('click', function() {
    copiarTextoDoTitle('importar_bugando');
});

// Liquid Dust
var liquidDustButton = document.getElementById('liquid_dust');
liquidDustButton.addEventListener('click', function() {
    copiarTextoDoTitle('liquid_dust');
});

// Loyalty
var loyaltyButton = document.getElementById('loyalty');
loyaltyButton.addEventListener('click', function() {
    copiarTextoDoTitle('loyalty');
});

// Mini Obelisk
var miniObeliskButton = document.getElementById('mini_obelisk');
miniObeliskButton.addEventListener('click', function() {
    copiarTextoDoTitle('mini_obelisk');
});

// Mystic Bag
var mysticBagButton = document.getElementById('mystic_bag');
mysticBagButton.addEventListener('click', function() {
    copiarTextoDoTitle('mystic_bag');
});

// Novo Gran Con
var novoGranConButton = document.getElementById('novo_gran_con');
novoGranConButton.addEventListener('click', function() {
    copiarTextoDoTitle('novo_gran_con');
});

// Old Sprite
var oldSpriteButton = document.getElementById('old_sprite');
oldSpriteButton.addEventListener('click', function() {
    copiarTextoDoTitle('old_sprite');
});

// Potion Tibia Drome
var potionTibiaDromeButton = document.getElementById('potion_tibia_drome');
potionTibiaDromeButton.addEventListener('click', function() {
    copiarTextoDoTitle('potion_tibia_drome');
});

// Preços UP Fragmentos
var precosUpFragmentosButton = document.getElementById('precos_up_fragmentos');
precosUpFragmentosButton.addEventListener('click', function() {
    copiarTextoDoTitle('precos_up_fragmentos');
});

// Prey Card
var preyCardButton = document.getElementById('prey_card');
preyCardButton.addEventListener('click', function() {
    copiarTextoDoTitle('prey_card');
});

// Preys - Treiner
var preysTreinerButton = document.getElementById('preys_treiner');
preysTreinerButton.addEventListener('click', function() {
    copiarTextoDoTitle('preys_treiner');
});

// Promotion
var promotionButton = document.getElementById('promotion');
promotionButton.addEventListener('click', function() {
    copiarTextoDoTitle('promotion');
});

// Promotion Scroll
var promotionScrollButton = document.getElementById('promotion_scroll');
promotionScrollButton.addEventListener('click', function() {
    copiarTextoDoTitle('promotion_scroll');
});

// Qual treino é melhor
var qualTreinoButton = document.getElementById('qual_treino_bem');
qualTreinoButton.addEventListener('click', function() {
    copiarTextoDoTitle('qual_treino_bem');
});

// Quick Loot
var quickLootButton = document.getElementById('quick_loot');
quickLootButton.addEventListener('click', function() {
    copiarTextoDoTitle('quick_loot');
});

// Raids
var raidsButton = document.getElementById('raids');
raidsButton.addEventListener('click', function() {
    copiarTextoDoTitle('raids');
});

// Recompensa - Castle Coin
var recompensaCastleCoinButton = document.getElementById('recompensa_castle_coin');
recompensaCastleCoinButton.addEventListener('click', function() {
    copiarTextoDoTitle('recompensa_castle_coin');
});

// Recuperar Soul
var recuperarSoulButton = document.getElementById('recuperar_soul');
recuperarSoulButton.addEventListener('click', function() {
    copiarTextoDoTitle('recuperar_soul');
});

// Registro da ACC/Provincia
var registroAccProvinciaButton = document.getElementById('registro_acc_provincia');
registroAccProvinciaButton.addEventListener('click', function() {
    copiarTextoDoTitle('registro_acc_provincia');
});

// Report BOT/MC
var reportBotMcButton = document.getElementById('report_bot_mc');
reportBotMcButton.addEventListener('click', function() {
    copiarTextoDoTitle('report_bot_mc');
});

// Reportar BUGS
var reportarBugsButton = document.getElementById('reportar_bugs');
reportarBugsButton.addEventListener('click', function() {
    copiarTextoDoTitle('reportar_bugs');
});

// Roda de habilidade
var rodaHabilidadeButton = document.getElementById('roda_habilidade');
rodaHabilidadeButton.addEventListener('click', function() {
    copiarTextoDoTitle('roda_habilidade');
});

// Roletas
var roletasButton = document.getElementById('roletas');
roletasButton.addEventListener('click', function() {
    copiarTextoDoTitle('roletas');
});

// Rubini Coin
var rubiniCoinButton = document.getElementById('rubini_coin');
rubiniCoinButton.addEventListener('click', function() {
    copiarTextoDoTitle('rubini_coin');
});

// Rubini Coin por TC
var rubiniCoinPorTcButton = document.getElementById('rubini_coin_por_tc');
rubiniCoinPorTcButton.addEventListener('click', function() {
    copiarTextoDoTitle('rubini_coin_por_tc');
});

// Rubini Coin Server EU
var rubiniCoinServerEuButton = document.getElementById('rubini_coin_server_eu');
rubiniCoinServerEuButton.addEventListener('click', function() {
    copiarTextoDoTitle('rubini_coin_server_eu');
});

// Rubini Coins retidas
var rubiniCoinsRetidasButton = document.getElementById('rubini_coins_retidas');
rubiniCoinsRetidasButton.addEventListener('click', function() {
    copiarTextoDoTitle('rubini_coins_retidas');
});

// Runas da BP de Aniversário de 1 ano
var runasBPC1AnoButton = document.getElementById('runas_bp_aniversario');
runasBPC1AnoButton.addEventListener('click', function() {
    copiarTextoDoTitle('runas_bp_aniversario');
});

// Silver Token
var silverTokenButton = document.getElementById('silver_token');
silverTokenButton.addEventListener('click', function() {
    copiarTextoDoTitle('silver_token');
});

// Sistema de títulos
var sistemaTitulosButton = document.getElementById('sistema_titulos');
sistemaTitulosButton.addEventListener('click', function() {
    copiarTextoDoTitle('sistema_titulos');
});

// Soft Boots
var softBootsButton = document.getElementById('soft_boots');
softBootsButton.addEventListener('click', function() {
    copiarTextoDoTitle('soft_boots');
});

// Soul Prism
var soulPrismButton = document.getElementById('soul_prism');
soulPrismButton.addEventListener('click', function() {
    copiarTextoDoTitle('soul_prism');
});

// Soulcore
var soulcoreButton = document.getElementById('soulcore');
soulcoreButton.addEventListener('click', function() {
    copiarTextoDoTitle('soulcore');
});

// Soulpit
var soulpitButton = document.getElementById('soulpit');
soulpitButton.addEventListener('click', function() {
    copiarTextoDoTitle('soulpit');
});

// Soulpit Arena
var soulpitArenaButton = document.getElementById('soulpit_arena');
soulpitArenaButton.addEventListener('click', function() {
    copiarTextoDoTitle('soulpit_arena');
});

// Spear
var spearButton = document.getElementById('spear');
spearButton.addEventListener('click', function() {
    copiarTextoDoTitle('spear');
});

// Stamina
var staminaButton = document.getElementById('stamina');
staminaButton.addEventListener('click', function() {
    copiarTextoDoTitle('stamina');
});

// Stamina Extension
var staminaExtensionButton = document.getElementById('stamina_extension');
staminaExtensionButton.addEventListener('click', function() {
    copiarTextoDoTitle('stamina_extension');
});

// Stone of Temporary Ascension
var stoneOfTemporaryAscensionButton = document.getElementById('stone_of_temporary_ascension');
stoneOfTemporaryAscensionButton.addEventListener('click', function() {
    copiarTextoDoTitle('stone_of_temporary_ascension');
});

// Supreme Cube
var supremeCubeButton = document.getElementById('supreme_cube');
supremeCubeButton.addEventListener('click', function() {
    copiarTextoDoTitle('supreme_cube');
});

// Taint Soul War
var taintSoulWarButton = document.getElementById('taint_soul_war');
taintSoulWarButton.addEventListener('click', function() {
    copiarTextoDoTitle('taint_soul_war');
});

// Task Coin
var taskCoinButton = document.getElementById('task_coin');
taskCoinButton.addEventListener('click', function() {
    copiarTextoDoTitle('task_coin');
});

// Task Knowledge
var taskKnowledgeButton = document.getElementById('task_knowledge');
taskKnowledgeButton.addEventListener('click', function() {
    copiarTextoDoTitle('task_knowledge');
});

// Taxa Venda de Char
var taxaVendaCharButton = document.getElementById('taxa_venda_char');
taxaVendaCharButton.addEventListener('click', function() {
    copiarTextoDoTitle('taxa_venda_char');
});

// Tempo Varinha
var tempoVarinhaButton = document.getElementById('tempo_varinha');
tempoVarinhaButton.addEventListener('click', function() {
    copiarTextoDoTitle('tempo_varinha');
});

// Tibia Drome
var tibiaDromeButton = document.getElementById('tibia_drome');
tibiaDromeButton.addEventListener('click', function() {
    copiarTextoDoTitle('tibia_drome');
});

// Tinder Box
var tinderBoxButton = document.getElementById('tinder_box');
tinderBoxButton.addEventListener('click', function() {
    copiarTextoDoTitle('tinder_box');
});

// Tirar Bleeding
var tirarBleedingButton = document.getElementById('tirar_bleeding');
tirarBleedingButton.addEventListener('click', function() {
    copiarTextoDoTitle('tirar_bleeding');
});

// Trainers
var trainersButton = document.getElementById('trainers');
trainersButton.addEventListener('click', function() {
    copiarTextoDoTitle('trainers');
});

// Trap Red
var trapRedButton = document.getElementById('trap_red');
trapRedButton.addEventListener('click', function() {
    copiarTextoDoTitle('trap_red');
});

// Varinhas Castle Merchant
var varinhasCastleMerchantButton = document.getElementById('varinhas_castle_merchant');
varinhasCastleMerchantButton.addEventListener('click', function() {
    copiarTextoDoTitle('varinhas_castle_merchant');
});

// Vender Golden Mug
var venderGoldenMugButton = document.getElementById('vender_golden_mug');
venderGoldenMugButton.addEventListener('click', function() {
    copiarTextoDoTitle('vender_golden_mug');
});

// Vender Loot
var venderLootButton = document.getElementById('vender_loot');
venderLootButton.addEventListener('click', function() {
    copiarTextoDoTitle('vender_loot');
});

// Verificar Bless
var verificarBlessButton = document.getElementById('verificar_bless');
verificarBlessButton.addEventListener('click', function() {
    copiarTextoDoTitle('verificar_bless');
});

// VIP - Vantagens
var vipVantagensButton = document.getElementById('vip_vantagens');
vipVantagensButton.addEventListener('click', function() {
    copiarTextoDoTitle('vip_vantagens');
});

// VIP Scroll
var vipScrollButton = document.getElementById('vip_scroll');
vipScrollButton.addEventListener('click', function() {
    copiarTextoDoTitle('vip_scroll');
});

// World Changes
var worldChangesButton = document.getElementById('world_changes');
worldChangesButton.addEventListener('click', function() {
    copiarTextoDoTitle('world_changes');
});

// QUESTS E TASKS

// Acesso a Candia
var acessoCandiaButton = document.getElementById('acesso_candia');
acessoCandiaButton.addEventListener('click', function() {
    copiarTextoDoTitle('acesso_candia');
});

// Acesso a Oskayaat
var acessoOskayaatButton = document.getElementById('acesso_oskayaat');
acessoOskayaatButton.addEventListener('click', function() {
    copiarTextoDoTitle('acesso_oskayaat');
});

// Acesso Iksupan
var acessoIksupanButton = document.getElementById('acesso_iksupan');
acessoIksupanButton.addEventListener('click', function() {
    copiarTextoDoTitle('acesso_iksupan');
});

// Acesso MOTA -1
var acessoMotaButton = document.getElementById('acesso_mota');
acessoMotaButton.addEventListener('click', function() {
    copiarTextoDoTitle('acesso_mota');
});

// Acesso Oramond
var acessoOramondButton = document.getElementById('acesso_oramond');
acessoOramondButton.addEventListener('click', function() {
    copiarTextoDoTitle('acesso_oramond');
});

// Acesso Stonerefiner
var acessoStonerefinerButton = document.getElementById('acesso_stonerefiner');
acessoStonerefinerButton.addEventListener('click', function() {
    copiarTextoDoTitle('acesso_stonerefiner');
});

// Acesso The Monster
var acessoTheMonsterButton = document.getElementById('acesso_the_monster');
acessoTheMonsterButton.addEventListener('click', function() {
    copiarTextoDoTitle('acesso_the_monster');
});

// Addons
var addonsButton = document.getElementById('addons');
addonsButton.addEventListener('click', function() {
    copiarTextoDoTitle('addons');
});

// Ancient Spawn of Morgathla
var ancientSpawnMorgathlaButton = document.getElementById('ancient_spawn_morgathla');
ancientSpawnMorgathlaButton.addEventListener('click', function() {
    copiarTextoDoTitle('ancient_spawn_morgathla');
});

// Assassin
var assassinButton = document.getElementById('assassin');
assassinButton.addEventListener('click', function() {
    copiarTextoDoTitle('assassin');
});

// Banshee Quest
var bansheeQuestButton = document.getElementById('banshee_quest');
bansheeQuestButton.addEventListener('click', function() {
    copiarTextoDoTitle('banshee_quest');
});

// Barbarian Outfits
var barbarianOutfitsButton = document.getElementById('barbarian_outfits');
barbarianOutfitsButton.addEventListener('click', function() {
    copiarTextoDoTitle('barbarian_outfits');
});

// Boss de Aniversário
var bossAniversarioButton = document.getElementById('boss_aniversario');
bossAniversarioButton.addEventListener('click', function() {
    copiarTextoDoTitle('boss_aniversario');
});

// Boss Deeplings
var bossDeeplingsButton = document.getElementById('boss_deeplings');
bossDeeplingsButton.addEventListener('click', function() {
    copiarTextoDoTitle('boss_deeplings');
});

// Bosses sem Acesso
var bossesSemAcessoButton = document.getElementById('bosses_sem_acesso');
bossesSemAcessoButton.addEventListener('click', function() {
    copiarTextoDoTitle('bosses_sem_acesso');
});

// Brotherhood Alavanca
var brotherhoodAlavancaButton = document.getElementById('brotherhood_alavanca');
brotherhoodAlavancaButton.addEventListener('click', function() {
    copiarTextoDoTitle('brotherhood_alavanca');
});

// Brotherhood Demonic Essence
var brotherhoodDemonicEssenceButton = document.getElementById('brotherhood_demonic_essence');
brotherhoodDemonicEssenceButton.addEventListener('click', function() {
    copiarTextoDoTitle('brotherhood_demonic_essence');
});

// Bultair/ Dragonlisk/ Wardragons
var bultairDragonliskWardragonsButton = document.getElementById('bultair_dragonlisk_wardragons');
bultairDragonliskWardragonsButton.addEventListener('click', function() {
    copiarTextoDoTitle('bultair_dragonlisk_wardragons');
});

// Cachoeira Issavi
var cachoeiraIssaviButton = document.getElementById('cachoeira_issavi');
cachoeiraIssaviButton.addEventListener('click', function() {
    copiarTextoDoTitle('cachoeira_issavi');
});

// Demon Oak
var demonOakButton = document.getElementById('demon_oak');
demonOakButton.addEventListener('click', function() {
    copiarTextoDoTitle('demon_oak');
});

// Dream Warrior Outfit
var dreamWarriorOutfitButton = document.getElementById('dream_warrior_outfit');
dreamWarriorOutfitButton.addEventListener('click', function() {
    copiarTextoDoTitle('dream_warrior_outfit');
});

// Exp Boost
var expBoostButton = document.getElementById('exp_boost');
expBoostButton.addEventListener('click', function() {
    copiarTextoDoTitle('exp_boost');
});

// Familiar Figurine
var familiarFigurineButton = document.getElementById('familiar_figurine');
familiarFigurineButton.addEventListener('click', function() {
    copiarTextoDoTitle('familiar_figurine');
});

// Fibula quest
var fibulaQuestButton = document.getElementById('fibula_quest');
fibulaQuestButton.addEventListener('click', function() {
    copiarTextoDoTitle('fibula_quest');
});

// Foxtail Amulet
var foxtailAmuletButton = document.getElementById('foxtail_amulet');
foxtailAmuletButton.addEventListener('click', function() {
    copiarTextoDoTitle('foxtail_amulet');
});

// Fury Gate
var furyGateButton = document.getElementById('fury_gate');
furyGateButton.addEventListener('click', function() {
    copiarTextoDoTitle('fury_gate');
});

// Galthen's
var galthensButton = document.getElementById('galthens');
galthensButton.addEventListener('click', function() {
    copiarTextoDoTitle('galthens');
});

// Gaz'Haragoth
var gazHaragothButton = document.getElementById('gaz_haragoth');
gazHaragothButton.addEventListener('click', function() {
    copiarTextoDoTitle('gaz_haragoth');
});

// Giant Beaver (Timira)
var giantBeaverButton = document.getElementById('giant_beaver');
giantBeaverButton.addEventListener('click', function() {
    copiarTextoDoTitle('giant_beaver');
});

// Grave Danger
var graveDangerButton = document.getElementById('grave_danger');
graveDangerButton.addEventListener('click', function() {
    copiarTextoDoTitle('grave_danger');
});

// Gravedigger
var gravediggerButton = document.getElementById('gravedigger');
gravediggerButton.addEventListener('click', function() {
    copiarTextoDoTitle('gravedigger');
});

// Grimvale - Paradise Lost
var grimvaleButton = document.getElementById('grimvale_paradise_lost');
grimvaleButton.addEventListener('click', function() {
    copiarTextoDoTitle('grimvale_paradise_lost');
});

// Grizzly Adams
var grizzlyAdamsButton = document.getElementById('grizzly_adams');
grizzlyAdamsButton.addEventListener('click', function() {
    copiarTextoDoTitle('grizzly_adams');
});

// Inquisition
var inquisitionButton = document.getElementById('inquisition');
inquisitionButton.addEventListener('click', function() {
    copiarTextoDoTitle('inquisition');
});

// Jaul CD
var jaulCDButton = document.getElementById('jaul_cd');
jaulCDButton.addEventListener('click', function() {
    copiarTextoDoTitle('jaul_cd');
});

// Jean Pierre
var jeanPierreButton = document.getElementById('jean_pierre');
jeanPierreButton.addEventListener('click', function() {
    copiarTextoDoTitle('jean_pierre');
});

// King Zelos
var kingZelosButton = document.getElementById('king_zelos');
kingZelosButton.addEventListener('click', function() {
    copiarTextoDoTitle('king_zelos');
});

// Last DC
var lastDCButton = document.getElementById('last_dc');
lastDCButton.addEventListener('click', function() {
    copiarTextoDoTitle('last_dc');
});

// Last GT
var lastGTButton = document.getElementById('last_gt');
lastGTButton.addEventListener('click', function() {
    copiarTextoDoTitle('last_gt');
});

// Linked Tasks
var linkedTasksButton = document.getElementById('linked_tasks');
linkedTasksButton.addEventListener('click', function() {
    copiarTextoDoTitle('linked_tasks');
});

// Linked Tasks Comandos
var linkedTasksComandosButton = document.getElementById('linked_tasks_comandos');
linkedTasksComandosButton.addEventListener('click', function() {
    copiarTextoDoTitle('linked_tasks_comandos');
});

// Liquid Black
var liquidBlackButton = document.getElementById('liquid_black');
liquidBlackButton.addEventListener('click', function() {
    copiarTextoDoTitle('liquid_black');
});

// Lit Torch / Canivete
var litTorchCaniveteButton = document.getElementById('lit_torch_canivete');
litTorchCaniveteButton.addEventListener('click', function() {
    copiarTextoDoTitle('lit_torch_canivete');
});

// Lit Torch Adquirir
var litTorchAdquirirButton = document.getElementById('lit_torch_adquirir');
litTorchAdquirirButton.addEventListener('click', function() {
    copiarTextoDoTitle('lit_torch_adquirir');
});

// Nose Ring
var noseRingButton = document.getElementById('nose_ring');
noseRingButton.addEventListener('click', function() {
    copiarTextoDoTitle('nose_ring');
});

// Npc Task Coins
var npcTaskCoinsButton = document.getElementById('npc_task_coins');
npcTaskCoinsButton.addEventListener('click', function() {
    copiarTextoDoTitle('npc_task_coins');
});

// Pirate (task itens)
var pirateTaskItensButton = document.getElementById('pirate_task_itens');
pirateTaskItensButton.addEventListener('click', function() {
    copiarTextoDoTitle('pirate_task_itens');
});

// POI
var poiButton = document.getElementById('poi');
poiButton.addEventListener('click', function() {
    copiarTextoDoTitle('poi');
});

// Ratmiral
var ratmiralButton = document.getElementById('ratmiral');
ratmiralButton.addEventListener('click', function() {
    copiarTextoDoTitle('ratmiral');
});

// Threatened Dreams
var threatenedDreamsButton = document.getElementById('threatened_dreams');
threatenedDreamsButton.addEventListener('click', function() {
    copiarTextoDoTitle('threatened_dreams');
});

// Ursagrodon Mount
var ursagrodonMountButton = document.getElementById('ursagrodon_mount');
ursagrodonMountButton.addEventListener('click', function() {
    copiarTextoDoTitle('ursagrodon_mount');
});

// Warrior
var warriorButton = document.getElementById('warrior');
warriorButton.addEventListener('click', function() {
    copiarTextoDoTitle('warrior');
});

// Warzone 1,2,3
var warzone123Button = document.getElementById('warzone_123');
warzone123Button.addEventListener('click', function() {
    copiarTextoDoTitle('warzone_123');
});

// Warzone 4,5,6
var warzone456Button = document.getElementById('warzone_456');
warzone456Button.addEventListener('click', function() {
    copiarTextoDoTitle('warzone_456');
});

// Warzone 7,8,9
var warzone789Button = document.getElementById('warzone_789');
warzone789Button.addEventListener('click', function() {
    copiarTextoDoTitle('warzone_789');
});

// Wild Horse
var wildHorseButton = document.getElementById('wild_horse');
wildHorseButton.addEventListener('click', function() {
    copiarTextoDoTitle('wild_horse');
});

// WOTE
var woteButton = document.getElementById('wote');
woteButton.addEventListener('click', function() {
    copiarTextoDoTitle('wote');
});

// Regras Rubinot
var regrasRubinotButton = document.getElementById('regras_rubinot');
regrasRubinotButton.addEventListener('click', function() {
    copiarTextoDoTitle('regras_rubinot');
});

// Abuso de Bug
var abusoBugButton = document.getElementById('abuso_bug');
abusoBugButton.addEventListener('click', function() {
    copiarTextoDoTitle('abuso_bug');
});

// MC - Multiclient
var mcMulticlientButton = document.getElementById('mc_multiclient');
mcMulticlientButton.addEventListener('click', function() {
    copiarTextoDoTitle('mc_multiclient');
});

// Software Ilegal
var softwareIlegalButton = document.getElementById('software_ilegal');
softwareIlegalButton.addEventListener('click', function() {
    copiarTextoDoTitle('software_ilegal');
});

// KS, Lure e Trap Red
var ksLureTrapRedButton = document.getElementById('ks_lure_trap_red');
ksLureTrapRedButton.addEventListener('click', function() {
    copiarTextoDoTitle('ks_lure_trap_red');
});

// Automações no RTC
var automacoesRTCButton = document.getElementById('automações_rtc');
automacoesRTCButton.addEventListener('click', function() {
    copiarTextoDoTitle('automações_rtc');
});

// Bazaar
var bazaarButton = document.getElementById('bazaar');
bazaarButton.addEventListener('click', function() {
    copiarTextoDoTitle('bazaar');
});

// Anúncios
var anunciosButton = document.getElementById('anuncios');
anunciosButton.addEventListener('click', function() {
    copiarTextoDoTitle('anuncios');
});

// Fingir ser da Equipe
var fingirEquipeButton = document.getElementById('fingir_equipe');
fingirEquipeButton.addEventListener('click', function() {
    copiarTextoDoTitle('fingir_equipe');
});

// Calúnias ou Informações Falsas sobre a Empresa
var caluniasButton = document.getElementById('calunias_informacoes_falsas');
caluniasButton.addEventListener('click', function() {
    copiarTextoDoTitle('calunias_informacoes_falsas');
});

// Atacar Serviços da Empresa
var atacarServicosButton = document.getElementById('atacar_servicos_empresa');
atacarServicosButton.addEventListener('click', function() {
    copiarTextoDoTitle('atacar_servicos_empresa');
});

});
