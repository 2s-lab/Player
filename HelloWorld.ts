import * as Player from "play-sound";

class Startup {
    public static main(): number {
        let player: any = new Player({ player: "mplayer.exe" });

        player.play("test.mp3", (err: any) => {
            if (err) {
                throw err;
            }
        });

        return 0;
    }
}

Startup.main();