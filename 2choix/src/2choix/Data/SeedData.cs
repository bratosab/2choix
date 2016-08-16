using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;

namespace _2choix.Models
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new ChoiceContext(
                serviceProvider.GetRequiredService<DbContextOptions<ChoiceContext>>()))
            {
                // Look for any choices.
                if (context.Choices.Any())
                {
                    return;   // DB has been seeded
                }

                //context.Choices.AddRange (
                var choices = new List<Choice>() {
                        new Choice { Choice1 = "Ici", Choice2 = "Là" },
                        new Choice { Choice1 = "Intermarche", Choice2 = "SuperU" },
                        new Choice { Choice1 = "Keloggs", Choice2 = "Petit Beurre" },
                        new Choice { Choice1 = "NRJ", Choice2 = "Cherry FM" },
                        new Choice { Choice1 = "Guitare", Choice2 = "Piano" },
                        new Choice { Choice1 = "Dell", Choice2 = "HP" },
                        new Choice { Choice1 = "KFC", Choice2 = "McDo" },
                        new Choice { Choice1 = "Kiabi", Choice2 = "Gemo" },
                        new Choice { Choice1 = "Liverpool", Choice2 = "Arsenal" },
                        new Choice { Choice1 = "Intersport", Choice2 = "Go Sport" },
                        new Choice { Choice1 = "Coca", Choice2 = "Pepsi" },
                        new Choice { Choice1 = "Evian", Choice2 = "Cristaline" },
                        new Choice { Choice1 = "iPhone", Choice2 = "Blackberry" },
                        new Choice { Choice1 = "Toi", Choice2 = "Moi" },
                        new Choice { Choice1 = "L'argent", Choice2 = "Le bonheur" },
                        new Choice { Choice1 = "Google", Choice2 = "Bing" },
                        new Choice { Choice1 = "Microsoft", Choice2 = "Apple" },
                        new Choice { Choice1 = "LG", Choice2 = "Sony" },
                        new Choice { Choice1 = "Vodka", Choice2 = "Jus de pomme" },
                        new Choice { Choice1 = "Bethoven", Choice2 = "Mozart" },
                        new Choice { Choice1 = "Smerra", Choice2 = "LMDE" },
                        new Choice { Choice1 = "Renault", Choice2 = "Peugeot" },
                        new Choice { Choice1 = "Snickers", Choice2 = "Mars" },
                        new Choice { Choice1 = "Austin Powers", Choice2 = "James Bond" },
                        new Choice { Choice1 = "Teletubbies", Choice2 = "Dora" },
                        new Choice { Choice1 = "Harry Potter", Choice2 = "Melusine" },
                        new Choice { Choice1 = "Jack the Ripper", Choice2 = "Hannibal Lekter" },
                        new Choice { Choice1 = "Terminator", Choice2 = "Robocop" },
                        new Choice { Choice1 = "Ben Laden", Choice2 = "Saddam Hussein" },
                        new Choice { Choice1 = "Youtube", Choice2 = "Dailymotion" },
                        new Choice { Choice1 = "Schwarzkopf", Choice2 = "Loreal" },
                        new Choice { Choice1 = "Nike", Choice2 = "Adidas" },
                        new Choice { Choice1 = "Ski", Choice2 = "Snowboard" },
                        new Choice { Choice1 = "Triangle", Choice2 = "Carré" },
                        new Choice { Choice1 = "Ikea", Choice2 = "Castorama" },
                        new Choice { Choice1 = "Nokia", Choice2 = "iPhone" },
                        new Choice { Choice1 = "C.I.A.", Choice2 = "Mosaad" },
                        new Choice { Choice1 = "Stapler", Choice2 = "Scotch" },
                        new Choice { Choice1 = "Whisky", Choice2 = "Martini" },
                        new Choice { Choice1 = "Vie", Choice2 = "Mort" },
                        new Choice { Choice1 = "Granite", Choice2 = "Obsidienne" },
                        new Choice { Choice1 = "Suisse", Choice2 = "Belgique" },
                        new Choice { Choice1 = "Chien", Choice2 = "Chat" },
                        new Choice { Choice1 = "Souris", Choice2 = "Manette" },
                        new Choice { Choice1 = "PS3", Choice2 = "X-Box 360" },
                        new Choice { Choice1 = "Newton", Choice2 = "Galilée" },
                        new Choice { Choice1 = "De Gaulle", Choice2 = "Petain" },
                        new Choice { Choice1 = "Yin", Choice2 = "Yang" },
                        new Choice { Choice1 = "Terre", Choice2 = "Lune" },
                        new Choice { Choice1 = "Sprite", Choice2 = "Fanta" },
                        new Choice { Choice1 = "Lego", Choice2 = "Mega Blocks" },
                        new Choice { Choice1 = "Tigre", Choice2 = "Lion" },
                        new Choice { Choice1 = "Nord", Choice2 = "Sud" },
                        new Choice { Choice1 = "Tente", Choice2 = "Hôtel" },
                        new Choice { Choice1 = "Voiture", Choice2 = "Moto" },
                        new Choice { Choice1 = "Justin Bieber", Choice2 = "Johny Halliday" },
                        new Choice { Choice1 = "Sonic", Choice2 = "Mario" },
                        new Choice { Choice1 = "Feuille", Choice2 = "Papier" },
                        new Choice { Choice1 = "Jurassic Park", Choice2 = "Evolution" },
                        new Choice { Choice1 = "Resident Evil", Choice2 = "Doom" },
                        new Choice { Choice1 = "Nutella", Choice2 = "Kinder" },
                        new Choice { Choice1 = "Corée du Sud", Choice2 = "Corée du Nord" },
                        new Choice { Choice1 = "Ghandi", Choice2 = "Mandela" },
                        new Choice { Choice1 = "Bic", Choice2 = "Parker" },
                        new Choice { Choice1 = "CD", Choice2 = "DVD" },
                        new Choice { Choice1 = "Microondes", Choice2 = "Four" },
                        new Choice { Choice1 = "Asphalte", Choice2 = "Pavé" },
                        new Choice { Choice1 = "Diamant", Choice2 = "Or" }
                };

                var r = new Random();
                foreach (var choice in choices)
                {
                    choice.Chosen1 = r.Next(1, 6);
                    choice.Chosen2 = r.Next(1, 6);
                }

                context.Choices.AddRange(choices);
                context.SaveChanges();
            }
        }
    }
}
