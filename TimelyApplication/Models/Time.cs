using System.ComponentModel.DataAnnotations;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimelyApplication.Models
{
    public class Time
    {

        [Key]
        public int Id { get; set; }
        public DateTime StartTime { get; set; } /*= DateTime.UtcNow; */
        public DateTime StopTime { get; set; } /*= DateTime.UtcNow; */
        public string ProjectName { get; set; } = null!;
        public int Duration { get; set; }

        //public TimeSpan CalcDuration() => Duration = StopTime - StartTime;

    }
}
