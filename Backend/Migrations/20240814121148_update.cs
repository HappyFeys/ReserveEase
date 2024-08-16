using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Booking.Migrations
{
    /// <inheritdoc />
    public partial class update : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Disponibilites",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    DateDebut = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    DateFin = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    LogementId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Disponibilites", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Logements",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    ImageName = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Ville = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Pays = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    PrixParAdulte = table.Column<decimal>(type: "decimal(65,30)", nullable: false),
                    PrixParEnfant = table.Column<decimal>(type: "decimal(65,30)", nullable: false),
                    Rating = table.Column<double>(type: "double", nullable: false),
                    Description = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    DescriptionLongue = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Chambres = table.Column<int>(type: "int", nullable: false),
                    Options = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Voyageurs = table.Column<int>(type: "int", nullable: false),
                    ProprietaireId = table.Column<int>(type: "int", nullable: false),
                    Galerie = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    AdresseComplete = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Logements", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Email = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Firstname = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Lastname = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Phonenumber = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Birthday = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    Password = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Picture = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Digicode = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Role = table.Column<int>(type: "int", nullable: false),
                    Filterhistory = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    LogementId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Logements_LogementId",
                        column: x => x.LogementId,
                        principalTable: "Logements",
                        principalColumn: "Id");
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Birthday", "Digicode", "Email", "Filterhistory", "Firstname", "Lastname", "LogementId", "Password", "Phonenumber", "Picture", "Role" },
                values: new object[] { 1, new DateTime(1999, 6, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), "0000", "admin@example.com", "[]", "adem", "Een", null, "$2a$10$BaXgWcAEv6NTNeuWZyPz2.IApa3YHX9zgh3OyD50dbN/DxMBQpQce", "+32492201522", "", 1 });

            migrationBuilder.InsertData(
                table: "Logements",
                columns: new[] { "Id", "AdresseComplete", "Chambres", "Description", "DescriptionLongue", "Galerie", "ImageName", "Options", "Pays", "PrixParAdulte", "PrixParEnfant", "ProprietaireId", "Rating", "Ville", "Voyageurs" },
                values: new object[,]
                {
                    { 1, "123 Rue de Paris, 75001 Paris, France", 2, "Charmant loft au cœur de Paris, à proximité de la Tour Eiffel.", "Magnifique loft situé au cœur de Paris, à deux pas de la Tour Eiffel. Ce lieu unique allie charme parisien et design contemporain avec ses grandes baies vitrées qui inondent l'espace de lumière, ses poutres apparentes, et son parquet en bois massif. La pièce à vivre spacieuse et ouverte inclut une cuisine américaine moderne, parfaite pour recevoir ou savourer des repas tranquilles. La chambre en mezzanine offre une vue imprenable sur les toits de Paris, tandis que la salle de bain élégante invite à la détente. À proximité immédiate des cafés, restaurants, boutiques et galeries, ce loft est une véritable perle rare pour vivre pleinement l’expérience parisienne.", "[\"ny.jpg\",\"tokyo.png\",\"paris.jpg\"]", "paris.jpg", "[\"Ville\",\"Mus\\u00E9es\",\"Restaurants\",\"Stations de m\\u00E9tro\",\"Appartement\",\"Wi-Fi\",\"Climatisation\",\"Cuisine \\u00E9quip\\u00E9e\",\"Balcon/Terrasse\",\"Acc\\u00E8s aux personnes handicap\\u00E9es\",\"S\\u00E9jour longue dur\\u00E9e\",\"S\\u00E9jour romantique\",\"Petit-d\\u00E9jeuner inclus\",\"Service de m\\u00E9nage\",\"Luxe\",\"Moderne\",\"Politique d\\u0027annulation\"]", "France", 120m, 60m, 1, 4.7000000000000002, "Paris", 4 },
                    { 2, "456 Rue de Londres, SW1A 1AA Londres, Royaume-Uni", 3, "Appartement moderne à Londres, proche de la Tamise.", "Appartement moderne situé à Londres, à proximité de la Tamise. Ce lieu unique allie charme londonien et design contemporain avec ses grandes baies vitrées qui inondent l'espace de lumière, ses poutres apparentes, et son parquet en bois massif. La pièce à vivre spacieuse et ouverte inclut une cuisine américaine moderne, parfaite pour recevoir ou savourer des repas tranquilles. La chambre en mezzanine offre une vue imprenable sur les toits de Londres, tandis que la salle de bain élégante invite à la détente. À proximité immédiate des cafés, restaurants, boutiques et galeries, cet appartement est une véritable perle rare pour vivre pleinement l’expérience londonienne.", "[\"london1.jpg\",\"london2.png\",\"london3.jpg\"]", "london.jpg", "[\"Ville\",\"Mus\\u00E9es\",\"Restaurants\",\"Stations de m\\u00E9tro\",\"Appartement\",\"Wi-Fi\",\"Climatisation\",\"Cuisine \\u00E9quip\\u00E9e\",\"Balcon/Terrasse\",\"Acc\\u00E8s aux personnes handicap\\u00E9es\",\"S\\u00E9jour longue dur\\u00E9e\",\"S\\u00E9jour romantique\",\"Petit-d\\u00E9jeuner inclus\",\"Service de m\\u00E9nage\",\"Luxe\",\"Moderne\",\"Politique d\\u0027annulation\"]", "Royaume-Uni", 150m, 75m, 1, 4.7999999999999998, "Londres", 5 },
                    { 3, "789 Rue de New York, NY 10001 New York, États-Unis", 4, "Penthouse luxueux à New York, vue sur Central Park.", "Penthouse luxueux situé à New York, avec vue sur Central Park. Ce lieu unique allie charme new-yorkais et design contemporain avec ses grandes baies vitrées qui inondent l'espace de lumière, ses poutres apparentes, et son parquet en bois massif. La pièce à vivre spacieuse et ouverte inclut une cuisine américaine moderne, parfaite pour recevoir ou savourer des repas tranquilles. La chambre en mezzanine offre une vue imprenable sur les toits de New York, tandis que la salle de bain élégante invite à la détente. À proximité immédiate des cafés, restaurants, boutiques et galeries, ce penthouse est une véritable perle rare pour vivre pleinement l’expérience new-yorkaise.", "[\"ny1.jpg\",\"ny2.png\",\"ny3.jpg\"]", "newyork.jpg", "[\"Ville\",\"Mus\\u00E9es\",\"Restaurants\",\"Stations de m\\u00E9tro\",\"Appartement\",\"Wi-Fi\",\"Climatisation\",\"Cuisine \\u00E9quip\\u00E9e\",\"Balcon/Terrasse\",\"Acc\\u00E8s aux personnes handicap\\u00E9es\",\"S\\u00E9jour longue dur\\u00E9e\",\"S\\u00E9jour romantique\",\"Petit-d\\u00E9jeuner inclus\",\"Service de m\\u00E9nage\",\"Luxe\",\"Moderne\",\"Politique d\\u0027annulation\"]", "États-Unis", 200m, 100m, 1, 4.9000000000000004, "New York", 6 },
                    { 4, "123 Rue de Tokyo, 150-0001 Tokyo, Japon", 2, "Appartement traditionnel à Tokyo, proche du quartier Shibuya.", "Appartement traditionnel situé à Tokyo, à proximité du quartier Shibuya. Ce lieu unique allie charme tokyoïte et design contemporain avec ses grandes baies vitrées qui inondent l'espace de lumière, ses poutres apparentes, et son parquet en bois massif. La pièce à vivre spacieuse et ouverte inclut une cuisine américaine moderne, parfaite pour recevoir ou savourer des repas tranquilles. La chambre en mezzanine offre une vue imprenable sur les toits de Tokyo, tandis que la salle de bain élégante invite à la détente. À proximité immédiate des cafés, restaurants, boutiques et galeries, cet appartement est une véritable perle rare pour vivre pleinement l’expérience tokyoïte.", "[\"tokyo1.jpg\",\"tokyo2.png\",\"tokyo3.jpg\"]", "tokyo.jpg", "[\"Ville\",\"Mus\\u00E9es\",\"Restaurants\",\"Stations de m\\u00E9tro\",\"Appartement\",\"Wi-Fi\",\"Climatisation\",\"Cuisine \\u00E9quip\\u00E9e\",\"Balcon/Terrasse\",\"Acc\\u00E8s aux personnes handicap\\u00E9es\",\"S\\u00E9jour longue dur\\u00E9e\",\"S\\u00E9jour romantique\",\"Petit-d\\u00E9jeuner inclus\",\"Service de m\\u00E9nage\",\"Luxe\",\"Moderne\",\"Politique d\\u0027annulation\"]", "Japon", 180m, 90m, 1, 4.5999999999999996, "Tokyo", 4 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Disponibilites_LogementId",
                table: "Disponibilites",
                column: "LogementId");

            migrationBuilder.CreateIndex(
                name: "IX_Logements_ProprietaireId",
                table: "Logements",
                column: "ProprietaireId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_LogementId",
                table: "Users",
                column: "LogementId");

            migrationBuilder.AddForeignKey(
                name: "FK_Disponibilites_Logements_LogementId",
                table: "Disponibilites",
                column: "LogementId",
                principalTable: "Logements",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Logements_Users_ProprietaireId",
                table: "Logements",
                column: "ProprietaireId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Logements_LogementId",
                table: "Users");

            migrationBuilder.DropTable(
                name: "Disponibilites");

            migrationBuilder.DropTable(
                name: "Logements");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
