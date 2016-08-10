using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using _2choix.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace _2choix.Controllers
{
    [Route("api/[controller]")]
    public class ChoiceController : Controller
    {
        [HttpGet]
        public ChoiceDTO Get()
        {
            var choiceDTO = new ChoiceDTO();

            choiceDTO.Choice = new Choice { Choice1 = "Intermarché", Choice2 = "Casino", Id = 1, Likes = 3, Chosen1 = 3, Chosen2 = 1 };

            return choiceDTO;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public void Post([FromBody]ChooseDTO chooseDTO)
        {
            //Do something with result
        }
    }
}
