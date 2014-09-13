// Class1.cs
//

using System;
using System.Collections.Generic;
using System.Html;
using jQueryApi;
using BL.UI;
using System.Runtime.CompilerServices;
using BL.BS;

namespace UL
{
    public enum AppViewMode
    {
        Sections=0,
        Unicorns=1,
        About=2
    }
    public class App : Control
    {
        [ScriptName("e_sections")]
        private Element sections = null;
        
        [ScriptName("e_about")]
        private Element about = null;

        [ScriptName("e_unicorns")]
        private Element unicorns=null;

        [ScriptName("c_navbar")]
        private Navbar navbar = null;
        
        private AppViewMode viewMode;

        public AppViewMode ViewMode
        {
            get
            {
                return this.viewMode;
            }

            set
            {
                this.viewMode = value;

                this.Update();
            }
        }
        
        protected override void  OnInit()
        {
 	        base.OnInit();

            Window.AddEventListener("hashchange", this.HandleHashChange);

            this.ProcessHash();
        }
        
        private void HandleHashChange(ElementEvent e)
        {
            this.ProcessHash();
        }

        private void ProcessHash()
        {
            String hashCanon = Window.Location.Hash.ToLowerCase();

            hashCanon = hashCanon.Substring(1, hashCanon.Length);

            switch (hashCanon)
            {
                case "/about":
                    this.ViewMode = AppViewMode.About;
                    break;
                case "/unicorns":
                    this.ViewMode = AppViewMode.Unicorns;
                    break;
                case "/sections":
                    this.ViewMode = AppViewMode.Sections;
                    break;  
            }
        }

        protected override void  OnUpdate()
        {
            this.navbar.Select((int)this.viewMode);

            if (this.sections != null)
            {
                if (this.viewMode == AppViewMode.Sections)
                {
                    this.sections.Style.Display = "block";

                }
                else
                {
                    this.sections.Style.Display = "none";
                }

            }

            if (this.unicorns != null)
            {
                if (this.viewMode == AppViewMode.Unicorns)
                {
                    this.unicorns.Style.Display = "block";
                }
                else
                {
                    this.unicorns.Style.Display = "none";
                }
            }
            
            if (this.about != null)
            {
                if (this.viewMode == AppViewMode.About)
                {
                    this.about.Style.Display = "block";
                }
                else
                {
                    this.about.Style.Display = "none";
                }
            }

        }
    }
}
