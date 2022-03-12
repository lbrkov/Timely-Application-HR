using System;
using Microsoft.EntityFrameworkCore;
using TimelyApplication.Models;

namespace TimelyApplication.DatabaseContext
{
    public class TimelyDbContext : DbContext
    {
        public TimelyDbContext(DbContextOptions<TimelyDbContext> options) : base(options)
        {
        }
        public DbSet<Time> Times { get; set; } = null!;
    }
}
