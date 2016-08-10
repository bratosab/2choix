using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _2choix.Models;

namespace _2choix.Repository
{
    public interface ITransactionRepository
    {
        IEnumerable<Transaction> GetTransactions();
        void AddTransaction(Transaction transaction);
    }
}