import requests
from api_keys import getApiKey


key = getApiKey("fred")
url_base = "https://api.stlouisfed.org/fred/series/observations?series_id="
url_key = "api_key="+key
url_output = "file_type=json"

indicators = {
    "yield_curve": "T10Y2Y",
    "gdp_growth": "A191RL1Q225SBEA",
    "unemployment": "UNRATE",
}

def callFredApi(indicator):
    whole_url = url_base+indicators[indicator]+"&"+url_key+"&"+url_output
    response = requests.get(whole_url)
    return response.json()

# if(__name__ == "__main__"):
#     final_res = callFredApi("yield_curve")
#     print(final_res)


