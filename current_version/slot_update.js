//sets some CSS values from the configuration file
var configuration_loop = 1;

while(configuration_loop < 7){
    document.getElementById("roster_".concat(configuration_loop, "_exp_border")).style.width = experience_bar_width;
    document.getElementById("roster_".concat(configuration_loop, "_border")).style.width = health_bar_width;
    
    configuration_loop ++;
}
    
//creates various arrays of pokemon data looked up by pokemon types for the pokemon types. Each type is assigned a number which is used later to call the correct data from this array.

const pokemon_file_names = ["", "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran_f", "Nidorina", "Nidoqueen", "Nidoran_m", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetchd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr.Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew", "Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw", "Feraligatr", "Sentret", "Furret", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", "Crobat", "Chinchou", "Lanturn", "Pichu", "Cleffa", "Igglybuff", "Togepi", "Togetic", "Natu", "Xatu", "Mareep", "Flaaffy", "Ampharos", "Bellossom", "Marill", "Azumarill", "Sudowoodo", "Politoed", "Hoppip", "Skiploom", "Jumpluff", "Aipom", "Sunkern", "Sunflora", "Yanma", "Wooper", "Quagsire", "Espeon", "Umbreon", "Murkrow", "Slowking", "Misdreavus", "Unown", "Wobbuffet", "Girafarig", "Pineco", "Forretress", "Dunsparce", "Gligar", "Steelix", "Snubbull", "Granbull", "Qwilfish", "Scizor", "Shuckle", "Heracross", "Sneasel", "Teddiursa", "Ursaring", "Slugma", "Magcargo", "Swinub", "Piloswine", "Corsola", "Remoraid", "Octillery", "Delibird", "Mantine", "Skarmory", "Houndour", "Houndoom", "Kingdra", "Phanpy", "Donphan", "Porygon2", "Stantler", "Smeargle", "Tyrogue", "Hitmontop", "Elekid", "Magby", "Miltank", "Blissey", "Raikou", "Entei", "Suicune", "Larvitar", "Pupitar", "Tyranitar", "Lugia", "Ho-Oh", "Celebi", "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Poochyena", "Mightyena", "Zigzagoon", "Linoone", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox", "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Taillow", "Swellow", "Wingull", "Pelipper", "Ralts", "Kirlia", "Gardevoir", "Surskit", "Masquerain", "Shroomish", "Breloom", "Slakoth", "Vigoroth", "Slaking", "Nincada", "Ninjask", "Shedinja", "Whismur", "Loudred", "Exploud", "Makuhita", "Hariyama", "Azurill", "Nosepass", "Skitty", "Delcatty", "Sableye", "Mawile", "Aron", "Lairon", "Aggron", "Meditite", "Medicham", "Electrike", "Manectric", "Plusle", "Minun", "Volbeat", "Illumise", "Roselia", "Gulpin", "Swalot", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Numel", "Camerupt", "Torkoal", "Spoink", "Grumpig", "Spinda", "Trapinch", "Vibrava", "Flygon", "Cacnea", "Cacturne", "Swablu", "Altaria", "Zangoose", "Seviper", "Lunatone", "Solrock", "Barboach", "Whiscash", "Corphish", "Crawdaunt", "Baltoy", "Claydol", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Castform", "Kecleon", "Shuppet", "Banette", "Duskull", "Dusclops", "Tropius", "Chimecho", "Absol", "Wynaut", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Bagon", "Shelgon", "Salamence", "Beldum", "Metang", "Metagross", "Regirock", "Regice", "Registeel", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys"];

const pokemon_type_names = ["", "Normal", "Fighting", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Steel", "Fire", "Water", "Grass", "Electric", "Psychic", "Ice", "Dragon", "Dark", "Fairy"];
const pokemon_type_colors = ["rgba(0, 0, 0, 0)", "rgba(130,130,130,255)", "rgba(229,145,32,255)", "rgba(116,171,209,255)", "rgba(148,84,204,255)", "rgba(165,115,60,255)", "rgba(169,164,128,255)", "rgba(160,160,39,255)", "rgba(110,69,112,255)", "rgba(106,173,201,255)", "rgba(229,97,62,255)", "rgba(48,154,226,255)", "rgba(67,153,55,255)", "rgba(223,189,40,255)", "rgba(233,107,141,255)", "rgba(233,107,141,255)", "rgba(233,107,141,255)", "rgba(79,71,71,255)", "rgba(225,141,225,255)"];

const pokemon_gender_symbols = ["", "&#9792", "&#9794"];
const pokemon_gender_colors = ["rgba(0, 0, 0, 0)", "rgba(217, 127, 255, 255)", "rgba(78, 117, 255, 255)"];
const pokemon_status_names = ["", "PSN", "FRZ", "SLP", "PAR", "BPN", "BRN", "FNT", "PKRS"];
const pokemon_status_colors = ["rgba(0, 0, 0 ,0)", "rgba(192, 96, 192, 255)", "rgba(136,176,224,255)", "rgba(160,160,136,255)", "rgba(184,184,24,255)", "rgba(192, 96, 192, 255)", "rgba(224,112,80,255)", "rgba(176,32,32,255)", "rgba(192,96,192,255)"];


const pokemon_type_1_lookup = [0, 12, 12, 12, 10, 10, 10, 11, 11, 11, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 4, 4, 13, 13, 5, 5, 4, 4, 4, 4, 4, 4, 18, 18, 10, 10, 1, 1, 4, 4, 12, 12, 12, 7, 7, 7, 7, 5, 5, 1, 1, 11, 11, 2, 2, 10, 10, 11, 11, 11, 14, 14, 14, 2, 2, 2, 12, 12, 12, 11, 11, 6, 6, 6, 10, 10, 11, 11, 13, 13, 1, 1, 1, 11, 11, 4, 4, 11, 11, 8, 8, 8, 6, 14, 14, 11, 11, 13, 13, 12, 12, 5, 5, 2, 2, 1, 4, 4, 5, 5, 1, 12, 1, 11, 11, 11, 11, 11, 11, 14, 7, 15, 13, 10, 7, 1, 11, 11, 11, 1, 1, 11, 13, 10, 1, 6, 6, 6, 6, 6, 1, 15, 13, 10, 16, 16, 16, 14, 14, 12, 12, 12, 10, 10, 10, 11, 11, 11, 1, 1, 1, 1, 7, 7, 7, 7, 4, 11, 11, 13, 18, 1, 18, 18, 14, 14, 13, 13, 13, 12, 11, 11, 6, 11, 12, 12, 12, 1, 12, 12, 7, 11, 11, 14, 17, 17, 11, 8, 14, 14, 1, 7, 7, 1, 5, 9, 18, 18, 11, 7, 7, 7, 17, 1, 1, 10, 10, 15, 15, 11, 11, 11, 15, 11, 9, 17, 17, 11, 5, 5, 1, 1, 1, 2, 2, 15, 13, 10, 1, 1, 13, 10, 11, 6, 6, 6, 14, 10, 14, 12, 12, 12, 10, 10, 10, 11, 11, 11, 17, 17, 1, 1, 7, 7, 7, 7, 7, 11, 11, 11, 12, 12, 12, 1, 1, 11, 11, 14, 14, 14, 7, 7, 12, 12, 1, 1, 1, 7, 7, 7, 1, 1, 1, 2, 2, 1, 6, 1, 1, 17, 9, 9, 9, 9, 2, 2, 13, 13, 13, 13, 7, 7, 12, 4, 4, 11, 11, 11, 11, 10, 10, 10, 14, 14, 1, 5, 5, 5, 12, 12, 1, 16, 1, 4, 6, 6, 11, 11, 11, 11, 5, 5, 6, 6, 6, 6, 11, 11, 1, 1, 8, 8, 8, 8, 12, 14, 17, 14, 15, 15, 15, 15, 15, 11, 11, 11, 11, 11, 16, 16, 16, 9, 9, 9, 6, 15, 9, 16, 16, 11, 5, 16, 9, 14];

const pokemon_type_2_lookup = [0, 4, 4, 4, 0, 0, 3, 0, 0, 0, 0, 0, 3, 4, 4, 4, 3, 3, 3, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 5, 0, 0, 0, 0, 18, 18, 3, 3, 4, 4, 4, 12, 12, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 5, 5, 5, 0, 0, 14, 14, 9, 9, 3, 3, 3, 0, 15, 0, 0, 0, 15, 4, 4, 4, 5, 0, 0, 0, 0, 0, 0, 14, 14, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 14, 18, 3, 14, 0, 0, 0, 0, 0, 3, 15, 0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 3, 0, 3, 3, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 4, 4, 3, 13, 13, 0, 0, 18, 0, 3, 3, 3, 0, 0, 0, 0, 18, 18, 0, 0, 3, 3, 3, 0, 0, 0, 3, 5, 5, 0, 0, 3, 14, 0, 0, 0, 14, 0, 9, 0, 3, 5, 0, 0, 4, 9, 6, 2, 15, 0, 0, 0, 6, 5, 5, 6, 0, 0, 3, 3, 3, 10, 10, 16, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 5, 5, 17, 3, 3, 12, 0, 0, 0, 0, 2, 2, 0, 5, 5, 0, 0, 0, 0, 0, 0, 3, 0, 4, 12, 12, 12, 0, 17, 17, 3, 3, 3, 3, 18, 18, 18, 11, 3, 0, 2, 0, 0, 0, 5, 3, 8, 0, 0, 0, 0, 0, 18, 0, 0, 0, 8, 18, 6, 6, 6, 14, 14, 0, 0, 0, 0, 0, 0, 4, 0, 0, 17, 17, 0, 0, 5, 5, 0, 0, 0, 0, 0, 16, 16, 0, 17, 3, 3, 0, 0, 14, 14, 5, 5, 0, 17, 14, 14, 12, 12, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 11, 11, 11, 0, 0, 0, 6, 0, 0, 0, 3, 14, 14, 14, 0, 0, 0, 14, 14, 0, 0, 3, 14, 0];

//names of item files. if your files are named differently, update them here.
const gen_3_items = ["", "MasterBall", "UltraBall", "GreatBall", "PokeBall", "SafariBall", "NetBall", "DiveBall", "NestBall", "RepeatBall", "TimerBall", "LuxuryBall", "PremierBall", "Potion", "Antidote", "BurnHeal", "IceHeal", "Awakening", "ParlyzHeal", "FullRestore", "MaxPotion", "HyperPotion", "SuperPotion", "FullHeal", "Revive", "MaxRevive", "FreshWater", "SodaPop", "Lemonade", "MoomooMilk", "EnergyPowder", "EnergyRoot", "HealPowder", "RevivalHerb", "Ether", "MaxEther", "Elixir", "MaxElixir", "LavaCookie", "BlueFlute", "YellowFlute", "RedFlute", "BlackFlute", "WhiteFlute", "BerryJuice", "SacredAsh", "ShoalSalt", "ShoalShell", "RedShard", "BlueShard", "YellowShard", "GreenShard", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "HPUp", "Protein", "Iron", "Carbos", "Calcium", "RareCandy", "PPUp", "Zinc", "PPMax", "unknown", "GuardSpec.", "DireHit", "XAttack", "XDefend", "XSpeed", "XAccuracy", "XSpecial", "PokeDoll", "FluffyTail", "unknown", "SuperRepel", "MaxRepel", "EscapeRope", "Repel", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "SunStone", "MoonStone", "FireStone", "Thunderstone", "WaterStone", "LeafStone", "unknown", "unknown", "unknown", "unknown", "TinyMushroom", "BigMushroom", "unknown", "Pearl", "BigPearl", "Stardust", "StarPiece", "Nugget", "HeartScale", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "OrangeMail", "HarborMail", "GlitterMail", "MechMail", "WoodMail", "WaveMail", "BeadMail", "ShadowMail", "TropicMail", "DreamMail", "FabMail", "RetroMail", "CheriBerry", "ChestoBerry", "PechaBerry", "RawstBerry", "AspearBerry", "LeppaBerry", "OranBerry", "PersimBerry", "LumBerry", "SitrusBerry", "FigyBerry", "WikiBerry", "MagoBerry", "AguavBerry", "IapapaBerry", "RazzBerry", "BlukBerry", "NanabBerry", "WepearBerry", "PinapBerry", "PomegBerry", "KelpsyBerry", "QualotBerry", "HondewBerry", "GrepaBerry", "TamatoBerry", "CornnBerry", "MagostBerry", "RabutaBerry", "NomelBerry", "SpelonBerry", "PamtreBerry", "WatmelBerry", "DurinBerry", "BelueBerry", "LiechiBerry", "GanlonBerry", "SalacBerry", "PetayaBerry", "ApicotBerry", "LansatBerry", "StarfBerry", "EnigmaBerry", "unknown", "unknown", "unknown", "BrightPowder", "WhiteHerb", "MachoBrace", "Exp.Share", "QuickClaw", "SootheBell", "MentalHerb", "ChoiceBand", "King'sRock", "SilverPowder", "AmuletCoin", "CleanseTag", "SoulDew", "DeepSeaTooth", "DeepSeaScale", "SmokeBall", "Everstone", "FocusBand", "LuckyEgg", "ScopeLens", "MetalCoat", "Leftovers", "DragonScale", "LightBall", "SoftSand", "HardStone", "MiracleSeed", "BlackGlasses", "BlackBelt", "Magnet", "MysticWater", "SharpBeak", "PoisonBarb", "NeverMeltIce", "SpellTag", "TwistedSpoon", "Charcoal", "DragonFang", "SilkScarf", "Up-Grade", "ShellBell", "SeaIncense", "LaxIncense", "LuckyPunch", "MetalPowder", "ThickClub", "Stick", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "RedScarf", "BlueScarf", "PinkScarf", "GreenScarf", "YellowScarf", "MachBike", "CoinCase", "Itemfinder", "OldRod", "GoodRod", "SuperRod", "S.S.Ticket", "ContestPass", "unknown", "WailmerPail", "DevonGoods", "SootSack", "BasementKey", "AcroBike", "PokeblockCase", "Letter", "EonTicket", "RedOrb", "BlueOrb", "Scanner", "Go-Goggles", "Meteorite", "Rm.1Key", "Rm.2Key", "Rm.4Key", "Rm.6Key", "StorageKey", "RootFossil", "ClawFossil", "DevonScope", "TM01", "TM02", "TM03", "TM04", "TM05", "TM06", "TM07", "TM08", "TM09", "TM10", "TM11", "TM12", "TM13", "TM14", "TM15", "TM16", "TM17", "TM18", "TM19", "TM20", "TM21", "TM22", "TM23", "TM24", "TM25", "TM26", "TM27", "TM28", "TM29", "TM30", "TM31", "TM32", "TM33", "TM34", "TM35", "TM36", "TM37", "TM38", "TM39", "TM40", "TM41", "TM42", "TM43", "TM44", "TM45", "TM46", "TM47", "TM48", "TM49", "TM50", "HM01", "HM02", "HM03", "HM04", "HM05", "HM06", "HM07", "HM08", "unknown", "unknown", "Oak'sParcel", "PokeFlute", "SecretKey", "BikeVoucher", "GoldTeeth", "OldAmber", "CardKey", "LiftKey", "HelixFossil", "DomeFossil", "SilphScope", "Bicycle", "TownMap", "VS.Seeker", "FameChecker", "TMCase", "BerryPouch", "TeachyTV", "TriPass", "RainbowPass", "Tea", "MysticTicket", "AuroraTicket", "PowderJar", "Ruby", "Sapphire", "MagmaEmblem", "OldSeaMap"];

//names of the unown files
const unown_file_names = ["unown-alpha", "unown-bravo", "unown-charlie", "unown-delta", "unown-epsilon", "unown-foxtrot", "unown-golf", "unown-hotel", "unown-india", "unown-juliett", "unown-kilo", "unown-lima", "unown-mike", "unown-november", "unown-oscar", "unown-papa", "unown-quebec", "unown-romeo", "unown-sierra", "unown-tango", "unown-uniform", "unown-victor", "unown-whiskey", "unown-xray", "unown-yankee", "unown-zulu", "unown-exclamation", "unown-interrogation"]

//these arrays define the level curves lookup tables

const pokemon_level_curve = [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 1, 1, 2, 2, 1, 1, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 4, 4, 1, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 2, 4, 4, 2, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 1, 1, 2, 3, 3, 3, 3, 1, 3, 3, 2, 2, 2, 2, 2, 3, 2, 1, 2, 2, 2, 2, 2, 2, 3, 2, 1, 1, 2, 2, 3, 4, 3, 2, 2, 2, 2, 4, 4, 1, 2, 2, 1, 4, 4, 4, 4, 2, 2, 2, 2, 4, 1, 2, 2, 2, 2, 2, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 4, 4, 4, 2, 2, 5, 5, 4, 4, 4, 0, 0, 0, 3, 3, 3, 5, 5, 1, 2, 1, 1, 3, 1, 4, 4, 4, 2, 2, 4, 4, 2, 2, 0, 5, 3, 5, 5, 4, 4, 5, 5, 2, 2, 2, 1, 1, 1, 3, 3, 3, 3, 3, 0, 0, 0, 5, 1, 1, 2, 2, 5, 5, 2, 2, 0, 0, 0, 0, 0, 0, 2, 3, 1, 1, 1, 1, 4, 1, 3, 2, 2, 2, 3, 3, 3, 0, 0, 0, 4, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];

const level_curve_erratic = [0, 0, 15, 52, 122, 237, 406, 637, 942, 1326, 1800, 2369, 3041, 3822, 4719, 5737, 6881, 8155, 9564, 11111, 12800, 14632, 16610, 18737, 21012, 23437, 26012, 28737, 31610, 34632, 37800, 41111, 44564, 48155, 51881, 55737, 59719, 63822, 68041, 72369, 76800, 81326, 85942, 90637, 95406, 100237, 105122, 110052, 115015, 120001, 125000, 131324, 137795, 144410, 151165, 158056, 165079, 172229, 179503, 186894, 194400, 202013, 209728, 217540, 225443, 233431, 241496, 249633, 257834, 267406, 276458, 286328, 296358, 305767, 316074, 326531, 336255, 346965, 357812, 367807, 378880, 390077, 400293, 411686, 423190, 433572, 445239, 457001, 467489, 479378, 491346, 501878, 513934, 526049, 536557, 548720, 560922, 571333, 583539, 591882, 600000];

const level_curve_fast = [0, 0, 6, 21, 51, 100, 172, 274, 409, 583, 800, 1064, 1382, 1757, 2195, 2700, 3276, 3930, 4665, 5487, 6400, 7408, 8518, 9733, 11059, 12500, 14060, 15746, 17561, 19511, 21600, 23832, 26214, 28749, 31443, 34300, 37324, 40522, 43897, 47455, 51200, 55136, 59270, 63605, 68147, 72900, 77868, 83058, 88473, 94119, 100000, 106120, 112486, 119101, 125971, 133100, 140492, 148154, 156089, 164303, 172800, 181584, 190662, 200037, 209715, 219700, 229996, 240610, 251545, 262807, 274400, 286328, 298598, 311213, 324179, 337500, 351180, 365226, 379641, 394431, 409600, 425152, 441094, 457429, 474163, 491300, 508844, 526802, 545177, 563975, 583200, 602856, 622950, 643485, 664467, 685900, 707788, 730138, 752953, 776239, 800000];

const level_curve_medium_fast = [0, 0, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331, 1728, 2197, 2744, 3375, 4096, 4913, 5832, 6859, 8000, 9261, 10648, 12167, 13824, 15625, 17576, 19683, 21952, 24389, 27000, 29791, 32768, 35937, 39304, 42875, 46656, 50653, 54872, 59319, 64000, 68921, 74088, 79507, 85184, 91125, 97336, 103823, 110592, 117649, 125000, 132651, 140608, 148877, 157464, 166375, 175616, 185193, 195112, 205379, 216000, 226981, 238328, 250047, 262144, 274625, 287496, 300763, 314432, 328509, 343000, 357911, 373248, 389017, 405224, 421875, 438976, 456533, 474552, 493039, 512000, 531441, 551368, 571787, 592704, 614125, 636056, 658503, 681472, 704969, 729000, 753571, 778688, 804357, 830584, 857375, 884736, 912673, 941192, 970299, 1000000];

const level_curve_medium_slow = [0, 0, 9, 57, 96, 135, 179, 236, 314, 419, 560, 742, 973, 1261, 1612, 2035, 2535, 3120, 3798, 4575, 5460, 6458, 7577, 8825, 10208, 11735, 13411, 15244, 17242, 19411, 21760, 24294, 27021, 29949, 33084, 36435, 40007, 43808, 47846, 52127, 56660, 61450, 66505, 71833, 77440, 83335, 89523, 96012, 102810, 109923, 117360, 125126, 133229, 141677, 150476, 159635, 169159, 179056, 189334, 199999, 211060, 222522, 234393, 246681, 259392, 272535, 286115, 300140, 314618, 329555, 344960, 360838, 377197, 394045, 411388, 429235, 447591, 466464, 485862, 505791, 526260, 547274, 568841, 590969, 613664, 636935, 660787, 685228, 710266, 735907, 762160, 789030, 816525, 844653, 873420, 902835, 932903, 963632, 995030, 1027103, 1059860];

const level_curve_slow = [0, 0, 10, 33, 80, 156, 270, 428, 640, 911, 1250, 1663, 2160, 2746, 3430, 4218, 5120, 6141, 7290, 8573, 10000, 11576, 13310, 15208, 17280, 19531, 21970, 24603, 27440, 30486, 33750, 37238, 40960, 44921, 49130, 53593, 58320, 63316, 68590, 74148, 80000, 86151, 92610, 99383, 106480, 113906, 121670, 129778, 138240, 147061, 156250, 165813, 175760, 186096, 196830, 207968, 219520, 231491, 243890, 256723, 270000, 283726, 297910, 312558, 327680, 343281, 359370, 375953, 393040, 410636, 428750, 447388, 466560, 486271, 506530, 527343, 548720, 570666, 593190, 616298, 640000, 664301, 689210, 714733, 740880, 767656, 795070, 823128, 851840, 881211, 911250, 941963, 973360, 1005446, 1038230, 1071718, 1105920, 1140841, 1176490, 1212873, 1250000];

const level_curve_fluctuating = [0, 0, 4, 13, 32, 65, 112, 178, 276, 393, 540, 745, 967, 1230, 1591, 1957, 2457, 3046, 3732, 4526, 5440, 6482, 7666, 9003, 10506, 12187, 14060, 16140, 18439, 20974, 23760, 26811, 30146, 33780, 37731, 42017, 46656, 50653, 55969, 60505, 66560, 71677, 78533, 84277, 91998, 98415, 107069, 114205, 123863, 131766, 142500, 151222, 163105, 172697, 185807, 196322, 210739, 222231, 238036, 250562, 267840, 281456, 300293, 315059, 335544, 351520, 373744, 390991, 415050, 433631, 459620, 479600, 507617, 529063, 559209, 582187, 614566, 639146, 673863, 700115, 737280, 765275, 804997, 834809, 877201, 908905, 954084, 987754, 1035837, 1071552, 1122660, 1160499, 1214753, 1254796, 1312322, 1354652, 1415577, 1460276, 1524731, 1571884, 1640000];

//array of threshold values for all pokemon up to 386 (deoxys)
const gender_threshold_values = [0, 31, 31, 31, 31, 31, 31, 31, 31, 31, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 254, 0, 0, 0, 191, 191, 191, 191, 191, 191, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 63, 63, 127, 127, 127, 63, 63, 63, 63, 63, 63, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 255, 255, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 255, 255, 127, 127, 127, 127, 0, 0, 127, 127, 127, 127, 127, 254, 127, 254, 127, 127, 127, 127, 255, 255, 127, 127, 254, 63, 63, 127, 0, 127, 127, 127, 255, 31, 31, 31, 31, 255, 31, 31, 31, 31, 31, 31, 255, 255, 255, 127, 127, 127, 255, 255, 31, 31, 31, 31, 31, 31, 31, 31, 31, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 191, 191, 31, 31, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 31, 31, 127, 127, 127, 255, 127, 127, 127, 127, 127, 127, 127, 191, 191, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 191, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 255, 127, 127, 0, 0, 63, 63, 254, 254, 255, 255, 255, 127, 127, 127, 255, 255, 255, 31, 31, 31, 31, 31, 31, 31, 31, 31, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 255, 127, 127, 127, 63, 63, 191, 127, 191, 191, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 0, 254, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 255, 255, 127, 127, 127, 127, 255, 255, 31, 31, 31, 31, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 127, 31, 191, 127, 127, 127, 255, 255, 255, 255, 255, 255, 0, 255, 255, 255, 255, 255];



var update_loop = 0;

//slot change ids stores the change update value so the code can compare it and make sure that it's not updating when it doesn't need to
const slot_change_ids = [-1, -1, -1, -1, -1, -1, -1];

//this will eventually be used to fix the swap glitch. currently does nothing
const pokemon_pids_minus_1 = [-1, -1, -1, -1, -1, -1, -1];
const pokemon_pids_minus_2 = [-1, -1, -1, -1, -1, -1, -1];

//this function actually looks every 1/10 a second to see if any changes are in the json file, and updates them as it goes
function update_() {

    poke_data.forEach((pokeSlot, roster_loop) => { //not using roster_loop, but that's your iteration index, if you like it
        //checks the current update number to the one stored in the updates variable, if they're the same, doesn't bother running the code.
        if (slot_change_ids[slotId] != pokeSlot["changeId"]) {
            var partyPokemon = pokeSlot["pokemon"];
            //if the data updates to 'null', then this blanks out the slot
            if (partyPokemon == null) {
                Slot_Null(pokeSlot["slotId"]);
            } else if (partyPokemon["isEgg"] != 0) {
                Slot_Egg(pokeSlot["slotId"])
            } else {
                //this updates actual pokemon if neither null nor egg. Updates all elements set to true in the configuration.js file
                Slot_Pokemon(pokeSlot["slotId"], partyPokemon)
            }

            //this code will be eventually used to solve the pokemon flip glitch
            //pokemon_pids_minus_2[slotId] = pokemon_pids_minus_1[slotId];
            //pokemon_pids_minus_1[slotId] = partyPokemon["pid"];
            //console.log("Pokemon in ".concat(slotId, ": ", partyPokemon["speciesName"]));
            //console.log(pokemon_pids_minus_1);
            //console.log(pokemon_pids_minus_2);
        }

        slot_change_ids[slotId] = pokeSlot["changeId"];
    });
}

//this bit of code fetches the json file every 100 milliseconds, and uses it to update the team
setInterval(
    function get_new_data() {
        fetch("./json_generator/party.json")
            .then(response => {
                return response.json();
            })
            .then(function(data) {
                poke_data = data;
                update_();
            });
    },
    100);

function Slot_Null(slotId) {
    if (sprite_draw == true) {
        document.getElementById("roster_".concat(slotId, "_sprite")).style.backgroundImage = "url('')";
    }

    if (pokeball_draw == true) {
        document.getElementById("ball_sprite_".concat(slotId)).style.backgroundImage = "url('')";
    }

    if (held_item_draw == true) {
        document.getElementById("held_item_sprite_".concat(slotId)).style.backgroundImage = "url('')";
    }

    if (nickname_draw == true) {
        document.getElementById("roster_".concat(slotId, "_nickname")).innerHTML = "";
    }
    if (species_name_draw == true) {
        document.getElementById("roster_".concat(slotId, "_species")).innerHTML = "";
    }
    if (species_name_draw == true) {
        document.getElementById("roster_".concat(slotId, "_egg")).innerHTML = "";
    }
    if (level_draw == true) {
        document.getElementById("roster_".concat(slotId, "_level")).innerHTML = "";
    }
    if (hp_numeric_draw == true) {
        document.getElementById("roster_".concat(slotId, "_hp_numerical")).innerHTML = "";
    }

    if (types_draw) {
        document.getElementById("roster_".concat(slotId, "_type_1_bg")).style.backgroundColor = pokemon_type_colors[0];
        document.getElementById("roster_".concat(slotId, "_type_1")).innerHTML = pokemon_type_names[0];
        document.getElementById("roster_".concat(slotId, "_type_2_bg")).style.backgroundColor = pokemon_type_colors[0];
        document.getElementById("roster_".concat(slotId, "_type_2")).innerHTML = pokemon_type_names[0];
    }

    if (status_draw == true) {
        document.getElementById("status_bg_".concat(slotId)).style.backgroundColor = pokemon_status_colors[0];
        document.getElementById("status_".concat(slotId)).innerHTML = pokemon_status_names[0];
    }

    if (experience_draw == true) {
        document.getElementById("roster_".concat(slotId, "_exp_border")).style.borderWidth = 0;

        document.getElementById("roster_".concat(slotId, "_exp")).style.width = 0;
        document.getElementById("roster_".concat(slotId, "_exp")).style.backgroundColor = 'rgba(0,0,0,0)';
    }

    if (hp_draw == true) {
        document.getElementById("roster_".concat(slotId, "_border")).style.borderWidth = 0;
        document.getElementById("roster_".concat(slotId, "_hp")).style.width = 0;
        document.getElementById("roster_".concat(slotId, "_hp")).style.backgroundColor = 'rgba(0,0,0,0)';
    }

    if (gender_draw == true) {
        document.getElementById("roster_gender_".concat(slotId)).style.backgroundColor =
            pokemon_gender_colors[0];
        document.getElementById("roster_gender_".concat(slotId)).innerHTML = pokemon_gender_symbols[0];
    }

    if (moves_draw == true) {
        var moves_draw_loop = 1;
        while (moves_draw_loop < 5) {
            document.getElementById("roster_move_".concat(moves_draw_loop, "_", slotId)).innerHTML = "";
            document.getElementById("roster_move_".concat(moves_draw_loop, "_bg_", slotId)).style.backgroundColor = pokemon_type_colors[0];

            moves_draw_loop++;
        }
    }
}

function Slot_Egg(slotId) {
    //this is a special case for if the pokemon is an egg. It clears out most values and types Egg in a special name holder
    if (sprite_draw == true) {
        document.getElementById("roster_".concat(slotId, "_sprite")).style.backgroundImage = "url('".concat(pokemon_normal_sprites_root, egg_filename, "')");
    }

    if (pokeball_draw == true) {
        document.getElementById("ball_sprite_".concat(slotId)).style.backgroundImage = "url('')";
    }

    if (held_item_draw == true) {
        document.getElementById("held_item_sprite_".concat(slotId)).style.backgroundImage = "url('')";
    }

    if (nickname_draw == true) {
        document.getElementById("roster_".concat(slotId, "_nickname")).innerHTML = "";
    }
    if (species_name_draw == true) {
        document.getElementById("roster_".concat(slotId, "_species")).innerHTML = "";
    }
    if (species_name_draw == true) {
        document.getElementById("roster_".concat(slotId, "_egg")).innerHTML = "Egg";
    }
    if (level_draw == true) {
        document.getElementById("roster_".concat(slotId, "_level")).innerHTML = "";
    }
    if (hp_numeric_draw == true) {
        document.getElementById("roster_".concat(slotId, "_hp_numerical")).innerHTML = "";
    }

    if (types_draw) {
        document.getElementById("roster_".concat(slotId, "_type_1_bg")).style.backgroundColor = pokemon_type_colors[0];
        document.getElementById("roster_".concat(slotId, "_type_1")).innerHTML = pokemon_type_names[0];
        document.getElementById("roster_".concat(slotId, "_type_2_bg")).style.backgroundColor = pokemon_type_colors[0];
        document.getElementById("roster_".concat(slotId, "_type_2")).innerHTML = pokemon_type_names[0];
    }

    if (status_draw == true) {
        document.getElementById("status_bg_".concat(slotId)).style.backgroundColor = pokemon_status_colors[0];
        document.getElementById("status_".concat(slotId)).innerHTML = pokemon_status_names[0];
    }

    if (experience_draw == true) {
        document.getElementById("roster_".concat(slotId, "_exp_border")).style.borderWidth = 0;

        document.getElementById("roster_".concat(slotId, "_exp")).style.width = 0;
        document.getElementById("roster_".concat(slotId, "_exp")).style.backgroundColor = 'rgba(0,0,0,0)';
    }

    if (hp_draw == true) {
        document.getElementById("roster_".concat(slotId, "_border")).style.borderWidth = 0;
        document.getElementById("roster_".concat(slotId, "_hp")).style.width = 0;
        document.getElementById("roster_".concat(slotId, "_hp")).style.backgroundColor = 'rgba(0,0,0,0)';
    }

    if (gender_draw == true) {
        document.getElementById("roster_gender_".concat(slotId)).style.backgroundColor =
            pokemon_gender_colors[0];
        document.getElementById("roster_gender_".concat(slotId)).innerHTML = pokemon_gender_symbols[0];
    }


    if (moves_draw == true) {
        var moves_draw_loop = 1;
        while (moves_draw_loop < 5) {
            document.getElementById("roster_move_".concat(moves_draw_loop, "_", slotId)).innerHTML = "";
            document.getElementById("roster_move_".concat(moves_draw_loop, "_bg_", slotId)).style.backgroundColor = pokemon_type_colors[0];

            moves_draw_loop++;
        }
    }
}

function Slot_Pokemon(slotId, partyPokemon) {

    if (species_name_draw == true) {
        document.getElementById("roster_".concat(slotId, "_egg")).innerHTML = "";
    }
    if (sprite_draw == true) {
        if (partyPokemon["species"] == 201) {

            // if the pokemon is an unown, looks at unown sprite
            var pid_binary = partyPokemon["pid"].toString(2);
            var unown_binary = pid_binary.slice(pid_binary.length - 26, pid_binary.length - 24) + pid_binary.slice(pid_binary.length - 18, pid_binary.length - 16) + pid_binary.slice(pid_binary.length - 10, pid_binary.length - 8) + pid_binary.slice(pid_binary.length - 2, pid_binary.length);
            var unown_dec = parseInt(unown_binary, 2);
            var unown_mod = (unown_dec % 28);
            console.log(unown_mod);

            if (partyPokemon["isShiny"] == false) {
                document.getElementById("roster_".concat(slotId, "_sprite")).style.backgroundImage = "url('".concat(pokemon_normal_sprites_root, unown_file_names[unown_mod].toLowerCase(), pokemon_sprites_extension, "')");
                document.getElementById("roster_shiny_".concat(slotId)).innerHTML = "";
            } else {
                document.getElementById("roster_".concat(slotId, "_sprite")).style.backgroundImage = "url('".concat(pokemon_shiny_sprites_root, unown_file_names[unown_mod].toLowerCase(), pokemon_sprites_extension, "')");
                document.getElementById("roster_shiny_".concat(slotId)).innerHTML = "&#11088";
            }

        } else {
            //checks if pokemon is normal or shiny, and if shiny loads the shiny sprite.
            if (partyPokemon["isShiny"] == false) {
                document.getElementById("roster_".concat(slotId, "_sprite")).style.backgroundImage = "url('".concat(pokemon_normal_sprites_root, pokemon_file_names[partyPokemon["species"]].toLowerCase(), pokemon_sprites_extension, "')");
                document.getElementById("roster_shiny_".concat(slotId)).innerHTML = "";
            } else {
                document.getElementById("roster_".concat(slotId, "_sprite")).style.backgroundImage = "url('".concat(pokemon_shiny_sprites_root, pokemon_file_names[partyPokemon["species"]].toLowerCase(), pokemon_file_extensions, "')");
                document.getElementById("roster_shiny_".concat(slotId)).innerHTML = "&#11088";
            }

        }

    }

    //This code loads the pokeball the pokemon was caught in
    if (pokeball_draw == true) {
        document.getElementById("ball_sprite_".concat(slotId)).style.backgroundImage = "url('".concat(item_images_root, gen_3_items[partyPokemon["pokeball"]].toLowerCase(), item_extension, "')");
    }

    if (held_item_draw == true) {
        document.getElementById("held_item_sprite_".concat(slotId)).style.backgroundImage = "url('".concat(item_images_root, gen_3_items[partyPokemon["heldItem"]].toLowerCase(), item_extension, "')");
    }

    //Calculates the gender of the pokemon from the PID
    if (gender_draw == true) {
        var pid_binary = partyPokemon["pid"].toString(2);
        var gender_binary = pid_binary.slice(pid_binary.length - 8, pid_binary.length);
        var gender_bit_dec_10 = parseInt(gender_binary, 2);

        if (gender_threshold_values[partyPokemon["species"]] == 0) {
            document.getElementById("roster_gender_".concat(slotId)).style.backgroundColor = pokemon_gender_colors[2];
            document.getElementById("roster_gender_".concat(slotId)).innerHTML = pokemon_gender_symbols[2];
        } //always Male
        else if (gender_threshold_values[partyPokemon["species"]] == 254) {
            document.getElementById("roster_gender_".concat(slotId)).style.backgroundColor = pokemon_gender_colors[1];
            document.getElementById("roster_gender_".concat(slotId)).innerHTML = pokemon_gender_symbols[1];
        } //always Female
        else if (gender_threshold_values[partyPokemon["species"]] == 255) {
            document.getElementById("roster_gender_".concat(slotId)).style.backgroundColor = pokemon_gender_colors[0];
            document.getElementById("roster_gender_".concat(slotId)).innerHTML = pokemon_gender_symbols[0];
        } //gender neutral
        else {

            if (gender_bit_dec_10 < gender_threshold_values[partyPokemon["species"]]) {
                document.getElementById("roster_gender_".concat(slotId)).style.backgroundColor = pokemon_gender_colors[1];
                document.getElementById("roster_gender_".concat(slotId)).innerHTML = pokemon_gender_symbols[1];
            } else {
                document.getElementById("roster_gender_".concat(slotId)).style.backgroundColor = pokemon_gender_colors[2];
                document.getElementById("roster_gender_".concat(slotId)).innerHTML = pokemon_gender_symbols[2];
            }

        }

    }

    //reads the pokemon's nickname, turns it into a standard format of only first letter capital, and then prints that to the nickname field.
    if (nickname_draw == true) {
        var nickname_std = partyPokemon["nickname"].charAt(0).toUpperCase() + partyPokemon["nickname"].slice(1).toLowerCase();
        document.getElementById("roster_".concat(slotId, "_nickname")).innerHTML = nickname_std;
    }

    //prints the pokemon's species name into the species field
    if (species_name_draw == true) {
        document.getElementById("roster_".concat(slotId, "_egg")).innerHTML = "";
        document.getElementById("roster_".concat(slotId, "_species")).innerHTML = partyPokemon["speciesName"];
    }

    //prints the pokemon's level into the Level field.
    if (level_draw == true) {
        document.getElementById("roster_".concat(slotId, "_level")).innerHTML = "Lv. ".concat(partyPokemon["level"]);
    }

    //this looks up the two types the pokemon may have, and then prints them into the type fields, while also changing the background colors of the types.
    if (types_draw == true) {
        document.getElementById("roster_".concat(slotId, "_type_1_bg")).style.backgroundColor = pokemon_type_colors[pokemon_type_1_lookup[partyPokemon["species"]]];
        document.getElementById("roster_".concat(slotId, "_type_1")).innerHTML = pokemon_type_names[pokemon_type_1_lookup[partyPokemon["species"]]].toUpperCase();
        document.getElementById("roster_".concat(slotId, "_type_2_bg")).style.backgroundColor = pokemon_type_colors[pokemon_type_2_lookup[partyPokemon["species"]]];
        document.getElementById("roster_".concat(slotId, "_type_2")).innerHTML = pokemon_type_names[pokemon_type_2_lookup[partyPokemon["species"]]].toUpperCase();
    }

    //this code deals with drawing the HP bar and text
    if (hp_draw == true) {
        document.getElementById("roster_".concat(slotId, "_border")).style.borderWidth = 2;

        //this code calculates the health bar length
        var health_ = partyPokemon["hp"]["current"] / partyPokemon["hp"]["max"];
        var health_width = health_ * health_bar_width;

        document.getElementById("roster_".concat(slotId, "_hp")).style.width = health_width;
        if (health_ > 0.5) {
            document.getElementById("roster_".concat(slotId, "_hp")).style.backgroundColor = 'rgba(122, 255, 170,255)';
        }
        if (health_ <= 0.5) {
            document.getElementById("roster_".concat(slotId, "_hp")).style.backgroundColor = 'rgba(243, 231, 62, 255)';
        }
        if (health_ <= 0.2) {
            document.getElementById("roster_".concat(slotId, "_hp")).style.backgroundColor = 'rgba(211, 78, 80, 255)';
        }
    }

    if (hp_numeric_draw == true) {
        document.getElementById("roster_".concat(slotId, "_hp_numerical")).innerHTML = "&nbsp".concat(partyPokemon["hp"]["current"], "/", partyPokemon["hp"]["max"]);
    }

    //pokemon status conditions.
    //if pokemon is fainted, render fainted
    if (status_draw == false) {
        if (partyPokemon["hp"]["current"] == 0) {
            document.getElementById("status_".concat(slotId)).innerHTML = pokemon_status_names[7];
            document.getElementById("status_bg_".concat(slotId)).style.backgroundColor = pokemon_status_colors[7];
        } else if (partyPokemon["status"]["psn"] == true) {
            document.getElementById("status_".concat(slotId)).innerHTML = pokemon_status_names[1];
            document.getElementById("status_bg_".concat(slotId)).style.backgroundColor = pokemon_status_colors[1];
        } else if (partyPokemon["status"]["frz"] == true) {
            document.getElementById("status_".concat(slotId)).innerHTML = pokemon_status_names[2];
            document.getElementById("status_bg_".concat(slotId)).style.backgroundColor = pokemon_status_colors[2];
        } else if (partyPokemon["status"]["slp"] == true) {
            document.getElementById("status_".concat(slotId)).innerHTML = pokemon_status_names[3];
            document.getElementById("status_bg_".concat(slotId)).style.backgroundColor = pokemon_status_colors[3];
        } else if (partyPokemon["status"]["par"] == true) {
            document.getElementById("status_".concat(slotId)).innerHTML = pokemon_status_names[4];
            document.getElementById("status_bg_".concat(slotId)).style.backgroundColor = pokemon_status_colors[4];
        } else if (partyPokemon["status"]["bps"] == true) {
            document.getElementById("status_".concat(slotId)).innerHTML = pokemon_status_names[5];
            document.getElementById("status_bg_".concat(slotId)).style.backgroundColor = pokemon_status_colors[5];
        } else if (partyPokemon["status"]["brn"] == true) {
            document.getElementById("status_".concat(slotId)).innerHTML = pokemon_status_names[6];
            document.getElementById("status_bg_".concat(slotId)).style.backgroundColor = pokemon_status_colors[6];
        } else if (partyPokemon["pokerus"] > 0) {
            document.getElementById("status_".concat(slotId)).innerHTML = pokemon_status_names[8];
            document.getElementById("status_bg_".concat(slotId)).style.backgroundColor = pokemon_status_colors[8];
        } else {
            document.getElementById("status_".concat(slotId)).innerHTML = pokemon_status_names[0];
            document.getElementById("status_bg_".concat(slotId)).style.backgroundColor = pokemon_status_colors[0];
        }

    }


    // Erratic	0    Fast	1    Medium Fast	2    Medium Slow	3    Slow	4    Fluctuating	5
    //calculates the current exp in the current level, and translates that to the length of the experience bar. First it looks up the level curve the pokemon is going to draw values from, then uses that with the pokemon's current level to calculate the variance.
    if (experience_draw == true) {
        document.getElementById("roster_".concat(slotId, "_exp_border")).style.borderWidth = 2;
        document.getElementById("roster_".concat(slotId, "_exp")).style.backgroundColor = 'rgba(75, 210, 244,255)';

        if (pokemon_level_curve[partyPokemon["species"]] == 0) {
            var exp_ = partyPokemon["exp"] - level_curve_erratic[partyPokemon["level"]];
            var exp_width = ((partyPokemon["exp"] - level_curve_erratic[partyPokemon["level"]]) / (level_curve_erratic[partyPokemon["level"] + 1] - level_curve_erratic[partyPokemon["level"]])) * exp_bar_width;
        } else if (pokemon_level_curve[partyPokemon["species"]] == 1) {
            var exp_ = partyPokemon["exp"] - level_curve_fast[partyPokemon["level"]];
            var exp_width = ((partyPokemon["exp"] - level_curve_fast[partyPokemon["level"]]) / (level_curve_fast[partyPokemon["level"] + 1] - level_curve_fast[partyPokemon["level"]])) * exp_bar_width;
        } else if (pokemon_level_curve[partyPokemon["species"]] == 2) {
            var exp_ = partyPokemon["exp"] - level_curve_medium_fast[partyPokemon["level"]];
            var exp_width = ((partyPokemon["exp"] - level_curve_medium_fast[partyPokemon["level"]]) / (level_curve_medium_fast[partyPokemon["level"] + 1] - level_curve_medium_fast[partyPokemon["level"]])) * exp_bar_width;
        } else if (pokemon_level_curve[partyPokemon["species"]] == 3) {
            var exp_ = partyPokemon["exp"] - level_curve_medium_slow[partyPokemon["level"]];
            var exp_width = ((partyPokemon["exp"] - level_curve_medium_slow[partyPokemon["level"]]) / (level_curve_medium_slow[partyPokemon["level"] + 1] - level_curve_medium_slow[partyPokemon["level"]])) * exp_bar_width;
        } else if (pokemon_level_curve[partyPokemon["species"]] == 4) {
            var exp_ = partyPokemon["exp"] - level_curve_slow[partyPokemon["level"]];
            var exp_width = ((partyPokemon["exp"] - level_curve_slow[partyPokemon["level"]]) / (level_curve_slow[partyPokemon["level"] + 1] - level_curve_slow[partyPokemon["level"]])) * exp_bar_width;
        } else if (pokemon_level_curve[partyPokemon["species"]] == 5) {
            var exp_ = partyPokemon["exp"] - level_curve_fluctuating[partyPokemon["level"]];
            var exp_width = ((partyPokemon["exp"] - level_curve_fluctuating[partyPokemon["level"]]) / (level_curve_fluctuating[partyPokemon["level"] + 1] - level_curve_fluctuating[partyPokemon["level"]])) * exp_bar_width;
        }


        document.getElementById("roster_".concat(slotId, "_exp")).style.width = exp_width;
    }


    if (moves_draw == true) {

        console.log(partyPokemon["move4"]["name"])
        var moves_draw_loop = 1;

        while (moves_draw_loop < 5) {
            if (partyPokemon["move".concat(moves_draw_loop)]["name"] !== undefined) {
                document.getElementById("roster_move_".concat(moves_draw_loop, "_", slotId)).innerHTML = partyPokemon["move".concat(moves_draw_loop)]["name"];
                document.getElementById("roster_move_".concat(moves_draw_loop, "_bg_", slotId)).style.backgroundColor = pokemon_type_colors[1];
            } else {
                document.getElementById("roster_move_".concat(moves_draw_loop, "_", slotId)).innerHTML = "";
                document.getElementById("roster_move_".concat(moves_draw_loop, "_bg_", slotId)).style.backgroundColor = pokemon_type_colors[0];
            }
            moves_draw_loop++;
        }

    }
}
