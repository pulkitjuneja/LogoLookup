using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using Newtonsoft.Json;
using UnityEngine.UI;
using Newtonsoft.Json.Linq;

public class StockManager : BaseCardManager {

  GameObject Loader;
  GameObject dataHolder ;
  Text stockValue,stockPercentage,name,lastUpdated;
  public override void Start() {
    base.Start();
    Loader = transform.FindChild("Loader").gameObject;
    dataHolder = transform.Find("DataHolder").gameObject;
    name = dataHolder.transform.Find("name").gameObject.GetComponent<Text>();
    stockValue = dataHolder.transform.Find("stockValue").gameObject.GetComponent<Text>();
    stockPercentage = dataHolder.transform.Find("stockPercentage").gameObject.GetComponent<Text>();
    lastUpdated = dataHolder.transform.Find("lastUpdated").gameObject.GetComponent<Text>();
  }

  public override IEnumerator fetchAndUpdate(TrackerDetectedEventArgs e) {
    Debug.Log("fetch started");
    Loader.SetActive(true);
    yield return new WaitForSeconds(2);
    TextAsset mockData = Resources.Load<TextAsset>("MockData/companies");
    JObject company = JObject.Parse(mockData.text)["Google"] as JObject;
    Loader.SetActive(false);
    dataHolder.SetActive(true);
    name.text = e.objectName;
    stockValue.text = company["stock"]["stockPrice"].ToObject<string>();
    stockPercentage.text = company["stock"]["stockRate"].ToObject<string>();
    var stockDelta = float.Parse (company["stock"]["stockRate"]
    .ToObject<string>().Split('(')[0]);
    stockPercentage.color = stockDelta > 0 ? Color.blue : Color.red ; 
    lastUpdated.text = company["stock"]["lastUpdated"].ToObject<string>();
  }
}