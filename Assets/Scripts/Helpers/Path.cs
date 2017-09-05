using UnityEngine;

public class PathHelper
{
    public static string combine(params string[] paths)
    {
        char seperator;
        if (Application.platform == RuntimePlatform.WindowsEditor || Application.platform == RuntimePlatform.WindowsPlayer)
        {
            seperator = '\\';
        }
        else
        {
            seperator = '/';
        }
        string combinedPath = "";
        foreach (string path in paths)
        {
            combinedPath += path + seperator;
        }
        return combinedPath.TrimEnd(seperator);   
    }
}