using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MvcTs.Startup))]
namespace MvcTs
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
