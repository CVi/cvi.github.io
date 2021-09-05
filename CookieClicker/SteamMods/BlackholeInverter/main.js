if(BlackholeInverter === undefined) var BlackholeInverter = {};
BlackholeInverter.name = 'Black Hole Inverter';
BlackholeInverter.version = '1.8';
BlackholeInverter.GameVersion = '2.04';

BlackholeInverter.launch = function(){
	BlackholeInverter.init = function(){
		var modDir = CCSE.GetModPath(BlackholeInverter.name)
		var iconsURL = modDir + '/customIcons.png';
		
		CCSE.NewBuilding('Black hole inverter',
			'black hole inverter|black hole inverters|extracted|[X]% larger event horizon|[X]% larger event horizon',
			'Inverts the flow of gravity to get the infinitely delicious cookies from an infinitely dense singularity.',
			1,
			1,
			{
				base:'../' + modDir + '/blackholeinverter',
				xV:8,
				yV:32,
				w:128,
				rows:1,
				x:0,
				y:0,
				customBuildingPic:modDir + '/customBuildings.png',
				customIconsPic:iconsURL
			},
			"doesn't matter what you put here",
			function(me){
				var mult = 1;
				mult *= Game.GetTieredCpsMult(me);
				mult *= Game.magicCpS(me.name);
				return me.baseCps * mult;
			},
			function(){
				Game.UnlockTiered(this);
				if(this.amount >= Game.SpecialGrandmaUnlock && Game.Objects['Grandma'].amount > 0) Game.Unlock(this.grandma.name);
			},
			{
				name:'Hypnodrone',
				desc:'Autonomous aerial brand ambassadors to "encourage" more sales!',
				icon:1
			},
			['Kugelblitz', 'Spaghettification']
		);
		
		Game.Objects['Black hole inverter'].displayName='<span style="font-size:80%;position:relative;bottom:4px;">Black hole inverter</span>'; // Shrink the name since it's so large
		
		
		// Upgrades
		var last; var order = 1400; var i = 0;
		Game.TieredUpgrade('Blacker holes', '<q>Bigger and blacker.</q>', 'Black hole inverter', 1); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Blackest holes', '<q>The biggest and blackest.</q>', 'Black hole inverter', 2); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Vantablack holes', '<q>The universe doesn\'t care about some idiot\'s copyright.</q>', 'Black hole inverter', 3); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('African-American holes', '<q>Some people take political correctness a little too far.</q>', 'Black hole inverter', 4); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Event Horizon Comics', '<q>dot com</q>', 'Black hole inverter', 5); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Large Hadron Collider', '<q>Smashing things together has never been so well funded!</q>', 'Black hole inverter', 6); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Superconducting Super Collider', '<q>In the land of what might have been.</q>', 'Black hole inverter', 7); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Hawking radiators', '<q>14 March 2018.</q>', 'Black hole inverter', 8); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Micro black holes', '<q>Fun sized</q>', 'Black hole inverter', 9); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Accretion disco', '<q>Everybody dance now!</q>', 'Black hole inverter', 10); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		Game.TieredUpgrade('Gravitational waves', '<q>What\'s better that one black hole? Two of them put together!</q>', 'Black hole inverter', 11); last = Game.last; last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		
		order = 256;
		last = Game.GrandmaSynergy('Heavy grandmas', 'A dense grandma to accrete more cookies.', 'Black hole inverter'); last.order = order;
		
		order = 5001
		last = Game.SynergyUpgrade('Daring pilots', "<q>You've never heard of the Millennium Falcon? It's the ship that made the Kessel Run in less than twelve parsecs.</q>", 'Black hole inverter', 'Shipment', 'synergy1'); last.icon[2] = iconsURL; last.order = order;
		last = Game.SynergyUpgrade('General relativity', '<q>Space is time. Time is space</q>', 'Black hole inverter', 'Time machine', 'synergy2'); last.icon[2] = iconsURL; last.order = order + 0.01;
		
		
		// Achievements
		order = 2400; i = 0;
		last = Game.TieredAchievement('Single singularity', '', 'Black hole inverter', 1); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Penrose diagram', '', 'Black hole inverter', 2); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Schwarzschild', '', 'Black hole inverter', 3); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Primordial black holes', '', 'Black hole inverter', 4); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('No-hair theorem', '', 'Black hole inverter', 5); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Photon sphere', '', 'Black hole inverter', 6); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Information paradox', '', 'Black hole inverter', 7); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Gravitaional lensing', '', 'Black hole inverter', 8); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Galactic nuclei', '', 'Black hole inverter', 9); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Sagittarius A*', '', 'Black hole inverter', 10); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.TieredAchievement('Hey now, you\'re a dead star', '', 'Black hole inverter', 11); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		
		//order = 2420; i = 0;
		last = Game.ProductionAchievement('Relativistic jets', 'Black hole inverter', 1); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.ProductionAchievement('Primordial black holes', 'Black hole inverter', 2); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		last = Game.ProductionAchievement('Naked singularity', 'Black hole inverter', 3); last.icon[2] = iconsURL; last.order = order + i / 100; i++;
		
		last = CCSE.NewAchievement('M87', 'Reach level <b>10</b> black hole inverters.', [1, 26, iconsURL]); 
			Game.Objects['Black hole inverter'].levelAchiev10 = last; last.order = order + i / 100; i++;
		
		
		
		Game.customStatsMenu.push(function(){
			CCSE.AppendStatsVersionNumber(BlackholeInverter.name, BlackholeInverter.version);
		});
		
		// Finish up
		BlackholeInverter.isLoaded = 1;
		if(BlackholeInverter.postloadHooks){
			for(var i = 0; i < BlackholeInverter.postloadHooks.length; ++i) BlackholeInverter.postloadHooks[i]();
		}
		
		if (Game.prefs.popups) Game.Popup(BlackholeInverter.name + ' loaded!');
		else Game.Notify(BlackholeInverter.name + ' loaded!', '', '', 1, 1);
	}
	
	
	if(CCSE.ConfirmGameVersion(BlackholeInverter.name, BlackholeInverter.version, BlackholeInverter.GameVersion)) BlackholeInverter.init();
}


if(!BlackholeInverter.isLoaded){
	if(CCSE && CCSE.isLoaded){
		BlackholeInverter.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(BlackholeInverter.launch);
	}
}