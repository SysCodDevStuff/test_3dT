var APP_DATA = {
  "scenes": [
    {
      "id": "0--1",
      "name": "вид 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.3544544633297999,
        "pitch": 0.13890597834590857,
        "fov": 1.500156367942225
      },
      "linkHotspots": [
        {
          "yaw": 0.2836491480987391,
          "pitch": 0.08318433916693024,
          "rotation": 3.141592653589793,
          "target": "1-"
        },
        {
          "yaw": -1.0047892995853793,
          "pitch": 0.057079606588896326,
          "rotation": 3.141592653589793,
          "target": "3--"
        },
        {
          "yaw": -0.06828388448698064,
          "pitch": 0.14539736042679152,
          "rotation": 3.141592653589793,
          "target": "2--"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9863157582612398,
          "pitch": 0.19174669625117424,
          "title": "Красное здание<br>",
          "text": "XZxzxz<br>"
        }
      ]
    },
    {
      "id": "1-",
      "name": "ангар",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.23673882516551004,
          "pitch": -0.06118229826846289,
          "rotation": 0,
          "target": "0--1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2--",
      "name": "маленькой кр.здание",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4346723776720651,
          "pitch": -0.0707088718553841,
          "rotation": 0,
          "target": "0--1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3--",
      "name": "кр. здание",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5569175664884165,
          "pitch": -0.05920884306554086,
          "rotation": 0,
          "target": "0--1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "test-tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
