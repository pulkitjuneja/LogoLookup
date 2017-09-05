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
  public override void Start() {
    base.Start();
    Loader = transform.FindChild("Loader").gameObject;
    dataHolder = transform.Find("DataHolder").gameObject;
  }

  public override IEnumerator fetchAndUpdate(TrackerDetectedEventArgs e) {
    Debug.Log("fetch started");
    Loader.SetActive(true);
    //var request = UnityWebRequest.Get("http://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvsection=0&titles=" + e.objectName);
    yield return new WaitForSeconds(2);
    Loader.SetActive(false);
    // if (request.isError) {
    //   Debug.Log(request.error);
    // } else {
    //   JObject wikiData = JsonConvert.DeserializeObject(request.downloadHandler.text) as JObject;
    //   wikiText.gameObject.SetActive(true);
    //   wikiText.text = JsonConvert.SerializeObject(wikiData);
    // }
    dataHolder.SetActive(true);
  }
}