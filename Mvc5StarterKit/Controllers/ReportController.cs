﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Mvc5StarterKit.Controllers
{
    public class ReportController : Controller
    {
        // show report Viewer by id
        public ActionResult ReportViewer(string id)
        {
            var queryString = Request.QueryString;
            dynamic filters = new System.Dynamic.ExpandoObject();
            foreach (string key in queryString.AllKeys)
            {
                ((IDictionary<String, Object>)filters).Add(key, queryString[key]);
            }

            ViewBag.Id = id;
            ViewBag.overridingFilterQueries = JsonConvert.SerializeObject(filters);
            return View();
        }


        public ActionResult ReportCustomFilterViewer()
        {
            return View();
        }

        public ActionResult ReportParts()
        {
            return View();
        }

        public ActionResult AdvancedReportParts()
        {
            return View();
        }
    }
}