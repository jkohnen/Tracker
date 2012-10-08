using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Tracker.Web.Models
{
	public class Member
	{
		public Guid Id { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public DateTime CreatedOn { get; set; }
		public DateTime RenewOn { get; set; }
		public int Level { get; set; }
	}
}