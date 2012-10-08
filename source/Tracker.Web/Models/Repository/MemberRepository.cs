using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace Tracker.Web.Models.Repository
{
	public class MemberRepository
	{
		public IEnumerable<Member> Get()
		{
			return new List<Member>
			       	{
			       		new Member{FirstName = "Justin", LastName = "Kohnen", CreatedOn = DateTime.Now, Id = Guid.NewGuid(), Level = 2, RenewOn = DateTime.Now.AddYears(1)},
			       		new Member{FirstName = "John", LastName = "Smith", CreatedOn = DateTime.Now, Id = Guid.NewGuid(), Level = 1, RenewOn = DateTime.Now.AddYears(1)},
			       		new Member{FirstName = "Susan", LastName = "Johnsone", CreatedOn = DateTime.Now, Id = Guid.NewGuid(), Level = 3, RenewOn = DateTime.Now.AddYears(1)},
			       		new Member{FirstName = "Santa", LastName = "Clause", CreatedOn = DateTime.Now, Id = Guid.NewGuid(), Level = 2, RenewOn = DateTime.Now.AddYears(1)},
			       	};
		}
	}
}