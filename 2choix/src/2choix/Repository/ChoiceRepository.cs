using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _2choix.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace _2choix.Repository
{
    public class ChoiceRepository : IChoiceRepository
    {
        private readonly ChoiceContext _context;
        private readonly ILogger<ChoiceRepository> _logger;

        public ChoiceRepository(ChoiceContext context, ILogger<ChoiceRepository> logger)
        {
            _context = context;
            _logger = logger;
        }
        
        public IEnumerable<Choice> GetChoices()
        {
            return _context.Choices;
        }

        public Choice GetChoice()
        {
            try
            {
                var ids = _context.Choices.Select(c => c.Id).ToArray();
                var r = new Random().Next(0, ids.Count());
                var id = ids.ElementAt(r);
            
                return  _context.Choices
                                .SingleOrDefault(c => c.Id == id);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
            }

            return null;
        }

        public void AddChoice(Choice choice)
        {
            try
            {
                _context.Choices.Add(choice);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
            }
        }

        public void ChooseChoice(int Id, int ChoiceNo)
        {
            try
            {
                var choice = _context.Choices.Where(c => c.Id == Id)
                .SingleOrDefault();

                if (choice == null)
                    return;

                switch (ChoiceNo)
                {
                    case 0:
                        choice.Ignored += 1;
                        break;
                    case 1:
                        choice.Chosen1 += 1;
                        break;
                    case 2:
                        choice.Chosen2 += 1;
                        break;
                }

                _context.Choices.Update(choice);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
            }
        }

        public void LikeChoice(int Id)
        {
            try
            {
                var choice = _context.Choices.Where(c => c.Id == Id)
                    .SingleOrDefault();

                choice.Likes += 1;

                _context.Choices.Update(choice);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
            }
        }

        public void ReportChoice(int Id)
        {
            try
            {
                var choice = _context.Choices.Where(c => c.Id == Id)
                    .SingleOrDefault();

                choice.Reports += 1;

                _context.Choices.Update(choice);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
            }
        }
    }
}
