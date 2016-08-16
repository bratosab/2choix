using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _2choix.Models;

namespace _2choix.Repository
{
    public interface IChoiceRepository
    {
        IEnumerable<Choice> GetChoices();
        Choice GetChoice();
        void AddChoice(Choice choice);
        void ChooseChoice(int Id, int ChoiceNo);
        void LikeChoice(int Id);
        void ReportChoice(int Id);
    }
}