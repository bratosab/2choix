using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using _2choix.Repository;
using _2choix.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace _2choix.Controllers
{
    [Route("api/[controller]")]
    public class TransactionController : Controller
    {
        public ITransactionRepository Repository;

        public TransactionController(ITransactionRepository repository)
        {
            Repository = repository;
        }
        [HttpGet]
        public IEnumerable<Transaction> Get()
        {
            return Repository.GetTransactions();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public void Post([FromBody]Transaction transaction)
        {
            Repository.AddTransaction(transaction);
        }
    }
}
