using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _2choix.Models
{
    public class ChoiceContext : DbContext
    {
        public ChoiceContext(DbContextOptions<ChoiceContext> options)
            : base(options)
        { }

        public DbSet<Choice> Choices { get; set; }
    }
}
