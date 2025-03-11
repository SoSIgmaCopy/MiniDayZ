export function install() {
    window.hackMenu = {
        resources: true,
        godMode: true,
        speedBoost: false,
        spawnItem: function(item, amount) {
            if (!game.player.inventory[item]) {
                game.player.inventory[item] = 0;
            }
            game.player.inventory[item] += amount;
        }
    };

    function applyHacks() {
        if (hackMenu.resources) {
            game.player.resources.wood = 9999;
            game.player.resources.food = 9999;
            game.player.resources.ammo = 9999;
        }
        if (hackMenu.godMode) {
            game.player.health = Infinity;
        }
        if (hackMenu.speedBoost) {
            game.player.speed = 2.5; // Increase movement speed
        }
    }

    setInterval(applyHacks, 1000);

    console.log("Hack Menu Loaded! Use window.hackMenu to toggle features.");
}
