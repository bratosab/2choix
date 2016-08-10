using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _2choix.Models
{
    public class Transaction
    {
        public decimal TransactionAmount { get; set; }
        public string TransactionType { get; set; }
        public Account Account { get; set; }
    }
}
