using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _2choix.Models.DTO
{
    public class NewChoiceDTO
    {
        public string Choice1 { get; set; }
        public string Choice2 { get; set; }
        public string Recaptcha { get; set; }

        public bool IsValid
        {
            get
            {
                return !String.IsNullOrWhiteSpace(Choice1)
                && !String.IsNullOrWhiteSpace(Choice2)
                && Choice1.Length <= 20
                && Choice2.Length <= 20;
            }
        }

        public Choice Choice
        {
            get
            {
                return new Choice
                {
                    Choice1 = Choice1,
                    Choice2 = Choice2
                };
            }
        }
    }
}
