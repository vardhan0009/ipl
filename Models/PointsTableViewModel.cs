// PointsTableViewModel.cs in the Models directory
using System.Collections.Generic;

namespace ipl.Models
{
    public class PointsTableViewModel
    {
        public List<TeamPoints> Points { get; set; }
        // Add other properties relevant to your points table if needed
    }

    public class TeamPoints
    {
        public int Position { get; set; }
        public string TeamName { get; set; }
        public int Played { get; set; }
        public int Won { get; set; }
        public int Lost { get; set; }
        public int NoResult { get; set; }
        public double NetRunRate { get; set; }
        public int Points { get; set; }
        public string RecentForm { get; set; }
    }
}
