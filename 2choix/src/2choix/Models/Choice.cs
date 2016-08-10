using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _2choix.Models
{
    public class Choice
    {
        public int Id { get; set; }
        public string Choice1 { get; set; }
        public string Choice2 { get; set; }
        public int Chosen1 { get; set; }
        public int Chosen2 { get; set; }
        public int Ignored { get; set; }
        public int Likes { get; set; }
        public int Reports { get; set; }
    }
}
