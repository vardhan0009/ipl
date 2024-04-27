using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using ipl.Models; 

public class HomeController : Controller
{
    public IActionResult Index()
    {
        var matches = new List<Match> 
        {
            new Match { MatchId = 35, TeamOne = "Team1", TeamTwo = "Team4", MatchTime = DateTime.Now },
            new Match { MatchId = 36, TeamOne = "Team8", TeamTwo = "Team2", MatchTime = DateTime.Today.AddDays(1) },
            new Match { MatchId = 37, TeamOne = "Team3", TeamTwo = "Team5", MatchTime = DateTime.Today.AddDays(2) },
            new Match { MatchId = 38, TeamOne = "Team4", TeamTwo = "Team9", MatchTime = DateTime.Today.AddDays(2) },
            
        };

        return View(matches);
    }
    public IActionResult PointsTable()
    {
        
        var pointsTableViewModel = new PointsTableViewModel
        {
            Points = new List<TeamPoints>
            {
                new TeamPoints { Position = 1, TeamName = "RR", Played = 7, Won = 6, Lost = 1, NoResult = 0, NetRunRate = 1.245, Points = 12, RecentForm = "W W L W W" },
                new TeamPoints { Position = 2, TeamName = "KKR", Played = 8, Won = 6, Lost = 2, NoResult = 0, NetRunRate = 0.247, Points = 10, RecentForm = "W L W W L" },
                new TeamPoints { Position = 3, TeamName = "SRH", Played = 7, Won = 6, Lost = 1, NoResult = 0, NetRunRate = 0.677, Points = 10, RecentForm = "L W L W W" },
                new TeamPoints { Position = 4, TeamName = "CSK", Played = 7, Won = 6, Lost = 1, NoResult = 0, NetRunRate = 0.813, Points = 10, RecentForm = "W L L W W" },
                new TeamPoints { Position = 5, TeamName = "LSG", Played = 7, Won = 6, Lost = 1, NoResult = 0, NetRunRate = 0.092, Points = 10, RecentForm = "W W L W L" },
                new TeamPoints { Position = 6, TeamName = "MI", Played = 7, Won = 4, Lost = 3, NoResult = 0, NetRunRate = 0.712, Points = 8, RecentForm = "L W L L W" },
                new TeamPoints { Position = 7, TeamName = "GT", Played = 7, Won = 4, Lost = 3, NoResult = 0, NetRunRate = 0.587, Points = 8, RecentForm = "W L L W L" },
                new TeamPoints { Position = 8, TeamName = "DC", Played = 8, Won = 4, Lost = 4, NoResult = 0, NetRunRate = -0.992, Points = 8, RecentForm = "W L L L W" },
                new TeamPoints { Position = 9, TeamName = "PK", Played = 7, Won = 2, Lost = 5, NoResult = 0, NetRunRate = -0.871, Points = 4, RecentForm = "L W L L L" },
                new TeamPoints { Position = 10, TeamName = "RCB", Played = 7, Won = 1, Lost = 6, NoResult = 0, NetRunRate = -1.685, Points = 2, RecentForm = "L L L L W" },

            }
        };

        return View(pointsTableViewModel); 
    }
    public ActionResult About()
    {
        return View();
    }

}
