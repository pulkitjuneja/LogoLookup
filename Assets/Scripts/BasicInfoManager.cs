using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using Newtonsoft.Json;
using UnityEngine.UI;
using Newtonsoft.Json.Linq;

public class BasicInfoManager : BaseCardManager
{

    GameObject Loader;
    GameObject dataHolder;
    Text wikiText,description;
    public override void Start()
    {
        base.Start();
        Loader = transform.FindChild("Loader").gameObject;
        dataHolder = transform.Find("DataHolder").gameObject;
        wikiText = dataHolder.transform.Find("name").gameObject.GetComponent<Text>();
        description = dataHolder.transform.Find("description").gameObject.GetComponent<Text>();
    }

    public override IEnumerator fetchAndUpdate(TrackerDetectedEventArgs e)
    {
        Debug.Log("fetch started");
        Loader.SetActive(true);
        //var request = UnityWebRequest.Get("http://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvsection=0&titles=" + e.objectName);
        yield return new WaitForSeconds(2);
        TextAsset mockData = Resources.Load(PathHelper.combine("MockData","companies.json")) as TextAsset;
        JObject company = new JObject(mockData)["Google"].ToObject<JObject>();
        Loader.SetActive(false);
        dataHolder.SetActive(true);
        wikiText.text = e.objectName;
        description.text = company["description"].ToObject<string>();
    }
}