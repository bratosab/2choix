using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace _2choix.Migrations
{
    public partial class _2choixMigration1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Choices",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Choice1 = table.Column<string>(nullable: false),
                    Choice2 = table.Column<string>(nullable: false),
                    Chosen1 = table.Column<int>(nullable: false),
                    Chosen2 = table.Column<int>(nullable: false),
                    Ignored = table.Column<int>(nullable: false),
                    Likes = table.Column<int>(nullable: false),
                    Reports = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Choices", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Choices");
        }
    }
}
