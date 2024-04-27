using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ipl.Models;

namespace ipl.Data
{
    public class iplContext : DbContext
    {
        public iplContext (DbContextOptions<iplContext> options)
            : base(options)
        {
        }

        public DbSet<ipl.Models.Class> Class { get; set; } = default!;
    }
}
