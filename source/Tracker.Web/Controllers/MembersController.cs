using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Tracker.Web.Models;
using Tracker.Web.Models.Repository;

namespace Tracker.Web.Controllers
{
	public class MembersController : ApiController
	{
		// GET api/values
		public IEnumerable<Member> Get()
		{
			return new MemberRepository().Get();
		}

		// GET api/values/5
		public string Get(int id)
		{
			return "value";
		}

		// POST api/values
		public void Post([FromBody]string value)
		{
		}

		// PUT api/values/5
		public void Put(int id, [FromBody]string value)
		{
		}

		// DELETE api/values/5
		public void Delete(int id)
		{
		}
	}
}