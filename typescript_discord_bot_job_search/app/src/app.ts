import { debugPrint } from "@antonpichka/vitruvius";
import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";

dotenv.config({ path: "../.env" });

const client: Client = new Client({ intents: [GatewayIntentBits.Guilds] });
const discordBotToken: string = process.env.DISCORD_BOT_TOKEN ?? "";

client.once("ready", async () => {
  if (client.user) {
    debugPrint(`Logged in as ${client.user.tag}!`);
    return
  }
  debugPrint("Logged in, but client.user is null.");
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(discordBotToken);