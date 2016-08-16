using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace _2choix.Services
{
    public class ReCaptcha
    {
        public static bool Validate(string EncodedResponse)
        {
            string PrivateKey = "6Lc-QCcTAAAAAIGIe_7E_B8qXD9544NJyan6fFHL";
            string BaseAddress = "https://www.google.com";
            string RequestAddress = "/recaptcha/api/siteverify";

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(BaseAddress);

                var content = new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("secret", PrivateKey),
                    new KeyValuePair<string, string>("response", EncodedResponse)
                });

                var result = client.PostAsync(RequestAddress, content).Result.Content.ReadAsStringAsync().Result;

                var captchaResponse = JsonConvert.DeserializeObject<ReCaptcha>(result);

                return captchaResponse.Success.Equals("true");
            }
        }

        [JsonProperty("success")]
        public string Success
        {
            get { return m_Success; }
            set { m_Success = value; }
        }

        private string m_Success;
        [JsonProperty("error-codes")]
        public List<string> ErrorCodes
        {
            get { return m_ErrorCodes; }
            set { m_ErrorCodes = value; }
        }
        
        private List<string> m_ErrorCodes;
    }
}
