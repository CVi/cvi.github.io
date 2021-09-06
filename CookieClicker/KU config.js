{
  "hotkeys": [
    {
      "keyCode": 79,
      "nickname": "Options Menu",
      "ctrl": false,
      "shift": false,
      "alt": false,
      "script": "Game.ShowMenu('prefs');"
    },
    {
      "keyCode": 83,
      "nickname": "Stats Menu",
      "ctrl": false,
      "shift": false,
      "alt": false,
      "script": "Game.ShowMenu('stats');"
    },
    {
      "keyCode": 73,
      "nickname": "Info Menu",
      "ctrl": false,
      "shift": false,
      "alt": false,
      "script": "Game.ShowMenu('log');"
    },
    {
      "keyCode": 49,
      "nickname": "Quickload",
      "ctrl": false,
      "shift": false,
      "alt": false,
      "script": "Game.LoadSave();"
    },
    {
      "keyCode": 50,
      "nickname": "Godzamok",
      "ctrl": false,
      "shift": false,
      "alt": false,
      "script": "var amt = Game.Objects[\"Mine\"].amount;\nGame.Objects[\"Mine\"].sell(amt); \nGame.Objects[\"Mine\"].buy(amt);"
    },
    {
      "keyCode": 51,
      "nickname": "Dump Wizards",
      "ctrl": false,
      "shift": false,
      "alt": false,
      "script": "var temp = Game.Objects[\"Wizard tower\"].minigame.magic;\nvar lvl=Math.max(Game.Objects[\"Wizard tower\"].level,1);\nfor(var i = 1; i < Game.Objects[\"Wizard tower\"].amount; i++){\n\tif(temp <= Math.floor(4+Math.pow(i,0.6)+Math.log((i+(lvl-1)*10)/15+1)*15)) \n\t\tGame.Objects[\"Wizard tower\"].sell(Game.Objects[\"Wizard tower\"].amount - i);\n}"
    },
    {
      "keyCode": 52,
      "nickname": "Gain sugar lumps",
      "ctrl": false,
      "shift": false,
      "alt": false,
      "script": "Game.gainLumps(1);"
    },
    {
      "keyCode": 53,
      "nickname": "Export Save",
      "ctrl": false,
      "shift": false,
      "alt": false,
      "script": "Game.ExportSave();\ndocument.execCommand('copy');\nGame.ClosePrompt();\nGame.Notify('Saved to clipboard', '', '', 1, 1);"
    },
    {
      "keyCode": 54,
      "nickname": "Garden next tick",
      "ctrl": false,
      "shift": false,
      "alt": false,
      "script": "Game.Objects[\"Farm\"].minigame.nextStep = Date.now();\nGame.Objects[\"Farm\"].minigame.nextSoil = Date.now();"
    },
    {
      "keyCode": 55,
      "nickname": "Market next tick",
      "ctrl": false,
      "shift": false,
      "alt": false,
      "script": "Game.Objects['Bank'].minigame.tickT = 0;"
    },
    {
      "keyCode": 97,
      "nickname": "Autoclicker",
      "ctrl": false,
      "shift": false,
      "alt": false,
      "period": "10",
      "script": "Game.ClickCookie();"
    },
    {
      "keyCode": 98,
      "nickname": "Golden Autoclicker",
      "ctrl": false,
      "shift": false,
      "alt": false,
      "period": "500",
      "script": "Game.shimmers.forEach(function(shimmer) { shimmer.pop() })"
    },
    {
      "keyCode": 99,
      "nickname": "Wrinkler Harvest",
      "ctrl": false,
      "shift": false,
      "alt": false,
      "period": "60000",
      "script": "Game.CollectWrinklers();"
    },
    {
      "keyCode": 100,
      "nickname": "Autospell",
      "ctrl": false,
      "shift": false,
      "alt": false,
      "script": "var M = Game.Objects[\"Wizard tower\"].minigame;\nif(M && M.magic == M.magicM) M.castSpell(M.spells[\"haggler's charm\"]);",
      "period": "1000"
    },
    {
      "keyCode": 101,
      "nickname": "Cookie Monster Autobuy",
      "ctrl": false,
      "shift": false,
      "alt": false,
      "script": "if(typeof CookieMonsterData == 'undefined'){}\nelse{\n\tvar waitForUpgrade = false;\n\tfor (var i in CookieMonsterData['Upgrades']) {\n\t\tvar obj = Game.Upgrades[i];\n\t\tif((CookieMonsterData['Upgrades'][i].colour == 'Green' || CookieMonsterData['Upgrades'][i].colour == 'Blue') && obj.pool != \"toggle\" && !obj.isVaulted()){\n\t\t\tif(obj.getPrice() < Game.cookies) {\n\t\t\t\tobj.buy();\n\t\t\t\tGame.Notify('Bought ' + obj.name, '', '', 1, 1);\n\t\t\t\twaitForUpgrade = false;\n\t\t\t}else{\n\t\t\t\twaitForUpgrade = true;\n\t\t\t}\n\t\t}\n\t}\n\tif(!waitForUpgrade){\n\t\tfor (var i in CookieMonsterData['Objects1']) {\n\t\t\tvar obj = Game.Objects[i];\n\t\t\tif(CookieMonsterData['Objects1'][i].colour == 'Green' && obj.price < Game.cookies){\n\t\t\t\tobj.buy(1);\n\t\t\t\tGame.Notify('Bought a ' + obj.name, '', '', 1, 1);\n\t\t\t}\n\t\t}\n\t}\n}",
      "period": "100"
    },
    {
      "keyCode": 102,
      "nickname": "Ticker Autoclicker",
      "ctrl": false,
      "shift": false,
      "alt": false,
      "script": "if(Game.TickerEffect != 0) Game.tickerL.click();",
      "period": "5000"
    }
  ],
  "patches": {
    "gardenOrderofOperations": 1,
    "gamblersFeverDreamFix": 1,
    "slotGodFix": 1
  },
  "onLoadFunctions": [
    {
      "nickname": "Use normal cards",
      "script": "setTimeout(function(){\n\tvar M = Game.Objects[\"Chancemaker\"].minigame;\n\tM.cardsImage = M.sourceFolder + 'img/cards.png';\n}, 1000);"
    },
    {
      "nickname": "Hide empty upgrade store",
      "script": "Game.customRebuildUpgrades.push(function(){\n\tvar cnt = 0;\n\tfor (var i in Game.UpgradesInStore){\n\t\tvar me = Game.UpgradesInStore[i];\n\t\tif(me.pool != 'toggle' && me.pool != 'tech' && !(me.isVaulted() && Game.Has('Inspired checklist'))) cnt++;\n\t}\n\tif(cnt) l('upgrades').style.display = 'block';\n\telse l('upgrades').style.display = 'none';\n});\n\nGame.Upgrades['Elder Pledge'].order += 36000;\nGame.Upgrades['Elder Covenant'].order += 36000;\nGame.Upgrades['Revoke Elder Covenant'].order += 36000;\n\nGame.upgradesToRebuild = 1;"
    }
  ]
}