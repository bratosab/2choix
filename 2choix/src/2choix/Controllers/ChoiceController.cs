using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using _2choix.Models;
using _2choix.Repository;
using _2choix.Models.DTO;
using _2choix.Services;

namespace _2choix.Controllers
{
    /// <summary>
    /// Api to serve choices : fetch, choose, like and report
    /// </summary>
    [Route("api/[controller]")]
    public class ChoiceController : Controller
    {
        public IChoiceRepository Repository;

        public ChoiceController(IChoiceRepository repository)
        {
            Repository = repository;
        }

        //GET : fetch a choice to send to client
        [HttpGet]
        public Choice Get()
        {
            return Repository.GetChoice();
        }

        //POST : Add a new choice
        [HttpPost]
        [ValidateAntiForgeryToken]
        public void Post([FromBody]NewChoiceDTO newChoice)
        {
            if (ReCaptcha.Validate(newChoice.Recaptcha) 
                && newChoice.IsValid)
            {
                Repository.AddChoice(newChoice.Choice);
            }
        }

        //PATCH : Choose
        [HttpPatch(Name = "Choose")]
        [ValidateAntiForgeryToken]
        public void Patch([FromBody]Choice choice)
        {
            Repository.ChooseChoice(choice.Id, (choice.Chosen1 == 1 ? 1 : choice.Chosen2 == 1 ? 2 : 0));
        }

        //PUT : Like the choice
        [HttpPut("{id}", Name = "LikeChoice")]
        [ValidateAntiForgeryToken]
        public void Put(int id)
        {
            Repository.LikeChoice(id);
        }

        //DELETE : Report the choice
        [HttpDelete("{id}", Name = "ReportChoice")]
        [ValidateAntiForgeryToken]
        public void Delete(int id)
        {
            Repository.ReportChoice(id);
        }
    }
}
