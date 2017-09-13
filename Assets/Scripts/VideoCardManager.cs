using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using Newtonsoft.Json;
using UnityEngine.UI;
using Newtonsoft.Json.Linq;

public class VideoCardManager: BaseCardManager {

  GameObject Loader;
  bool isExpanded;
  GameObject dataHolder;
  Text placeHolder;
  public override void Start() {
    base.Start();
    Loader = transform.FindChild("Loader").gameObject;
    isExpanded = false ; 
    dataHolder = transform.Find("DataHolder").gameObject;
    placeHolder = dataHolder.transform.Find("placeHolder").gameObject.GetComponent<Text>();
  }

  public override IEnumerator fetchAndUpdate(TrackerDetectedEventArgs e) {
    Loader.SetActive(true);
    //var request = UnityWebRequest.Get("http://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvsection=0&titles=" + e.objectName);
    yield return new WaitForSeconds(2);
    TextAsset mockData = Resources.Load<TextAsset>("MockData/companies");
    JObject company = JObject.Parse(mockData.text)["Google"] as JObject;
    Loader.SetActive(false);
    dataHolder.SetActive(true);
  }

  public void Expand() {
    GetComponent<Animator>().SetBool("expanded",!isExpanded);
    isExpanded = !isExpanded;
  }
}