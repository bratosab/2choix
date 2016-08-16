using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using _2choix.Models;

namespace _2choix.Migrations
{
    [DbContext(typeof(ChoiceContext))]
    partial class ChoiceContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rtm-21431")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("_2choix.Models.Choice", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Choice1");

                    b.Property<string>("Choice2");

                    b.Property<int>("Chosen1");

                    b.Property<int>("Chosen2");

                    b.Property<int>("Ignored");

                    b.Property<int>("Likes");

                    b.Property<int>("Reports");

                    b.HasKey("Id");

                    b.ToTable("Choices");
                });
        }
    }
}
